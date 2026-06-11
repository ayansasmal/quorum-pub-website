// MOBILE NAV — hamburger menu open states.
// Two takes on what the menu looks like when tapped:
//   (A) full-screen takeover — preferred default, matches editorial chrome
//   (B) slide-down panel from top — lighter touch, keeps page visible behind

// Shared nav row used by both variants.
function MNavRow({ label, n, active, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '18px 0', borderBottom: last ? 'none' : '1px dashed rgba(0,0,0,0.2)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
        <span className="sk-mono" style={{ fontSize: 11, color: active ? SK.accent : SK.muted, letterSpacing: '0.1em' }}>{n}</span>
        <HandText size={26} as="span" style={{ color: active ? SK.accent : SK.ink, lineHeight: 1.1 }}>{label}</HandText>
      </div>
      <span className="sk-mono" style={{ fontSize: 14, color: active ? SK.accent : SK.muted }}>→</span>
    </div>
  );
}

// (A) Full-screen takeover.
function MobileNavFullscreen({ showAnnotations }) {
  const items = [
    { n: '01', l: 'Why Quorum' },
    { n: '02', l: 'Features', active: true },
    { n: '03', l: 'Governance' },
    { n: '04', l: 'Cost & ROI' },
    { n: '05', l: 'Get Started' },
  ];
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>

      {/* Header — but hamburger is now an "X" close icon */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '12px 16px',
        borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
        background: 'rgba(250,250,247,0.95)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LogoMark size={18} />
          <HandText size={20} weight={700}>Quorum</HandText>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="sk-h" style={{ fontSize: 13, color: SK.muted }}>★ 1.2k</span>
          {/* close X */}
          <svg width="22" height="22" viewBox="0 0 22 22">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4"  x2="18" y2="18" />
              <line x1="18" y1="4" x2="4"  y2="18" />
            </g>
          </svg>
        </div>
      </div>

      {/* Nav body */}
      <div style={{ padding: '24px 20px 0' }}>
        <MonoEyebrow style={{ marginBottom: 14 }}>menu</MonoEyebrow>
        {items.map((it, i) => (
          <MNavRow key={it.l} n={it.n} label={it.l} active={it.active} last={i === items.length - 1} />
        ))}
      </div>

      {/* Secondary actions */}
      <div style={{ padding: '28px 20px 24px' }}>
        <MonoEyebrow style={{ marginBottom: 14 }}>quick actions</MonoEyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SketchButton filled w="100%">Star on GitHub ★</SketchButton>
          <SketchButton w="100%">Read the Docs</SketchButton>
        </div>
      </div>

      {/* Foot — repo meta */}
      <div style={{ padding: '24px 20px 32px', borderTop: '1px dashed rgba(0,0,0,0.2)' }}>
        <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.1em', marginBottom: 8 }}>REPO</div>
        <div className="sk-mono" style={{ fontSize: 12, color: SK.ink2, lineHeight: 1.65 }}>
          github.com/as-quorum/quorum<br/>
          v0.4 · 218 commits · 31 contributors<br/>
          apache 2.0 · self-hosted
        </div>
      </div>

      {showAnnotations && (
        <>
          <Annot x={170} y={50} w={170} rotate={3}>X icon replaces ☰ when open</Annot>
          <Annot x={20} y={220} w={170} rotate={-3}>full-screen takeover · numbered items · current page indigo</Annot>
        </>
      )}
    </div>
  );
}

