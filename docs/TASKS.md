# Tasks

Tasks are listed in recommended implementation order. Complete them sequentially unless noted otherwise.

Check [MVP_SCOPE.md](MVP_SCOPE.md) before starting any task — do not implement anything outside that list.

---

## Phase 0 — Foundation (do first)

- [x] **T-01** Replace default `app/page.tsx` with landing page scaffold (hero, value prop, how-it-works section, waitlist CTA placeholder, nav, footer). Static content only, no logic.
- [x] **T-02** Create `types/youtube.ts` with `YouTubeSubscription` and `ParseResult` types.
- [x] **T-03** Create `lib/dedupe.ts` (deduplicateSubscriptions) and `lib/csv-export.ts` (exportToCsv). `parseSubscriptionsCsv` lives in `lib/takeout-parser.ts`. Unit-testable pure functions. No JSX.
- [x] **T-04** Create `lib/estimate.ts` with `migrationEstimate`.

## Phase 1 — Tool page

- [x] **T-05** Create `components/upload-zone.tsx` — drag-drop + click, validates file type before emitting.
- [x] **T-06** Create `components/analysis-result.tsx` — displays stats + export button.
- [x] **T-07** Create `app/tool/page.tsx` — wires upload-zone → parse → deduplicate → analysis-result. `app/tool/layout.tsx` holds metadata (client page cannot export metadata).
- [x] **T-08** Create `components/email-capture.tsx` — email mailto or embedded form, no custom backend.

## Phase 2 — Marketing pages

- [x] **T-09** `app/pricing/page.tsx`
- [x] **T-10** `app/privacy/page.tsx`
- [x] **T-11** `app/terms/page.tsx`

## Phase 2.5 — SEO content architecture

- [x] **T-10.5** Create guides, resources, compare pages + robots.ts + sitemap.ts (see D-07).

## Phase 3 — Polish

- [ ] **T-12** Shared `components/Nav.tsx` and `components/Footer.tsx` with links to all pages.
- [ ] **T-13** Error state UI in tool page (per ERROR_POLICY.md).
- [ ] **T-14** Accessibility pass — keyboard nav, ARIA labels on interactive elements.
- [x] **T-15** `npm run lint && npm run build` clean on all files.

---

## How to use this file
- Mark tasks `[x]` when complete.
- Add new tasks at the bottom of the relevant phase.
- Do not re-order completed tasks.
- If a task is blocked, add a note below it: `> Blocked: <reason>`.
