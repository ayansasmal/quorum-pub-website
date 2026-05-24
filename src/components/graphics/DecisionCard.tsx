import { Tag } from '@/components/ui/Tag'

export function DecisionCard() {
  return (
    <div style={{
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-4)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* top meta strip */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'var(--surface-2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Tag variant="outline">D-204</Tag>
          <Tag variant="primary">active</Tag>
        </div>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>
          topic · infrastructure
        </span>
      </div>

      <div style={{ padding: 18 }}>
        <div style={{
          fontSize: 18,
          fontWeight: 600,
          letterSpacing: '-0.012em',
          lineHeight: 1.25,
          marginBottom: 10,
        }}>
          Memoize user data at the edge — not in the DB layer.
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55, marginBottom: 14 }}>
          Tried Redis-backed caching here in 2024 and got stale-user bugs. Edge memoization keeps invalidation local.
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '88px 1fr',
          rowGap: 4,
          columnGap: 16,
          fontFamily: 'var(--geist-mono), ui-monospace, monospace',
          fontSize: 12,
          lineHeight: 1.65,
        }}>
          <span style={{ color: 'var(--muted)' }}>author</span>
          <span style={{ color: 'var(--ink-2)' }}>
            @rachel · sr.eng{' '}
            <span style={{ color: 'var(--muted)' }}>· left team 4mo ago</span>
          </span>
          <span style={{ color: 'var(--muted)' }}>confidence</span>
          <span style={{ color: 'var(--ink-2)' }}>0.94</span>
          <span style={{ color: 'var(--muted)' }}>cited by</span>
          <span style={{ color: 'var(--ink-2)' }}>7 decisions · reaffirmed 6w ago</span>
          <span style={{ color: 'var(--muted)' }}>parents</span>
          <span style={{ color: 'var(--ink-2)' }}>D-091, D-188</span>
        </div>
      </div>

      {/* audit chain ribbon */}
      <div style={{
        borderTop: '1px dashed var(--border-strong)',
        padding: '10px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'var(--geist-mono), ui-monospace, monospace',
        fontSize: 11,
        color: 'var(--muted)',
        letterSpacing: '0.04em',
      }}>
        <span>audit / sha256</span>
        <span style={{ color: 'var(--ink-2)' }}>a17f…3c · b29e…7d · c40a…1f</span>
        <span style={{ color: 'var(--green)' }}>✓ signed</span>
      </div>
    </div>
  )
}
