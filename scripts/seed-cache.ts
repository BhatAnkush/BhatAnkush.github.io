// scripts/seed-cache.ts
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

import { getProfileData } from "../lib/scraper";

async function main() {
  console.log("GROQ loaded:", !!process.env.GROQ_API_KEY);
  console.log("GITHUB loaded:", !!process.env.GITHUB_TOKEN); // ← check this specifically
  const data = await getProfileData();
  console.log("Done!", data.scrapedAt);
}

main().catch(console.error);