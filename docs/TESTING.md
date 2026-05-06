# Testing

## MVP 1 testing strategy
No test runner is configured yet. The priority order for adding tests:

1. **`lib/csv.ts`** — pure functions, highest ROI, test first.
2. **`lib/estimate.ts`** — pure function, trivial to test.
3. **Component smoke tests** — only if a bug can't be caught by the above.

Do not write tests for Next.js routing, layout rendering, or static marketing pages.

## When to add a test runner
Add Vitest when T-03 (`lib/csv.ts`) is implemented. Do not add Jest — Vitest is faster and works natively with ESM and TypeScript.

Setup will require:
```
npm install -D vitest @vitest/ui
```
Add to `package.json`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

## What to test in lib/csv.ts

| Case | Expected |
|------|----------|
| Valid 3-column CSV | Returns `ok: true` with correct row count |
| Header-only file | Returns `ok: true` with 0 rows |
| Empty file | Returns `ok: false, error: 'empty_file'` |
| Wrong header columns | Returns `ok: false, error: 'invalid_format'` |
| File > 5 MB | Returns `ok: false, error: 'file_too_large'` |
| Duplicate Channel Ids | `deduplicateCsv` returns correct `duplicateCount` |
| Channel title with comma | Row parsed correctly (quoted CSV) |
| Round-trip export | `parseSubscriptionsCsv(exportToCsv(rows))` produces same rows |

## Manual browser testing checklist (before marking any Phase 1 task done)
- [ ] Upload a real `subscriptions.csv` from YouTube Takeout
- [ ] Upload a malformed CSV — see correct error message
- [ ] Upload an empty file — see correct error message
- [ ] Export CSV — opens download, file is valid
- [ ] Re-import exported CSV — same row count

## Lint and build gate
Every implementation task must end with:
```
npm run lint && npm run build
```
A TypeScript error or ESLint error is a blocker, not a warning.
