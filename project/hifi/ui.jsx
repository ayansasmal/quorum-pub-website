// SHARED UI — buttons, eyebrows, callouts, headers, footers, decorative bits.

// ─── Logo mark — 3-node graph triangle, indigo accent node at top.
function Logo({ size = 22, accent }) {
  const a = accent || 'var(--primary)';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <line x1="6" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="6" y1="18" x2="12" y2="5"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="18" y1="18" x2="12" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      <circle cx="6"  cy="18" r="2.6" fill="var(--bg)" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="18" cy="18" r="2.6" fill="var(--bg)" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="12" cy="5"  r="3"   fill={a} />
    </svg>
  );
}

// ─── Button.
function Button({ children, variant = 'primary', size = 'md', as = 'button', href, full, onClick, style, icon, iconRight }) {
  const sizes = {
    sm: { h: 32, px: 12, fs: 13 },
    md: { h: 40, px: 16, fs: 14 },
    lg: { h: 48, px: 20, fs: 15 },
  };
  const s = sizes[size];
  const base = {
    height: s.h, padding: `0 ${s.px}px`, fontSize: s.fs, fontWeight: 500,
    borderRadius: 'var(--r-2)',
    border: '1px solid transparent',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    cursor: 'pointer', textDecoration: 'none',
    transition: 'background 120ms ease, color 120ms ease, border-color 120ms ease, transform 80ms ease',
    width: full ? '100%' : undefined,
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    letterSpacing: '-0.005em',
  };
  const variants = {
    primary: { background: 'var(--primary)', color: 'var(--primary-ink)', border: '1px solid var(--primary)' },
    secondary: { background: 'transparent', color: 'var(--ink)', border: '1px solid var(--border-strong)' },
    ghost: { background: 'transparent', color: 'var(--ink)', border: '1px solid transparent' },
  };
  const Tag = as === 'a' || href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
      onMouseUp={(e) => e.currentTarget.style.transform = ''}
      onMouseLeave={(e) => e.currentTarget.style.transform = ''}
    >
      {icon}
      {children}
      {iconRight}
    </Tag>
  );
}

// ─── Tag/Badge (pill).
function Tag({ children, variant = 'default', style }) {
  const variants = {
    default: { bg: 'var(--bg-alt)', fg: 'var(--ink2)', border: 'var(--border)' },
    primary: { bg: 'var(--primary-soft)', fg: 'var(--primary)', border: 'transparent' },
    red:     { bg: 'var(--red-soft)', fg: 'var(--red)', border: 'transparent' },
    green:   { bg: 'var(--green-soft)', fg: 'var(--green)', border: 'transparent' },
    outline: { bg: 'transparent', fg: 'var(--ink2)', border: 'var(--border-strong)' },
  };
  const v = variants[variant];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '3px 9px', borderRadius: 999,
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600,
      background: v.bg, color: v.fg,
      border: `1px solid ${v.border}`,
      ...style,
    }}>{children}</span>
  );
}

// ─── Eyebrow.
function Eyebrow({ children, color, style }) {
  return (
    <div className="qh-eyebrow" style={{ color: color || 'var(--muted)', ...style }}>
      {children}
    </div>
  );
}

// ─── Indigo callout — replaces wireframe's IndigoCallout.
function Callout({ label = 'What Quorum does', children, style }) {
  return (
    <div style={{
      borderLeft: '2px solid var(--primary)',
      background: 'var(--primary-soft)',
      padding: '14px 16px 16px',
      borderRadius: '0 var(--r-3) var(--r-3) 0',
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 11,
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--primary)', fontWeight: 600, marginBottom: 6,
      }}>{label} →</div>
      <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink2)' }}>
        {children}
      </div>
    </div>
  );
}

// ─── Pull quote.
function PullQuote({ children, cite, style }) {
  return (
    <blockquote style={{
      borderLeft: '2px solid var(--ink)',
      paddingLeft: 18,
      margin: 0,
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--font-sans)',
        fontSize: 18, lineHeight: 1.45,
        color: 'var(--ink)', fontStyle: 'italic',
        fontWeight: 400, letterSpacing: '-0.01em',
        textWrap: 'balance',
      }}>
        "{children}"
      </div>
      {cite && (
        <div className="qh-mono" style={{
          fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--muted)', marginTop: 10,
        }}>— {cite}</div>
      )}
    </blockquote>
  );
}

// ─── Card (subtle surface).
function Card({ children, style, padded = true, hoverable = false }) {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-4)',
      padding: padded ? 20 : 0,
      transition: hoverable ? 'border-color 160ms ease, transform 160ms ease' : undefined,
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Editorial top strip.
function EditorialStrip({ children }) {
  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      padding: '8px max(20px, env(safe-area-inset-left))',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--font-mono)', fontSize: 11,
      letterSpacing: '0.14em', textTransform: 'uppercase',
      color: 'var(--muted)',
    }}>
      <span>{children || 'Quorum / v0.4 · Apache 2.0 · Open Source · MCP'}</span>
      <span style={{ display: 'none' }} className="qh-strip-right">↳ for AI-assisted teams</span>
    </div>
  );
}

