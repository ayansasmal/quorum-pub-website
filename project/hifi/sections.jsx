// V6 LANDING SECTIONS — hero, pain strip, three metaphor sections, CTA.

// ─── Section wrapper.
function Section({ children, id, tint, dashed = true, padY = 'lg', style }) {
  const pads = { sm: '32px 20px', md: '48px 20px', lg: '64px 20px', xl: '80px 20px' };
  return (
    <section id={id} style={{
      borderTop: dashed ? '1px dashed var(--border-strong)' : 'none',
      background: tint ? 'var(--bg-alt)' : 'transparent',
      padding: pads[padY],
      ...style,
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

// ─── Hero (responsive — stacks under 900px).
function Hero({ headline }) {
  return (
    <section style={{ padding: '40px 20px 32px' }} id="hero">
      <div style={{
        maxWidth: 1240, margin: '0 auto',
        display: 'grid', gap: 36, alignItems: 'center',
        gridTemplateColumns: '1fr',
      }} className="qh-hero-grid">
        <div>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">open source</span> · claude code · MCP
          </Eyebrow>
          <h1 style={{
            margin: 0, lineHeight: 1.04,
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 600, letterSpacing: '-0.025em',
            color: 'var(--ink)', textWrap: 'balance',
          }}>
            {headline || (<>Your AI agents should <span style={{ color: 'var(--primary)' }}>remember</span> what your team decided.</>)}
          </h1>
          <p style={{
            margin: '20px 0 22px',
            fontSize: 17, lineHeight: 1.55, color: 'var(--ink2)',
            maxWidth: 520, letterSpacing: '-0.005em',
          }}>
            A governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </p>
          <PullQuote cite="platform team · eng-at-scale" style={{ marginBottom: 26, maxWidth: 480 }}>
            Our AI agents stopped contradicting each other on day three.
          </PullQuote>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Button variant="primary" size="lg" iconRight="→">Get Started Free</Button>
            <Button variant="secondary" size="lg">Read the Docs</Button>
          </div>
          <div style={{
            marginTop: 18,
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--muted)', letterSpacing: '0.04em',
          }}>
            used by engineering teams scaling AI-assisted development
          </div>
        </div>

        {/* Hero visual — node graph + meta floaters */}
        <div style={{ position: 'relative' }} className="qh-hero-visual">
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-5)',
            padding: 24,
            position: 'relative',
            aspectRatio: '4 / 3',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', top: 14, left: 14,
              display: 'flex', gap: 6,
            }}>
              <Tag variant="outline">D-204</Tag>
              <Tag variant="primary">active</Tag>
            </div>
            <NodeGraph />
          </div>
          {/* floating receipt — wraps onto card edge */}
          <div className="qh-hero-receipt" style={{
            position: 'absolute',
            bottom: -24, right: -8,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-3)',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-md)',
            fontFamily: 'var(--font-mono)', fontSize: 11,
            lineHeight: 1.65, minWidth: 220,
          }}>
            <div style={{ color: 'var(--muted)', marginBottom: 4 }}>audit / committed</div>
            <div><span style={{ color: 'var(--muted)' }}>sha</span> <span>a17f…3c · b29e…7d</span></div>
            <div style={{ color: 'var(--green)' }}>✓ signed · chain intact</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Pain strip — 3 problems.
function PainStrip() {
  const pain = [
    { icon: '🧠', t: 'Knowledge leaves with your engineers',  d: 'Capture every architectural decision automatically — author, rationale, signed audit chain.' },
    { icon: '⚡', t: 'AI agents contradict each other',        d: 'Conflict detection flags contradictions before they persist — at write time, not in production.' },
    { icon: '📋', t: 'Requirements get silently removed',     d: 'Requirements are first-class governed knowledge — pinned, owned, defensible.' },
  ];
  return (
    <Section id="pain" padY="md" dashed>
      <Eyebrow style={{ marginBottom: 18 }}>the three things that break AI-assisted teams</Eyebrow>
      <div style={{
        display: 'grid', gap: 24,
        gridTemplateColumns: '1fr',
      }} className="qh-pain-grid">
        {pain.map((p) => (
          <div key={p.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 36, height: 36, borderRadius: 'var(--r-3)',
              background: 'var(--surface2)',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, flexShrink: 0,
              border: '1px solid var(--border)',
            }}>{p.icon}</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3, marginBottom: 6, letterSpacing: '-0.01em' }}>
                {p.t}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink2)', lineHeight: 1.55 }}>
                {p.d}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── §01 — Data model · decision card.
function DecisionCard() {
  return (
    <Card padded={false} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* top meta strip */}
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--surface2)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Tag variant="outline">D-204</Tag>
          <Tag variant="primary">active</Tag>
        </div>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>topic · infrastructure</span>
      </div>
      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.012em', lineHeight: 1.25, marginBottom: 10 }}>
          Memoize user data at the edge — not in the DB layer.
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink2)', lineHeight: 1.55, marginBottom: 14 }}>
          Tried Redis-backed caching here in 2024 and got stale-user bugs. Edge memoization keeps invalidation local.
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '88px 1fr', rowGap: 4, columnGap: 16,
          fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: 1.65,
        }}>
          <span style={{ color: 'var(--muted)' }}>author</span>     <span style={{ color: 'var(--ink2)' }}>@rachel · sr.eng <span style={{ color: 'var(--muted)' }}>· left team 4mo ago</span></span>
          <span style={{ color: 'var(--muted)' }}>confidence</span> <span style={{ color: 'var(--ink2)' }}>0.94</span>
          <span style={{ color: 'var(--muted)' }}>cited by</span>   <span style={{ color: 'var(--ink2)' }}>7 decisions · reaffirmed 6w ago</span>
          <span style={{ color: 'var(--muted)' }}>parents</span>    <span style={{ color: 'var(--ink2)' }}>D-091, D-188</span>
        </div>
      </div>
      {/* audit chain ribbon */}
      <div style={{
        borderTop: '1px dashed var(--border-strong)',
        padding: '10px 16px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)',
        letterSpacing: '0.04em',
      }}>
        <span>audit / sha256</span>
        <span style={{ color: 'var(--ink2)' }}>a17f…3c · b29e…7d · c40a…1f</span>
        <span style={{ color: 'var(--green)' }}>✓ signed</span>
      </div>
    </Card>
  );
}

