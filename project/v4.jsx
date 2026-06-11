// V4 — Editorial scroll story with an audit-trail timeline as the hero metaphor.
// Vertical spine of events on the right; left side is left-aligned editorial prose.

function TimelineEvent({ icon, when, who, title, detail, kind = 'ok', dim = false }) {
  const color = kind === 'warn' ? '#b34' : kind === 'agent' ? SK.ink2 : SK.ink;
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '80px 24px 1fr', gap: 10, padding: '14px 0', opacity: dim ? 0.55 : 1 }}>
      <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, paddingTop: 4, textAlign: 'right' }}>{when}</div>
      <div style={{ position: 'relative' }}>
        <div style={{ width: 14, height: 14, borderRadius: '50%', background: kind === 'warn' ? '#fff' : (kind === 'agent' ? '#fff' : SK.ink), border: `1.8px solid ${color}`, marginLeft: 5, marginTop: 4 }} />
      </div>
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
          <span className="sk-h" style={{ fontSize: 17, color: SK.ink }}>{title}</span>
          {kind === 'warn' && <span className="sk-scribble" style={{ fontSize: 11, color: '#b34', border: '1.2px solid #b34', padding: '0 6px' }}>conflict</span>}
        </div>
        <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 4 }}>{who}</div>
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.4 }}>{detail}</div>
      </div>
    </div>
  );
}

function AuditTrail() {
  return (
    <div style={{ position: 'relative' }}>
      {/* vertical spine */}
      <div style={{ position: 'absolute', left: 92, top: 22, bottom: 22, width: 0,
        borderLeft: `1.8px dashed ${SK.ink}`, opacity: 0.5 }} />
      <TimelineEvent when="14:02"  who="@avery · senior" title="Decision · Use token bucket"  detail="Rationale: predictable burst, fits Redis." />
      <TimelineEvent when="14:11"  who="@security-bot"   title="Requirement · 10 req/min cap" detail="Compliance: pinned. cannot be weakened." />
      <TimelineEvent when="Tue 9:40" who="@claude-code · agent" title="Decision · Ratelimit on /api/auth" detail="Cited D-117, D-098. Confidence 0.82." kind="agent" />
      <TimelineEvent when="Tue 9:42" who="quorum"        title="Audit · signed"               detail="Hash chain extended. parents verified." />
      <TimelineEvent when="Wed 11:05" who="@claude-code · agent" title="Conflict · sliding window proposal" detail="Contradicts D-204. Held for review." kind="warn" />
      <TimelineEvent when="Wed 11:22" who="@avery"       title="Resolution · stay on bucket"  detail="Reaffirmed. Confidence raised to 0.94." />
      <TimelineEvent when="now"    who="quorum"          title="Authority weights re-balanced" detail="senior &gt; junior &gt; agent. trail intact." kind="agent" dim />
    </div>
  );
}

