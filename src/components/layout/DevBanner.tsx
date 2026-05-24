export function DevBanner() {
  return (
    <div style={{
      background: 'color-mix(in oklab, var(--amber) 12%, transparent)',
      borderBottom: '1px solid color-mix(in oklab, var(--amber) 30%, transparent)',
      padding: '8px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      textAlign: 'center',
      flexWrap: 'nowrap',
      overflow: 'hidden',
    }}>
      {/* Mobile: compact single line */}
      <span className="qh-banner-full" style={{ display: 'contents' }}>
        <span style={{ fontSize: 13, color: 'var(--amber)', fontWeight: 600, letterSpacing: '-0.005em', whiteSpace: 'nowrap' }}>
          🚧 Active development.
        </span>
        <span style={{ fontSize: 13, color: 'var(--ink-2)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          APIs and features may change.{' '}
          <a
            href="https://github.com/ayansasmal/quorum"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--ink)', textDecoration: 'underline', textDecorationColor: 'var(--border-strong)', textUnderlineOffset: 3 }}
          >
            Follow on GitHub →
          </a>
        </span>
      </span>
    </div>
  )
}
