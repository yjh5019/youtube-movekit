import type {
  YouTubeSubscription,
  DedupedSubscriptionResult,
} from "@/types/youtube";

function normalizeUrl(url: string): string {
  return url.trim().toLowerCase().replace(/\/+$/, "");
}

function dedupeKey(sub: YouTubeSubscription): string | null {
  if (sub.channelId !== undefined && sub.channelId.trim() !== "") {
    return `id:${sub.channelId.trim().toLowerCase()}`;
  }
  if (sub.channelUrl !== undefined && sub.channelUrl.trim() !== "") {
    return `url:${normalizeUrl(sub.channelUrl)}`;
  }
  const title = sub.channelTitle.trim().toLowerCase();
  if (title !== "") {
    return `title:${title}`;
  }
  return null;
}

export function dedupeSubscriptions(
  subscriptions: YouTubeSubscription[]
): DedupedSubscriptionResult {
  const seen = new Set<string>();
  const uniqueSubscriptions: YouTubeSubscription[] = [];
  const duplicates: YouTubeSubscription[] = [];

  for (const sub of subscriptions) {
    const key = dedupeKey(sub);
    if (key === null) continue;

    if (seen.has(key)) {
      duplicates.push(sub);
    } else {
      seen.add(key);
      uniqueSubscriptions.push(sub);
    }
  }

  return {
    totalCount: subscriptions.length,
    uniqueCount: uniqueSubscriptions.length,
    duplicateCount: duplicates.length,
    uniqueSubscriptions,
    duplicates,
  };
}
