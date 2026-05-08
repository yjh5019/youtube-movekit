# SEO Keyword Strategy — YouTube MoveKit

## Core Korean Keywords

| Priority | Keyword | Intent | Target Page |
|----------|---------|--------|-------------|
| Primary | 유튜브 구독 옮기기 | Conversion | /guides/transfer-youtube-subscriptions → /tool |
| Secondary | 유튜브 재생 목록 옮기기 | Expansion | /guides/transfer-youtube-playlists |
| Informational | 유튜브 시청 기록 옮기기 | Awareness | /guides/transfer-youtube-watch-history |

---

## Keyword Roles

### 유튜브 구독 옮기기 (Primary — Conversion)
- Main business keyword. Users searching this are ready to act.
- Connect directly to `/tool`. CTA should be prominent on every touch-point.
- Honest framing: tool handles analysis, deduplication, and migration planning. Direct subscription re-subscribe is a future feature.

### 유튜브 재생 목록 옮기기 (Secondary — Expansion)
- Captures users wanting to migrate playlists.
- Content: explain backup via Google Takeout, what can be recreated (public playlists), what cannot (private, watch history-based), and limitations.
- Future scope only — do not imply current tool implements this.

### 유튜브 시청 기록 옮기기 (Informational — Awareness)
- High search volume but low conversion potential: YouTube API does not support writing watch history.
- Content: clearly state direct transfer is not possible (API limitation), offer safer alternatives (Google Takeout export for personal backup, fresh start guidance).
- Do not suggest workarounds that violate YouTube ToS.

---

## Current Product Scope (MVP 1)

What the tool actually does — do not overclaim beyond this:

- Browser-side parsing of Google Takeout `subscriptions.csv`
- Duplicate channel detection and removal
- Cleaned CSV download
- Migration planning (estimated days based on ~190 subscriptions/day limit)

All processing is client-side. No server upload, no account access, no OAuth (yet).

---

## Prohibited Claims

Never write or imply the following anywhere in content, metadata, or structured data:

- Direct subscription migration is currently implemented
- Playlist migration is currently implemented
- Watch history migration is possible
- Instant or full-account migration
- Full account restoration
- Google or YouTube affiliation
- YouTube Premium bypass
- Ad blocking or ad avoidance

---

## Page Mapping

| URL | Primary Keyword | Content Focus |
|-----|----------------|---------------|
| `/guides/transfer-youtube-subscriptions` | 유튜브 구독 옮기기 | What can/cannot be transferred, API quota limits, safe workflow |
| `/guides/transfer-youtube-playlists` | 유튜브 재생 목록 옮기기 | Backup method, public vs private limitations, future scope |
| `/guides/transfer-youtube-watch-history` | 유튜브 시청 기록 옮기기 | API write limitation explained, Takeout export as backup alternative |
| `/tool` | YouTube 구독 목록 분석기 / subscriptions.csv 분석 | Upload → deduplicate → download → plan |

---

## Content Quality Checklist (per core page)

Each guide page should include:

- [ ] Clear H1 matching the target keyword
- [ ] Short answer / summary box (핵심 요약) at the top
- [ ] Possible vs not possible table
- [ ] Step-by-step guide
- [ ] Common mistakes section
- [ ] Privacy and safety note
- [ ] FAQ (minimum 3 questions)
- [ ] CTA to `/tool`
- [ ] Related internal links (minimum 2)

---

## Notes

- `/guides/transfer-youtube-subscriptions` already exists and covers the primary keyword.
- `/guides/transfer-youtube-playlists` and `/guides/transfer-youtube-watch-history` are planned pages (not yet created).
- All keyword usage should be natural Korean — avoid keyword stuffing.
- The ~190 subscriptions/day figure is a safe operational guideline, not an official YouTube number; word it accordingly in content.
