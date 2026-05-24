import { Button } from '@/components/ui/Button'
import { PullQuote } from '@/components/ui/PullQuote'
import { Tag } from '@/components/ui/Tag'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { NodeGraph } from '@/components/graphics/NodeGraph'

export function Hero() {
  return (
    <section style={{ padding: '40px 20px 32px' }} id="hero">
      <div
        style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gap: 36, alignItems: 'center' }}
        className="qh-hero-grid"
      >
        {/* Copy */}
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">open source</span> · claude code · MCP
          </Eyebrow>
          <h1 style={{
            margin: 0,
            lineHeight: 1.04,
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            textWrap: 'balance',
          } as React.CSSProperties}>
            Your AI agents should{' '}
            <span style={{ color: 'var(--primary)' }}>remember</span>{' '}
            what your team decided.
          </h1>
          <p style={{
            margin: '20px 0 22px',
            fontSize: 17,
            lineHeight: 1.55,
            color: 'var(--ink-2)',
            maxWidth: 520,
            letterSpacing: '-0.005em',
          }}>
            A governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </p>
          <PullQuote cite="platform team · eng-at-scale" style={{ marginBottom: 26, maxWidth: 480 }}>
            Our AI agents stopped contradicting each other on day three.
          </PullQuote>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/get-started" iconRight="→">
              Get Started Free
            </Button>
            <Button variant="secondary" size="lg" href="/get-started">
              Read the Docs
            </Button>
          </div>
          <div style={{
            marginTop: 18,
            fontFamily: 'var(--geist-mono), ui-monospace, monospace',
            fontSize: 12,
            color: 'var(--muted)',
            letterSpacing: '0.04em',
          }}>
            used by engineering teams scaling AI-assisted development
          </div>
        </div>

        {/* Hero visual */}
        <div style={{ position: 'relative' }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-5)',
            padding: 24,
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 14, left: 14, display: 'flex', gap: 6 }}>
              <Tag variant="outline">D-204</Tag>
              <Tag variant="primary">active</Tag>
            </div>
            <NodeGraph />
          </div>

          {/* Floating audit receipt */}
          <div style={{
            position: 'absolute',
            bottom: -24,
            right: -8,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-3)',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-md)',
            fontFamily: 'var(--geist-mono), ui-monospace, monospace',
            fontSize: 11,
            lineHeight: 1.65,
            minWidth: 220,
          }}>
            <div style={{ color: 'var(--muted)', marginBottom: 4 }}>audit / committed</div>
            <div><span style={{ color: 'var(--muted)' }}>sha</span> <span>a17f…3c · b29e…7d</span></div>
            <div style={{ color: 'var(--green)' }}>✓ signed · chain intact</div>
          </div>
        </div>
      </div>
    </section>
  )
}
