export function EditorialStrip() {
  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      padding: '8px max(20px, env(safe-area-inset-left, 20px))',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      fontFamily: 'var(--geist-mono), ui-monospace, monospace',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--muted)',
    }}>
      <span>Quorum / v0.4 · Apache 2.0 · Open Source · MCP</span>
    </div>
  )
}
