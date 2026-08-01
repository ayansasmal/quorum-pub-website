# Codex Handoff — Knowledge Lifecycle Diagram (Features Page)

## Goal

Replace the thin four-state pill strip in `/features#knowledge-states` with a proper **state machine
diagram** that shows every knowledge status, the transitions between them, who or what drives each
transition, and why. The result should match the visual language of the rest of the marketing site
(custom React/SVG — no third-party diagram library).

---

## Background

Quorum knowledge has a principled lifecycle that is core to its governance story. Today the Features
page shows:

```
DRAFT → ACTIVE → SUPERSEDED → DEPRECATED
```

That strip is accurate but omits `PENDING_CONFLICT_CHECK` and `REJECTED`, hides all transition
logic, and says nothing about confidence decay or bump endorsement — all of which are real
differentiators. This task makes the Knowledge States feature card tell that full story at a
marketing-appropriate level of detail.

---

## What to Build

### 1. New component — `KnowledgeLifecycle`

**File:** `src/components/graphics/KnowledgeLifecycle.tsx`

A self-contained SVG state machine. Follow the pattern of the existing graphics:

- `src/components/graphics/NodeGraph.tsx` — SVG with design tokens
- `src/components/graphics/AuditTrail.tsx` — tabular / list layout with design tokens

Use only CSS custom properties for colour — never hardcode hex values. The component must look
correct in both light and dark themes without extra work.

#### States to render (6 nodes)

| Status | Colour | Meaning shown in diagram |
|---|---|---|
| `DRAFT` | `var(--primary)` / `var(--primary-soft)` | Created; awaiting review or conflict check |
| `ACTIVE` | `var(--green)` / `var(--green-soft)` | Live canonical truth for this key |
| `PENDING_CONFLICT_CHECK` | `var(--amber)` | Graphiti was unreachable at write time; recheck cron will retry |
| `SUPERSEDED` | `var(--muted)` / `var(--border-strong)` | Replaced by a newer ACTIVE version |
| `DEPRECATED` | `var(--red)` / `var(--red-soft)` | Intentionally retired by a PA |
| `REJECTED` | `var(--red)` / `var(--red-soft)` | Denied during human conflict review |

#### Transitions to render (arrows + one-line label)

| From | To | Label |
|---|---|---|
| *(write)* | `DRAFT` | non-PA write / AI write / PA + global catalog |
| *(write)* | `ACTIVE` | PA write, non-global key |
| *(write)* | `PENDING_CONFLICT_CHECK` | Graphiti unreachable at write time |
| `PENDING_CONFLICT_CHECK` | `ACTIVE` | recheck cron — no conflict |
| `PENDING_CONFLICT_CHECK` | `DRAFT` | recheck cron — conflict found |
| `DRAFT` | `ACTIVE` | PA approves |
| `DRAFT` | `REJECTED` | PA rejects |
| `ACTIVE` | `SUPERSEDED` | newer version promoted |
| `ACTIVE` | `DEPRECATED` | PA calls forget() |

**Do not** show decay or bump as nodes or arrows — those are confidence adjustments on an ACTIVE
version, not status transitions. They can be surfaced as a compact callout beneath the diagram (see
§ Layout below).

#### Suggested SVG layout

```
              ┌──────────────────────────────────────┐
              │              (write)                 │
              │     ┌────────────────────────┐       │
              │     ▼                        ▼       │
           DRAFT   ACTIVE   PENDING_CONFLICT_CHECK   │
  PA rejects │      │                   │            │
             ▼      │ newer version     │ recheck    │
         REJECTED   ▼    promoted       ▼            │
               SUPERSEDED          DRAFT / ACTIVE    │
                          PA forget()                │
                       DEPRECATED                    │
              └──────────────────────────────────────┘
```

