import type { Metadata } from 'next'
import { Section } from '@/components/sections/Section'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Callout } from '@/components/ui/Callout'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Cost & ROI',
  description: 'Quorum is Apache 2.0, self-hosted, and free. The ROI question is about the cost of not having institutional memory.',
}

const REFLECTION_QUESTIONS = [
  {
    n: '01',
    q: 'How long does it take a new engineer to make their first meaningful contribution?',
    hint: 'If the answer is weeks or months, how much of that is finding context that already exists somewhere?',
  },
  {
    n: '02',
    q: 'When a senior engineer leaves, what happens to the reasoning behind the decisions they made?',
    hint: 'Not the decisions themselves — they\'re in git. The reasoning. The constraints. The rejected alternatives.',
  },
  {
    n: '03',
    q: 'How often do your AI agents contradict a product requirement nobody told them about?',
    hint: 'Claude Code doesn\'t know about R-022 unless you tell it every session. How often do you remember?',
  },
  {
    n: '04',
    q: 'How much time do engineers spend re-litigating decisions that were already made?',
    hint: '"Didn\'t we decide this six months ago?" How often does that sentence appear in your Slack?',
  },
]

const MILESTONES = [
  { n: 1,  label: '10 nodes',   h: 12,  desc: 'Claude needs lots of hand-holding' },
  { n: 2,  label: '100 nodes',  h: 28,  desc: 'Rarely asks obvious questions' },
  { n: 3,  label: '500 nodes',  h: 52,  desc: 'Pre-loads context automatically' },
  { n: 4,  label: '2000 nodes', h: 78,  desc: 'Agents deliver features semi-autonomously' },
  { n: 5,  label: '5000+ nodes',h: 100, desc: 'Agents are team members' },
]

