# planai-suite — Design Document + UX Upgrade Plan

Pillar: **Enablement** · Domain: `planai.boldmind.ng` · Colors: primary `#5B21B6`, secondary `#059669` (most tools); Business Discovery/Project Manager use `#9F1239`/`#EA580C`; CRM uses `#92400E`/`#059669`; HR uses `#1E3A5F`/`#0D9488`; Fitness uses `#065F46`/`#0891B2`; Marketplace uses `#4338CA`/`#EA580C` — **always resolve per-tool via `getColorScheme(slug)`, never assume the suite-wide purple/green.**
Source: `planai-suite-project-tree.md`, canonical §4.14, `products.ts` PLANAI 01–13.

---

## Part 1 — Design Document

## 1. Overview

- **Purpose:** one shell, 13 AI-powered business tools, unified billing via Hub SSO.
- **Personas:** SME owners, solo hustlers, agencies (white-label resell), corporate wellness buyers (Fitness tool).
- **Primary goals:** pick a tool from the start screen, get to value fast (generate a caption, run payroll, log a workout), understand suite-wide usage/score.

## 2. Page/Routing Map

`app/(start)/`: `/start` (suite landing/tool picker), `/dashboard`, and one route per tool — `/social` (+ `/social/dashboard`), `/ads`, `/brand`, `/intelligence`, `/investor`, `/marketing`, `/directory`, `/agent`, `/projects`, `/crm`, `/hr`, `/fitness`, `/marketplace`. Public: `/`, `/pricing`.

Each tool route maps 1:1 to a `products.ts` slug and a `planai.*.controller.ts` — see the app⇄module table in the ecosystem link-up doc. All 13 are confirmed `status: 'LIVE'` in `products.ts` except none are missing controllers per the service tree — this is the most fully-wired app in the ecosystem today.

## 3. Layout Architecture

```text
app/layout.tsx                  → root providers
components/Providers.tsx        → suite-wide context (subscription/tool-access map)
app/(start)/.../Providers.tsx   → per-tool provider (one per tool folder — ads/, brand/,
                                   directory/, intelligence/, investor/, marketing/,
                                   marketplace/, projects/, social/), each sets that
                                   tool's --product-* CSS vars via getColorScheme(slug)
SSO: no app/sso/route.ts here — planai.boldmind.ng shares the .boldmind.ng cookie with
     boldmind-web, so most sessions arrive already authenticated; middleware still
     validates and redirects to boldmind.ng/login if not
```

## 4. State Management

- Suite-wide: `useUser`, `usePermissions('planai:tool:access')` gating each tool route by active subscription.
- Per-tool server state via `planaiApi.{social,ads,brand,intelligence,investor,marketing,directory,agent,projects,crm,hr,fitness,marketplace}` namespaces (TanStack Query).
- `social/ChatInterface.tsx` and `social/LeadCard.tsx` hold conversation-local UI state (typing, expanded lead) client-side only — conversation data itself is server state.

## 5. Data Flow (representative — Social Media Manager)

```text
/social/dashboard → GET /planai/social/analytics + GET /planai/social/conversations
                   → ChatInterface renders selected conversation
Reply → POST /planai/social/conversations/:id/reply → optimistic append → server confirm
Schedule post → POST /planai/social/schedule → jobId → GET /planai/social/calendar polls status
```

Every tool follows the same shape: fetch tool-scoped data → render → mutate via the tool's `planaiApi` namespace → invalidate the tool's query keys. `GET /planai/score` aggregates all 13 into one suite health score shown on `/dashboard`.

## 6. Key Components

| Component                                                                                                                        | Responsibility                            |
| -------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `social/ChatInterface.tsx`                                                                                                       | unified inbox across IG/WhatsApp/FB DMs   |
| `social/LeadCard.tsx`                                                                                                            | lead qualification card with score        |
| Per-tool `Providers.tsx` (×9 confirmed: ads, brand, directory, intelligence, investor, marketing, marketplace, projects, social) | scopes theme + query client per tool      |
| `lib/verified-businesses.ts`                                                                                                     | Business Discovery Directory data helpers |
| `lib/nav-links.ts`                                                                                                               | suite-wide + per-tool nav config          |