// ─── Footer.
function SiteFooter() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 20px 28px',
      background: 'var(--bg-alt)',
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'flex', flexWrap: 'wrap', gap: 28, alignItems: 'flex-start',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Logo size={18} />
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.01em' }}>Quorum</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginLeft: 4 }}>
          {['GitHub', 'Docs', 'License · Apache 2.0', 'Constitution'].map((l) => (
            <a key={l} href="#" style={{
              fontSize: 13, color: 'var(--ink2)', textDecoration: 'none',
            }}>{l}</a>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 200 }}>
          <span className="qh-mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            contact
          </span>
          <a href="mailto:ayan.m.sasmal@gmail.com" className="qh-mono" style={{
            fontSize: 13, color: 'var(--ink)', textDecoration: 'none',
          }}>
            ayan.m.sasmal@gmail.com
          </a>
        </div>
      </div>
      <div style={{
        maxWidth: 1240, margin: '24px auto 0', paddingTop: 16,
        borderTop: '1px dashed var(--border)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
        letterSpacing: '0.04em',
      }}>
        <span>v0.4 · 218 commits · 31 contributors</span>
        <span>made in the open</span>
      </div>
    </footer>
  );
}

// ─── Helpers for the hand-drawn graph that retains some sketch warmth.
//   Used as the hero visual. Three nodes + connectors + meta labels.
function NodeGraph({ accent = 'var(--primary)' }) {
  return (
    <svg viewBox="0 0 560 420" width="100%" height="100%" style={{ display: 'block' }} aria-hidden>
      {/* dashed connectors */}
      <g stroke="var(--border-strong)" strokeWidth="1.4" fill="none" strokeDasharray="2 5" strokeLinecap="round">
        <path d="M 280 80 L 100 320" />
        <path d="M 280 80 L 460 320" />
        <path d="M 100 320 L 460 320" />
        <path d="M 280 80 L 280 230" />
      </g>
      {/* solid edges (signed) */}
      <g stroke="var(--ink)" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M 280 105 C 220 160, 130 250, 110 305" />
        <path d="M 280 105 C 340 160, 430 250, 450 305" />
        <path d="M 130 320 C 230 320, 330 320, 430 320" />
      </g>
      {/* meta tag near top */}
      <g transform="translate(296, 30)">
        <rect x="0" y="0" width="160" height="22" rx="11" fill="var(--primary-soft)" stroke="var(--primary)" strokeOpacity="0.4"/>
        <text x="80" y="15" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" letterSpacing="0.06em" fill="var(--primary)">SIGNED · CONF 0.94</text>
      </g>
      {/* primary node — Decision */}
      <g>
        <circle cx="280" cy="80" r="32" fill="var(--ink)" />
        <text x="280" y="78" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" letterSpacing="0.08em" fill="var(--bg)">DECISION</text>
        <text x="280" y="93" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--bg)" opacity="0.7">D-204</text>
      </g>
      {/* mid accent node */}
      <g>
        <circle cx="280" cy="230" r="13" fill={accent} stroke="var(--ink)" strokeWidth="1.2"/>
        <text x="280" y="234" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="700" fill="var(--primary-ink)">⚡</text>
      </g>
      {/* leaf — author */}
      <g>
        <circle cx="100" cy="320" r="22" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4"/>
        <text x="100" y="316" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.06em" fill="var(--ink2)">AUTHOR</text>
        <text x="100" y="328" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">@rachel</text>
      </g>
      {/* leaf — agent */}
      <g>
        <circle cx="460" cy="320" r="22" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.4"/>
        <text x="460" y="316" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fontWeight="600" letterSpacing="0.06em" fill="var(--ink2)">AGENT</text>
        <text x="460" y="328" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)">claude</text>
      </g>
      {/* tiny audit ticks at bottom */}
      <g transform="translate(0, 380)" fontFamily="var(--font-mono)" fontSize="9" fill="var(--muted)" letterSpacing="0.06em">
        <line x1="20" y1="0" x2="540" y2="0" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="2 4"/>
        <text x="20" y="16">AUDIT</text>
        <text x="80" y="16">a17f…3c</text>
        <text x="180" y="16">← b29e…7d</text>
        <text x="300" y="16">← c40a…1f</text>
        <text x="420" y="16">← d51b…2a</text>
      </g>
    </svg>
  );
}

window.Logo = Logo;
window.Button = Button;
window.Tag = Tag;
window.Eyebrow = Eyebrow;
window.Callout = Callout;
window.PullQuote = PullQuote;
window.Card = Card;
window.EditorialStrip = EditorialStrip;
window.SiteFooter = SiteFooter;
window.NodeGraph = NodeGraph;
