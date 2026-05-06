@AGENTS.md

# YouTube MoveKit — Claude Guidance

## Quick orientation
- Stack: Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4
- All processing is browser-side. No server actions, no API routes, no database.
- App lives in `app/`. Shared logic in `lib/`. UI components in `components/`.

## Docs to read before any task
| What | File |
|------|------|
| Product context & goals | [docs/PROJECT.md](docs/PROJECT.md) |
| What is in / out of MVP 1 | [docs/MVP_SCOPE.md](docs/MVP_SCOPE.md) |
| File & data-flow layout | [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) |
| Error handling rules | [docs/ERROR_POLICY.md](docs/ERROR_POLICY.md) |
| Current tasks | [docs/TASKS.md](docs/TASKS.md) |
| How to test | [docs/TESTING.md](docs/TESTING.md) |
| Past design decisions | [docs/DECISIONS.md](docs/DECISIONS.md) |

## Non-negotiable rules
1. **No patch-first fixes.** Find root cause before writing a fix.
2. **No `any`.** Use `unknown` + type narrowing.
3. **Avoid unnecessary dependencies.** Prefer built-in Web APIs.
4. **Run after every implementation task:** `npm run lint && npm run build`
5. **Keep changes small.** One concern per PR/commit.
6. **Never mention YouTube Premium bypass or ad avoidance.**

## File conventions
- Pages: `app/<route>/page.tsx`
- Layouts: `app/<route>/layout.tsx`
- Pure logic (no JSX): `lib/<module>.ts`
- Components: `components/<Name>.tsx`
- Types: co-locate with the module that owns them; shared types in `lib/types.ts`
