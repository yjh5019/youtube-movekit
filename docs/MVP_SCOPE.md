# MVP 1 Scope

## In scope

### Core analyzer
- [ ] File upload UI — accept `subscriptions.csv` drag-drop and click-to-browse
- [ ] CSV parsing — browser-side, `File` API + manual parse (no library required)
- [ ] Deduplication — by Channel ID (column 1 of YouTube Takeout CSV)
- [ ] Analysis result display — total rows, duplicate count, unique channels
- [ ] Export cleaned CSV — `Blob` + `URL.createObjectURL` download
- [ ] Migration estimate — row count × estimated time-per-channel displayed as a range

### Marketing pages
- [ ] Landing page — hero, value prop, how-it-works, CTA
- [ ] Pricing page — free tier described; paid tier "coming soon"
- [ ] Privacy page — data stays in browser, no uploads, no tracking
- [ ] Terms of service page — standard SaaS boilerplate

### Waitlist
- [ ] Email capture CTA on landing + after analysis result
- [ ] Implementation: mailto link or embedded Tally/Typeform (no custom backend)

## Out of scope for MVP 1

| Feature | Reason excluded |
|---------|-----------------|
| OAuth / YouTube API | Auth complexity; deferred to phase 2 |
| Payments | No value gate until OAuth features exist |
| Server-side file storage | Privacy story is stronger without it |
| Database / user accounts | Not needed for stateless CSV tool |
| Watch history analysis | Scope creep; separate module later |
| Browser automation / scraping | Legal risk; excluded permanently |
| Mobile-native app | Web-first; revisit after product-market fit |

## YouTube Takeout CSV format reference
YouTube exports `subscriptions.csv` with this header row:
```
Channel Id,Channel Url,Channel Title
```
- Column 0: `Channel Id` — unique identifier (deduplicate on this)
- Column 1: `Channel Url` — `https://www.youtube.com/channel/<id>`
- Column 2: `Channel Title` — display name (may contain commas; properly quoted)

## Definition of done for MVP 1
All items in "In scope" are implemented, lint passes, build passes, and the golden-path user flow (upload → analyze → export) works end-to-end in a browser without a network request.
