import type { YouTubeSubscription } from "@/types/youtube";

const HEADER = "channelTitle,channelId,channelUrl";

function escapeCell(value: string): string {
  if (/[",\r\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function subscriptionsToCsv(
  subscriptions: YouTubeSubscription[]
): string {
  const rows = subscriptions.map((sub) =>
    [
      escapeCell(sub.channelTitle),
      escapeCell(sub.channelId ?? ""),
      escapeCell(sub.channelUrl ?? ""),
    ].join(",")
  );

  return [HEADER, ...rows].join("\r\n");
}
