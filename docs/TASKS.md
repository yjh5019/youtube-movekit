# Tasks

Tasks are listed in recommended implementation order. Complete them sequentially unless noted otherwise.

Check [MVP_SCOPE.md](MVP_SCOPE.md) before starting any task — do not implement anything outside that list.

---

## Phase 0 — Foundation (do first)

- [ ] **T-01** Replace default `app/page.tsx` with landing page scaffold (hero, value prop, how-it-works section, waitlist CTA placeholder, nav, footer). Static content only, no logic.
- [x] **T-02** Create `types/youtube.ts` with `YouTubeSubscription` and `ParseResult` types. *(Done — `lib/types.ts` name superseded by `types/youtube.ts`, see D-06)*
- [ ] **T-03** Create `lib/csv.ts` with `deduplicateCsv`, `exportToCsv`. `parseSubscriptionsCsv` already lives in `lib/takeout-parser.ts`. Unit-testable pure functions. No JSX.
- [ ] **T-04** Create `lib/estimate.ts` with `migrationEstimate`.

## Phase 1 — Analyze page

- [ ] **T-05** Create `components/FileUploader.tsx` — drag-drop + click, validates file type before emitting.
- [ ] **T-06** Create `components/AnalysisResult.tsx` — displays stats + export button.
- [ ] **T-07** Create `app/analyze/page.tsx` — wires FileUploader → parse → deduplicate → AnalysisResult.
- [ ] **T-08** Create `components/WaitlistCta.tsx` — email mailto or embedded form, no custom backend.

## Phase 2 — Marketing pages

- [ ] **T-09** `app/pricing/page.tsx`
- [ ] **T-10** `app/privacy/page.tsx`
- [ ] **T-11** `app/terms/page.tsx`

## Phase 3 — Polish

- [ ] **T-12** Shared `components/Nav.tsx` and `components/Footer.tsx` with links to all pages.
- [ ] **T-13** Error state UI in analyze page (per ERROR_POLICY.md).
- [ ] **T-14** Accessibility pass — keyboard nav, ARIA labels on interactive elements.
- [ ] **T-15** `npm run lint && npm run build` clean on all files.

---

## How to use this file
- Mark tasks `[x]` when complete.
- Add new tasks at the bottom of the relevant phase.
- Do not re-order completed tasks.
- If a task is blocked, add a note below it: `> Blocked: <reason>`.
