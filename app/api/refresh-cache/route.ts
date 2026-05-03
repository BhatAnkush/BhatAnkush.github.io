import { getProfileData } from "@/lib/scraper";
export async function GET(req: Request) {
  const secret = req.headers.get("x-cron-secret");
  if (secret !== process.env.CRON_SECRET) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  await getProfileData();
  return Response.json({ ok: true, refreshedAt: new Date().toISOString() });
}