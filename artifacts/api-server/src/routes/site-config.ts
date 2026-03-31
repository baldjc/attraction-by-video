import { Router } from "express";
import { pool } from "@workspace/db";

const router = Router();

const EXTERNAL_API =
  "https://members.attractionbyvideo.com/api/public/site-config";

const DEFAULTS = {
  date: "May 14th 2029",
  time: "11:00 AM MST",
  name: "5 YouTube Mistakes Keeping You Invisible to Your Best Clients",
  price: "Absolutely FREE!",
  link: "",
  replayLink: "",
  group: "",
  calendarLink: "",
  bookingLink: "",
  offerLink: "",
  spotsAvailable: true,
  registrationOpen: true,
};

async function getLocalRow(): Promise<Record<string, unknown>> {
  try {
    const res = await pool.query(
      "SELECT value FROM site_config WHERE key = 'webinar' LIMIT 1"
    );
    return (res.rows[0]?.value as Record<string, unknown>) ?? {};
  } catch {
    return {};
  }
}

async function getExternalConfig(): Promise<Record<string, unknown> | null> {
  try {
    const res = await fetch(EXTERNAL_API, {
      signal: AbortSignal.timeout(4000),
    });
    if (res.ok) {
      const data = (await res.json()) as {
        webinar?: Record<string, unknown>;
      };
      return data?.webinar ?? null;
    }
  } catch {
    // fall through
  }
  return null;
}

// Public endpoint — proxies to the GHL-backed external API server-side
// (avoids browser CORS restrictions), falls back to local DB, then to defaults.
router.get("/public/site-config", async (_req, res) => {
  const external = await getExternalConfig();
  if (external) {
    res.json({ webinar: { ...DEFAULTS, ...external } });
    return;
  }

  // External unavailable — use local DB override if set, else defaults
  const local = await getLocalRow();
  res.json({ webinar: { ...DEFAULTS, ...local } });
});

// Admin endpoint — updates local DB override values.
// Protected by SESSION_SECRET via x-admin-token header.
router.post("/admin/site-config", async (req, res) => {
  const token = req.headers["x-admin-token"];
  if (!token || token !== process.env.SESSION_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { webinar } = req.body as { webinar?: Partial<typeof DEFAULTS> };
  if (!webinar || typeof webinar !== "object") {
    res.status(400).json({ error: "Missing webinar object in body" });
    return;
  }

  const existing = await getLocalRow();
  const merged = { ...DEFAULTS, ...existing, ...webinar };

  await pool.query(
    `INSERT INTO site_config (key, value, updated_at)
     VALUES ('webinar', $1::jsonb, NOW())
     ON CONFLICT (key) DO UPDATE SET value = $1::jsonb, updated_at = NOW()`,
    [JSON.stringify(merged)]
  );

  res.json({ ok: true, webinar: merged });
});

export default router;
