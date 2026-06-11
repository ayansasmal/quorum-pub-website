// MENU — slide-down panel + accordion (one expanded at a time).
// Architecture (matches wireframe):
//   • Header stays put at top. Hamburger icon morphs to X when menu open.
//   • MenuPanel anchors absolute top of .qh-site, slides down BELOW header.
//   • Scrim sits behind the panel and fills the rest of the surface.
//   • On desktop (≥960px container), inline nav is visible + hamburger hides.

const NAV_TREE = [
  { id: 'why',      l: 'Why Quorum', subs: [
    { l: 'Institutional memory' },
    { l: 'AI contradiction' },
    { l: 'Onboarding cost' },
    { l: 'Decision drift' },
    { l: 'Buried business requirement' },
  ]},
  { id: 'features', l: 'Features', subs: [
    { l: 'Governed Memory' },
    { l: 'Conflict Detection' },
    { l: 'Authority Weighting' },
    { l: 'Business Requirements', badge: 'NEW' },
    { l: 'Audit Chain' },
    { l: 'Pending Decisions' },
    { l: 'Knowledge States' },
    { l: 'Multi-Project Isolation' },
  ]},
  { id: 'governance', l: 'Governance', subs: [
    { l: 'Constitutional rules' },
    { l: 'Who audits the auditor?' },
    { l: 'In practice' },
    { l: 'Open source governance' },
    { l: 'Audiences' },
  ]},
  { id: 'cost', l: 'Cost & ROI', subs: [
    { l: 'Ask your team' },
    { l: 'The compounding effect' },
    { l: 'Requirements protection' },
    { l: 'What Quorum costs' },
    { l: 'Still evaluating?' },
  ]},
  { id: 'start', l: 'Get Started', subs: [
    { l: 'Prerequisites' },
    { l: 'Step-by-step setup' },
    { l: 'Your first knowledge node' },
    { l: 'What to do next' },
    { l: 'Need help?' },
  ]},
];

