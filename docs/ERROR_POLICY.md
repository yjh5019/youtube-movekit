# Error Handling Policy

## Core rule: find root cause first
Never add a try/catch, a null check, or a fallback value to make a type error or runtime crash disappear. Understand why the error occurs, then fix the source.

## Allowed error boundaries

### 1. User-input boundary — CSV parsing
`parseSubscriptionsCsv` is the only place where untrusted input enters. Handle:
- Empty file → return `{ error: 'empty_file' }`
- Missing header row → return `{ error: 'invalid_format' }`
- Malformed rows → skip the row, increment a `skippedRows` counter, surface it in the UI
- File too large (> 5 MB) → return `{ error: 'file_too_large' }`

Return a discriminated union, not throw:
```ts
type ParseResult =
  | { ok: true; rows: Subscription[]; skippedRows: number }
  | { ok: false; error: 'empty_file' | 'invalid_format' | 'file_too_large' };
```

### 2. File API boundary
Wrap `file.text()` in try/catch. Surface a generic "could not read file" message to the user. Do not swallow the original error — log it to the console.

### 3. Export boundary
Wrap `URL.createObjectURL` and the anchor click in try/catch. If it fails, show an inline error message; do not silently fail.

## What NOT to do
- Do not add `|| []` fallbacks to hide a `null` that should not be null.
- Do not wrap entire React components in error boundaries to mask logic errors.
- Do not catch errors from `lib/csv.ts` internal parsing helpers — let them throw so bugs surface immediately during development.
- Do not use optional chaining (`?.`) on objects that should always be defined at that call site.

## TypeScript discipline
- `unknown` over `any`. Narrow with type guards or `zod` schemas.
- `noUncheckedIndexedAccess` is NOT enabled — index access returns `T`; bounds-check manually at risky sites rather than relying on compiler guards.
- Never use `as SomeType` to paper over a type mismatch.

## User-facing error messages
- Short and actionable: "This file doesn't look like a YouTube subscriptions export. Expected columns: Channel Id, Channel Url, Channel Title."
- Never expose stack traces or raw error messages in the UI.
- Always provide a next step: "Try re-downloading your Takeout file and uploading again."

## Lint and build gate
`npm run lint && npm run build` must pass before any task is considered done. TypeScript errors are not warnings.
