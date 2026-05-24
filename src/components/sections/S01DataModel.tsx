import { Section } from './Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { DecisionCard } from '@/components/graphics/DecisionCard'

export function S01DataModel() {
  return (
    <Section id="data-model" padY="xl">
      <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">01 / 03</span>&nbsp;&nbsp;the data model
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
            Every decision is a governed record.
          </h2>
          <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)' }}>
            Each carries an author, rationale, confidence, parents, and a signed audit chain.
            Authority weighted — senior &gt; junior &gt; agent — so trust degrades gracefully
            across humans and AI.
          </p>
          <Callout>
            Records are first-class, queryable, and citable. Every agent action reads from and
            writes to the same chain. Nothing happens in private context windows.
          </Callout>
        </div>
        <div>
          <DecisionCard />
        </div>
      </div>
    </Section>
  )
}