function Chev({ open, color }) {
  const c = color || 'currentColor';
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" style={{
      transition: 'transform 220ms ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    }} aria-hidden>
      <polyline points="5,8 10,13 15,8" stroke={c} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function MenuRow({ item, expanded, onToggle, last }) {
  return (
    <li style={{
      listStyle: 'none',
      borderBottom: last ? 'none' : '1px solid var(--border)',
    }}>
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => onToggle(item.id)}
        style={{
          width: '100%', height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 4px',
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: expanded ? 'var(--primary)' : 'var(--ink)',
          fontSize: 17, fontWeight: 500, letterSpacing: '-0.012em',
          textAlign: 'left',
          fontFamily: 'inherit',
        }}
      >
        <span>{item.l}</span>
        <Chev open={expanded} color={expanded ? 'var(--primary)' : 'var(--muted)'} />
      </button>
      <div style={{
        display: 'grid',
        gridTemplateRows: expanded ? '1fr' : '0fr',
        transition: 'grid-template-rows 240ms ease',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <ul style={{
            listStyle: 'none', margin: 0,
            padding: '2px 0 8px 14px',
            borderLeft: '2px solid var(--primary)',
            marginLeft: 6,
          }}>
            {item.subs.map((s, i) => (
              <li key={s.l} style={{
                height: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingLeft: 10,
                borderBottom: i < item.subs.length - 1 ? '1px dashed var(--border)' : 'none',
              }}>
                <a href="#" style={{
                  fontSize: 13, color: 'var(--ink2)', textDecoration: 'none',
                  letterSpacing: '-0.005em',
                }}>{s.l}</a>
                {s.badge && (
                  <span className="qh-mono" style={{
                    fontSize: 9, padding: '1px 6px', borderRadius: 999,
                    background: 'var(--primary-soft)', color: 'var(--primary)',
                    fontWeight: 700, letterSpacing: '0.08em',
                  }}>{s.badge}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function MenuPanel({ open, defaultExpanded = 'why', onClose, headerHeight = 84 }) {
  const [expanded, setExpanded] = React.useState(defaultExpanded);
  React.useEffect(() => { setExpanded(defaultExpanded); }, [defaultExpanded, open]);
  const toggle = (id) => setExpanded(prev => prev === id ? null : id);

  return (
    <React.Fragment>
      {/* scrim — covers everything below header */}
      <div
        onClick={onClose}
        aria-hidden
        style={{
          position: 'absolute',
          top: headerHeight, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.42)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 220ms ease',
          zIndex: 55,
        }}
      />
      {/* panel — slides down BELOW header */}
      <div
        role="dialog"
        aria-label="Quorum menu"
        aria-hidden={!open}
        style={{
          position: 'absolute',
          top: headerHeight, left: 0, right: 0,
          zIndex: 60,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border-strong)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
          transform: open ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <ul style={{ margin: 0, padding: '6px 20px 0', listStyle: 'none' }}>
          {NAV_TREE.map((it, i) => (
            <MenuRow
              key={it.id}
              item={it}
              expanded={expanded === it.id}
              onToggle={toggle}
              last={i === NAV_TREE.length - 1}
            />
          ))}
        </ul>

        <div style={{
          padding: '10px 20px 10px',
          borderTop: '1px solid var(--border-strong)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
        }}>
          <a href="#" style={{
            fontSize: 13, color: 'var(--ink)', textDecoration: 'none', fontWeight: 500,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
              <polygon points="8,1 10,5.7 15,6.4 11.5,10 12.4,15 8,12.7 3.6,15 4.5,10 1,6.4 6,5.7" fill="currentColor"/>
            </svg>
            Star on GitHub
          </a>
          <a href="#" style={{
            fontSize: 13, color: 'var(--ink)', textDecoration: 'none', fontWeight: 500,
          }}>
            Read the Docs →
          </a>
        </div>
        <div style={{
          padding: '0 20px 12px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
          letterSpacing: '0.04em',
        }}>
          <span>questions?</span>
          <a href="mailto:ayan.m.sasmal@gmail.com" style={{ color: 'var(--ink2)', textDecoration: 'none' }}>
            ayan.m.sasmal@gmail.com
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

function HamburgerIcon({ open }) {
  // morphs between ☰ and × via stroke transforms
  const top = open ? 'rotate(45deg) translate(0px, 5px)' : 'rotate(0deg) translate(0px, 0px)';
  const mid = open ? 'scaleX(0)' : 'scaleX(1)';
  const bot = open ? 'rotate(-45deg) translate(0px, -5px)' : 'rotate(0deg) translate(0px, 0px)';
  const lineStyle = (transform) => ({
    transform,
    transformOrigin: 'center',
    transition: 'transform 220ms cubic-bezier(0.4, 0.2, 0.2, 1.0), opacity 200ms ease',
  });
  return (
    <svg width="18" height="14" viewBox="0 0 20 14" aria-hidden>
      <line x1="2" y1="2"  x2="18" y2="2"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={lineStyle(top)} />
      <line x1="2" y1="7"  x2="18" y2="7"  stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={{ ...lineStyle(mid), opacity: open ? 0 : 1 }} />
      <line x1="2" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" style={lineStyle(bot)} />
    </svg>
  );
}

function SiteHeader({ menuOpen, onMenuToggle, compact = false }) {
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 70,
      background: 'color-mix(in oklab, var(--bg) 94%, transparent)',
      backdropFilter: 'saturate(140%) blur(10px)',
      WebkitBackdropFilter: 'saturate(140%) blur(10px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'flex', alignItems: 'center',
        padding: compact ? '10px 16px' : '12px 20px',
        gap: 14,
        height: 56,
        boxSizing: 'border-box',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)' }}>
          <Logo size={compact ? 18 : 22} />
          <span style={{ fontWeight: 600, fontSize: compact ? 15 : 17, letterSpacing: '-0.012em' }}>Quorum</span>
          <Tag style={{ marginLeft: 4 }}>v0.4</Tag>
        </div>

        <nav className="qh-nav-inline" style={{
          marginLeft: 22, gap: 22, alignItems: 'center',
        }}>
          {NAV_TREE.map((it) => (
            <a key={it.id} href={'#' + it.id} style={{
              fontSize: 14, color: 'var(--ink2)', textDecoration: 'none',
              letterSpacing: '-0.005em',
            }}>{it.l}</a>
          ))}
        </nav>

        <div style={{ flex: 1 }} />

        <a href="#" className="qh-stars" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontSize: 13, color: 'var(--ink2)', textDecoration: 'none',
          padding: '6px 10px', borderRadius: 'var(--r-2)',
          border: '1px solid var(--border)',
        }}>
          <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden>
            <polygon points="8,1 10,5.7 15,6.4 11.5,10 12.4,15 8,12.7 3.6,15 4.5,10 1,6.4 6,5.7" fill="currentColor"/>
          </svg>
          <span>1.2k</span>
        </a>

        <span className="qh-cta-desktop">
          <Button variant="primary" size="sm">Get Started</Button>
        </span>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={onMenuToggle}
          className="qh-hamburger"
          style={{
            width: 36, height: 36, padding: 0,
            background: menuOpen ? 'var(--primary-soft)' : 'transparent',
            border: '1px solid ' + (menuOpen ? 'var(--primary)' : 'var(--border)'),
            borderRadius: 'var(--r-2)', cursor: 'pointer',
            color: menuOpen ? 'var(--primary)' : 'var(--ink)',
            display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'all 180ms ease',
          }}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}

window.NAV_TREE = NAV_TREE;
window.MenuPanel = MenuPanel;
window.SiteHeader = SiteHeader;
