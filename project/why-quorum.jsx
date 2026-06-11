// CHILD PAGE · Why Quorum — wireframe.
// Inherits design vocabulary from V6-final (editorial mono-strip, mono
// eyebrows, indigo callout, sketchy snippets). Five problem/solution
// sections with alternating layout. The "What Quorum does →" indigo
// callout from V6 becomes the solution treatment on every problem.

// ── per-page snippet visuals (sketch-style mock IDE/PR/record blocks) ──

function MiniSnippetCard({ chrome, children, h = 280 }) {
  return (
    <SketchBox h={h} pad={0} thick={2}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1.2px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 10, height: 10, border: '1.4px solid #222', borderRadius: '50%' }} />
          ))}
        </div>
        <span className="sk-scribble" style={{ marginLeft: 14, fontSize: 12, color: SK.pencil }}>{chrome}</span>
      </div>
      <div className="sk-mono" style={{ padding: '14px 18px', fontSize: 13, lineHeight: 1.65, whiteSpace: 'pre' }}>
        {children}
      </div>
    </SketchBox>
  );
}

function MonoLine({ p = '', txt, color }) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <span style={{ width: 14, fontWeight: 700, color: p === '⚠' ? '#b34' : p === '↳' ? SK.pencil : SK.ink }}>{p}</span>
      <span style={{ color: color || SK.ink }}>{txt}</span>
    </div>
  );
}

// §01 visual — institutional memory: AI hits historical decisions from departed engineer
function S1MemoryVisual() {
  return (
    <MiniSnippetCard chrome="claude code · quorum.check" h={320}>
      <MonoLine p="$" txt={'claude code --task "add Redis caching to /api/users"'} />
      <div style={{ height: 8 }} />
      <MonoLine p="↳" txt="quorum.check ✓ 2 historical decisions found" color={SK.ink2} />
      <div style={{ paddingLeft: 26 }}>
        <MonoLine txt="D-204 · @rachel · 11mo · sr.eng · left team 4mo ago" color={SK.ink2}/>
        <MonoLine txt={'  "tried Redis here last year — stale-user bugs.'} color={SK.muted}/>
        <MonoLine txt={'   memoize at the edge, not in the DB layer."'} color={SK.muted}/>
        <MonoLine txt="  cited by 7 decisions · reaffirmed 6w ago" color={SK.ink2}/>
        <div style={{ height: 6 }} />
        <MonoLine txt="D-091 · @rachel · 18mo · sr.eng" color={SK.ink2}/>
        <MonoLine txt={'  "user data is hot. cache invalidation is hard."'} color={SK.muted}/>
      </div>
      <div style={{ height: 8 }} />
      <MonoLine p="⏸" txt="claude code paused — cite, override, or rebut." color="#b88a00"/>
    </MiniSnippetCard>
  );
}

