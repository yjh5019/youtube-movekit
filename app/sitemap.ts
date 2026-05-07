import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

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
  return routes.map((r) => ({ url: `${SITE_URL}${r}`, lastModified: now }));
}