Tools **without** a confirmed `Providers.tsx` in the tree (`agent`, `crm`, `fitness`, `hr`) should get one before further UI work — currently likely inheriting the suite-wide provider only, which under-scopes their distinct tokens (CRM's `#92400E`, HR's `#1E3A5F`, Fitness's `#065F46`).

## 7. Dependencies

`@boldmindng/{ui, auth, api-client, utils, analytics, deploy-config}`. No `wallet`, `pwa`, or `api-docs` here — those are boldmind-web-only.

## 8. Environment Variables

Common set + `NEXT_PUBLIC_APP_URL=https://planai.boldmind.ng`, `NEXT_PUBLIC_PRODUCT_SLUG=planai`. Server-only secrets for OpenAI/fal.ai/Meta live in `boldmind-service`, never here.

## 9. Testing Strategy

E2E critical paths: tool-switcher navigation preserves auth; Social caption generation round-trip; CRM deal drag between pipeline stages; HR payroll run (staging Paystack); Fitness workout log → streak update. Unit tests per tool's data-transform helpers (e.g. `lib/verified-businesses.ts` filtering).

## 10. Performance

13 tools means route-level code splitting matters most here — each `/(start)/<tool>` should be its own chunk (App Router does this by default; verify no shared client bundle bloat from importing all 13 `Providers.tsx` at the suite shell level). Skeleton loading on every data table (CRM, HR, Directory).

## 11. Deployment

Vercel project `planai-suite`. Build: `pnpm turbo build --filter=planai-suite`. Shares `.boldmind.ng` cookie domain — no SSO relay route needed for hub↔planai traffic, only for planai↔amebogist/educenter/villagecircle.

---

## Part 2 — UX Upgrade Plan

## 1. UX Audit

| Issue                                                                               | Page         | Impact                                                                    |
| ----------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------- |
| 4 of 13 tools missing a scoped `Providers.tsx` (agent, crm, fitness, hr)            | those routes | Wrong token set bleeds through, breaks "cockpit" pillar personality       |
| Tool picker (`/start`) doesn't surface suite-wide `/planai/score`                   | `/start`     | Users don't see their overall health before picking a tool                |
| CRM pipeline board likely airy/card-heavy by default (shadcn baseline)              | `/crm`       | Violates "compact, information-dense" enablement rule                     |
| HR payroll table — no confirmation the money columns are tabular-nums/right-aligned | `/hr`        | Money misalignment reads as unpolished in a payroll tool specifically     |
| Social inbox — no confirmed distinction between AI-drafted vs human-sent replies    | `/social`    | Agency users can't tell what the AI already said                          |
| Fitness tool inherits enablement's dense/restrained mood by default                 | `/fitness`   | Fitness should feel warmer than a CRM — currently likely too cockpit-like |

## 2. User Journey Map (SME owner persona)

`/start` (tool picker) → picks Social Media Manager → `/social/dashboard` (wants: what's in my inbox, what's scheduled) → replies to a lead → `/crm` (wants: is this lead now a deal) → `/hr` at month-end (wants: run payroll without dread).

**Friction points:** tool switching loses context (no "you were just in Social" breadcrumb), CRM/HR both want dense enterprise-grade UI but currently likely default-shadcn.

## 3. Page-by-Page Recommendations

### 3.1 `/start`

- **Upgrade:** lead with the suite score (`GET /planai/score` breakdown: social/brand/intelligence/operations/growth) as a compact radar or bar-set, then the 13-tool grid below it, sorted by last-used.

### 3.2 `/crm`

- **Upgrade:** kanban columns get header counts, cards shrink to name + deal value (tabular-nums) + next-action date only — defer full contact detail to a side panel, not an expanded card. Drag handle = visible grip icon.

### 3.3 `/hr`

- **Upgrade:** payroll table — sticky header, ₦ amounts right-aligned tabular-nums, `StatusBadge` for payslip-sent/pending, skeleton rows (not spinner) while `GET /planai/hr/payroll/:month` loads.

### 3.4 `/social`

- **Upgrade:** `ChatInterface` message bubbles get a visible sender tag (AI-drafted / You / Customer) — critical for the agency white-label use case where trust in what-was-actually-sent matters.

### 3.5 `/fitness`

- **Upgrade:** deliberately warmer than the rest of the suite — larger imagery for meal/workout cards, `#065F46`/`#0891B2` tokens used more generously than CRM/HR's restraint, since this tool's job (per boldmind-design's pillar framing extended to sub-tools) is motivation, not data-entry speed.

## 4. Accessibility

CRM/HR tables: keyboard-navigable rows, `aria-sort` on sortable columns. Kanban drag must have a keyboard-accessible alternative (move-to-column menu) for non-mouse users.

## 5. Performance UX

Skeleton rows matched to real table row height on CRM/HR/Directory — these are the densest data views in the ecosystem and most likely to feel broken on a slow connection if using a generic spinner.

## 6. Mobile Experience

Kanban → single-column stack with a column switcher on mobile, not horizontal scroll. HR payroll table → collapses to card-per-employee below 640px, still right-aligned amounts.

## 7. Implementation Plan

| Priority | Task                                                             | Page(s)       | Effort | Owner    |
| -------- | ---------------------------------------------------------------- | ------------- | ------ | -------- |
| P0       | Add `Providers.tsx` to agent/crm/fitness/hr                      | those 4       | 2d     | Frontend |
| P0       | CRM kanban density pass                                          | `/crm`        | 2d     | Frontend |
| P0       | HR payroll table tokens (right-align, tabular-nums, StatusBadge) | `/hr`         | 1d     | Frontend |
| P1       | Suite score on tool picker                                       | `/start`      | 1d     | Frontend |
| P1       | Social sender-tag distinction                                    | `/social`     | 1d     | Frontend |
| P2       | Fitness warmth pass                                              | `/fitness`    | 2d     | Frontend |
| P2       | Mobile kanban/table collapse                                     | `/crm`, `/hr` | 2d     | Frontend |

### Frontend Design Docs — Addendum v1

**Applies to:** `boldmind-web`, `planai-suite`, `amebogist-web`, `villagecircle-web` design docs.
**Not applied here:** `educenter-web` — see the full v2 rewrite (`educenter-web-design-doc-v2.md`), which got the larger LMS/School Portal priority update.

**Purpose of this addendum:** two things came out of reconciling the individual app docs against `boldmind-service-canonical.md` v1.3 and `boldmind-shared-monorepo-v1.1.md`: (1) a couple of route/module references had drifted or were left as open flags, and (2) none of the four docs below had an explicit "room for future pages" convention the way `/study-hub/*` implicitly has one in educenter — this addendum adds that pattern to each app, plus flags anything newly confirmed or newly gapped by the v1.3 service doc.

---

---

## planai-suite

### Reconciliation against `boldmind-service-canonical.md` v1.3

- **Flag carried forward, now with more detail:** the original doc's §5/§6 for `/social` (Social Media Manager) describes `GET /planai/social/analytics`, `GET /planai/social/conversations`, `POST /planai/social/schedule`, etc. as if fully specified. Canonical v1.3 §2.1 explicitly flags that **`SocialMediaController` and `AdsCenterController` have no confirmed per-endpoint live-routes table** — unlike Wallet or LMS, which do. Treat the endpoint names in this doc's §5 as a plausible shape, not a confirmed contract, until the live-routes snapshot is pulled for `/planai/social/*` and `/planai/ads/*` specifically.
- Master Design v3.0 §27 (Social Media Management & Branding Architecture) implies `/social` and `/ads` will eventually be backed by workspace-level `BrandKit`/`SocialPost` models — per `boldmind-service-canonical.md` v1.3 §6, **no migration for these exists yet**. If `/social`'s UX work proceeds now, build it against the simpler existing `planai:social:generate`-scoped AI-caption endpoints (confirmed live), not against BrandKit/scheduling features that don't have a backing data model yet — don't let the frontend get ahead of a data model that isn't there.
- The four tools missing a scoped `Providers.tsx` (`agent`, `crm`, `fitness`, `hr`, per the original UX audit) — no change, still open, unrelated to the above.

### Extensibility — reserving room for future pages

- Each of the 13 tools already gets its own top-level route (`/social`, `/ads`, etc.) — this is inherently extensible for a 14th tool, no structural change needed. The one discipline to hold: any new tool needs its own `Providers.tsx` from day one (the audit already flags 4 existing tools that skipped this — don't add a 14th without one).
- Within `/social` specifically: once BrandKit lands (Master Design Wave 7), reserve `/social/brand-kit` (workspace branding settings) and `/social/calendar` (scheduling calendar view, distinct from the existing conversational `/social/dashboard`) as the next additions — don't fold brand-kit settings into `/social/dashboard` itself, since that page is already scoped to the unified inbox.
- `/crm` and `/hr` are described in the UX audit as needing density passes; when adding new sub-views (e.g. a CRM deal detail side panel becoming its own route, an HR employee profile page), nest under the existing tool route (`/crm/deals/[id]`, `/hr/employees/[id]`) rather than creating new top-level tool-adjacent routes.

---
