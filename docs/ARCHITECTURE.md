# Architecture

## Guiding constraints
- **Browser-only.** No server actions, no API routes, no `use server`. All data processing happens in the client.
- **No external network calls during analysis.** The tool must work offline after the page loads.
- **Stateless.** No localStorage persistence unless a user explicitly triggers it. No cookies for functional state.

## Directory layout

```
app/
  layout.tsx          — root layout (fonts, metadata, global nav)
  page.tsx            — landing page
  tool/
    layout.tsx        — metadata wrapper for client page
    page.tsx          — uploader + analyzer UI ("use client")
  about/
    page.tsx
  contact/
    page.tsx
  pricing/
    page.tsx
  privacy/
    page.tsx
  terms/
    page.tsx
  guides/
    page.tsx          — guides index
    google-takeout-youtube-subscriptions/page.tsx
    transfer-youtube-subscriptions/page.tsx
    backup-youtube-playlists/page.tsx
  resources/
    page.tsx          — resources index
    youtube-migration-checklist/page.tsx
    sample-subscriptions-csv/page.tsx
  compare/
    page.tsx          — compare index
    google-takeout-vs-browser-extension/page.tsx
  robots.ts           — generates /robots.txt
  sitemap.ts          — generates /sitemap.xml

components/
  upload-zone.tsx     — drag-drop + click upload, emits File
  analysis-result.tsx — renders dedup stats + export button
  email-capture.tsx   — email capture widget
  pricing-card.tsx    — pricing tier card

lib/
  takeout-parser.ts   — parseSubscriptionsCsv
  dedupe.ts           — deduplicateSubscriptions
  csv-export.ts       — exportToCsv
  estimate.ts         — migrationEstimate(rowCount): { min: string; max: string }

types/
  youtube.ts          — shared YouTube domain types (YouTubeSubscription, ParseResult)

public/
  (static assets only)
```

## Data flow

```
User drops file
  → upload-zone emits File
    → lib/takeout-parser.ts parseSubscriptionsCsv(file: File): Promise<ParseResult>
      → lib/dedupe.ts deduplicateSubscriptions(rows): DeduplicationResult
        → analysis-result renders stats
          → Export button calls lib/csv-export.ts exportToCsv(rows) → triggers download
```

## Key types (types/youtube.ts)

```ts
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
```

## Parsing approach
Use the browser's `FileReader` / `text()` method to read the file as a string, then split on newlines and parse CSV manually. A YouTube Takeout CSV has a simple, well-known structure. Do not add a CSV parsing library unless the manual approach demonstrably fails on valid edge cases (quoted commas in channel titles).

## Rendering approach
App Router, all pages are Server Components by default. Interactive islands (`upload-zone`, `analysis-result`, `email-capture`) use `"use client"`. Keep the client boundary as narrow as possible.

The `/tool` page is a client component; its metadata lives in `app/tool/layout.tsx` (a server component wrapper).

## Styling
Tailwind CSS 4 utility classes. No CSS-in-JS. No component library in MVP 1.

## No-go patterns
- No `useEffect` for data loading that could be a Server Component fetch.
- No global state store (Redux, Zustand) — local `useState` is sufficient.
- No dynamic `import()` unless bundle splitting is measurably necessary.
