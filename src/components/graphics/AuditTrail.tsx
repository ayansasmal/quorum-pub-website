const ROWS = [
  { time: '14:02', who: '@rachel', action: 'wrote D-204',               sha: 'a17f…3c', state: 'committed'  },
  { time: '14:03', who: 'claude',  action: 'cited D-204 in PR #831',    sha: 'b29e…7d', state: 'cited'      },
  { time: '14:08', who: '@marco',  action: 'reaffirmed during arch review', sha: 'c40a…1f', state: 'reaffirmed'},
  { time: '15:21', who: 'claude',  action: 'flagged contradiction · D-205', sha: 'd51b…2a', state: 'flagged'  },
  { time: '15:22', who: 'system',  action: 'routed HOLD → @rachel, @marco', sha: 'e62c…9b', state: 'hold'     },
  { time: '16:04', who: '@rachel', action: 'resolved · supersede D-205', sha: 'f73d…4c', state: 'resolved'  },
]

const TONE: Record<string, string> = {
  committed:  'var(--ink-2)',
  cited:      'var(--primary)',
  reaffirmed: 'var(--green)',
  flagged:    'var(--red)',
  hold:       'var(--amber)',
  resolved:   'var(--green)',
}

export function AuditTrail() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-4)',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '-0.01em' }}>
          audit trail · live
        </span>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
          SOC 2 · exportable
        </span>
      </div>

      <div className="qh-mono" style={{ fontSize: 12, lineHeight: 1.6 }}>
        {ROWS.map((row, i) => (
          <div key={i} style={{
            display: 'grid',
            gridTemplateColumns: '48px 1fr 76px',
            gap: 12,
            padding: '10px 16px',
            borderBottom: i < ROWS.length - 1 ? '1px dashed var(--border)' : 'none',
            alignItems: 'center',
          }}>
            <span style={{ color: 'var(--muted)' }}>{row.time}</span>
            <span>
              <span style={{ color: 'var(--ink)' }}>{row.who}</span>
              <span style={{ color: 'var(--ink-2)' }}> {row.action}</span>
              <span style={{
                marginLeft: 8,
                fontSize: 10,
                padding: '1px 6px',
                borderRadius: 999,
                background: 'var(--bg-alt)',
                color: TONE[row.state] ?? 'var(--muted)',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}>
                {row.state}
              </span>
            </span>
            <span style={{ color: 'var(--muted)', textAlign: 'right' }}>{row.sha}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
