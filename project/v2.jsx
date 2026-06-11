// V2 — Centered hero with a terminal-log metaphor below it.
// The terminal shows Claude Code interacting with Quorum: write decision,
// detect conflict, audit query.

function TerminalLog({ h = 360 }) {
  // Lines render as a sketched terminal — wobbly frame, monospace text.
  const lines = [
    ['$', 'claude code'],
    ['', '> implement rate limiting for /api/auth'],
    ['↳', 'quorum:check  → 2 prior decisions found'],
    ['', '   · D-117  use token bucket (auth team, 2 wks ago)'],
    ['', '   · D-098  10 req/min default cap (security, 6 wks ago)'],
    ['↳', 'quorum:write  → D-204  ratelimit on /api/auth'],
    ['', '   author: claude-code     confidence: 0.82'],
    ['', '   parents: D-117, D-098   audit: ✓ signed'],
    ['', ''],
    ['$', 'claude code  --task "switch to sliding window"'],
    ['⚠', 'quorum:conflict  detected'],
    ['', '   D-204 says "token bucket"  ←→  current task'],
    ['', '   needs human review before persist'],
    ['', ''],
    ['$', 'quorum audit --who claude-code --since 7d'],
    ['', '   28 decisions · 3 conflicts resolved · 0 silent drops'],
  ];
  return (
    <SketchBox h={h} pad={0} thick={2}>
      {/* terminal chrome */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px 14px', borderBottom: '1.2px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#e76', '#ec7', '#7c8'].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, border: '1.4px solid #222', borderRadius: '50%', background: 'transparent' }}/>
          ))}
        </div>
        <span className="sk-scribble" style={{ marginLeft: 14, fontSize: 12, color: SK.pencil }}>~/quorum · claude code session</span>
      </div>
      <div className="sk-mono" style={{ padding: '14px 18px', fontSize: 13, lineHeight: 1.55, color: SK.ink, whiteSpace: 'pre' }}>
        {lines.map(([prompt, text], i) => (
          <div key={i} style={{ display: 'flex', gap: 10 }}>
            <span style={{ width: 14, color: prompt === '⚠' ? '#b34' : prompt === '↳' ? SK.pencil : SK.ink, fontWeight: 700 }}>{prompt}</span>
            <span style={{ color: prompt === '⚠' ? '#b34' : text.startsWith('   ·') || text.startsWith('   author') || text.startsWith('   parents') || text.startsWith('   D-204') || text.startsWith('   needs') || text.startsWith('   28') ? SK.ink2 : SK.ink }}>{text}</span>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
          <span style={{ width: 14, fontWeight: 700 }}>$</span>
          <span style={{ display: 'inline-block', width: 8, height: 16, background: SK.ink, verticalAlign: 'middle' }} />
        </div>
      </div>
    </SketchBox>
  );
}

function V2CenteredTerminal({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <Header />

      {/* HERO — centered */}
      <section style={{ padding: '72px 56px 24px', textAlign: 'center', position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
        <div className="sk-tag" style={{ marginBottom: 24 }}>Open Source · Claude Code · MCP</div>
        <HandText size={64} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 22, textWrap: 'balance', maxWidth: 940, margin: '0 auto 22px' }}>
          {headline}
        </HandText>
        <div className="sk" style={{ fontSize: 19, lineHeight: 1.45, marginBottom: 30, color: SK.ink2, maxWidth: 760, margin: '0 auto 30px' }}>
          Quorum is a governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginBottom: 16 }}>
          <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
          <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
        </div>
        <div className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>
          Used by engineering teams scaling AI-assisted development
        </div>
        {showAnnotations && (
          <Annot x={780} y={30} w={170} rotate={4}>centered hero — clean stack, no graph yet</Annot>
        )}
      </section>

      {/* TERMINAL — wide, sits under the hero */}
      <section style={{ padding: '32px 56px 56px', maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <TerminalLog h={420} />
        {showAnnotations && (
          <Annot x={-30} y={120} w={170} rotate={-5}>real session — write · conflict · audit</Annot>
        )}
      </section>

      {/* PAIN POINTS — interleaved rows w/ alternating side icons */}
      <section style={{ padding: '36px 56px 24px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <HandText size={28} as="div" style={{ marginBottom: 28, textAlign: 'center' }}>
          Three things that break AI-assisted teams
        </HandText>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1000, margin: '0 auto' }}>
          {[
            { ic: '🧠', h: 'Knowledge leaves with your engineers', d: 'Capture every architectural decision automatically.', side: 'L' },
            { ic: '⚡', h: 'AI agents contradict each other',      d: 'Conflict detection flags contradictions before they persist.', side: 'R' },
            { ic: '📋', h: 'Business requirements get silently removed', d: 'Requirements are first-class governed knowledge.', side: 'L' },
          ].map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'center', flexDirection: p.side === 'L' ? 'row' : 'row-reverse' }}>
              <SketchBox w={84} h={84} pad={0}>
                <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36 }}>{p.ic}</div>
              </SketchBox>
              <div style={{ flex: 1 }}>
                <HandText size={24} as="div" style={{ marginBottom: 4 }}>{p.h}</HandText>
                <div className="sk" style={{ fontSize: 15, color: SK.ink2 }}>{p.d}</div>
              </div>
              <Squiggle w={120} />
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES — 3 cards */}
      <section style={{ padding: '48px 56px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 26, maxWidth: 1100, margin: '0 auto 26px' }}>
          <HandText size={28} as="div">What's inside the box</HandText>
          <span className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>v0.4 · 218 commits · MIT contributors: 31</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22, maxWidth: 1100, margin: '0 auto' }}>
          {[
            { t: 'Governed Memory',     d: 'Every decision stored with author, rationale, confidence, audit chain.' },
            { t: 'Conflict Detection',  d: 'Semantic + LLM analysis surfaces contradictions instantly.' },
            { t: 'Business Requirements', d: 'Product rules, compliance constraints, feature rationale — all protected.' },
          ].map((f, i) => (
            <SketchBox key={i} h={240} pad={20} double={i === 1}>
              <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 6 }}>0{i+1} —</div>
              <HandText size={24} as="div" style={{ marginBottom: 10 }}>{f.t}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.4, marginBottom: 16 }}>{f.d}</div>
              <ImageBox h={80} label="schematic" />
            </SketchBox>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.V2CenteredTerminal = V2CenteredTerminal;
