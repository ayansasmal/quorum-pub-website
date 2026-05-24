import { Section } from './Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { AuditTrail } from '@/components/graphics/AuditTrail'

export function S03Trust() {
  return (
    <Section id="trust" padY="xl">
      <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">03 / 03</span>&nbsp;&nbsp;trust &amp; compliance
          </Eyebrow>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 600,
            letterSpacing: '-0.022em',
            lineHeight: 1.1,
            marginBottom: 14,
            textWrap: 'balance',
          } as React.CSSProperties}>
            One audit trail. Humans and agents on the same spine.
          </h2>
          <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)' }}>
            Every write is signed and hash-chained. Replay any conflict resolution. Pin requirements
            that legal cannot let weaken. Export the chain for SOC 2.
          </p>
          <Callout>
            Authority weighting, signed audit chains, and pinned requirements give you a defensible
            record of every AI-assisted decision your team has ever made.
          </Callout>
        </div>
        <div>
          <AuditTrail />
        </div>
      </div>
    </Section>
  )
}