function S01DataModel() {
  return (
    <Section id="data-model" padY="xl">
      <div style={{
        display: 'grid', gap: 36,
        gridTemplateColumns: '1fr', alignItems: 'center',
      }} className="qh-2col">
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">01 / 03</span> &nbsp; the data model
          </Eyebrow>
          <h2 style={{
            margin: 0, fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 600, letterSpacing: '-0.022em',
            lineHeight: 1.1, marginBottom: 14, textWrap: 'balance',
          }}>
            Every decision is a governed record.
          </h2>
          <p style={{
            margin: '0 0 22px',
            fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)',
          }}>
            Each carries an author, rationale, confidence, parents, and a signed audit chain. Authority weighted — senior &gt; junior &gt; agent — so trust degrades gracefully across humans and AI.
          </p>
          <Callout>
            Records are first-class, queryable, and citable. Every agent action reads from and writes to the same chain. Nothing happens in private context windows.
          </Callout>
        </div>
        <div>
          <DecisionCard />
        </div>
      </div>
    </Section>
  );
}

// ─── §02 — In your editor · terminal block.
function TerminalBlock() {
  return (
    <Card padded={false} style={{ overflow: 'hidden', background: 'var(--surface)' }}>
      {/* chrome */}
      <div style={{
        padding: '10px 14px',
        display: 'flex', alignItems: 'center', gap: 12,
        borderBottom: '1px solid var(--border)',
        background: 'var(--surface2)',
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
        margin: 0, padding: '16px 18px',
        fontSize: 13, lineHeight: 1.7,
        color: 'var(--ink)', overflow: 'auto',
        background: 'var(--surface)',
      }}>
{`$ claude code --task "add Redis caching to /api/users"
`}<span style={{ color: 'var(--ink2)' }}>{`↳ quorum.check ✓ 2 historical decisions found
   ┌ D-204 · @rachel · 11mo · sr.eng · `}<span style={{ color: 'var(--muted)' }}>{`left team 4mo ago`}</span>{`
   │   "tried Redis here last year — stale-user bugs."
   │   cited by 7 · reaffirmed 6w ago
   └ D-091 · @rachel · 18mo · sr.eng
       "user data is hot. cache invalidation is hard."

`}</span><span style={{ color: 'var(--amber)' }}>{`⏸ claude code paused — cite, override, or rebut.`}</span>{`
`}<span style={{ color: 'var(--muted)' }}>{`> _`}</span>}
      </pre>
    </Card>
  );
}

function S02Editor() {
  return (
    <Section id="editor" padY="xl" tint>
      <div style={{
        display: 'grid', gap: 36,
        gridTemplateColumns: '1fr', alignItems: 'center',
      }} className="qh-2col qh-2col-flip">
        <div>
          <TerminalBlock />
        </div>
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">02 / 03</span> &nbsp; in your editor
          </Eyebrow>
          <h2 style={{
            margin: 0, fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 600, letterSpacing: '-0.022em',
            lineHeight: 1.1, marginBottom: 14, textWrap: 'balance',
          }}>
            Lives inside Claude Code.
          </h2>
          <p style={{
            margin: '0 0 22px',
            fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)',
          }}>
            One MCP server. Quorum reads on every task, writes on every decision, and intercepts conflicts before they land. Zero context-window babysitting.
          </p>
          <Callout>
            Agents cite prior decisions automatically. Contradictions become HOLD states, routed to the original authors. Audit trail attaches itself.
          </Callout>
        </div>
      </div>
    </Section>
  );
}

