// V6 · FINAL — V5 structure (graph hero → 3 proof sections) fused with V4's
// editorial chrome (mono strip, numbered eyebrows, pull-quote) and the
// "What Quorum does →" indigo callout that becomes the shared design vocab
// for every child page (Why Quorum, Features, Cost, etc.).
//
// This is the chosen direction. Child page wireframes should pull pieces
// from this file — not reinvent them.

function V6Final({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      {/* editorial mono-strip — V4 chrome */}
      <EditorialStrip />
      <Header />

      {/* ── HERO ─ split, graph as the anchor metaphor ────────── */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, padding: '64px 56px 48px', alignItems: 'center', position: 'relative' }}>
        <div>
          <MonoEyebrow style={{ marginBottom: 16 }}>Quorum · open source · claude code · MCP</MonoEyebrow>
          <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 22, textWrap: 'balance' }}>
            {headline}
          </HandText>
          <div className="sk" style={{ fontSize: 18, lineHeight: 1.5, color: SK.ink2, maxWidth: 480, marginBottom: 22 }}>
            A governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </div>
          {/* pull-quote inline in hero — V4 element promoted */}
          <PullQuote cite="platform team · ENG-AT-SCALE" style={{ marginBottom: 26 }}>
            "Our AI agents stopped contradicting each other on day three."
          </PullQuote>
          <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
            <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
            <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
          </div>
          <div className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>
            Used by engineering teams scaling AI-assisted development
          </div>
        </div>
        <SketchBox h={440} pad={20} double>
          <HeroGraphMini />
        </SketchBox>
        {showAnnotations && (
          <Annot x={66} y={20} w={170} rotate={-2}>hero anchor = graph (mental model)</Annot>
        )}
        {showAnnotations && (
          <Annot x={560} y={70} w={170} rotate={3}>editorial mono-strip carries V4 tone</Annot>
        )}
      </section>

      {/* ── PAIN STRIP ─ qualify the visitor, fast ─────────────── */}
      <section style={{ padding: '32px 56px 48px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <MonoEyebrow style={{ marginBottom: 16 }}>The three things that break AI-assisted teams</MonoEyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
          {[
            { ic: '🧠', h: 'Knowledge leaves with your engineers',  d: 'Capture every architectural decision automatically.' },
            { ic: '⚡', h: 'AI agents contradict each other',       d: 'Conflict detection flags contradictions before they persist.' },
            { ic: '📋', h: 'Requirements get silently removed',     d: 'Requirements are first-class governed knowledge.' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 26, lineHeight: 1 }}>{p.ic}</div>
              <div>
                <HandText size={18} as="div" style={{ marginBottom: 4, lineHeight: 1.2 }}>{p.h}</HandText>
                <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.45 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── §01 · Data model — decision card stack ─────────────── */}
      <section style={{ padding: '72px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ maxWidth: 480 }}>
            <MonoEyebrow style={{ marginBottom: 14 }}>01 / 03 — the data model</MonoEyebrow>
            <HandText size={36} as="div" style={{ marginBottom: 14, lineHeight: 1.1 }}>
              Every decision is a governed record.
            </HandText>
            <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.55, marginBottom: 20 }}>
              Each carries an author, rationale, confidence, parents, and a signed audit chain. Authority weighted — senior &gt; junior &gt; agent — so trust degrades gracefully across humans and AI.
            </div>
            <IndigoCallout>
              Records are first-class, queryable, and citable. Every agent action reads from and writes to the same chain. Nothing happens in private context windows.
            </IndigoCallout>
          </div>
          <SketchBox h={360} pad={16}>
            <MiniCardStack />
          </SketchBox>
        </div>
        {showAnnotations && (
          <Annot x={56} y={56} w={170} rotate={-3}>each §: eyebrow → headline → lede → indigo callout</Annot>
        )}
      </section>

      {/* pull-quote breather between sections */}
      <div style={{ padding: '8px 56px 24px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <PullQuote cite="common in our user interviews">
          A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
        </PullQuote>
      </div>

      {/* ── §02 · Editor — terminal (alternated side, tinted bg) ─ */}
      <section style={{ padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', background: 'rgba(0,0,0,0.025)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 56, alignItems: 'center' }}>
          <MiniTerminal h={360} />
          <div style={{ maxWidth: 480 }}>
            <MonoEyebrow style={{ marginBottom: 14 }}>02 / 03 — in your editor</MonoEyebrow>
            <HandText size={36} as="div" style={{ marginBottom: 14, lineHeight: 1.1 }}>
              Lives inside Claude Code.
            </HandText>
            <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.55, marginBottom: 20 }}>
              One MCP server. Quorum reads on every task, writes on every decision, and intercepts conflicts before they land. Zero context-window babysitting.
            </div>
            <IndigoCallout label="What Quorum does →">
              Agents cite prior decisions automatically. Contradictions become HOLD states, routed to the original authors. Audit trail attaches itself.
            </IndigoCallout>
          </div>
        </div>
      </section>

      {/* ── §03 · Trust — audit trail (right side) ─────────────── */}
      <section style={{ padding: '72px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ maxWidth: 480 }}>
            <MonoEyebrow style={{ marginBottom: 14 }}>03 / 03 — trust &amp; compliance</MonoEyebrow>
            <HandText size={36} as="div" style={{ marginBottom: 14, lineHeight: 1.1 }}>
              One audit trail. Humans and agents on the same spine.
            </HandText>
            <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.55, marginBottom: 20 }}>
              Every write is signed and hash-chained. Replay any conflict resolution. Pin requirements that legal cannot let weaken. Export the chain for SOC 2.
            </div>
            <IndigoCallout label="What Quorum does →">
              Authority weighting, signed audit chains, and pinned requirements give you a defensible record of every AI-assisted decision your team has ever made.
            </IndigoCallout>
          </div>
          <SketchBox h={440} pad={18} double>
            <MonoEyebrow style={{ marginBottom: 10 }}>audit trail · live ↓</MonoEyebrow>
            <MiniAuditTrail />
          </SketchBox>
        </div>
      </section>

      {/* ── CLOSING CTA ────────────────────────────────────────── */}
      <section style={{ padding: '72px 56px 56px', textAlign: 'center', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={42} as="div" style={{ marginBottom: 14, textWrap: 'balance', maxWidth: 780, margin: '0 auto 14px' }}>
          Free. Open source. Self-hosted. Apache 2.0.
        </HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 24, maxWidth: 580, margin: '0 auto 24px', lineHeight: 1.5 }}>
          Run Quorum next to your agents. Bring your own LLM key. No per-seat fees, ever.
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <SketchButton filled size="lg" w={200}>Star on GitHub</SketchButton>
          <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
        </div>
        <MonoEyebrow style={{ marginTop: 22 }}>v0.4 · 218 commits · 31 contributors</MonoEyebrow>
      </section>

      <Footer />
    </div>
  );
}

window.V6Final = V6Final;
