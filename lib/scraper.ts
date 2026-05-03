// lib/scraper.ts
import { ApifyClient } from "apify-client";
import fs from "fs/promises";
import path from "path";

const client = new ApifyClient({ token: process.env.APIFY_API_TOKEN! });

const CACHE_PATH = path.join(process.cwd(), "lib/cache.json");
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours

export async function getProfileData() {
  // 1. Try cache first
  try {
    const raw = await fs.readFile(CACHE_PATH, "utf-8");
    const { data, cachedAt } = JSON.parse(raw);
    const age = Date.now() - cachedAt;

    if (age < CACHE_TTL_MS) {
      console.log("[cache] HIT — age:", Math.round(age / 60000), "mins");
      return data; // ✅ Return immediately, no scraping
    }
    console.log("[cache] STALE — re-scraping...");
  } catch {
    console.log("[cache] MISS — scraping for first time...");
  }

  // 2. Cache is stale or missing — scrape fresh
  const [githubRun, linkedinRun] = await Promise.all([
    client.actor("apify/rag-web-browser").call({
      queries: ["https://github.com/BhatAnkush?tab=repositories"],
      maxResults: 1,
    }),
    client.actor("apify/rag-web-browser").call({
      queries: ["https://www.linkedin.com/in/ankushab"],
      maxResults: 1,
    }),
  ]);

  const [githubItems, linkedinItems] = await Promise.all([
    client.dataset(githubRun.defaultDatasetId).listItems(),
    client.dataset(linkedinRun.defaultDatasetId).listItems(),
  ]);

  const data = {
    github: githubItems.items[0]?.markdown ?? "",
    linkedin: linkedinItems.items[0]?.markdown ?? "",
    scrapedAt: new Date().toISOString(),
  };

  // 3. Write to cache
  await fs.writeFile(CACHE_PATH, JSON.stringify({ data, cachedAt: Date.now() }));
  return data;
}