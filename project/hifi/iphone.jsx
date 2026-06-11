// iPhone SE 3rd gen device frame — 375×667 inner viewport, exact.
// Used to prove the menu fits on the smallest target device.

function IPhoneSE({ children, label, caption }) {
  const FRAME_W = 393, FRAME_H = 740;
  const VP_W = 375, VP_H = 667;
  const BEZEL_TOP = 54;
  const BEZEL_SIDE = (FRAME_W - VP_W) / 2;
  const BEZEL_BOTTOM = FRAME_H - VP_H - BEZEL_TOP;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
    }}>
      {label && (
        <span className="qh-mono" style={{
          fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>{label}</span>
      )}
      <div style={{
        width: FRAME_W, height: FRAME_H,
        background: '#0e0f12',
        borderRadius: 48,
        boxShadow: '0 36px 90px rgba(0,0,0,0.32), 0 0 0 1px rgba(0,0,0,0.4), inset 0 0 0 2px rgba(255,255,255,0.06)',
        position: 'relative',
        paddingTop: BEZEL_TOP, paddingBottom: BEZEL_BOTTOM,
        paddingLeft: BEZEL_SIDE, paddingRight: BEZEL_SIDE,
        boxSizing: 'border-box',
        // subtle side button cues
      }}>
        {/* top: camera dot + speaker slot */}
        <div style={{
          position: 'absolute', top: 22, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 16,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1a1c20', boxShadow: 'inset 0 0 2px rgba(255,255,255,0.15)' }} />
          <span style={{ width: 54, height: 5, borderRadius: 3, background: '#1a1c20' }} />
        </div>

        {/* screen viewport — exactly 375×667 */}
        <div style={{
          width: VP_W, height: VP_H,
          background: 'var(--bg)',
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 2,
          display: 'flex', flexDirection: 'column',
        }}>
          {/* iOS status bar */}
          <div style={{
            flexShrink: 0,
            height: 22, padding: '0 14px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            background: 'var(--bg)',
            fontFamily: '-apple-system, "SF Pro", system-ui',
            fontSize: 13, fontWeight: 600, color: 'var(--ink)',
            position: 'relative', zIndex: 70,
          }}>
            <span>9:41</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{ display: 'inline-flex', gap: 1.5, alignItems: 'flex-end' }}>
                {[3, 4, 5, 6].map(h => (
                  <span key={h} style={{ width: 2, height: h, background: 'var(--ink)', borderRadius: 0.5 }} />
                ))}
              </span>
              <span style={{
                width: 18, height: 9, border: '1px solid var(--ink)', borderRadius: 2,
                display: 'inline-block', position: 'relative',
              }}>
                <span style={{ position: 'absolute', inset: 1, width: 12, background: 'var(--ink)', borderRadius: 1 }} />
              </span>
            </div>
          </div>
          {/* page content */}
          <div style={{
            flex: 1, minHeight: 0,
            display: 'flex', flexDirection: 'column',
            position: 'relative',
          }}>{children}</div>
        </div>

        {/* home button */}
        <div style={{
          position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
          width: 38, height: 38, borderRadius: '50%',
          background: '#1a1c20',
          boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 0 8px rgba(0,0,0,0.6)',
        }}>
          <div style={{
            position: 'absolute', inset: 10,
            border: '1.4px solid rgba(255,255,255,0.16)', borderRadius: 6,
          }} />
        </div>
      </div>
      {caption && (
        <span className="qh-mono" style={{
          fontSize: 11, letterSpacing: '0.04em', color: 'var(--muted)',
          maxWidth: FRAME_W, textAlign: 'center',
        }}>{caption}</span>
      )}
    </div>
  );
}

window.IPhoneSE = IPhoneSE;
