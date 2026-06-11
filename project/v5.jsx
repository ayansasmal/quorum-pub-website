// V5 — "Combo": one anchor metaphor in the hero, then each of the other
// three metaphors gets its OWN full-width scroll-stop section.
//
// Order is intentional: graph (mental model) → cards (data) → terminal
// (dev exp) → audit trail (trust). Each section pairs left-side prose w/
// the metaphor on the right (or full-bleed), so the page reads as four
// "answers" to four different buyer questions.

// ── small inline metaphors, sized down from the other variations ───────────
function HeroGraphMini({ w = 560, h = 380 }) {
  const nodes = [
    { x: 110, y: 70,  r: 26, label: 'Decision',    kind: 'D' },
    { x: 280, y: 50,  r: 22, label: 'Pattern',     kind: 'P' },
    { x: 430, y: 130, r: 30, label: 'Requirement', kind: 'R' },
    { x: 90,  y: 220, r: 22, label: 'Pattern',     kind: 'P' },
    { x: 240, y: 220, r: 36, label: 'Decision',    kind: 'D' },
    { x: 400, y: 280, r: 24, label: 'Requirement', kind: 'R' },
    { x: 160, y: 330, r: 20, label: 'Pattern',     kind: 'P' },
    { x: 330, y: 350, r: 26, label: 'Decision',    kind: 'D' },
  ];
  const edges = [[0,1],[0,4],[1,2],[2,4],[3,4],[4,5],[4,7],[3,6],[6,7],[5,7],[1,4]];
  const fillFor = (k) => k === 'D' ? SK.ink : k === 'R' ? '#fff' : 'rgba(0,0,0,0.15)';
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      <g filter="url(#sk-wobble)">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
            stroke={SK.ink} strokeWidth="1.4" opacity="0.55" strokeDasharray={i % 3 === 0 ? '5 3' : ''} />
        ))}
      </g>
      {nodes.map((n, i) => (
        <g key={i}>
          <g filter="url(#sk-wobble)">
            <circle cx={n.x} cy={n.y} r={n.r} fill={fillFor(n.kind)} stroke={SK.ink} strokeWidth="1.8"/>
          </g>
          <text x={n.x} y={n.y + n.r + 14} textAnchor="middle"
            className="sk-h" style={{ fontSize: 13, fill: SK.ink2 }}>{n.label}</text>
          <text x={n.x} y={n.y + 4} textAnchor="middle"
            className="sk-h" style={{ fontSize: 15, fontWeight: 700, fill: n.kind === 'D' ? '#fff' : SK.ink }}>{n.kind}</text>
        </g>
      ))}
    </svg>
  );
}

// inline mini-stack — re-uses DecisionCard from v3.jsx (defined globally there)
function MiniCardStack({ w = 580, h = 320 }) {
  return (
    <div style={{ position: 'relative', width: w, height: h }}>
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.4" fill="none" opacity="0.45">
          <path d="M180 130 C 280 170, 360 180, 420 200" />
          <path d="M310 80 C 380 100, 440 110, 500 110" strokeDasharray="5 4"/>
          <path d="M160 230 C 240 240, 300 245, 360 240" />
        </g>
      </svg>
      <DecisionCard id="D-117" title="Use token bucket for rate limiting"
        meta="auth · supersedes D-082" author="@avery" conf="0.94" rot={-4} x={10} y={20} w={240} h={140}/>
      <DecisionCard id="D-204" title="Ratelimit on /api/auth"
        meta="parents: D-117, D-098" author="@claude-code" conf="0.82" rot={3} x={260} y={50} w={240} h={140} dark/>
      <DecisionCard id="D-205" title="Switch to sliding window"
        meta="contradicts D-204" author="@claude-code" conf="0.61" rot={-2} x={70} y={170} w={240} h={130} flagged/>
      <DecisionCard id="D-191" title="Token rotation every 90d"
        meta="compliance · requirement" author="@dana" conf="0.97" rot={4} x={320} y={170} w={240} h={130}/>
    </div>
  );
}

