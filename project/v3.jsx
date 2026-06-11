// V3 — Full-bleed hero with a decision-card-stack metaphor.
// The "decisions" are stacked index-cards drifting at angles across the hero.

function DecisionCard({ id, title, meta, author, conf, rot = 0, x = 0, y = 0, w = 260, h = 150, flagged = false, dark = false }) {
  return (
    <div style={{
      position: 'absolute', left: x, top: y, width: w, height: h,
      transform: `rotate(${rot}deg)`, transformOrigin: 'top left',
    }}>
      <SketchBox w={w} h={h} pad={14} thick={1.8}
        fill={dark ? SK.ink : '#fff'}
        stroke={SK.ink}
        style={{ background: dark ? SK.ink : '#fff' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span className="sk-mono" style={{ fontSize: 11, color: dark ? '#ddd' : SK.muted }}>{id}</span>
          {flagged && <span className="sk-scribble" style={{ fontSize: 11, color: '#b34', border: '1.2px solid #b34', padding: '1px 6px' }}>⚠ conflict</span>}
        </div>
        <HandText size={18} as="div" style={{ marginBottom: 8, color: dark ? '#fff' : SK.ink, lineHeight: 1.1 }}>{title}</HandText>
        <div className="sk" style={{ fontSize: 12, color: dark ? '#bbb' : SK.ink2, lineHeight: 1.35 }}>{meta}</div>
        <div style={{ position: 'absolute', bottom: 10, left: 14, right: 14, display: 'flex', justifyContent: 'space-between', fontSize: 11 }} className="sk-mono">
          <span style={{ color: dark ? '#aaa' : SK.muted }}>{author}</span>
          <span style={{ color: dark ? '#aaa' : SK.muted }}>conf {conf}</span>
        </div>
      </SketchBox>
    </div>
  );
}

function CardStackMetaphor({ w = 1100, h = 380 }) {
  return (
    <div style={{ position: 'relative', width: w, height: h }}>
      {/* connector edges drawn behind cards */}
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <g filter="url(#sk-wobble)" stroke={SK.ink} strokeWidth="1.4" fill="none" opacity="0.45">
          <path d="M180 130 C 280 180, 360 200, 420 220" />
          <path d="M420 220 C 520 240, 600 250, 660 240" strokeDasharray="5 4"/>
          <path d="M660 240 C 760 230, 820 210, 880 195" />
          <path d="M340 80 C 460 110, 600 130, 720 130" />
        </g>
      </svg>
      <DecisionCard id="D-117" title="Use token bucket for rate limiting"  meta="auth team · supersedes D-082"   author="@avery"     conf="0.94" rot={-4}  x={20}   y={20}  />
      <DecisionCard id="D-098" title="10 req/min default cap"               meta="security review · 6 wks ago"   author="@security-bot" conf="0.88" rot={3}   x={300}  y={70}  />
      <DecisionCard id="D-204" title="Ratelimit on /api/auth"               meta="parents: D-117, D-098"         author="@claude-code"  conf="0.82" rot={-2}  x={580}  y={50}  dark/>
      <DecisionCard id="D-205" title="Switch to sliding window"             meta="contradicts D-204"             author="@claude-code"  conf="0.61" rot={5}   x={840}  y={140} flagged/>
      <DecisionCard id="D-191" title="Token rotation every 90d"             meta="compliance · requirement"      author="@dana"     conf="0.97" rot={-3}  x={120}  y={210} />
      <DecisionCard id="D-176" title="Audit log retention: 18mo"            meta="legal · requirement"           author="@dana"     conf="0.97" rot={4}   x={460}  y={230} />
    </div>
  );
}

function V3FullBleedStack({ headline, showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <Header />

      {/* HERO — full bleed, hatched paper background */}
      <section style={{ position: 'relative', padding: '60px 56px 0', background: 'rgba(0,0,0,0.025)', borderBottom: '1.5px dashed rgba(0,0,0,0.25)' }}>
        <div className="sk-dots-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1000 }}>
          <div className="sk-tag" style={{ marginBottom: 22, background: SK.paper }}>Open Source · Claude Code · MCP</div>
          <HandText size={72} weight={700} as="div" style={{ lineHeight: 1.02, marginBottom: 22, textWrap: 'balance', maxWidth: 900 }}>
            {headline}
          </HandText>
          <div className="sk" style={{ fontSize: 19, lineHeight: 1.45, marginBottom: 28, color: SK.ink2, maxWidth: 700 }}>
            Quorum is a governed memory layer for Claude Code and AI agents — stores engineering decisions, business requirements, and team knowledge with conflict detection, authority weighting, and a full audit trail.
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 16 }}>
            <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
            <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
          </div>
          <div className="sk-scribble" style={{ fontSize: 13, color: SK.muted, marginBottom: 24 }}>
            Used by engineering teams scaling AI-assisted development
          </div>
        </div>
        {/* the stack lives in the lower half of the hero, full-bleed */}
        <div style={{ position: 'relative', height: 400, marginLeft: -56, marginRight: -56 }}>
          <CardStackMetaphor w={1300} h={400} />
        </div>
        {showAnnotations && (
          <Annot x={680} y={520} w={170} rotate={-6}>cards drift in slowly; conflicts wobble</Annot>
        )}
        {showAnnotations && (
          <Annot x={760} y={130} w={180} rotate={3}>full-bleed hero — content overflows page edges</Annot>
        )}
      </section>

      {/* PAIN POINTS — single row, numbered */}
      <section style={{ padding: '56px 56px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr 1fr 1fr', gap: 28, alignItems: 'start' }}>
          <HandText size={28} as="div" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', alignSelf: 'stretch' }}>
            why teams switch ↑
          </HandText>
          {[
            { n: '01', ic: '🧠', h: 'Knowledge leaves with your engineers', d: 'Capture every architectural decision automatically.' },
            { n: '02', ic: '⚡', h: 'AI agents contradict each other',      d: 'Conflict detection flags contradictions before they persist.' },
            { n: '03', ic: '📋', h: 'Business requirements get silently removed', d: 'Requirements are first-class governed knowledge.' },
          ].map((p, i) => (
            <div key={i} style={{ paddingRight: 12 }}>
              <div className="sk-mono" style={{ fontSize: 14, color: SK.muted, marginBottom: 8 }}>{p.n} / 03</div>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{p.ic}</div>
              <HandText size={22} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>{p.h}</HandText>
              <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.45 }}>{p.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES — spec sheet 2x2 */}
      <section style={{ padding: '48px 56px 24px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24 }}>
          <HandText size={28} as="div">Spec sheet</HandText>
          <span className="sk-scribble" style={{ fontSize: 13, color: SK.muted }}>each row → its own deep-dive doc</span>
        </div>
        <div style={{ border: `1.8px solid ${SK.ink}`, borderRadius: 2, overflow: 'hidden' }}>
          {[
            { t: 'Governed Memory',       d: 'Every decision stored with author, rationale, confidence, audit chain.',  k: 'memory · audit · chain' },
            { t: 'Conflict Detection',    d: 'Semantic + LLM analysis surfaces contradictions instantly.',              k: 'embed · llm-judge · diff' },
            { t: 'Business Requirements', d: 'Product rules, compliance constraints, feature rationale — all protected.', k: 'rules · compliance' },
            { t: 'Authority Weighting',   d: 'Trust scores per author. Senior engineers > junior > agents.',             k: 'rbac · weights' },
          ].map((f, i, arr) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '220px 1fr 200px', padding: '18px 22px', gap: 22, borderBottom: i < arr.length - 1 ? '1.4px dashed rgba(0,0,0,0.25)' : 'none', alignItems: 'center' }}>
              <HandText size={22} as="div">{f.t}</HandText>
              <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.4 }}>{f.d}</div>
              <div className="sk-mono" style={{ fontSize: 12, color: SK.muted }}>{f.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '56px 56px', textAlign: 'center', position: 'relative' }}>
        <HandText size={40} as="div" style={{ marginBottom: 14, textWrap: 'balance', maxWidth: 800, margin: '0 auto 14px' }}>
          One audit trail across every agent on your team.
        </HandText>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 18 }}>
          <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
          <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
        </div>
      </section>

      <Footer />
    </div>
  );
}

Object.assign(window, { V3FullBleedStack, DecisionCard });
