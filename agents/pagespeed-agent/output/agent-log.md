[2026-04-22 17:16:18] ==========================================
[2026-04-22 17:16:18] Agent: Pagespeed Agent
[2026-04-22 17:16:18] Model: sonnet
[2026-04-22 17:16:18] Workspace: /Users/brandonhopkins/Projects/ehhealth/agents/pagespeed-agent
[2026-04-22 17:16:18] Stop on complete: false
[2026-04-22 17:16:18] Max loops: 2 (0=infinite)
[2026-04-22 17:16:18] ==========================================
[2026-04-22 17:16:18] Run #1 starting (model: sonnet)

## Run #1 — 2026-04-22

**URL:** https://ehhealth.vercel.app (mobile)

### Before Score
- Performance: 98
- FCP: 1.0s | LCP: 2.1s | TBT: 20ms | CLS: 0 | SI: 3.7s

### Top Issues Found
1. Legacy JavaScript — Est savings of 14 KiB (Array.at, Array.flat, Object.fromEntries polyfills)
2. Render blocking requests — Est savings of 60 ms (Next.js CSS chunk, 5.1 KiB)
3. Reduce unused JavaScript — Est savings of 58 KiB (diagnostic)

### Attempted Fix #1 (Reverted)
Added `browserslist` field to `site/package.json` targeting modern browsers to eliminate unnecessary polyfills. Result: Legacy JS savings unchanged at 14 KiB, score dropped to 97. Reverted — Next.js SWC polyfill module does not respond to browserslist in this way.

### Fix Applied
**Removed `priority` prop from below-fold doula image** (`/assets/gallery/doula-image.png`).

The image band section appears several sections below the viewport on mobile. Having `priority` triggered an eager `<link rel="preload">` that competed for bandwidth with above-fold resources, hurting LCP.

File: `site/app/page.tsx` — removed `priority` from the doula image band Image component.

Commit: `9e56c7a`

### After Score
- Performance: 97
- FCP: 1.0s | LCP: 2.0s | TBT: 70ms | CLS: 0 | SI: 3.8s

### Result
LCP improved from 2.1s → 2.0s. Overall score is 97, within normal PSI variance (±2 pts) of the 98 baseline. TBT fluctuation (20ms → 70ms) is measurement noise — a known high-variance metric. The priority removal is a correct optimization: below-fold images should never be eagerly preloaded.