// (B) Slide-down panel — sits on top of dimmed page.
function MobileNavSlideDown({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>

      {/* Header with X */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '12px 16px',
        borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
        background: 'rgba(250,250,247,0.95)', position: 'relative', zIndex: 3,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LogoMark size={18} />
          <HandText size={20} weight={700}>Quorum</HandText>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="sk-h" style={{ fontSize: 13, color: SK.muted }}>★ 1.2k</span>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4"  x2="18" y2="18" />
              <line x1="18" y1="4" x2="4"  y2="18" />
            </g>
          </svg>
        </div>
      </div>

      {/* Slide-down panel — sits on top of the page */}
      <div style={{
        position: 'relative',
        background: SK.paper,
        borderBottom: `2px solid ${SK.ink}`,
        boxShadow: '0 6px 0 rgba(0,0,0,0.05), 0 18px 30px rgba(0,0,0,0.15)',
        zIndex: 2,
        padding: '16px 20px 20px',
      }}>
        <MonoEyebrow style={{ marginBottom: 10 }}>menu</MonoEyebrow>
        {[
          { l: 'Why Quorum' },
          { l: 'Features', active: true },
          { l: 'Governance' },
          { l: 'Cost & ROI' },
          { l: 'Get Started' },
        ].map((it, i, arr) => (
          <div key={it.l} style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            padding: '10px 0', borderBottom: i < arr.length - 1 ? '1px dashed rgba(0,0,0,0.18)' : 'none',
          }}>
            <HandText size={20} as="span" style={{ color: it.active ? SK.accent : SK.ink, lineHeight: 1.1 }}>{it.l}</HandText>
            <span className="sk-mono" style={{ fontSize: 12, color: it.active ? SK.accent : SK.muted }}>→</span>
          </div>
        ))}
        <div style={{ height: 14 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <SketchButton filled size="sm" w="100%">Star ★</SketchButton>
          <SketchButton size="sm" w="100%">Docs</SketchButton>
        </div>
      </div>

      {/* Dimmed page preview underneath */}
      <div style={{ position: 'relative' }}>
        {/* dimming scrim */}
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        {/* page content peek */}
        <div style={{ padding: '32px 20px', opacity: 1 }}>
          <MonoEyebrow style={{ marginBottom: 10 }}>open source · claude code · MCP</MonoEyebrow>
          <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 14, textWrap: 'balance' }}>
            Your AI agents should remember what your team decided.
          </HandText>
          <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5, marginBottom: 16 }}>
            A governed memory layer for Claude Code and AI agents — engineering decisions, business requirements, and team knowledge with a full audit trail.
          </div>
          <SketchBox h={180} pad={12}>
            <div className="sk-fill" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              hero graph
            </div>
          </SketchBox>
        </div>
      </div>

      {showAnnotations && (
        <>
          <Annot x={170} y={50} w={170} rotate={3}>panel slides down · page dims behind</Annot>
          <Annot x={20} y={360} w={170} rotate={-3}>tap scrim or X to close</Annot>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// 2-LEVEL NAV — top-level menu items reveal page sub-sections.
// Three variants of the same idea so you can pick the interaction:
//   (C) Accordion — tap a top-level item, sub-sections expand inline
//   (D) Drill-down — tap a top-level item, push to L2 screen with back
// Anchors used: Why Quorum's 5 problems, with section IDs preserved.
// ─────────────────────────────────────────────────────────

// Top-level item map. Each carries its sub-sections (used by both
// accordion + drill-down variants so the IA stays in sync).
const NAV_TREE = [
  { n: '01', l: 'Why Quorum', subs: [
    { n: '01', l: 'Institutional memory',       anchor: '#why-memory' },
    { n: '02', l: 'AI contradiction',           anchor: '#why-contradiction' },
    { n: '03', l: 'Onboarding cost',            anchor: '#why-onboarding' },
    { n: '04', l: 'Decision drift',             anchor: '#why-drift' },
    { n: '05', l: 'Buried business requirement', anchor: '#why-business' },
  ]},
  { n: '02', l: 'Features', subs: [
    { n: '01', l: 'Governed Memory' },
    { n: '02', l: 'Conflict Detection' },
    { n: '03', l: 'Authority Weighting' },
    { n: '04', l: 'Business Requirements', badge: 'NEW' },
    { n: '05', l: 'Audit Chain' },
    { n: '06', l: 'Pending Decisions' },
    { n: '07', l: 'Knowledge States' },
    { n: '08', l: 'Multi-Project Isolation' },
  ]},
  { n: '03', l: 'Governance', subs: [
    { n: '01', l: 'Constitutional rules' },
    { n: '02', l: 'Who audits the auditor?' },
    { n: '03', l: 'In practice' },
    { n: '04', l: 'Open source governance' },
    { n: '05', l: 'Audiences' },
  ]},
  { n: '04', l: 'Cost & ROI', subs: [
    { n: '01', l: 'Ask your team' },
    { n: '02', l: 'The compounding effect' },
    { n: '03', l: 'Requirements protection' },
    { n: '04', l: 'What Quorum costs' },
    { n: '05', l: 'Still evaluating?' },
  ]},
  { n: '05', l: 'Get Started', subs: [
    { n: '01', l: 'Prerequisites' },
    { n: '02', l: 'Step-by-step setup' },
    { n: '03', l: 'Your first knowledge node' },
    { n: '04', l: 'What to do next' },
    { n: '05', l: 'Need help?' },
  ]},
];

// Compact sub-section row.
function MSubRow({ n, l, badge, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      padding: '10px 0', borderBottom: last ? 'none' : '1px dashed rgba(0,0,0,0.16)',
    }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
        <span className="sk-mono" style={{ fontSize: 10, color: SK.muted, letterSpacing: '0.08em' }}>{n}</span>
        <HandText size={16} as="span" style={{ color: SK.ink2, lineHeight: 1.15 }}>{l}</HandText>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {badge && (
          <span className="sk-mono" style={{ fontSize: 9, padding: '1px 6px', borderRadius: 999, letterSpacing: '0.08em', color: SK.accent, border: `1px solid ${SK.accent}`, background: 'rgba(91,91,214,0.08)', fontWeight: 700 }}>{badge}</span>
        )}
        <span className="sk-mono" style={{ fontSize: 12, color: SK.muted }}>↗</span>
      </div>
    </div>
  );
}

// (C) Accordion — Why Quorum expanded inline. Other items collapsed.
function MobileNavAccordion({ showAnnotations }) {
  const expandedId = '01'; // Why Quorum
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>

      {/* Header with X */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '12px 16px',
        borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
        background: 'rgba(250,250,247,0.95)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LogoMark size={18} />
          <HandText size={20} weight={700}>Quorum</HandText>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="sk-h" style={{ fontSize: 13, color: SK.muted }}>★ 1.2k</span>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4"  x2="18" y2="18" />
              <line x1="18" y1="4" x2="4"  y2="18" />
            </g>
          </svg>
        </div>
      </div>

      <div style={{ padding: '24px 20px 0' }}>
        <MonoEyebrow style={{ marginBottom: 14 }}>menu · tap to expand</MonoEyebrow>
        {NAV_TREE.map((it, i, arr) => {
          const expanded = it.n === expandedId;
          return (
            <div key={it.l} style={{ borderBottom: i < arr.length - 1 ? '1px dashed rgba(0,0,0,0.2)' : 'none' }}>
              {/* L1 row */}
              <div style={{
                display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                padding: '16px 0',
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span className="sk-mono" style={{ fontSize: 11, color: expanded ? SK.accent : SK.muted, letterSpacing: '0.1em' }}>{it.n}</span>
                  <HandText size={24} as="span" style={{ color: expanded ? SK.accent : SK.ink, lineHeight: 1.1 }}>{it.l}</HandText>
                </div>
                <span className="sk-mono" style={{ fontSize: 16, color: expanded ? SK.accent : SK.muted, lineHeight: 1 }}>
                  {expanded ? '−' : '+'}
                </span>
              </div>
              {/* L2 list — only when expanded. Indented & indigo-tinged. */}
              {expanded && (
                <div style={{
                  padding: '4px 0 16px 28px',
                  borderLeft: `2px solid ${SK.accent}`,
                  marginLeft: 12,
                  background: 'rgba(91,91,214,0.04)',
                }}>
                  {it.subs.map((s, j) => (
                    <MSubRow key={s.l} n={s.n} l={s.l} last={j === it.subs.length - 1} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer actions */}
      <div style={{ padding: '24px 20px 28px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <SketchButton filled w="100%">Star on GitHub ★</SketchButton>
          <SketchButton w="100%">Read the Docs</SketchButton>
        </div>
      </div>

      {showAnnotations && (
        <>
          <Annot x={20} y={210} w={170} rotate={-3}>L1 collapsed by default · + indicator</Annot>
          <Annot x={180} y={320} w={170} rotate={3}>tapped item expands inline · indigo border-left + tint</Annot>
        </>
      )}
    </div>
  );
}

// (D) Drill-down — tapped "Why Quorum"; we are now on the L2 screen
//     with back affordance + sub-sections list.
function MobileNavDrilldown({ showAnnotations }) {
  const item = NAV_TREE[0]; // Why Quorum

  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%' }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>

      {/* Drill-down header: back arrow on left, X close on right */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '12px 16px',
        borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
        background: 'rgba(250,250,247,0.95)',
      }}>
        {/* back chevron */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round" fill="none">
              <polyline points="13,4 6,10 13,16" />
            </g>
          </svg>
          <span className="sk-h" style={{ fontSize: 14, color: SK.ink2 }}>Menu</span>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4"  x2="18" y2="18" />
              <line x1="18" y1="4" x2="4"  y2="18" />
            </g>
          </svg>
        </div>
      </div>

      {/* L2 title + lede */}
      <div style={{ padding: '24px 20px 16px' }}>
        <MonoEyebrow style={{ marginBottom: 10 }}>
          <span style={{ color: SK.muted }}>menu</span>
          <span style={{ color: SK.muted, margin: '0 6px' }}>›</span>
          <span style={{ color: SK.accent }}>{item.l}</span>
        </MonoEyebrow>
        <HandText size={30} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 10 }}>
          {item.l}
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 14, color: SK.ink2, fontStyle: 'italic' }}>
          Five problems AI-assisted teams don't realise they have.
        </div>
      </div>

      {/* L2 directory strip */}
      <div style={{ padding: '0 20px 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <MonoEyebrow style={{ fontSize: 10 }}>the five ↓</MonoEyebrow>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(0,0,0,0.25)' }} />
      </div>

      {/* L2 list — full-bleed rows, each leads to a section anchor */}
      <div style={{ padding: '8px 20px 0' }}>
        {item.subs.map((s, j) => (
          <div key={s.l} style={{
            display: 'grid', gridTemplateColumns: '36px 1fr auto', gap: 10,
            padding: '16px 0',
            borderBottom: j < item.subs.length - 1 ? '1px dashed rgba(0,0,0,0.18)' : '1.5px solid rgba(0,0,0,0.25)',
            alignItems: 'baseline',
          }}>
            <span className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.1em' }}>{s.n}</span>
            <div>
              <HandText size={18} as="div" style={{ lineHeight: 1.15, marginBottom: 2 }}>{s.l}</HandText>
              <div className="sk-mono" style={{ fontSize: 10, color: SK.muted }}>{s.anchor || '/why#section-' + s.n}</div>
            </div>
            <span className="sk-mono" style={{ fontSize: 14, color: SK.muted, alignSelf: 'center' }}>→</span>
          </div>
        ))}
      </div>

      {/* Quick jump to other top-level pages */}
      <div style={{ padding: '24px 20px 24px' }}>
        <MonoEyebrow style={{ marginBottom: 12 }}>jump to</MonoEyebrow>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {NAV_TREE.slice(1).map((other) => (
            <SketchBox key={other.l} h={36} pad={0} thick={1.4} style={{ width: 'auto', display: 'inline-block' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 12px', height: '100%' }}>
                <span className="sk-h" style={{ fontSize: 13, color: SK.ink, lineHeight: 1 }}>{other.l}</span>
              </div>
            </SketchBox>
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div style={{ padding: '8px 20px 28px' }}>
        <SketchButton filled w="100%">Get Started Free →</SketchButton>
      </div>

      {showAnnotations && (
        <>
          <Annot x={20} y={50} w={170} rotate={-3}>back to L1 · X closes whole menu</Annot>
          <Annot x={170} y={170} w={170} rotate={3}>L2: page title + sub-section list w/ anchors</Annot>
          <Annot x={20} y={620} w={180} rotate={-2}>"jump to" lets users skip to siblings without bouncing back to L1</Annot>
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// FINAL MENU — B + C combined.
//   • Slide-down panel (B), drops onto page with dim scrim
//   • Accordion behavior (C), one item expanded at a time
//   • Auto-collapses any previously-open item when another is tapped
//   • No sequence numbers, no anchor paths, no subtext — labels only
//   • Right-side chevron: ▾ when collapsed, ▴ when expanded
// ─────────────────────────────────────────────────────────

// Chevron glyphs — small sketched arrows.
function Chev({ dir = 'down', color = SK.muted }) {
  const points = dir === 'up'
    ? '4,12 10,6 16,12'   // ▴
    : '4,7 10,13 16,7';   // ▾
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" style={{ display: 'block' }}>
      <g filter="url(#sk-wobble)">
        <polyline points={points} stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// Single L1 row, with optional expanded sub-list.
// Heights fixed so Caveat's tall metrics don't blow up the menu.
function MFinalNavItem({ label, subs, expanded, last }) {
  return (
    <div style={{ borderBottom: last ? 'none' : '1px dashed rgba(0,0,0,0.2)' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 44, // Apple HIG min tap target, fixed
        overflow: 'hidden',
      }}>
        <HandText size={18} as="span" style={{ color: expanded ? SK.accent : SK.ink, lineHeight: 1 }}>
          {label}
        </HandText>
        <Chev dir={expanded ? 'up' : 'down'} color={expanded ? SK.accent : SK.muted} />
      </div>
      {expanded && (
        <div style={{ padding: '2px 0 8px 12px', borderLeft: `2px solid ${SK.accent}`, marginLeft: 4 }}>
          {subs.map((s, i) => (
            <div key={s.l} style={{
              height: 30, display: 'flex', alignItems: 'center',
              paddingLeft: 12, overflow: 'hidden',
              borderBottom: i < subs.length - 1 ? '1px dashed rgba(0,0,0,0.14)' : 'none',
            }}>
              <HandText size={13} as="span" style={{ color: SK.ink2, lineHeight: 1 }}>{s.l}</HandText>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// One artboard renders the menu with `expandedKey` selecting which L1
// item is open — so we can show "Why Quorum open" and "Features open
// (Why auto-collapsed)" side-by-side to communicate the rule.
function MobileNavFinal({ expandedKey = '01', showAnnotations, captionAnnot, deviceMode = false }) {
  return (
    <div className="sk sk-page" style={{
      width: '100%',
      height: deviceMode ? '100%' : undefined,
      minHeight: deviceMode ? undefined : '100%',
      position: 'relative',
      display: deviceMode ? 'flex' : undefined,
      flexDirection: deviceMode ? 'column' : undefined,
    }}>
      {showAnnotations && <BreakpointBadge active="SE" />}
      <MobileStrip>QUORUM · v0.4 · APACHE 2.0</MobileStrip>

      {/* Header — X (close menu) */}
      <div style={{
        display: 'flex', alignItems: 'center', padding: '12px 16px',
        borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
        background: 'rgba(250,250,247,0.95)', position: 'relative', zIndex: 3,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <LogoMark size={18} />
          <HandText size={20} weight={700}>Quorum</HandText>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
          <span className="sk-h" style={{ fontSize: 13, color: SK.muted }}>★ 1.2k</span>
          <svg width="22" height="22" viewBox="0 0 22 22">
            <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
              <line x1="4" y1="4"  x2="18" y2="18" />
              <line x1="18" y1="4" x2="4"  y2="18" />
            </g>
          </svg>
        </div>
      </div>

      {/* Slide-down panel */}
      <div style={{
        position: 'relative',
        background: SK.paper,
        borderBottom: `2px solid ${SK.ink}`,
        boxShadow: '0 6px 0 rgba(0,0,0,0.04), 0 18px 30px rgba(0,0,0,0.18)',
        zIndex: 2,
        padding: '2px 20px 12px',
      }}>
        {NAV_TREE.map((it, i, arr) => (
          <MFinalNavItem
            key={it.l}
            label={it.l}
            subs={it.subs}
            expanded={it.n === expandedKey}
            last={i === arr.length - 1}
          />
        ))}

        {/* CTA + contact tail — keeps the menu feeling complete */}
        <div style={{
          marginTop: 10,
          paddingTop: 10,
          borderTop: '1.5px solid rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 10,
        }}>
          <span className="sk-h" style={{ fontSize: 14, color: SK.ink, lineHeight: 1 }}>
            ★ <span style={{ borderBottom: '1px solid ' + SK.ink, paddingBottom: 1 }}>Star on GitHub</span>
          </span>
          <span className="sk-h" style={{ fontSize: 14, color: SK.ink, lineHeight: 1 }}>
            <span style={{ borderBottom: '1px solid ' + SK.ink, paddingBottom: 1 }}>Read the Docs</span> →
          </span>
        </div>
        <div className="sk-mono" style={{
          marginTop: 8, fontSize: 10, color: SK.muted, letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>questions?</span>
          <span style={{ color: SK.ink2 }}>ayan.m.sasmal@gmail.com</span>
        </div>
      </div>

      {/* Dimmed page peek behind — fills remaining space inside device viewport. */}
      <div style={{ position: 'relative', flex: deviceMode ? 1 : undefined, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        <div style={{ padding: deviceMode ? '20px 20px 0' : '28px 20px' }}>
          <MonoEyebrow style={{ marginBottom: 10 }}>open source · claude code · MCP</MonoEyebrow>
          <HandText size={MOB.heroSize} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 14, textWrap: 'balance' }}>
            Your AI agents should remember what your team decided.
          </HandText>
          {!deviceMode && (
            <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5 }}>
              A governed memory layer for Claude Code and AI agents.
            </div>
          )}
        </div>
      </div>

      {showAnnotations && captionAnnot && (
        <Annot x={20} y={70} w={200} rotate={-2}>{captionAnnot}</Annot>
      )}
    </div>
  );
}

window.MobileNavFullscreen = MobileNavFullscreen;
window.MobileNavSlideDown   = MobileNavSlideDown;
window.MobileNavAccordion   = MobileNavAccordion;
window.MobileNavDrilldown   = MobileNavDrilldown;
window.MobileNavFinal       = MobileNavFinal;

// ─────────────────────────────────────────────────────────
// iPhone SE 3rd gen frame — 375×667 inner viewport, exact.
// Realistic bezels, home button, top sensors. No dynamic island.
// ─────────────────────────────────────────────────────────
function IPhoneSEFrame({ children, label }) {
  const FRAME_W = 395;
  const FRAME_H = 740;
  const VP_W = 375;
  const VP_H = 667;
  const BEZEL_TOP = 56;
  const BEZEL_BOTTOM = FRAME_H - VP_H - BEZEL_TOP; // remaining
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
      padding: '20px 0',
    }}>
      {label && (
        <div className="sk-mono" style={{
          fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: SK.muted, textAlign: 'center',
        }}>{label}</div>
      )}
      <div style={{
        width: FRAME_W, height: FRAME_H,
        background: '#1a1a1a',
        borderRadius: 50,
        boxShadow: '0 30px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(255,255,255,0.06)',
        position: 'relative',
        paddingTop: BEZEL_TOP, paddingBottom: BEZEL_BOTTOM,
        paddingLeft: (FRAME_W - VP_W) / 2,
        paddingRight: (FRAME_W - VP_W) / 2,
        boxSizing: 'border-box',
      }}>
        {/* top sensors: speaker slot + camera */}
        <div style={{
          position: 'absolute', top: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0a0a0a', boxShadow: 'inset 0 0 2px rgba(255,255,255,0.15)' }} />
          <div style={{ width: 56, height: 6, borderRadius: 3, background: '#0a0a0a' }} />
        </div>

        {/* screen viewport — exactly 375×667, flex column so children can size-fit */}
        <div style={{
          width: VP_W, height: VP_H,
          background: SK.paper,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 2,
          display: 'flex', flexDirection: 'column',
        }}>
          {/* iOS-style status bar (20px) */}
          <div style={{
            flexShrink: 0,
            height: 20, padding: '0 14px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: SK.paper,
            borderBottom: '1px solid rgba(0,0,0,0.04)',
            fontFamily: '-apple-system, "SF Pro", system-ui',
            fontSize: 13, fontWeight: 600, color: SK.ink,
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ display: 'inline-flex', gap: 1.5 }}>
                {[3,4,5,6].map(h => (
                  <span key={h} style={{ width: 2, height: h, background: SK.ink, borderRadius: 0.5 }} />
                ))}
              </span>
              <span style={{
                width: 18, height: 9, border: `1px solid ${SK.ink}`, borderRadius: 2,
                display: 'inline-block', position: 'relative',
              }}>
                <span style={{ position: 'absolute', inset: 1, width: 12, background: SK.ink, borderRadius: 1 }} />
              </span>
            </div>
          </div>
          {/* page contents — fills remaining 647px */}
          <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>{children}</div>
        </div>

        {/* home button */}
        <div style={{
          position: 'absolute', bottom: 12, left: '50%', transform: 'translateX(-50%)',
          width: 38, height: 38, borderRadius: '50%',
          background: '#0a0a0a',
          boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.08), inset 0 0 8px rgba(0,0,0,0.6)',
        }}>
          <div style={{
            position: 'absolute', inset: 10,
            border: '1.5px solid rgba(255,255,255,0.18)', borderRadius: 6,
          }} />
        </div>
      </div>
      <div className="sk-mono" style={{ fontSize: 10, color: SK.muted, letterSpacing: '0.06em' }}>
        viewport 375 × 667 · iPhone SE 3rd gen
      </div>
    </div>
  );
}

window.IPhoneSEFrame = IPhoneSEFrame;
