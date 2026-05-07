import type { MetadataRoute } from "next";

const BASE = "https://youtube-movekit.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "/",
    "/tool",
    "/pricing",
    "/about",
    "/contact",
    "/guides",
    "/guides/google-takeout-youtube-subscriptions",
    "/guides/transfer-youtube-subscriptions",
    "/guides/backup-youtube-playlists",
    "/resources",
    "/resources/youtube-migration-checklist",
    "/resources/sample-subscriptions-csv",
    "/compare",
    "/compare/google-takeout-vs-browser-extension",
    "/privacy",
    "/terms",
  ];
  return routes.map((r) => ({ url: `${BASE}${r}`, lastModified: now }));
}
