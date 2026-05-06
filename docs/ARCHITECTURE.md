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
  analyze/
    page.tsx          — uploader + analyzer UI
  pricing/
    page.tsx
  privacy/
    page.tsx
  terms/
    page.tsx

components/
  FileUploader.tsx    — drag-drop + click upload, emits File
  AnalysisResult.tsx  — renders dedup stats + export button
  WaitlistCta.tsx     — email capture widget
  Nav.tsx
  Footer.tsx

lib/
  csv.ts              — parseSubscriptionsCsv, deduplicateCsv, exportToCsv
  estimate.ts         — migrationEstimate(rowCount): { min: string; max: string }
  types.ts            — shared TypeScript types

public/
  (static assets only)
```

## Data flow

```
User drops file
  → FileUploader emits File
    → lib/csv.ts parseSubscriptionsCsv(file: File): Promise<Subscription[]>
      → lib/csv.ts deduplicateCsv(rows): DeduplicationResult
        → AnalysisResult renders stats
          → Export button calls lib/csv.ts exportToCsv(rows) → triggers download
```

## Key types (lib/types.ts)

```ts
export interface Subscription {
  channelId: string;
  channelUrl: string;
  channelTitle: string;
}

export interface DeduplicationResult {
  total: number;
  unique: Subscription[];
  duplicateCount: number;
}
```

## Parsing approach
Use the browser's `FileReader` / `text()` method to read the file as a string, then split on newlines and parse CSV manually. A YouTube Takeout CSV has a simple, well-known structure. Do not add a CSV parsing library unless the manual approach demonstrably fails on valid edge cases (quoted commas in channel titles).

## Rendering approach
App Router, all pages are Server Components by default. Interactive islands (`FileUploader`, `AnalysisResult`) use `"use client"`. Keep the client boundary as narrow as possible.

## Styling
Tailwind CSS 4 utility classes. No CSS-in-JS. No component library in MVP 1.

## No-go patterns
- No `useEffect` for data loading that could be a Server Component fetch.
- No global state store (Redux, Zustand) — local `useState` is sufficient.
- No dynamic `import()` unless bundle splitting is measurably necessary.