Exact pixel geometry is up to you — keep it legible at ~480 px wide (the card's max-width).
Arrows should use `stroke="var(--ink-2)"` with arrowhead markers. Labels on arrows use
`var(--geist-mono)` at 9–10 px, `fill="var(--muted)"`.

#### Confidence callout (beneath the diagram, same card)

A small two-row mono summary:

```
decay   floor = max(0.10, starting × 0.30)  · applied weekly
bump    +0.05 × role_weight  ·  min(starting_confidence)  ·  7-day cooldown
```

Render as a `div` with `className="qh-mono"` at `fontSize: 10`, `color: var(--ink-2)`.

---

### 2. Update `features/page.tsx`

**File:** `src/app/features/page.tsx`

Two changes only:

**a.** Import the new component at the top of the file:

```tsx
import { KnowledgeLifecycle } from '@/components/graphics/KnowledgeLifecycle'
```

**b.** In `FeatureDetail`, replace the `feature.states` branch:

```tsx
// REMOVE this:
if (feature.states) {
  const states = ['DRAFT', 'ACTIVE', 'SUPERSEDED', 'DEPRECATED']
  return (
    <div className="qh-mono" style={{ marginTop: 14, display: 'flex', ... }}>
      {states.map((s, i) => ( ... ))}
    </div>
  )
}

// REPLACE with:
if (feature.states) {
  return <KnowledgeLifecycle />
}
```

**c.** Update the `body` string in the `knowledge-states` FEATURES entry to match the richer
component:

```tsx
body: 'Knowledge moves through a governed lifecycle — DRAFT, conflict check, human review, promotion, and eventual supersession or deprecation. No hard deletes, ever.',
```

Do **not** touch any other feature entries, sections, or components.

---

## What NOT to Do

- Do not install or import Mermaid, react-flow, or any diagram library. Build the SVG by hand.
- Do not hard-code colours — always use CSS custom properties so dark mode works automatically.
- Do not render internal implementation details: SQL column names, function names, env vars,
  `q_key_id`, `q_project_id`. Marketing-audience language only.
- Do not modify the FEATURES array `id`, `icon`, `title`, or `states` flag — only `body`.
- Do not change any other feature section, graphic component, or page layout.

---

## Design Tokens (for reference)

All defined in `src/app/globals.css`. Use these — no hex literals.

| Token | Light value | Usage |
|---|---|---|
| `var(--primary)` | `#1f4d6b` | DRAFT node border + text |
| `var(--primary-soft)` | `rgba(31,77,107,.12)` | DRAFT node fill |
| `var(--green)` | `#356b48` | ACTIVE node |
| `var(--green-soft)` | `rgba(53,107,72,.12)` | ACTIVE node fill |
| `var(--amber)` | `#a86b1f` | PENDING_CONFLICT_CHECK |
| `var(--red)` | `#9c3636` | DEPRECATED, REJECTED |
| `var(--red-soft)` | `rgba(156,54,54,.10)` | DEPRECATED/REJECTED fill |
| `var(--muted)` | `#7a808c` | SUPERSEDED, arrow labels |
| `var(--border)` | `rgba(8,16,32,.12)` | Node borders |
| `var(--border-strong)` | `rgba(8,16,32,.30)` | Arrow strokes |
| `var(--ink)` | `#0f1419` | Arrow heads |
| `var(--ink-2)` | `#3a4350` | Confidence callout text |
| `var(--geist-mono)` | — | All mono font strings |
| `var(--r-1)` | `4px` | Small border radius |
| `var(--r-3)` | `10px` | Node corner radius |

---

## Acceptance Criteria

- [ ] `src/components/graphics/KnowledgeLifecycle.tsx` created — no external imports beyond React.
- [ ] All 6 status nodes visible, colour-coded by token, with the status name as a label.
- [ ] All 9 transitions rendered as directional arrows with short labels.
- [ ] Confidence decay/bump shown as a callout text block beneath the diagram (not as nodes).
- [ ] `features/page.tsx` `FeatureDetail` `feature.states` branch replaced; component imported.
- [ ] `knowledge-states` FEATURES entry `body` updated.
- [ ] No other files modified.
- [ ] Component renders without console errors in both light and dark themes.
- [ ] Component fits inside a `Card` at ~480 px width without horizontal scroll.
