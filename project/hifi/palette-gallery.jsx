// PALETTE GALLERY — shows all 4 palettes × light/dark with a mini preview
// so the user can compare directions side-by-side.

function Swatch({ name, value, big = false }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0,
    }}>
      <div title={name + ' · ' + value} style={{
        width: big ? 48 : 32, height: big ? 48 : 28,
        background: value,
        border: '1px solid rgba(0,0,0,0.15)',
        borderRadius: 4,
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)',
      }} />
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--muted)',
        letterSpacing: '0.04em', textTransform: 'uppercase',
        overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
      }}>{name}</div>
    </div>
  );
}

// Mini live preview using the palette — header + hero + button + callout.
function PalettePreview() {
  return (
    <div style={{
      background: 'var(--bg)', color: 'var(--ink)',
      borderRadius: 'var(--r-3)', overflow: 'hidden',
      border: '1px solid var(--border)',
    }}>
      <div style={{
        padding: '10px 14px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'var(--bg)',
      }}>
        <Logo size={14} />
        <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '-0.01em' }}>Quorum</span>
        <span className="qh-mono" style={{
          fontSize: 9, padding: '2px 6px', borderRadius: 999,
          background: 'var(--bg-alt)', color: 'var(--ink2)',
          letterSpacing: '0.06em', fontWeight: 600, marginLeft: 4,
        }}>v0.4</span>
        <span style={{ flex: 1 }} />
        <span className="qh-mono" style={{ fontSize: 10, color: 'var(--muted)' }}>★ 1.2k</span>
      </div>
      <div style={{ padding: '14px 14px 16px' }}>
        <div className="qh-mono" style={{
          fontSize: 9, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--muted)', marginBottom: 8,
        }}>
          <span style={{ color: 'var(--primary)', fontWeight: 600 }}>01 / 03</span> &nbsp; data model
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '-0.018em', lineHeight: 1.2, marginBottom: 8 }}>
          Every decision is a <span style={{ color: 'var(--primary)' }}>governed</span> record.
        </div>
        <div style={{ fontSize: 11, lineHeight: 1.5, color: 'var(--ink2)', marginBottom: 10 }}>
          Author, rationale, confidence, parents — signed audit chain.
        </div>
        <div style={{
          borderLeft: '2px solid var(--primary)',
          background: 'var(--primary-soft)',
          padding: '8px 10px',
          borderRadius: '0 var(--r-2) var(--r-2) 0',
          marginBottom: 10,
        }}>
          <div className="qh-mono" style={{ fontSize: 9, letterSpacing: '0.1em', color: 'var(--primary)', fontWeight: 700, marginBottom: 2 }}>
            WHAT QUORUM DOES →
          </div>
          <div style={{ fontSize: 11, color: 'var(--ink2)' }}>
            Citable. Queryable. First-class.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '5px 10px', borderRadius: 'var(--r-2)',
            background: 'var(--primary)', color: 'var(--primary-ink)',
            fontSize: 11, fontWeight: 500,
          }}>Get Started</span>
          <span className="qh-mono" style={{
            fontSize: 10, padding: '2px 6px', borderRadius: 999,
            background: 'var(--red-soft)', color: 'var(--red)',
            fontWeight: 700, letterSpacing: '0.06em',
          }}>⚠ HOLD</span>
          <span className="qh-mono" style={{
            fontSize: 10, padding: '2px 6px', borderRadius: 999,
            background: 'var(--green-soft)', color: 'var(--green)',
            fontWeight: 700, letterSpacing: '0.06em',
          }}>✓ SIGNED</span>
        </div>
        <div style={{
          marginTop: 12, paddingTop: 10, borderTop: '1px dashed var(--border)',
          fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--muted)',
          letterSpacing: '0.04em',
        }}>
          sha · a17f…3c · b29e…7d
        </div>
      </div>
    </div>
  );
}

function PaletteCard({ paletteKey, mode }) {
  const p = PALETTES[paletteKey];
  const tokens = p[mode];
  const styleObj = paletteToStyleObject(paletteKey, mode);
  // Display order of swatches
  const swatchOrder = ['bg', 'surface', 'ink', 'ink2', 'muted', 'primary', 'red', 'green'];
  return (
    <div style={{
      ...styleObj,
      background: tokens.bg,
      color: tokens.ink,
      border: `1px solid ${tokens.border}`,
      borderRadius: 16,
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
    }}>
      <div style={{
        padding: '14px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '-0.012em' }}>
            {p.label}
          </div>
          <div className="qh-mono" style={{
            fontSize: 10, letterSpacing: '0.06em', color: 'var(--muted)', marginTop: 2,
          }}>{p.sub}</div>
        </div>
        <span className="qh-mono" style={{
          fontSize: 10, padding: '3px 8px', borderRadius: 999,
          background: 'var(--bg-alt)', color: 'var(--ink2)',
          border: '1px solid var(--border)',
          letterSpacing: '0.1em', fontWeight: 600, textTransform: 'uppercase',
        }}>{mode}</span>
      </div>
      {/* swatches */}
      <div style={{
        padding: '14px 16px',
        display: 'flex', gap: 12, flexWrap: 'wrap',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-alt)',
      }}>
        {swatchOrder.map(k => (
          <Swatch key={k} name={k} value={tokens[k]} />
        ))}
      </div>
      {/* mini preview */}
      <div style={{ padding: 14 }}>
        <PalettePreview />
      </div>
    </div>
  );
}

// Gallery — two columns (light | dark), one row per palette.
function PaletteGallery() {
  return (
    <div style={{ padding: 32, background: 'var(--bg-alt)', minHeight: '100%' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="qh-eyebrow" style={{ marginBottom: 10 }}>palette gallery</div>
        <h2 style={{
          margin: 0, fontSize: 28, fontWeight: 600, letterSpacing: '-0.022em',
          lineHeight: 1.1, marginBottom: 8,
        }}>
          Four palettes. Two modes. Pick a direction.
        </h2>
        <p style={{
          margin: '0 0 24px', maxWidth: 720, fontSize: 14, lineHeight: 1.5, color: 'var(--ink2)',
        }}>
          Each palette is designed to feel coherent in both light and dark. The "knowledge bank" reading is foregrounded in Library Slate and Forest Atlas. Warm Editorial carries the wireframe; Mono Ink is the most clinical/serious option.
        </p>

        <div style={{ display: 'grid', gap: 20 }}>
          {PALETTE_KEYS.map(key => (
            <div key={key} style={{
              display: 'grid', gap: 16,
              gridTemplateColumns: '1fr 1fr',
            }}>
              <PaletteCard paletteKey={key} mode="light" />
              <PaletteCard paletteKey={key} mode="dark" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.PaletteCard = PaletteCard;
window.PaletteGallery = PaletteGallery;