// ─── §03 — Audit trail.
function AuditTrail() {
  const rows = [
    { t: '14:02', who: '@rachel',   a: 'wrote D-204',                    sha: 'a17f…3c', state: 'committed' },
    { t: '14:03', who: 'claude',    a: 'cited D-204 in PR #831',         sha: 'b29e…7d', state: 'cited' },
    { t: '14:08', who: '@marco',    a: 'reaffirmed during arch review',  sha: 'c40a…1f', state: 'reaffirmed' },
    { t: '15:21', who: 'claude',    a: 'flagged contradiction · D-205',  sha: 'd51b…2a', state: 'flagged' },
    { t: '15:22', who: 'system',    a: 'routed HOLD → @rachel, @marco',  sha: 'e62c…9b', state: 'hold' },
    { t: '16:04', who: '@rachel',   a: 'resolved · supersede D-205',     sha: 'f73d…4c', state: 'resolved' },
  ];
  const tone = {
    committed:  'var(--ink2)',
    cited:      'var(--primary)',
    reaffirmed: 'var(--green)',
    flagged:    'var(--red)',
    hold:       'var(--amber)',
    resolved:   'var(--green)',
  };
  return (
    <Card padded={false} style={{ overflow: 'hidden' }}>
      <div style={{
        padding: '12px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '-0.01em' }}>audit trail · live</span>
        <span className="qh-mono" style={{ fontSize: 11, color: 'var(--muted)' }}>SOC 2 · exportable</span>
      </div>
      <div className="qh-mono" style={{ fontSize: 12, lineHeight: 1.6 }}>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '48px 1fr 76px',
            gap: 12, padding: '10px 16px',
            borderBottom: i < rows.length - 1 ? '1px dashed var(--border)' : 'none',
          }}>
            <span style={{ color: 'var(--muted)' }}>{r.t}</span>
            <span>
              <span style={{ color: 'var(--ink)' }}>{r.who}</span>
              <span style={{ color: 'var(--ink2)' }}> {r.a}</span>
              <span style={{
                marginLeft: 8, fontSize: 10, padding: '1px 6px', borderRadius: 999,
                background: 'var(--bg-alt)', color: tone[r.state] || 'var(--muted)',
                fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>{r.state}</span>
            </span>
            <span style={{ color: 'var(--muted)', textAlign: 'right' }}>{r.sha}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

function S03Trust() {
  return (
    <Section id="trust" padY="xl">
      <div style={{
        display: 'grid', gap: 36,
        gridTemplateColumns: '1fr', alignItems: 'center',
      }} className="qh-2col">
        <div style={{ maxWidth: 480 }}>
          <Eyebrow style={{ marginBottom: 14 }}>
            <span className="lead">03 / 03</span> &nbsp; trust &amp; compliance
          </Eyebrow>
          <h2 style={{
            margin: 0, fontSize: 'clamp(28px, 4vw, 38px)',
            fontWeight: 600, letterSpacing: '-0.022em',
            lineHeight: 1.1, marginBottom: 14, textWrap: 'balance',
          }}>
            One audit trail. Humans and agents on the same spine.
          </h2>
          <p style={{
            margin: '0 0 22px',
            fontSize: 16, lineHeight: 1.6, color: 'var(--ink2)',
          }}>
            Every write is signed and hash-chained. Replay any conflict resolution. Pin requirements that legal cannot let weaken. Export the chain for SOC 2.
          </p>
          <Callout>
            Authority weighting, signed audit chains, and pinned requirements give you a defensible record of every AI-assisted decision your team has ever made.
          </Callout>
        </div>
        <div>
          <AuditTrail />
        </div>
      </div>
    </Section>
  );
}

// ─── Pull-quote breather.
function QuoteBreather() {
  return (
    <Section padY="md" dashed>
      <PullQuote cite="common in user interviews" style={{ maxWidth: 720, margin: '0 auto' }}>
        A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
      </PullQuote>
    </Section>
  );
}

// ─── Closing CTA.
function ClosingCTA() {
  return (
    <Section id="cta" padY="xl" tint>
      <div style={{
        textAlign: 'center', maxWidth: 720, margin: '0 auto',
      }}>
        <h2 style={{
          margin: 0, fontSize: 'clamp(28px, 4vw, 42px)',
          fontWeight: 600, letterSpacing: '-0.022em',
          lineHeight: 1.08, marginBottom: 14, textWrap: 'balance',
        }}>
          Free. Open source. Self-hosted. <span style={{ color: 'var(--primary)' }}>Apache 2.0.</span>
        </h2>
        <p style={{
          margin: '0 auto 28px', maxWidth: 560,
          fontSize: 16, lineHeight: 1.55, color: 'var(--ink2)',
        }}>
          Run Quorum next to your agents. Bring your own LLM key. No per-seat fees, ever.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="lg" iconRight="→">Star on GitHub</Button>
          <Button variant="secondary" size="lg">Read the Docs</Button>
        </div>
        <div style={{
          marginTop: 22,
          fontFamily: 'var(--font-mono)', fontSize: 11,
          color: 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          v0.4 · 218 commits · 31 contributors
        </div>
      </div>
    </Section>
  );
}

window.Section = Section;
window.Hero = Hero;
window.PainStrip = PainStrip;
window.S01DataModel = S01DataModel;
window.S02Editor = S02Editor;
window.S03Trust = S03Trust;
window.QuoteBreather = QuoteBreather;
window.ClosingCTA = ClosingCTA;