function MiniTerminal({ h = 320 }) {
  const lines = [
    ['$', 'claude code  --task "rate limit /api/auth"'],
    ['↳', 'quorum:check  → 2 prior decisions found'],
    ['', '   · D-117  token bucket  (auth team)'],
    ['', '   · D-098  10 req/min cap (security)'],
    ['↳', 'quorum:write D-204 — cited above. conf 0.82'],
    ['', ''],
    ['⚠', 'quorum:conflict on follow-up proposal'],
    ['', '   D-205 "sliding window"  ←→  D-204'],
    ['', '   HOLD: needs human review'],
  ];
  return (
    <SketchBox h={h} pad={0} thick={2}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1.2px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{ width: 10, height: 10, border: '1.4px solid #222', borderRadius: '50%' }}/>
          ))}
        </div>
        <span className="sk-scribble" style={{ marginLeft: 14, fontSize: 12, color: SK.pencil }}>~/quorum · claude code</span>
      </div>
      <div className="sk-mono" style={{ padding: '14px 18px', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre' }}>
        {lines.map(([p, txt], i) => (
          <div key={i} style={{ display: 'flex', gap: 10 }}>
            <span style={{ width: 14, fontWeight: 700, color: p === '⚠' ? '#b34' : p === '↳' ? SK.pencil : SK.ink }}>{p}</span>
            <span style={{ color: p === '⚠' ? '#b34' : txt.startsWith('   ·') || txt.startsWith('   D-205') || txt.startsWith('   HOLD') ? SK.ink2 : SK.ink }}>{txt}</span>
          </div>
        ))}
      </div>
    </SketchBox>
  );
}

function MiniAuditTrail() {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', left: 92, top: 22, bottom: 22, width: 0,
        borderLeft: `1.8px dashed ${SK.ink}`, opacity: 0.5 }} />
      <TimelineEvent when="14:02"   who="@avery · senior"      title="Decision · token bucket"     detail="Rationale: predictable burst." />
      <TimelineEvent when="Tue 9:40" who="@claude-code · agent" title="Decision · ratelimit /auth"  detail="Cited D-117, D-098." kind="agent" />
      <TimelineEvent when="Wed 11:05" who="@claude-code · agent" title="Conflict · sliding window" detail="Contradicts D-204. Held." kind="warn" />
      <TimelineEvent when="Wed 11:22" who="@avery"              title="Resolution · stay on bucket" detail="Confidence raised to 0.94." />
      <TimelineEvent when="now"     who="quorum"                title="Audit signed · chain intact" detail="senior > junior > agent" kind="agent" dim />
    </div>
  );
}

// Reusable "anchor" section wrapper: numbered eyebrow, headline, prose, visual.
function MetaphorSection({ num, eyebrow, title, body, side = 'R', bg = false, children, anchor, showAnnotations }) {
  return (
    <section style={{
      padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)',
      background: bg ? 'rgba(0,0,0,0.025)' : 'transparent', position: 'relative',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'center', flexDirection: side === 'L' ? 'row-reverse' : 'row', direction: side === 'L' ? 'rtl' : 'ltr' }}>
        <div style={{ direction: 'ltr' }}>
          <div className="sk-mono" style={{ fontSize: 12, color: SK.muted, marginBottom: 12, letterSpacing: 1 }}>
            {num} / 04 — {eyebrow}
          </div>
          <HandText size={42} as="div" style={{ marginBottom: 16, lineHeight: 1.05, textWrap: 'balance' }}>{title}</HandText>
          <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.5, marginBottom: 20, maxWidth: 460 }}>{body}</div>
          <span className="sk-tag" style={{ fontSize: 12 }}>{anchor}</span>
        </div>
        <div style={{ direction: 'ltr', position: 'relative' }}>{children}</div>
      </div>
      {showAnnotations && (
        <Annot x={20} y={20} w={170} rotate={-3}>own scroll-stop — full attention on this idea</Annot>
      )}
    </section>
  );
}

