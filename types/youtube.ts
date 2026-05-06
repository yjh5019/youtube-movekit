export type YouTubeSubscription = {
  channelId?: string;
  channelUrl?: string;
  channelTitle: string;
  sourceRow?: Record<string, string>;
};

export type ParseResult<T> = {
  ok: boolean;
  data?: T;
  error?: string;
};

export type DedupedSubscriptionResult = {
  totalCount: number;
  uniqueCount: number;
  duplicateCount: number;
  uniqueSubscriptions: YouTubeSubscription[];
  duplicates: YouTubeSubscription[];
};
