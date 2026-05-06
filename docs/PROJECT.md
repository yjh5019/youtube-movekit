# YouTube MoveKit — Project Context

## What it is
YouTube MoveKit helps users analyze, clean, and export their YouTube Takeout data so they can migrate to another YouTube account or archive their activity.

The core user pain: YouTube Takeout exports are messy. Subscriptions have duplicates, watch history is enormous, and there is no easy way to understand what you actually have before starting a migration.

## Target users
- YouTube power users with large subscription lists (500–5000 channels)
- Creators moving to a new account
- Users doing a periodic cleanup of stale subscriptions

## Product phases

### MVP 1 — Browser-side CSV analyzer (current)
Upload your `subscriptions.csv` from YouTube Takeout, get a deduplicated, analyzable list, and export a clean CSV. No accounts, no server, no payments.

See [MVP_SCOPE.md](MVP_SCOPE.md) for the exact in/out list.

### Future phases (not in scope yet)
- Watch history analysis
- Liked videos analysis
- OAuth-based subscription sync back to YouTube
- Full migration wizard
- Paid tier / seat licensing

## Positioning guardrails
- Do NOT reference YouTube Premium bypass, ad avoidance, or circumventing YouTube restrictions.
- Do NOT promise features not in the current MVP.
- Free tier: CSV analysis, deduplication, export. Paywall (future): OAuth sync, bulk operations.

## Success metrics for MVP 1
- User can upload a CSV and see a deduplicated list in under 3 seconds for files up to 10 000 rows.
- Export produces a valid CSV that round-trips (re-import produces identical data).
- Waitlist CTA captures email with no server call (mailto or embedded form provider).
