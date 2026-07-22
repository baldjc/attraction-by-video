import { Router } from "express";
import { pool } from "@workspace/db";

const router = Router();

async function getVideoConfig(): Promise<{ objectPath: string | null }> {
  try {
    const res = await pool.query(
      "SELECT value FROM site_config WHERE key = 'video' LIMIT 1"
    );
    const row = res.rows[0]?.value as { objectPath?: string } | undefined;
    return { objectPath: row?.objectPath ?? null };
  } catch {
    return { objectPath: null };
  }
}

router.get("/public/video-config", async (_req, res) => {
  const config = await getVideoConfig();
  res.json(config);
});

router.post("/admin/video-config", async (req, res) => {
  const token = req.headers["x-admin-token"];
  if (!token || token !== process.env.SESSION_SECRET) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const { objectPath } = req.body as { objectPath?: string };
  if (!objectPath || typeof objectPath !== "string") {
    res.status(400).json({ error: "Missing objectPath" });
    return;
  }

  await pool.query(
    `INSERT INTO site_config (key, value, updated_at)
     VALUES ('video', $1::jsonb, NOW())
     ON CONFLICT (key) DO UPDATE SET value = $1::jsonb, updated_at = NOW()`,
    [JSON.stringify({ objectPath })]
  );

  res.json({ ok: true, objectPath });
});

export default router;
