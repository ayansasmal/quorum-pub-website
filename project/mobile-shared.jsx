// MOBILE WIREFRAMES — shared primitives.
// Targets iPhone SE (3rd gen): 375×667 portrait minimum.
// Breakpoints noted in BreakpointStrip: SE 375 → iPad Air 11" 820 → MacBook 15" 1440.
//
// Mobile-first treatment of V6 vocabulary:
//   - Hamburger header instead of horizontal nav
//   - Stacked single-column sections, 20-24px gutter
//   - Hero headline 30-36px max
//   - Cards full-width
//   - Editorial strip kept (truncated)
//   - Mono eyebrows, indigo callouts, pull-quotes reused unchanged

const MOB = {
  pad: 20,        // horizontal page padding
  sectionGap: 36, // vertical section gap
  heroSize: 34,   // headline size for mobile hero
  h2Size: 26,
  h3Size: 20,
  textSize: 14,
  smallSize: 12,
};

// ─── Mobile editorial strip (shorter copy) ────────────────────
function MobileStrip({ children = 'QUORUM · v0.4 · APACHE 2.0' }) {
  return (
    <div className="sk-mono" style={{
      fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: SK.muted, padding: '6px 16px', borderBottom: '1px dashed rgba(0,0,0,0.18)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    }}>
      <span>{children}</span>
      <span>wf · not final</span>
    </div>
  );
}

// ─── Mobile header with hamburger ─────────────────────────────
function MobileHeader({ cta = '★ 1.2k' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '12px 16px',
      borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
      background: 'rgba(250,250,247,0.95)', position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <LogoMark size={18} />
        <HandText size={20} weight={700}>Quorum</HandText>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
        <span className="sk-h" style={{ fontSize: 13, color: SK.ink }}>{cta}</span>
        {/* hamburger */}
        <svg width="22" height="18" viewBox="0 0 22 18">
          <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.8" strokeLinecap="round">
            <line x1="2" y1="3"  x2="20" y2="3"  />
            <line x1="2" y1="9"  x2="20" y2="9"  />
            <line x1="2" y1="15" x2="20" y2="15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// ─── Mobile footer (stacked, compact) ─────────────────────────
function MobileFooter() {
  return (
    <div style={{
      padding: '20px 20px 28px', borderTop: '1.5px dashed rgba(0,0,0,0.25)',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <LogoMark size={16} /><HandText size={16}>Quorum</HandText>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
        {['GitHub', 'Docs', 'License · Apache 2.0'].map((l) => (
          <span key={l} className="sk-h" style={{ fontSize: 13, color: SK.ink2 }}>{l}</span>
        ))}
      </div>
      <div style={{
        paddingTop: 10, borderTop: '1px dashed rgba(0,0,0,0.18)',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div className="sk-mono" style={{ fontSize: 10, letterSpacing: '0.1em', color: SK.muted, textTransform: 'uppercase' }}>
          contact
        </div>
        <div className="sk-mono" style={{ fontSize: 12, color: SK.ink }}>
          ayan.m.sasmal@gmail.com
        </div>
      </div>
      <div className="sk-scribble" style={{ fontSize: 11, color: SK.muted }}>
        made in the open
      </div>
    </div>
  );
}

// ─── Breakpoint badge — sits above each artboard so the dimension
//     plan stays visible. Hidden when annotations are off.
function BreakpointBadge({ active = 'SE' }) {
  const bps = [
    { k: 'SE',  l: 'iPhone SE',  w: 375  },
    { k: 'iPad', l: 'iPad Air 11"', w: 820 },
    { k: 'MBP', l: 'MacBook 15"', w: 1440 },
  ];
  return (
    <div style={{
      display: 'flex', gap: 8, alignItems: 'center', padding: '8px 16px',
      borderBottom: '1px dashed rgba(0,0,0,0.18)', background: 'rgba(91,91,214,0.04)',
    }}>
      <span className="sk-mono" style={{ fontSize: 9, letterSpacing: '0.1em', color: SK.muted }}>BP</span>
      {bps.map((b, i) => {
        const isActive = b.k === active;
        return (
          <React.Fragment key={b.k}>
            <span className="sk-mono" style={{
              fontSize: 9, padding: '2px 6px', letterSpacing: '0.06em',
              border: `1px solid ${isActive ? SK.accent : 'rgba(0,0,0,0.25)'}`,
              color: isActive ? SK.accent : SK.muted,
              background: isActive ? 'rgba(91,91,214,0.08)' : 'transparent',
              fontWeight: isActive ? 700 : 400,
            }}>
              {b.l} · {b.w}
            </span>
            {i < bps.length - 1 && <span style={{ color: SK.muted, fontSize: 10 }}>→</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// ─── Section primitive: padded, top dashed divider ────────────
function MSection({ children, tint = false, noBorder = false, padY = 32 }) {
  return (
    <section style={{
      padding: `${padY}px ${MOB.pad}px`,
      borderTop: noBorder ? 'none' : '1.5px dashed rgba(0,0,0,0.2)',
      background: tint ? 'rgba(0,0,0,0.025)' : 'transparent',
      position: 'relative',
    }}>
      {children}
    </section>
  );
}

// ─── Mobile card: full-width, sketch-bordered ─────────────────
function MCard({ children, h = 'auto', pad = 16, double = false, style = {}, thick = 1.8 }) {
  return (
    <SketchBox h={h} pad={pad} thick={thick} double={double} style={{ width: '100%', ...style }}>
      {children}
    </SketchBox>
  );
}

// ─── Mobile section header (eyebrow + title + optional sub) ───
function MSectionHead({ eyebrow, title, sub, eyebrowColor }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {eyebrow && <MonoEyebrow style={{ marginBottom: 8, color: eyebrowColor || SK.pencil }}>{eyebrow}</MonoEyebrow>}
      <HandText size={MOB.h2Size} as="div" style={{ lineHeight: 1.15, marginBottom: sub ? 8 : 0, textWrap: 'balance' }}>
        {title}
      </HandText>
      {sub && (
        <div className="sk" style={{ fontSize: MOB.textSize, color: SK.ink2, lineHeight: 1.5 }}>{sub}</div>
      )}
    </div>
  );
}

// ─── Mobile CTA stack ─────────────────────────────────────────
function MCTAStack({ primary = 'Get Started →', secondary = 'Read the Docs' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <SketchButton filled w="100%">{primary}</SketchButton>
      <SketchButton w="100%">{secondary}</SketchButton>
    </div>
  );
}

Object.assign(window, {
  MOB, MobileStrip, MobileHeader, MobileFooter, BreakpointBadge,
  MSection, MCard, MSectionHead, MCTAStack,
});
