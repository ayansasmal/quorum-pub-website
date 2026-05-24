import { Section } from './Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { TerminalBlock } from '@/components/graphics/TerminalBlock'

export function S02Editor() {
  return (
    <Section id="editor" padY="xl" tint>
      <div style={{ display: 'grid', alignItems: 'center' }} className="qh-2col">
        <div>
          <TerminalBlock />
        </div>
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">02 / 03</span>&nbsp;&nbsp;in your editor
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
            Lives inside Claude Code.
          </h2>
          <p style={{ margin: '0 0 22px', fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)' }}>
            One MCP server. Quorum reads on every task, writes on every decision, and intercepts
            conflicts before they land. Zero context-window babysitting.
          </p>
          <Callout>
            Agents cite prior decisions automatically. Contradictions become HOLD states, routed
            to the original authors. Audit trail attaches itself.
          </Callout>
        </div>
      </div>
    </Section>
  )
}