// §02 visual — two opposing patterns + conflict ribbon
function S2ContradictionVisual() {
  return (
    <SketchBox h={320} pad={18}>
      <MonoEyebrow style={{ marginBottom: 12 }}>quorum.detect · 2 patterns, 1 contradiction</MonoEyebrow>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
        <SketchBox h={120} pad={12} thick={1.6}>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 4 }}>P-051</div>
          <HandText size={15} as="div" style={{ marginBottom: 6, lineHeight: 1.15 }}>Prefer async/await</HandText>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.5 }}>
            @alex · staff.eng<br/>14w ago · conf 0.91<br/>"easier to read"
          </div>
        </SketchBox>
        <SketchBox h={120} pad={12} thick={1.6}>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 4 }}>P-077</div>
          <HandText size={15} as="div" style={{ marginBottom: 6, lineHeight: 1.15 }}>Prefer .then() chains</HandText>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.5 }}>
            @marco · senior<br/>2w ago · conf 0.88<br/>"easier to compose"
          </div>
        </SketchBox>
      </div>
      <div style={{
        padding: '8px 12px',
        border: '1.4px solid #b34',
        background: 'rgba(179,52,68,0.06)',
        borderRadius: 4,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span className="sk-mono" style={{ fontSize: 12, color: '#b34' }}>⚠ semantic conflict · cosine 0.84 · llm-judge confirmed</span>
        <span className="sk-mono" style={{ fontSize: 10, color: '#b34', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid #b34', padding: '1px 6px', borderRadius: 999 }}>HOLD</span>
      </div>
      <div className="sk-mono" style={{ fontSize: 12, color: SK.ink2, marginTop: 8, lineHeight: 1.55 }}>
        → routed to @alex + @marco · resolution becomes citable
      </div>
    </SketchBox>
  );
}

// §03 visual — onboarding query → 3 cited decisions
function S3OnboardingVisual() {
  return (
    <MiniSnippetCard chrome="quorum.search · onboarding query" h={340}>
      <MonoLine p="?" txt={'@nora · day 3 · "why GraphQL over REST?"'} color={SK.ink}/>
      <div style={{ height: 10 }} />
      {[
        { id: 'D-014', t: 'Adopted for FE/BE contract versioning', meta: '@priya · architect · 2y ago' },
        { id: 'D-088', t: 'Reaffirmed during v2 redesign',          meta: '@kiran · staff.eng · 14mo' },
        { id: 'D-211', t: 'Exemption: /webhooks stays REST',        meta: '@kiran · 6w ago' },
      ].map((r) => (
        <div key={r.id} style={{ borderBottom: '1px dashed rgba(0,0,0,0.15)', padding: '6px 0', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
          <span><span style={{ color: SK.ink, fontWeight: 600 }}>{r.id}</span> <span style={{ color: SK.ink2 }}>{r.t}</span></span>
          <span style={{ color: SK.muted, fontSize: 11 }}>{r.meta}</span>
        </div>
      ))}
      <div style={{ height: 8 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', color: SK.ink2 }}>
        <span>answered in 0.3s</span>
        <span>saved ~3 days of senior eng time</span>
      </div>
    </MiniSnippetCard>
  );
}

// §04 visual — PR review intercept showing a diff that contradicts D-117
function S4DriftVisual() {
  return (
    <SketchBox h={400} pad={0} thick={2}>
      <div style={{ padding: '12px 16px', borderBottom: '1.2px dashed rgba(0,0,0,0.2)', display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span className="sk-mono" style={{ fontSize: 12, color: SK.muted }}>PR #847</span>
        <HandText size={15} style={{ lineHeight: 1.1 }}>refactor auth middleware</HandText>
        <span className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginLeft: 'auto' }}>@jamie · open</span>
      </div>
      <div className="sk-mono" style={{ padding: '10px 16px 4px', fontSize: 12, color: '#b34' }}>
        ⚠ Quorum flagged 1 contradiction · review required
      </div>
      <div style={{ margin: '8px 16px', border: '1.4px solid rgba(0,0,0,0.2)', borderRadius: 3 }}>
        <div className="sk-mono" style={{ padding: '6px 12px', fontSize: 11, color: SK.muted, borderBottom: '1px dashed rgba(0,0,0,0.15)', background: 'rgba(0,0,0,0.03)' }}>
          src/auth/middleware.ts &nbsp;@@ −38,+38 @@
        </div>
        <div className="sk-mono" style={{ fontSize: 12, lineHeight: 1.65, padding: '6px 0' }}>
          <div style={{ padding: '0 12px' }}><span style={{ color: SK.muted, marginRight: 10 }}>40</span>  const token = req.cookies.session;</div>
          <div style={{ padding: '2px 12px', background: 'rgba(179,52,68,0.08)', color: '#b34' }}><span style={{ color: '#b34', marginRight: 10, fontWeight: 700 }}>−41</span> if (token.issuedAt &lt; Date.now() − ROTATION_WINDOW)</div>
          <div style={{ padding: '2px 12px', background: 'rgba(179,52,68,0.08)', color: '#b34' }}><span style={{ color: '#b34', marginRight: 10, fontWeight: 700 }}>−42</span>   return rotate(token); // JWT rotation</div>
          <div style={{ padding: '0 12px' }}><span style={{ color: SK.muted, marginRight: 10 }}>43</span>  return req.next();</div>
        </div>
      </div>
      <div style={{ margin: '4px 16px 14px', padding: '10px 14px', background: 'rgba(91,91,214,0.06)', borderLeft: `2px solid ${SK.accent}`, borderRadius: '0 4px 4px 0' }}>
        <div className="sk-mono" style={{ fontSize: 12, lineHeight: 1.65, color: SK.ink2 }}>
          <div>contradicts <span style={{ color: SK.ink, fontWeight: 600 }}>D-117</span> · @sara · principal · 6mo ago</div>
          <div>“JWT rotation every 90d is mandatory.”</div>
          <div>reaffirmed in 3 PRs since · cited by 11 decisions</div>
          <div style={{ marginTop: 6, paddingTop: 6, borderTop: '1px dashed rgba(0,0,0,0.15)' }}>
            override requires: <span style={{ color: SK.accent, fontWeight: 600 }}>@sara</span> OR 2 principals
          </div>
        </div>
      </div>
    </SketchBox>
  );
}

// §05 visual — pinned business requirement, blocked removal
function S5BusinessVisual() {
  return (
    <SketchBox h={360} pad={20} double thick={2}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span className="sk-mono" style={{ fontSize: 12, color: SK.muted, letterSpacing: '0.06em' }}>R-022</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <span className="sk-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(91,91,214,0.1)', color: SK.accent, border: `1px solid ${SK.accent}`, textTransform: 'uppercase', letterSpacing: '0.08em' }}>business requirement</span>
          <span className="sk-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(0,0,0,0.05)', color: SK.ink2, border: '1px solid rgba(0,0,0,0.25)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>pinned</span>
        </div>
      </div>
      <HandText size={20} as="div" style={{ marginBottom: 14, lineHeight: 1.2 }}>
        Guest checkout must remain enabled across all surfaces.
      </HandText>
      <div className="sk-mono" style={{ fontSize: 12, lineHeight: 1.85, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '4px 16px', color: SK.ink2 }}>
        <span style={{ color: SK.muted }}>owner</span>          <span><span style={{ color: SK.accent, fontWeight: 600 }}>@ml-rodriguez</span> · product</span>
        <span style={{ color: SK.muted }}>authority</span>      <span>product · cannot be weakened by engineering</span>
        <span style={{ color: SK.muted }}>evidence</span>       <span>40% drop-off on signup-walled flow (n=18k, 2022-Q4)</span>
        <span style={{ color: SK.muted }}>cited by</span>       <span>11 features · 4 active experiments</span>
        <span style={{ color: SK.muted }}>last review</span>    <span>4w ago · status maintained</span>
      </div>
      <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px dashed rgba(0,0,0,0.2)' }} className="sk-mono">
        <div style={{ fontSize: 12, color: SK.ink2, marginBottom: 4 }}>
          PR #1204 attempted removal · @dev-quentin · 2h ago
        </div>
        <div style={{ fontSize: 13, color: '#b34', fontWeight: 600 }}>
          ⛔ BLOCKED — routed to <span style={{ color: SK.accent }}>@ml-rodriguez</span>
        </div>
      </div>
    </SketchBox>
  );
}

// ── shared problem section block (alternating) ──
function ProblemSection({ n, title, lede, callout, visual, flip = false, showAnnotations = false }) {
  return (
    <section style={{ padding: '72px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 56, alignItems: 'center' }}>
        <div style={{ order: flip ? 2 : 1, maxWidth: 500, marginLeft: flip ? 'auto' : 0 }}>
          <MonoEyebrow style={{ marginBottom: 14, color: '#b34' }}>
            <span style={{ color: '#b34' }}>PROBLEM</span> · {n} / 05
          </MonoEyebrow>
          <HandText size={32} as="div" style={{ marginBottom: 14, lineHeight: 1.15, display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ color: '#b34', fontSize: 24 }}>⚠</span>
            <span>{title}</span>
          </HandText>
          <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.6, marginBottom: 20 }}>
            {lede}
          </div>
          <IndigoCallout>{callout}</IndigoCallout>
        </div>
        <div style={{ order: flip ? 1 : 2 }}>{visual}</div>
      </div>
      {showAnnotations && n === '01' && (
        <Annot x={56} y={40} w={170} rotate={-3}>each §: ⚠ headline → lede → indigo callout</Annot>
      )}
    </section>
  );
}

// ── PAGE ──
function WhyQuorumPage({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <EditorialStrip>QUORUM / WHY · v0.4 · APACHE 2.0 · OPEN SOURCE</EditorialStrip>
      <Header />

      {/* HERO — narrow, centered (mirrors brief) */}
      <section style={{ padding: '88px 56px 64px', textAlign: 'center', maxWidth: 880, margin: '0 auto', position: 'relative' }}>
        <MonoEyebrow style={{ marginBottom: 18, display: 'inline-block' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 8, verticalAlign: 'middle' }}/>
          why quorum
        </MonoEyebrow>
        <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 20, textWrap: 'balance' }}>
          Five problems AI-assisted teams don't realise they <span style={{ color: SK.accent }}>have</span>.
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 19, color: SK.ink2, fontStyle: 'italic' }}>
          Until they do.
        </div>
        {showAnnotations && (
          <Annot x={720} y={50} w={170} rotate={3}>narrow centered hero · italic subtext</Annot>
        )}
      </section>

      {/* directory strip — V4-style mono navigation between section anchors */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 56px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <MonoEyebrow>the five</MonoEyebrow>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(0,0,0,0.25)' }} />
        <MonoEyebrow>memory · contradiction · onboarding · drift · business</MonoEyebrow>
        <div style={{ flex: 1, height: 1, borderTop: '1px dashed rgba(0,0,0,0.25)' }} />
        <MonoEyebrow>↓</MonoEyebrow>
      </div>

      <ProblemSection n="01" flip={false}
        title="The Institutional Memory Problem"
        lede={<>Your senior engineer leaves. Six months later, your AI assistant confidently proposes a caching strategy that <b style={{color:SK.ink}}>contradicts three years of decisions</b> she made — for reasons nobody on the current team remembers.</>}
        callout={<>Every decision is captured with author, rationale, and a signed audit chain. <b style={{color:SK.ink}}>Departed engineers still get a vote.</b> Their reasoning outlives their tenure.</>}
        visual={<S1MemoryVisual />}
        showAnnotations={showAnnotations} />

      <ProblemSection n="02" flip
        title="The AI Contradiction Problem"
        lede={<>Two engineers, three months apart, stored opposing patterns. Both reasonable. <b style={{color:SK.ink}}>Neither knew about the other.</b> Your AI agent cheerfully synthesises both, and the codebase quietly drifts into incoherence.</>}
        callout={<>Semantic embedding + LLM cross-checking flags contradictions <b style={{color:SK.ink}}>at write time</b>. Conflicts are held until a human resolves them — never silently land in production.</>}
        visual={<S2ContradictionVisual />} />

      <ProblemSection n="03" flip={false}
        title="The Onboarding Cost Problem"
        lede={<>A new hire asks "why was it built like this?" — gets half-answers in Slack, or worse, builds the wrong thing. That's typically <b style={{color:SK.ink}}>2–4 weeks of senior engineer time</b> spent on context transfer that should have been written down years ago.</>}
        callout={<>Every "why" returns a provenance chain — original decision, all reaffirmations, known exemptions, current owner. <b style={{color:SK.ink}}>Onboarding becomes self-serve.</b></>}
        visual={<S3OnboardingVisual />} />

      {/* pull-quote breather */}
      <div style={{ padding: '16px 56px 8px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <PullQuote cite="common in our user interviews">
          A codebase isn't a body of code. It's a body of decisions, of which the code is the most recent expression.
        </PullQuote>
      </div>

      <ProblemSection n="04" flip
        title="The Decision Drift Problem"
        lede={<>Your principal's hard-won decision is functionally gone six months later — eroded one tiny change at a time across 12 PRs by people who didn't know it existed. <b style={{color:SK.ink}}>Code review doesn't catch it.</b></>}
        callout={<>Every PR gets a Quorum pass. Contradictions show on the diff with the author and rationale cited. Override is allowed — but requires the original author or <b style={{color:SK.ink}}>two principals</b>, and is itself auditable.</>}
        visual={<S4DriftVisual />} />

      <ProblemSection n="05" flip={false}
        title="The Buried Business Requirement Problem"
        lede={<>Your PM fought for guest checkout three years ago, backed by 40% abandonment data. Last month, a dev "cleaned up" what they thought was dead code. Conversion dropped 8% before anyone connected the dots. <b style={{color:SK.ink}}>This is a business knowledge failure</b>, not an engineering one.</>}
        callout={<>Business requirements are <b style={{color:SK.ink}}>first-class governed records</b>. PMs, compliance, and legal own pinned requirements that engineering changes cannot silently weaken.</>}
        visual={<S5BusinessVisual />} />

      {/* BOTTOM CTA */}
      <section style={{ padding: '72px 56px 56px', textAlign: 'center', borderTop: '1.5px dashed rgba(0,0,0,0.2)', position: 'relative' }}>
        <HandText size={48} as="div" style={{ marginBottom: 14, textWrap: 'balance' }}>Sound familiar?</HandText>
        <div className="sk" style={{ fontSize: 16, color: SK.ink2, marginBottom: 26, maxWidth: 540, margin: '0 auto 26px', lineHeight: 1.5 }}>
          Quorum is open source, Apache 2.0, self-hosted. Star the repo, install the MCP server, and your agents stop forgetting.
        </div>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <SketchButton filled size="lg" w={200}>Get Started Free →</SketchButton>
          <SketchButton size="lg" w={170}>View on GitHub</SketchButton>
        </div>
        <MonoEyebrow style={{ marginTop: 22 }}>v0.4 · 218 commits · 31 contributors</MonoEyebrow>
      </section>

      <Footer />
    </div>
  );
}

window.WhyQuorumPage = WhyQuorumPage;
