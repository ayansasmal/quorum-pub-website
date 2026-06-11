// Sketch primitives — hand-drawn wireframe vibe.
// All elements use the same wobble filter so borders feel pencilled.

const SK = {
  ink: '#1a1a1a',
  ink2: '#2a2a2a',
  muted: '#999',
  paper: '#fafaf7',
  pencil: '#444',
  hatch: 'rgba(0,0,0,0.06)',
  accent: '#5b5bd6', // only used if Tweaks toggles indigo on
};

// Inject global sketch CSS + SVG filter defs once.
if (typeof document !== 'undefined' && !document.getElementById('sk-styles')) {
  const s = document.createElement('style');
  s.id = 'sk-styles';
  s.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&family=Gloria+Hallelujah&family=Architects+Daughter&family=JetBrains+Mono:wght@400;600&display=swap');
    .sk { font-family: 'Kalam', 'Architects Daughter', cursive; color: ${SK.ink}; }
    .sk-h { font-family: 'Caveat', cursive; font-weight: 700; letter-spacing: 0; }
    .sk-mono { font-family: 'JetBrains Mono', ui-monospace, monospace; }
    .sk-scribble { font-family: 'Gloria Hallelujah', 'Caveat', cursive; }
    .sk-wobble { filter: url(#sk-wobble); }
    .sk-page { background: ${SK.paper}; color: ${SK.ink}; }
    .sk-line { stroke: ${SK.ink}; fill: none; stroke-linecap: round; stroke-linejoin: round; }
    .sk-hatch-bg {
      background-image: repeating-linear-gradient(
        135deg, rgba(0,0,0,0.07) 0 1.2px, transparent 1.2px 7px);
    }
    .sk-dots-bg {
      background-image: radial-gradient(rgba(0,0,0,0.18) 1px, transparent 1.4px);
      background-size: 14px 14px;
    }
    .sk-tag { font-family:'Kalam', cursive; font-size:13px; padding:3px 9px; border:1.5px solid ${SK.ink}; border-radius:999px; display:inline-block; line-height:1.1; }
    /* placeholder text inside boxes */
    .sk-fill { color: ${SK.muted}; font-family: 'Kalam', cursive; font-size: 13px; line-height: 1.4; }
  `;
  document.head.appendChild(s);

  // SVG defs — one wobble filter, reused everywhere.
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
  svg.style.position = 'absolute';
  svg.innerHTML = `
    <defs>
      <filter id="sk-wobble" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="2" seed="3" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6"/>
      </filter>
      <filter id="sk-wobble-strong" x="-2%" y="-2%" width="104%" height="104%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="noise"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4"/>
      </filter>
    </defs>
  `;
  document.body.appendChild(svg);
}

// SketchBox — a wobbly rectangle, optional double-line, optional hatch fill.
// Children render on top. Use for any framed area.
function SketchBox({ children, w = '100%', h = 80, pad = 12, double = false, hatch = false, dashed = false, fill = 'transparent', stroke = SK.ink, thick = 2, style = {}, label, labelPos = 'tl', className = '' }) {
  // Use SVG path drawn rect as the border so we can apply the wobble filter
  // cleanly without distorting children text.
  const W = typeof w === 'number' ? w : null;
  const H = typeof h === 'number' ? h : null;
  return (
    <div className={'sk-box ' + className} style={{ position: 'relative', width: w, height: h, ...style }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox={`0 0 ${W || 100} ${H || 100}`}
        style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
      >
        {hatch && (
          <rect x="2" y="2" width={(W || 100) - 4} height={(H || 100) - 4} fill="url(#sk-hatch-pat)" />
        )}
        <g filter="url(#sk-wobble)">
          <rect x="2" y="2" width={(W || 100) - 4} height={(H || 100) - 4}
            fill={fill} stroke={stroke} strokeWidth={thick}
            strokeDasharray={dashed ? '6 4' : 'none'} vectorEffect="non-scaling-stroke" />
          {double && (
            <rect x="4" y="5" width={(W || 100) - 8} height={(H || 100) - 9}
              fill="none" stroke={stroke} strokeWidth={thick - 0.6}
              strokeDasharray={dashed ? '6 4' : 'none'} vectorEffect="non-scaling-stroke" opacity="0.6" />
          )}
        </g>
      </svg>
      <div style={{ position: 'relative', padding: pad, height: '100%', boxSizing: 'border-box' }}>{children}</div>
      {label && (
        <div className="sk sk-scribble" style={{
          position: 'absolute', fontSize: 12, color: SK.pencil,
          ...(labelPos === 'tl' ? { top: -18, left: 4 } :
              labelPos === 'tr' ? { top: -18, right: 4 } :
              labelPos === 'bl' ? { bottom: -18, left: 4 } :
              { bottom: -18, right: 4 }),
        }}>{label}</div>
      )}
    </div>
  );
}

// ImageBox — wireframe placeholder with diagonal cross-out + label.
function ImageBox({ w = '100%', h = 120, label = 'image', style = {}, dim = false, children }) {
  const W = typeof w === 'number' ? w : 100;
  const H = typeof h === 'number' ? h : 100;
  return (
    <div style={{ position: 'relative', width: w, height: h, ...style }}>
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox={`0 0 ${W} ${H}`}
        style={{ position: 'absolute', inset: 0 }}>
        <g filter="url(#sk-wobble)">
          <rect x="2" y="2" width={W - 4} height={H - 4} fill={dim ? 'rgba(0,0,0,0.04)' : 'none'} stroke={SK.ink} strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
          <line x1="3" y1="3" x2={W - 3} y2={H - 3} stroke={SK.ink} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.55"/>
          <line x1={W - 3} y1="3" x2="3" y2={H - 3} stroke={SK.ink} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.55"/>
        </g>
      </svg>
      <div className="sk sk-scribble" style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 13, color: SK.pencil, pointerEvents: 'none', textAlign: 'center', padding: 8,
      }}>{children || label}</div>
    </div>
  );
}

// Button — a wobbly pill, optional filled variant.
function SketchButton({ children, filled = false, w, style = {}, size = 'md' }) {
  const pad = size === 'lg' ? '12px 22px' : size === 'sm' ? '4px 10px' : '8px 16px';
  const fs = size === 'lg' ? 18 : size === 'sm' ? 12 : 15;
  return (
    <span style={{ position: 'relative', display: 'inline-block', width: w, ...style }}>
      <svg width="100%" height="100%" preserveAspectRatio="none"
        viewBox="0 0 100 40" style={{ position: 'absolute', inset: 0 }}>
        <g filter="url(#sk-wobble)">
          <rect x="2" y="2" width="96" height="36" rx="6" fill={filled ? SK.ink : 'none'} stroke={SK.ink} strokeWidth="2" vectorEffect="non-scaling-stroke"/>
        </g>
      </svg>
      <span className="sk-h" style={{ position: 'relative', display: 'inline-block', padding: pad, fontSize: fs, color: filled ? '#fff' : SK.ink, fontWeight: 700, lineHeight: 1 }}>{children}</span>
    </span>
  );
}

// HandText — short handwritten string, optional underline.
function HandText({ children, size = 16, underline = false, style = {}, as = 'span', color = SK.ink, weight = 500 }) {
  const Tag = as;
  return (
    <Tag className="sk-h" style={{ fontSize: size, color, fontWeight: weight, lineHeight: 1.1, ...style }}>
      {children}
      {underline && (
        <svg width="100%" height="6" style={{ display: 'block', marginTop: -2 }}>
          <path d="M2 3 Q 30 1 60 3 T 120 3 T 200 3" stroke={SK.ink} strokeWidth="1.6" fill="none" filter="url(#sk-wobble)" />
        </svg>
      )}
    </Tag>
  );
}

// Annotation — a yellow post-it scribble pointing into the page. Hidden when
// tweaks.showAnnotations is false (governed by parent).
function Annot({ children, x, y, w = 180, rotate = -2, arrow }) {
  return (
    <div className="sk-annot" style={{ position: 'absolute', left: x, top: y, width: w, zIndex: 4, pointerEvents: 'none', transform: `rotate(${rotate}deg)`, transformOrigin: 'center' }}>
      <div className="sk-scribble" style={{
        background: '#fff59a', padding: '8px 10px',
        fontSize: 13, lineHeight: 1.25, color: '#3a2e0a',
        boxShadow: '0 1px 0 rgba(0,0,0,.06), 1px 2px 4px rgba(0,0,0,.12)',
        border: '1px solid #d6c25a',
      }}>{children}</div>
      {arrow && (
        <svg width={Math.abs(arrow.dx) + 12} height={Math.abs(arrow.dy) + 12} style={{
          position: 'absolute',
          left: arrow.dx < 0 ? arrow.dx : 'auto',
          right: arrow.dx >= 0 ? -arrow.dx : 'auto',
          top: arrow.dy < 0 ? arrow.dy : 'auto',
          bottom: arrow.dy >= 0 ? -arrow.dy : 'auto',
        }}>
          <path d={arrow.path} stroke={SK.ink} strokeWidth="1.4" fill="none" filter="url(#sk-wobble)" strokeLinecap="round"/>
          <path d={arrow.head} stroke={SK.ink} strokeWidth="1.4" fill="none" filter="url(#sk-wobble)" strokeLinecap="round"/>
        </svg>
      )}
    </div>
  );
}

// Tiny logo glyph: an irregular triangle of three connected nodes — used as
// the "graph" logo mark in the sticky header.
function LogoMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <g filter="url(#sk-wobble)">
        <line x1="4" y1="16" x2="18" y2="16" stroke={SK.ink} strokeWidth="1.6"/>
        <line x1="4" y1="16" x2="11" y2="5" stroke={SK.ink} strokeWidth="1.6"/>
        <line x1="18" y1="16" x2="11" y2="5" stroke={SK.ink} strokeWidth="1.6"/>
      </g>
      <circle cx="4" cy="16" r="2.6" fill={SK.paper} stroke={SK.ink} strokeWidth="1.6"/>
      <circle cx="18" cy="16" r="2.6" fill={SK.paper} stroke={SK.ink} strokeWidth="1.6"/>
      <circle cx="11" cy="5" r="2.6" fill={SK.ink} />
    </svg>
  );
}

// Squiggly horizontal divider.
function Squiggle({ w = '100%', color = SK.ink, opacity = 0.6, height = 10 }) {
  return (
    <svg width={w} height={height} viewBox="0 0 200 10" preserveAspectRatio="none" style={{ display: 'block', opacity }}>
      <path d="M0 5 Q 12 0 25 5 T 50 5 T 75 5 T 100 5 T 125 5 T 150 5 T 175 5 T 200 5"
        stroke={color} strokeWidth="1.4" fill="none" filter="url(#sk-wobble)" />
    </svg>
  );
}

// Generic sticky-style header — used by every variation.
function Header({ ctaLabel = 'View on GitHub' }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', padding: '18px 36px', borderBottom: '1.5px dashed rgba(0,0,0,0.25)',
      background: 'rgba(250,250,247,0.95)', position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <LogoMark />
        <HandText size={26} weight={700}>Quorum</HandText>
      </div>
      <div style={{ display: 'flex', gap: 20, marginLeft: 56, alignItems: 'center' }}>
        {['Why Quorum', 'Features', 'Governance', 'Cost & ROI', 'Get Started'].map((l) => (
          <span key={l} className="sk-h" style={{ fontSize: 17, color: SK.ink2 }}>{l}</span>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
        <span className="sk-h" style={{ fontSize: 15, color: SK.ink }}>★ 1.2k</span>
        <SketchButton size="sm">{ctaLabel}</SketchButton>
      </div>
    </div>
  );
}

// MonoEyebrow — small caps, tracked, used at the top of editorial sections.
// Reusable across V4, V6, and child pages.
function MonoEyebrow({ children, color = SK.pencil, style = {} }) {
  return (
    <div className="sk-mono" style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color, ...style }}>
      {children}
    </div>
  );
}

// EditorialStrip — top-of-page mono header strip ("QUORUM / v0.4 · APACHE 2.0 · OPEN SOURCE").
// Carried over from V4 as the editorial chrome that signals "serious infra".
function EditorialStrip({ children = 'QUORUM / v0.4 · APACHE 2.0 · OPEN SOURCE · MCP', style = {} }) {
  return (
    <div className="sk-mono" style={{
      fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
      color: SK.muted, padding: '8px 36px', borderBottom: '1px dashed rgba(0,0,0,0.18)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...style,
    }}>
      <span>{children}</span>
      <span>↳ wireframe · not final ↴</span>
    </div>
  );
}

// IndigoCallout — the "What Quorum does →" pattern. Indigo border-left,
// faint indigo wash. Used in V6 (under each metaphor section) and in
// Why Quorum (under each problem description). Carries the V5+V4 chosen
// language into every page.
function IndigoCallout({ label = 'What Quorum does →', children, style = {} }) {
  return (
    <div style={{
      position: 'relative',
      borderLeft: `2.5px solid ${SK.accent}`,
      background: 'rgba(91,91,214,0.08)',
      padding: '12px 16px 14px',
      borderRadius: '0 4px 4px 0',
      ...style,
    }}>
      <div className="sk-mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: SK.accent, fontWeight: 700, marginBottom: 5 }}>
        {label}
      </div>
      <div className="sk" style={{ fontSize: 14, lineHeight: 1.5, color: SK.ink }}>{children}</div>
    </div>
  );
}

// PullQuote — left-bordered italic pull-quote with mono attribution.
// V4 editorial element promoted to shared vocabulary.
function PullQuote({ children, cite, style = {} }) {
  return (
    <blockquote style={{
      borderLeft: `2px solid ${SK.ink}`,
      paddingLeft: 18,
      margin: 0,
      maxWidth: 580,
      ...style,
    }}>
      <div className="sk-scribble" style={{ fontSize: 17, fontStyle: 'italic', lineHeight: 1.45, color: SK.ink2 }}>
        {children}
      </div>
      {cite && (
        <div className="sk-mono" style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: SK.muted, marginTop: 8 }}>
          — {cite}
        </div>
      )}
    </blockquote>
  );
}

function Footer() {  return (
    <div style={{ padding: '28px 36px', display: 'flex', gap: 24, borderTop: '1.5px dashed rgba(0,0,0,0.25)', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <LogoMark size={18} /><HandText size={20}>Quorum</HandText>
      </div>
      <div style={{ display: 'flex', gap: 20, marginLeft: 24 }}>
        {['GitHub', 'Docs', 'License · Apache 2.0'].map((l) => (
          <span key={l} className="sk-h" style={{ fontSize: 16, color: SK.ink2 }}>{l}</span>
        ))}
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 18 }}>
        <div className="sk-mono" style={{ fontSize: 12, color: SK.ink2, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ color: SK.muted, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 10 }}>contact</span>
          <span>ayan.m.sasmal@gmail.com</span>
        </div>
        <span className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>made in the open</span>
      </div>
    </div>
  );
}

Object.assign(window, { SK, SketchBox, ImageBox, SketchButton, HandText, Annot, LogoMark, Squiggle, Header, Footer, IndigoCallout, MonoEyebrow, EditorialStrip, PullQuote });
