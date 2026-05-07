# Design Decisions

Record significant choices here so future work doesn't re-litigate them.

---

## D-01 — Browser-side only processing (no server)
**Date:** 2026-05-06  
**Decision:** All CSV parsing and deduplication runs in the browser. No server actions, no file upload endpoint.  
**Reason:** Strongest possible privacy story ("your data never leaves your device"). Eliminates server cost and compliance scope for MVP.  
**Consequences:** Cannot process files larger than available browser memory. Acceptable for YouTube Takeout subscriptions (typically < 1 MB).

---

## D-02 — No CSV parsing library for MVP 1
**Date:** 2026-05-06  
**Decision:** Manually parse `subscriptions.csv` using string split and a simple quoted-field parser. Do not add `papaparse` or similar.  
**Reason:** YouTube Takeout CSV has a known, stable format. A hand-rolled parser keeps the dependency count at zero and is trivially testable. Add a library only if edge cases emerge that the manual parser cannot handle.

---

## D-03 — Tailwind CSS 4, no component library
**Date:** 2026-05-06  
**Decision:** Use Tailwind utility classes directly. No shadcn/ui, Radix, or headless UI for MVP 1.  
**Reason:** The UI is simple (one upload form, one results card, static marketing pages). A component library adds complexity and token overhead before the design is stable.

---

## D-04 — Vitest over Jest
**Date:** 2026-05-06  
**Decision:** When tests are added, use Vitest.  
**Reason:** Native ESM support, faster startup, compatible with TypeScript without extra Babel config. No Jest transform config needed.

---

## D-05 — Waitlist via external form, no custom backend
**Date:** 2026-05-06  
**Decision:** Email capture for the waitlist uses a mailto link or an embeddable form (Tally, Typeform). No custom API endpoint.  
**Reason:** Building a waitlist backend is out of MVP 1 scope. The goal is to capture signal, not to build infrastructure.

---

## D-06 — Shared YouTube types live in `types/youtube.ts`
**Date:** 2026-05-06  
**Decision:** Domain types (`YouTubeSubscription`, `ParseResult`) are in `types/youtube.ts`, not `lib/types.ts`.  
**Reason:** Keeps shared domain types separate from `lib/` business logic modules. Follows the convention that `lib/` contains functions, not type declarations.  
**Consequences:** `ARCHITECTURE.md` and `TASKS.md` updated to match. Future types for YouTube domain objects should go in `types/` as well.

---

## D-07 — SEO content architecture: /guides, /resources, /compare
**Date:** 2026-05-07  
**Decision:** Evergreen tutorial content lives under `/guides`, reusable reference material under `/resources`, and intent-comparison pages under `/compare`. Each section has an index page and dedicated sub-pages with full Korean copy, JSON-LD structured data (BreadcrumbList + Article), and internal cross-links.  
**Reason:** Separates three distinct search intents — "how do I do X", "what does X mean / what do I need", and "which approach is better" — for cleaner topical relevance and internal linking. Avoids putting all content on the landing page.  
**Consequences:** robots.ts and sitemap.ts must enumerate all sub-routes. Individual guide/resource pages carry their own `export const metadata`. The `/tool` page metadata is in `app/tool/layout.tsx` (server wrapper) because the page itself is a client component.

---

## Template for new decisions
```
## D-NN — Short title
**Date:** YYYY-MM-DD
**Decision:** What was decided.
**Reason:** Why.
**Consequences:** What this rules out or requires.
```
