export function TerminalBlock() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-4)',
      overflow: 'hidden',
    }}>
      {/* window chrome */}
      <div style={{
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface-2)',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ed6a5e', '#f5bf4f', '#62c554'].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }} />
          ))}
        </div>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)', letterSpacing: '0.06em' }}>
          claude code · quorum.check
        </span>
      </div>

      <pre className="qh-mono" style={{
        margin: 0,
        padding: '16px 18px',
        fontSize: 13,
        lineHeight: 1.7,
        color: 'var(--ink)',
        overflowX: 'auto',
        background: 'var(--surface)',
        whiteSpace: 'pre',
      }}>
        <span>{'$ claude code --task "add Redis caching to /api/users"\n'}</span>
        <span style={{ color: 'var(--ink-2)' }}>
          {'↳ quorum.check ✓ 2 historical decisions found\n'}
          {'   ┌ D-204 · @rachel · 11mo · sr.eng · '}
          <span style={{ color: 'var(--muted)' }}>left team 4mo ago</span>
          {'\n'}
          {'   │   "tried Redis here last year — stale-user bugs."\n'}
          {'   │   cited by 7 · reaffirmed 6w ago\n'}
          {'   └ D-091 · @rachel · 18mo · sr.eng\n'}
          {'       "user data is hot. cache invalidation is hard."\n\n'}
        </span>
        <span style={{ color: 'var(--amber)' }}>{'⏸ claude code paused — cite, override, or rebut.'}</span>
        {'\n'}
        <span style={{ color: 'var(--muted)' }}>{'> _'}</span>
      </pre>
    </div>
  )
}
