import fs from "fs/promises";
import path from "path";

const CACHE_PATH = path.join(process.cwd(), "lib/cache.json");
const FALLBACK_PATH = path.join(process.cwd(), "lib/data.slim.json");
const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours

const GITHUB_USERNAME = "BhatAnkush";
const PINNED_REPOS = ["SOCiO", "Quizzy", "Mentor-Mentee"]; // your pinned ones

export async function getProfileData() {
  // 1. Try cache first
  try {
    const raw = await fs.readFile(CACHE_PATH, "utf-8");
    const { data, cachedAt } = JSON.parse(raw);
    if (Date.now() - cachedAt < CACHE_TTL_MS) {
      console.log("[cache] HIT");
      return data;
    }
    console.log("[cache] STALE — re-fetching...");
  } catch {
    console.log("[cache] MISS — fetching for first time...");
  }

  // 2. Try GitHub free API — no key needed for public repos
  try {
    const headers: HeadersInit = {
      "Accept": "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      // Optional: add token for higher rate limits (60/hr → 5000/hr)
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    };

    // Fetch all public repos
    const reposRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`,
      { headers }
    );

    if (!reposRes.ok) throw new Error(`GitHub API: ${reposRes.status}`);
    const repos = await reposRes.json();

    // Shape into clean data for the chatbot
    const projects = repos
      .filter((r: any) => !r.fork) // exclude forks
      .map((r: any) => ({
        name: r.name,
        description: r.description ?? "",
        url: r.html_url,
        live_url: r.homepage ?? null,
        stars: r.stargazers_count,
        forks: r.forks_count,
        language: r.language ?? "Unknown",
        updated: r.updated_at?.split("T")[0],
        topics: r.topics ?? [],
        is_pinned: PINNED_REPOS.includes(r.name),
      }))
      .sort((a: any, b: any) => b.is_pinned - a.is_pinned); // pinned first

    // Load your slim JSON as the base (personal info, experience, etc.)
    const baseRaw = await fs.readFile(FALLBACK_PATH, "utf-8");
    const base = JSON.parse(baseRaw);

    const data = {
      ...base,                    // all your existing slim JSON data
      projects,                   // ✅ live from GitHub API
      github_username: GITHUB_USERNAME,
      github_profile: `https://github.com/${GITHUB_USERNAME}`,
      scrapedAt: new Date().toISOString(),
    };

    await fs.writeFile(
      CACHE_PATH,
      JSON.stringify({ data, cachedAt: Date.now() }, null, 2)
    );
    console.log(`[scraper] Done — fetched ${projects.length} repos from GitHub.`);
    return data;

  } catch (err) {
    // 3. GitHub API failed — fall back to slim JSON
    console.warn("[scraper] GitHub fetch failed, falling back to data.slim.json:", (err as Error).message);
    const raw = await fs.readFile(FALLBACK_PATH, "utf-8");
    return JSON.parse(raw);
  }
}