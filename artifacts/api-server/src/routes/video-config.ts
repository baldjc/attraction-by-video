import { Router } from "express";

const router = Router();

const EXTERNAL_API = "https://members.attractionbyvideo.com/api/public/site-videos";

// Proxy the members site site-videos endpoint server-side.
// Falls back to nulls if the external API is unavailable.
router.get("/public/video-config", async (_req, res) => {
  try {
    const ext = await fetch(EXTERNAL_API, {
      signal: AbortSignal.timeout(4000),
    });
    if (ext.ok) {
      const data = (await ext.json()) as { homepage?: string | null; audit?: string | null };
      // Rewrite any localhost URLs to the public members domain
      const rewrite = (url: string | null | undefined): string | null => {
        if (!url) return null;
        return url.replace(/^https?:\/\/localhost:\d+/, 'https://members.attractionbyvideo.com');
      };
      res.set("Cache-Control", "no-store");
      res.json({ homepage: rewrite(data.homepage), audit: rewrite(data.audit) });
      return;
    }
  } catch {
    // fall through to null response
  }

  res.set("Cache-Control", "no-store");
  res.json({ homepage: null, audit: null });
});

export default router;