export default function CostRoiPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '64px 20px 48px', textAlign: 'center', maxWidth: 880, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 18, display: 'inline-block' }}>cost &amp; roi</Eyebrow>
        <h1 style={{
          margin: 0,
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 600,
          lineHeight: 1.05,
          letterSpacing: '-0.025em',
          marginBottom: 20,
          textWrap: 'balance',
        } as React.CSSProperties}>
          The ROI isn&apos;t a spreadsheet.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 640, margin: '0 auto' }}>
          We&apos;re not going to give you a calculator with fake multipliers.
          We&apos;re going to ask you four questions instead.
        </p>
      </section>

      {/* §01 — Reflection questions */}
      <Section id="reflection" padY="lg">
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
          <Eyebrow>
            <span className="lead">SECTION 01</span> · ask your team
          </Eyebrow>
          <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>no benchmark required</span>
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          {REFLECTION_QUESTIONS.map((item) => (
            <Card key={item.n} padded style={{ borderLeft: '3px solid var(--primary)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, alignItems: 'baseline' }}>
                <span className="qh-mono" style={{ fontSize: 16, color: 'var(--primary)', fontWeight: 700 }}>
                  {item.n}
                </span>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.35, marginBottom: 10 }}>
                    {item.q}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: 'var(--ink-2)',
                    lineHeight: 1.55,
                    padding: '8px 12px',
                    background: 'var(--surface-2)',
                    borderRadius: 'var(--r-2)',
                    fontStyle: 'italic',
                  }}>
                    {item.hint}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* §02 — Compounding curve */}
      <Section id="compounding" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 02</span> · the compounding curve
        </Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 16,
          maxWidth: 600,
          textWrap: 'balance',
        } as React.CSSProperties}>
          Agent quality compounds with the knowledge graph.
        </h2>
        <p style={{ margin: '0 0 40px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: 580 }}>
          The graph isn&apos;t useful from day one. It gets useful fast — and then it compounds.
          Teams that reach 500 nodes rarely go back to managing context by hand.
        </p>

        {/* Chart */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-4)',
          padding: '32px 24px 24px',
          overflowX: 'auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 0,
            height: 160,
            minWidth: 420,
            position: 'relative',
          }}>
            {/* Y-axis label */}
            <div style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'var(--border)',
            }} />
            <div className="qh-mono" style={{
              position: 'absolute',
              left: 8,
              top: 0,
              fontSize: 9,
              color: 'var(--muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              agent quality ↑
            </div>

            {/* Bars */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: 2, paddingLeft: 20 }}>
              {MILESTONES.map((m, i) => (
                <div key={m.n} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{
                    width: '100%',
                    height: `${m.h}%`,
                    minHeight: 8,
                    background: i === MILESTONES.length - 1
                      ? 'var(--primary)'
                      : `color-mix(in oklab, var(--primary) ${30 + i * 18}%, var(--surface-2))`,
                    borderRadius: '3px 3px 0 0',
                    border: '1px solid var(--border)',
                    borderBottom: 'none',
                    transition: 'height 0.3s ease',
                  }} />
                </div>
              ))}
            </div>
          </div>

          {/* X-axis labels */}
          <div style={{
            display: 'flex',
            paddingLeft: 20,
            gap: 2,
            borderTop: '2px solid var(--border)',
            paddingTop: 10,
            marginTop: 0,
          }}>
            {MILESTONES.map((m) => (
              <div key={m.n} style={{ flex: 1, textAlign: 'center' }}>
                <div className="qh-mono" style={{ fontSize: 9, color: 'var(--primary)', fontWeight: 700, marginBottom: 2 }}>
                  {m.label}
                </div>
                <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.4 }}>
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p style={{ margin: '16px 0 0', fontSize: 12, color: 'var(--muted)', fontStyle: 'italic' }}>
          Illustrative — based on team reports, not a controlled study.
        </p>
      </Section>

      {/* §03 — Illustrative scenario */}
      <Section id="scenario" padY="xl">
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 03</span> · illustrative scenario
        </Eyebrow>
        <h2 style={{
          margin: 0,
          fontSize: 'clamp(24px, 3.5vw, 36px)',
          fontWeight: 600,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 8,
          maxWidth: 560,
        }}>
          The guest checkout requirement.
        </h2>
        <p style={{ margin: '0 0 32px', fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 560 }}>
          A real pattern we&apos;ve seen play out. The names are fictional.
        </p>

        <div style={{ display: 'grid', gap: 24 }} className="qh-2col">
          {/* Without Quorum */}
          <Card padded style={{ borderTop: '3px solid var(--red)' }}>
            <div className="qh-mono" style={{ fontSize: 10, color: 'var(--red)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
              WITHOUT QUORUM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { actor: 'product', msg: 'R-022: Guest checkout must be available for non-authenticated users. Conversion drop of 40% observed when requiring sign-up.' },
                { actor: 'dev', msg: 'Refactoring auth flow. The old guest-checkout path looks unused — removing it to clean up the code.' },
                { actor: 'agent', msg: 'Removed 3 legacy auth routes. No tests failing. PR ready for review.' },
                { actor: 'prod', msg: 'Conversion dropped 38% overnight. Guest checkout is broken.' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 10, alignItems: 'flex-start' }}>
                  <span className="qh-mono" style={{
                    fontSize: 10,
                    padding: '2px 6px',
                    borderRadius: 'var(--r-1)',
                    background: e.actor === 'prod' ? 'var(--red-soft)' : 'var(--surface-2)',
                    color: e.actor === 'prod' ? 'var(--red)' : 'var(--muted)',
                    border: `1px solid ${e.actor === 'prod' ? 'var(--red)' : 'var(--border)'}`,
                    whiteSpace: 'nowrap',
                  }}>
                    {e.actor === 'product' ? '@product' : e.actor === 'dev' ? '@dev' : e.actor === 'agent' ? 'agent' : '🚨 prod'}
                  </span>
                  <div style={{ fontSize: 13, color: e.actor === 'prod' ? 'var(--red)' : 'var(--ink-2)', lineHeight: 1.5 }}>
                    {e.msg}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* With Quorum */}
          <Card padded style={{ borderTop: '3px solid var(--green)' }}>
            <div className="qh-mono" style={{ fontSize: 10, color: 'var(--green)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 14, fontWeight: 700 }}>
              WITH QUORUM
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { actor: 'product', msg: 'R-022 stored: Guest checkout must be available for non-authenticated users. Pinned = true. Owner: @ml-rodriguez.' },
                { actor: 'agent', msg: '[session start] Pending items: R-022 guest-checkout-requirement (pinned, authority: product). Loading context...' },
                { actor: 'agent', msg: 'Detected: proposed refactor touches auth flow. R-022 requires guest checkout to remain available. Flagging for human review before proceeding.' },
                { actor: 'dev', msg: 'Oh right — that\'s the 40% drop-off requirement. Revising the refactor to preserve the guest path.' },
              ].map((e, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 10, alignItems: 'flex-start' }}>
                  <span className="qh-mono" style={{
                    fontSize: 10,
                    padding: '2px 6px',
                    borderRadius: 'var(--r-1)',
                    background: e.actor === 'product' ? 'var(--primary-soft)' : e.actor === 'dev' ? 'var(--green-soft)' : 'var(--surface-2)',
                    color: e.actor === 'product' ? 'var(--primary)' : e.actor === 'dev' ? 'var(--green)' : 'var(--muted)',
                    border: `1px solid ${e.actor === 'product' ? 'var(--primary)' : e.actor === 'dev' ? 'var(--green)' : 'var(--border)'}`,
                    whiteSpace: 'nowrap',
                  }}>
                    {e.actor === 'product' ? '@product' : e.actor === 'agent' ? 'agent' : '@dev'}
                  </span>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>
                    {e.msg}
                  </div>
                </div>
              ))}
            </div>
            <div className="qh-mono" style={{ fontSize: 11, color: 'var(--green)', marginTop: 16, padding: '6px 10px', background: 'var(--green-soft)', borderRadius: 'var(--r-2)' }}>
              ↳ R-022 enforced · 0 production incidents · refactor completed safely
            </div>
          </Card>
        </div>

        <Callout label="The difference" style={{ marginTop: 32 }}>
          The requirement existed in both scenarios. In the first, it lived in a Slack message nobody searched.
          In the second, it was a governed record the agent loaded at session start — automatically.
        </Callout>
      </Section>

      {/* §04 — What it costs */}
      <Section id="pricing" padY="xl" tint>
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 04</span> · what quorum costs
        </Eyebrow>
        <div style={{ display: 'grid', alignItems: 'center', gap: 48 }} className="qh-2col">
          <div style={{ maxWidth: 480 }}>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 600,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}>
              <span style={{ color: 'var(--primary)' }}>$0.</span>
              <br />No per-seat fees.
              <br />No usage tiers.
            </h2>
            <p style={{ margin: '0 0 20px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Quorum is Apache 2.0. You self-host it on your own infrastructure.
              There is no SaaS tier, no enterprise gating, no seat-based pricing.
            </p>
            <Callout label="What you do pay">
              Infrastructure to run the graph server (a small VPS or Docker container)
              and the time to set it up. Most teams are running in under 30 minutes.
            </Callout>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { label: 'Apache 2.0 license', desc: 'Commercial use, modification, and distribution are all permitted.' },
              { label: 'Self-hosted', desc: 'Your knowledge graph never leaves your infrastructure. No vendor lock-in.' },
              { label: 'No per-seat pricing', desc: 'Add the whole engineering org. Add contractors. No counting heads.' },
              { label: 'No usage caps', desc: 'No token limits on the knowledge graph. Write as much as you need.' },
              { label: 'No feature tiers', desc: 'All constitutional rules, all features, all integrations — in the free version.' },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--green)',
                  marginTop: 7,
                  flexShrink: 0,
                }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* §05 — Still evaluating */}
      <Section id="evaluating" padY="xl">
        <Eyebrow style={{ marginBottom: 14 }}>
          <span className="lead">SECTION 05</span> · still evaluating?
        </Eyebrow>
        <div style={{ maxWidth: 640 }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            That&apos;s reasonable. Here&apos;s what we suggest.
          </h2>
          <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Don&apos;t evaluate Quorum against a blank canvas. Pick one real decision your team made in
            the last month. Try to find the reasoning behind it. If you can&apos;t find it in under
            60 seconds — that&apos;s the problem Quorum solves.
          </p>
          <div style={{ display: 'grid', gap: 14 }}>
            {[
              { step: '01', text: 'Pick a real past decision — auth mechanism, API design, rate limit, whatever.' },
              { step: '02', text: 'Try to find the original reasoning. Not the decision — the why.' },
              { step: '03', text: 'Time yourself. If it takes more than 60 seconds, run the setup anyway.' },
              { step: '04', text: 'It\'s free, it\'s 30 minutes, and the worst case is a small Docker container.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span className="qh-mono" style={{ fontSize: 13, color: 'var(--primary)', fontWeight: 700, flexShrink: 0, minWidth: 24 }}>
                  {item.step}
                </span>
                <div style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55 }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section padY="xl" tint>
        <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{
            margin: 0,
            fontSize: 'clamp(24px, 3.5vw, 36px)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            Free, self-hosted, 30 minutes to running.
          </h2>
          <p style={{ margin: '0 auto 24px', fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
            Apache 2.0. No account required. No card required.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" href="/get-started" iconRight="→">Get Started Free</Button>
            <Button variant="secondary" size="lg" href="/governance">Read the Governance Docs</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