function V5Combo({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <Header />

      {/* HERO — graph is the mental-model anchor */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, padding: '64px 56px 56px', alignItems: 'center', position: 'relative' }}>
        <div>
          <div className="sk-tag" style={{ marginBottom: 22 }}>Open Source · Claude Code · MCP</div>
          <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.05, marginBottom: 22, textWrap: 'balance' }}>{headline}</HandText>
          <div className="sk" style={{ fontSize: 18, lineHeight: 1.45, marginBottom: 26, color: SK.ink2, maxWidth: 480 }}>
            Quorum is a governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </div>
          <div style={{ display: 'flex', gap: 14, marginBottom: 14 }}>
            <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
            <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
          </div>
          <div className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>
            Used by engineering teams scaling AI-assisted development
          </div>
        </div>
        <SketchBox h={420} pad={20} double>
          <HeroGraphMini />
        </SketchBox>
        {showAnnotations && (
          <Annot x={66} y={20} w={170} rotate={-2}>hero = graph (the mental model)</Annot>
        )}
      </section>

      {/* PAIN STRIP — same 3 columns, kept here so the four big sections below
          can each be a single idea instead of multiplexed pains. */}
      <section style={{ padding: '24px 56px 48px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 28 }}>
          {[
            { ic: '🧠', h: 'Knowledge leaves with your engineers', d: 'Capture every architectural decision automatically.' },
            { ic: '⚡', h: 'AI agents contradict each other',      d: 'Conflict detection flags contradictions before they persist.' },
            { ic: '📋', h: 'Requirements get silently removed',    d: 'Requirements are first-class governed knowledge.' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 26, lineHeight: 1 }}>{p.ic}</div>
              <div>
                <HandText size={18} as="div" style={{ marginBottom: 4, lineHeight: 1.15 }}>{p.h}</HandText>
                <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.4 }}>{p.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 01 — Knowledge graph deep-dive (already used in hero, so frame
          this one around the *structure* — relations between records).
          Skipped as a separate section to avoid redundancy; the hero
          IS the graph section. We jump straight to 02. */}

      {/* 02 — Decision cards (the data) */}
      <MetaphorSection
        num="01"
        eyebrow="The data model"
        title="Every decision is a governed record"
        body="Each decision carries an author, rationale, confidence, parents, and a signed audit chain. Authority-weighted — senior > junior > agent — so trust degrades gracefully."
        anchor="Governed Memory →"
        side="R"
        showAnnotations={showAnnotations}>
        <SketchBox h={360} pad={16}><MiniCardStack /></SketchBox>
      </MetaphorSection>

      {/* 03 — Terminal (the dev experience) */}
      <MetaphorSection
        num="02"
        eyebrow="In your editor"
        title="Lives inside Claude Code"
        body="Quorum reads on every task, writes on every decision, and intercepts conflicts before they land. One MCP server. Zero context-window babysitting."
        anchor="Conflict Detection →"
        side="L"
        bg
        showAnnotations={false}>
        <MiniTerminal h={360} />
      </MetaphorSection>

      {/* 04 — Audit trail (the trust story) */}
      <MetaphorSection
        num="03"
        eyebrow="Trust & compliance"
        title="One audit trail. Humans and agents on the same spine."
        body="Every write is signed and hash-chained. Replay any conflict resolution. Pin requirements that legal cannot let weaken. Export the chain for SOC 2."
        anchor="Business Requirements →"
        side="R"
        showAnnotations={false}>
        <SketchBox h={420} pad={18} double>
          <div className="sk-scribble" style={{ fontSize: 12, color: SK.pencil, marginBottom: 8 }}>audit trail · live ↓</div>
          <MiniAuditTrail />
        </SketchBox>
      </MetaphorSection>

      {/* CLOSING CTA */}
      <section style={{ padding: '64px 56px', textAlign: 'center', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={40} as="div" style={{ marginBottom: 14, textWrap: 'balance', maxWidth: 760, margin: '0 auto 14px' }}>
          Free. Open source. Self-hosted. Apache 2.0.
        </HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 24, maxWidth: 580, margin: '0 auto 24px' }}>
          Run Quorum next to your agents. Bring your own LLM key. No per-seat fees.
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <SketchButton filled size="lg" w={200}>Star on GitHub</SketchButton>
          <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { V5Combo, HeroGraphMini, MiniCardStack, MiniTerminal, MiniAuditTrail, MetaphorSection });