function V4EditorialTimeline({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <Header />

      {/* HERO — left-aligned editorial w/ timeline on right */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, padding: '64px 56px 56px', position: 'relative', alignItems: 'start' }}>
        <div style={{ paddingTop: 14 }}>
          <div className="sk-mono" style={{ fontSize: 12, color: SK.muted, marginBottom: 20, letterSpacing: 1 }}>QUORUM / v0.4 · APACHE 2.0 · OPEN SOURCE</div>
          <HandText size={60} weight={700} as="div" style={{ lineHeight: 1.03, marginBottom: 24, textWrap: 'balance' }}>
            {headline}
          </HandText>
          <div className="sk" style={{ fontSize: 18, lineHeight: 1.5, marginBottom: 22, color: SK.ink2, maxWidth: 520 }}>
            Quorum is a governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </div>
          {/* inline quote-style proof */}
          <div style={{ borderLeft: `2.5px solid ${SK.ink}`, paddingLeft: 16, marginBottom: 26, maxWidth: 480 }}>
            <div className="sk-scribble" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.45, fontStyle: 'italic' }}>
              "Our AI agents stopped contradicting each other on day three."
            </div>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginTop: 4 }}>— platform team, ENG-AT-SCALE</div>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
            <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
          </div>
          <div className="sk-scribble" style={{ fontSize: 13, color: SK.muted, marginTop: 22 }}>
            Used by engineering teams scaling AI-assisted development
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <SketchBox h={620} pad={20} double>
            <div className="sk-scribble" style={{ fontSize: 12, color: SK.pencil, marginBottom: 10 }}>audit trail · live ↓</div>
            <AuditTrail />
          </SketchBox>
          {showAnnotations && (
            <Annot x={-40} y={140} w={170} rotate={-3}>real audit log — humans + agents on one spine</Annot>
          )}
        </div>
        {showAnnotations && (
          <Annot x={56} y={26} w={170} rotate={-2}>editorial: monospace eyebrow, no tag chip</Annot>
        )}
      </section>

      {/* PAIN POINTS — narrative blocks */}
      <section style={{ padding: '40px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={28} as="div" style={{ marginBottom: 6 }}>What goes wrong, today</HandText>
        <div className="sk" style={{ fontSize: 15, color: SK.ink2, marginBottom: 26, maxWidth: 600 }}>
          The same three failure modes, on every team scaling AI-assisted development.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 36, position: 'relative' }}>
          {[
            { n: 'Ⅰ',  ic: '🧠', h: 'Knowledge leaves with your engineers', d: 'Capture every architectural decision automatically.' },
            { n: 'Ⅱ',  ic: '⚡', h: 'AI agents contradict each other',      d: 'Conflict detection flags contradictions before they persist.' },
            { n: 'Ⅲ',  ic: '📋', h: 'Business requirements get silently removed', d: 'Requirements are first-class governed knowledge.' },
          ].map((p, i) => (
            <div key={i} style={{ position: 'relative', paddingLeft: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 10 }}>
                <HandText size={36} as="div" style={{ color: SK.muted }}>{p.n}</HandText>
                <span style={{ fontSize: 24 }}>{p.ic}</span>
              </div>
              <HandText size={22} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>{p.h}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5 }}>{p.d}</div>
              <Squiggle w={80} opacity={0.4} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES — anatomy diagram */}
      <section style={{ padding: '48px 56px 32px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', background: 'rgba(0,0,0,0.025)' }}>
        <HandText size={28} as="div" style={{ marginBottom: 6 }}>Anatomy of a Quorum record</HandText>
        <div className="sk" style={{ fontSize: 15, color: SK.ink2, marginBottom: 28 }}>Three intertwined primitives, one record format.</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28, position: 'relative' }}>
          {[
            { t: 'Governed Memory',     d: 'Every decision stored with author, rationale, confidence, audit chain.', lines: ['id: D-204', 'author: @claude', 'rationale: cited D-117', 'confidence: 0.82', 'audit: ✓ signed'] },
            { t: 'Conflict Detection',  d: 'Semantic + LLM analysis surfaces contradictions instantly.',             lines: ['embed(text) ≈ embed(rivals)', 'cosine &gt; 0.78 → llm-judge', 'on conflict: HOLD', 'humans resolve', '→ audit-replay'] },
            { t: 'Business Requirements', d: 'Product rules, compliance constraints, feature rationale — all protected.', lines: ['type: REQUIREMENT', 'authority: legal', 'cannot be weakened', 'cited 14 times', 'last touched: 6w'] },
          ].map((f, i) => (
            <div key={i}>
              <div className="sk-mono" style={{ fontSize: 12, color: SK.muted, marginBottom: 6 }}>0{i+1} / 03</div>
              <HandText size={24} as="div" style={{ marginBottom: 8 }}>{f.t}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.45, marginBottom: 14 }}>{f.d}</div>
              <SketchBox h={150} pad={14} hatch>
                <div className="sk-mono" style={{ fontSize: 12, color: SK.ink, lineHeight: 1.65 }}>
                  {f.lines.map((l) => <div key={l}>{l}</div>)}
                </div>
              </SketchBox>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING editorial CTA */}
      <section style={{ padding: '56px 56px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'center' }}>
        <HandText size={36} as="div" style={{ lineHeight: 1.1, textWrap: 'balance' }}>
          Open source. Apache 2.0. No per-seat fees. Ever.
        </HandText>
        <div>
          <div className="sk" style={{ fontSize: 15, color: SK.ink2, marginBottom: 18, lineHeight: 1.55 }}>
            Run Quorum next to your agents. Bring your own LLM. Read every record. Sign your own audit chain.
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <SketchButton filled>Star on GitHub</SketchButton>
            <SketchButton>Read the Docs</SketchButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { V4EditorialTimeline, TimelineEvent });
