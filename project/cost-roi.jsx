// CHILD PAGE · Cost & ROI — wireframe (rev 2, honest tone).
// Inherits V6 vocabulary. No invented statistics. No fake quotes.
// Five sections: reflective questions, projected compounding curve
// (explicitly labeled as Quorum's own projection), illustrative
// scenario (explicitly labeled), honest pricing, "still evaluating" footer.

// ── §01 — Reflection card (question, not assertion) ─────────
function QuestionCard({ n, question, sub, h = 240 }) {
  return (
    <SketchBox h={h} pad={26} thick={1.8}>
      <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.08em', marginBottom: 14 }}>
        QUESTION · 0{n} / 04
      </div>
      <HandText size={22} as="div" style={{ marginBottom: 14, lineHeight: 1.2, textWrap: 'balance' }}>
        {question}
      </HandText>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55, fontStyle: 'italic' }}>
        {sub}
      </div>
    </SketchBox>
  );
}

// ── §02 — Honest compounding chart (5 milestones, labeled as projection) ──
function CompoundingChart({ w = 1080, h = 380 }) {
  const xs = [60, 280, 500, 720, 940];
  const labels = ['Week 1', 'Month 1', 'Month 3', 'Month 6', 'Year 1'];
  // y-coords (lower = higher knowledge depth). Flat baseline vs compounding curve.
  const yBaseline = [220, 218, 222, 224, 226];
  const yWith     = [220, 178, 124,  74,  38];

  const milestones = [
    '10 nodes — Claude needs lots of hand-holding',
    '100 nodes — rarely asks obvious questions',
    '500 nodes — pre-loads context automatically',
    '2000 nodes — agents deliver features semi-autonomously',
    '5000+ nodes — agents are team members',
  ];

  const pathFor = (ys) => {
    let d = `M ${xs[0]} ${ys[0]}`;
    for (let i = 1; i < xs.length; i++) {
      const cx1 = xs[i - 1] + (xs[i] - xs[i - 1]) * 0.5;
      const cx2 = xs[i] - (xs[i] - xs[i - 1]) * 0.5;
      d += ` C ${cx1} ${ys[i - 1]}, ${cx2} ${ys[i]}, ${xs[i]} ${ys[i]}`;
    }
    return d;
  };

  // Alternate callout side per milestone so labels don't overlap each other.
  const calloutY = [
    yWith[0] - 30,
    yWith[1] - 50,
    yWith[2] + 36,
    yWith[3] - 32,
    yWith[4] - 50,
  ];

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ display: 'block' }}>
      <g className="sk-mono" style={{ fontSize: 11, fill: SK.muted }}>
        <text x="6" y="50"  textAnchor="start">knowledge</text>
        <text x="6" y="64"  textAnchor="start">depth</text>
        <text x="6" y="78"  textAnchor="start">↑</text>
        <text x="6" y="240" textAnchor="start">baseline</text>
      </g>

      {/* faint gridlines */}
      <g stroke={SK.muted} strokeDasharray="3 4" opacity="0.3">
        <line x1="60" y1="60"  x2={w - 20} y2="60" />
        <line x1="60" y1="140" x2={w - 20} y2="140" />
        <line x1="60" y1="220" x2={w - 20} y2="220" />
      </g>

      {/* X-axis */}
      <line x1="60" y1="262" x2={w - 20} y2="262" stroke={SK.ink} strokeWidth="1.4" />
      {xs.map((x, i) => (
        <g key={i}>
          <line x1={x} y1="260" x2={x} y2="268" stroke={SK.ink} strokeWidth="1.2" />
          <text x={x} y="284" textAnchor="middle" className="sk-mono" style={{ fontSize: 11, fill: SK.ink2 }}>{labels[i]}</text>
        </g>
      ))}

      {/* Without-Quorum line (dashed, dim) */}
      <g filter="url(#sk-wobble)">
        <path d={pathFor(yBaseline)} stroke={SK.muted} strokeWidth="2" fill="none" strokeDasharray="6 5" />
      </g>
      <text x={xs[xs.length - 1] + 8} y={yBaseline[yBaseline.length - 1] + 4} className="sk-h" style={{ fontSize: 13, fill: SK.muted }}>without</text>

      {/* With-Quorum line (indigo) */}
      <g filter="url(#sk-wobble)">
        <path d={pathFor(yWith)} stroke={SK.accent} strokeWidth="2.6" fill="none" />
      </g>
      <text x={xs[xs.length - 1] + 8} y={yWith[yWith.length - 1] + 4} className="sk-h" style={{ fontSize: 14, fontWeight: 700, fill: SK.accent }}>with Quorum</text>

      {/* milestone dots + connector + label for every point */}
      {milestones.map((m, i) => (
        <g key={i}>
          <circle cx={xs[i]} cy={yWith[i]} r="5.5" fill={SK.accent} stroke={SK.ink} strokeWidth="1.4" />
          <line x1={xs[i]} y1={yWith[i]} x2={xs[i]} y2={calloutY[i]} stroke={SK.ink} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
          <text x={xs[i]} y={calloutY[i] - (calloutY[i] > yWith[i] ? -16 : 2)}
            textAnchor={i === 0 ? 'start' : i === xs.length - 1 ? 'end' : 'middle'}
            className="sk-scribble" style={{ fontSize: 11.5, fill: SK.ink }}>
            {m}
          </text>
        </g>
      ))}

      {/* legend (bottom) */}
      <g transform="translate(60, 320)">
        <line x1="0" y1="6" x2="22" y2="6" stroke={SK.muted} strokeWidth="2" strokeDasharray="6 5" />
        <text x="28" y="10" className="sk-mono" style={{ fontSize: 11, fill: SK.muted }}>without — same questions, same re-litigation every quarter</text>
        <line x1="460" y1="6" x2="482" y2="6" stroke={SK.accent} strokeWidth="2.6" />
        <text x="488" y="10" className="sk-mono" style={{ fontSize: 11, fill: SK.accent, fontWeight: 700 }}>with — knowledge accumulates, agents improve</text>
      </g>
    </svg>
  );
}

// ── §03 — Illustrative scenario cards ────────────────────────
function ScenarioWithout() {
  return (
    <SketchBox h={400} pad={24} thick={1.8} style={{ background: 'rgba(179,52,68,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 20, color: '#b34' }}>⚠</span>
        <span className="sk-mono" style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b34', border: '1.4px solid #b34', background: 'rgba(179,52,68,0.08)', fontWeight: 700 }}>WITHOUT QUORUM</span>
      </div>
      <HandText size={22} as="div" style={{ marginBottom: 14, lineHeight: 1.2 }}>
        A dev "cleans up" what looks like dead code.
      </HandText>
      <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.6, marginBottom: 16 }}>
        The product requirement — that guest checkout is mandatory because 40% of users abandon when forced to register — was captured three years ago in a Jira ticket. That ticket has been archived. The rationale lives in <b style={{ color: SK.ink }}>nobody's working memory</b>.
      </div>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55 }}>
        Code review sees a tidy refactor. The PR merges. The regression ships. By the time someone connects the dots, you're <b style={{ color: '#b34' }}>weeks deep in lost conversion</b>.
      </div>
    </SketchBox>
  );
}

function ScenarioWith() {
  return (
    <SketchBox h={400} pad={24} thick={1.8} style={{ background: 'rgba(91,91,214,0.04)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 20, color: SK.accent }}>✓</span>
        <span className="sk-mono" style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase', color: SK.accent, border: `1.4px solid ${SK.accent}`, background: 'rgba(91,91,214,0.08)', fontWeight: 700 }}>WITH QUORUM</span>
      </div>
      <HandText size={22} as="div" style={{ marginBottom: 14, lineHeight: 1.2 }}>
        The agent reads the Requirement before writing code.
      </HandText>
      <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.6, marginBottom: 16 }}>
        <code style={{ fontFamily: 'monospace', color: SK.ink }}>R-022</code> is a first-class <b style={{ color: SK.ink }}>Requirement</b> entity, pinned by the product owner with authority weighting. When the agent drafts the refactor, the conflict surfaces with the original rationale attached.
      </div>
      <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.55 }}>
        <b style={{ color: SK.ink }}>The human decides — not the diff.</b> Override is possible, but routed to the requirement's owner. The change becomes its own auditable record.
      </div>
    </SketchBox>
  );
}

// ── §04 — Honest pricing fact ─────────────────────────────
function HonestFact({ children, sub }) {
  return (
    <div style={{ padding: '24px 0', borderBottom: '1px dashed rgba(0,0,0,0.18)' }}>
      <HandText size={28} as="div" style={{ marginBottom: sub ? 6 : 0, lineHeight: 1.15, textWrap: 'balance' }}>
        {children}
      </HandText>
      {sub && <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5 }}>{sub}</div>}
    </div>
  );
}

// ── PAGE ──
function CostROIPage({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <EditorialStrip>QUORUM / COST &amp; ROI · v0.4 · APACHE 2.0 · OPEN SOURCE</EditorialStrip>
      <Header />

      {/* HERO — honest, question-shaped */}
      <section style={{ padding: '88px 56px 56px', textAlign: 'center', maxWidth: 940, margin: '0 auto', position: 'relative' }}>
        <MonoEyebrow style={{ marginBottom: 18, display: 'inline-block' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 8, verticalAlign: 'middle' }}/>
          for engineering managers · cto · platform leads
        </MonoEyebrow>
        <HandText size={54} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 20, textWrap: 'balance' }}>
          What does it actually cost your team to lose <span style={{ color: SK.accent }}>knowledge</span>?
        </HandText>
        <div className="sk-scribble" style={{ fontSize: 19, color: SK.ink2, fontStyle: 'italic', maxWidth: 720, margin: '0 auto', lineHeight: 1.45 }}>
          We won't give you made-up numbers. We'll give you the right questions.
        </div>
        {showAnnotations && (
          <Annot x={770} y={50} w={170} rotate={3}>honest tone · no invented stats · questions not assertions</Annot>
        )}
      </section>

      {/* ── §01 · ASK YOUR TEAM THESE QUESTIONS ──────────── */}
      <section style={{ padding: '32px 56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 01</span> · ask your team these questions</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>no statistics · answer them yourself</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 26, lineHeight: 1.1, maxWidth: 800 }}>
          Four questions. The honest answers usually surprise people.
        </HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <QuestionCard
            n={1}
            question="How often does your team re-litigate the same decisions?"
            sub="If the same architectural argument happens more than once a quarter, the decision was never really stored — it was just won temporarily." />
          <QuestionCard
            n={2}
            question="How long does it take a new engineer to understand WHY the codebase is built the way it is?"
            sub="Not how it works — why the specific choices were made. That knowledge usually lives in people, not systems." />
          <QuestionCard
            n={3}
            question="When a senior engineer leaves, what leaves with them?"
            sub="Not their code — that stays. Their reasoning, their constraints, their hard-won context — that disappears. Does your team have a plan for that?" />
          <QuestionCard
            n={4}
            question="Has an AI agent ever given advice that contradicted a decision your team already made?"
            sub="If you're using Claude Code or any LLM assistant at scale, the answer is almost certainly yes — even if you haven't caught it yet." />
        </div>
        {showAnnotations && (
          <Annot x={56} y={26} w={170} rotate={-3}>4 reflection cards · question-shaped · no stats fabricated</Annot>
        )}
      </section>

      {/* ── §02 · THE COMPOUNDING EFFECT ─────────────────── */}
      <section style={{ padding: '56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', background: 'rgba(0,0,0,0.025)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 02</span> · the compounding effect</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>quorum's own projections · not external benchmarks</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 8, lineHeight: 1.1, maxWidth: 820 }}>
          Knowledge compounds. So does the lack of it.
        </HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.muted, marginBottom: 24, lineHeight: 1.5, maxWidth: 740, fontStyle: 'italic' }}>
          Timeline based on Quorum's own design projections — not external benchmarks. Your team's curve will look different.
        </div>
        <SketchBox h={420} pad={20} double>
          <CompoundingChart />
        </SketchBox>
        <div className="sk" style={{ fontSize: 15, color: SK.ink2, marginTop: 20, lineHeight: 1.55, maxWidth: 820 }}>
          Every task makes every future task easier. This is the network effect that makes Quorum worth the upfront effort — and what teams without it pay for, indirectly, forever.
        </div>
        {showAnnotations && (
          <Annot x={66} y={48} w={180} rotate={-2}>5 milestones from the design doc · disclaimer baked in</Annot>
        )}
      </section>

      {/* ── §03 · BUSINESS REQUIREMENTS PROTECTION ───────── */}
      <section style={{ padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 03</span> · business requirements protection</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>illustrative · real pattern · no dollar attached</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 8, lineHeight: 1.1, maxWidth: 820 }}>
          The "dead code" refactor that wasn't dead.
        </HandText>
        <div className="sk" style={{ fontSize: 13, color: SK.muted, marginBottom: 28, lineHeight: 1.5, maxWidth: 760, fontStyle: 'italic' }}>
          Illustrative scenario — based on a real pattern Quorum was designed to prevent. Same dev, same PR, two outcomes.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          <ScenarioWithout />
          <ScenarioWith />
        </div>
        <div style={{ marginTop: 24, padding: '14px 18px', borderLeft: `2px solid ${SK.ink}`, background: 'rgba(0,0,0,0.025)' }}>
          <div className="sk" style={{ fontSize: 15, color: SK.ink2, lineHeight: 1.55, fontStyle: 'italic' }}>
            No revenue figure attached. <b style={{ color: SK.ink, fontStyle: 'normal' }}>Your team knows what a guest checkout regression is worth.</b>
          </div>
        </div>
        {showAnnotations && (
          <Annot x={56} y={28} w={170} rotate={-3}>scenario labeled illustrative · no fake $ figure</Annot>
        )}
      </section>

      {/* ── §04 · WHAT QUORUM COSTS (honest facts) ───────── */}
      <section style={{ padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 04</span> · what quorum costs</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>no spin · no asterisks</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 28, lineHeight: 1.1 }}>
          The actual cost.
        </HandText>

        <div style={{ maxWidth: 860 }}>
          <HonestFact sub="Apache 2.0. Self-host forever. No paid tier hiding behind a feature flag.">
            Open source. Free to self-host forever.
          </HonestFact>
          <HonestFact sub="No SaaS account. No telemetry. No data sent to third parties.">
            No per-seat pricing.
          </HonestFact>
          <HonestFact sub="You run the gateway. You hold the keys. You sign your own audit chain.">
            Your infrastructure, your data, your governance.
          </HonestFact>
        </div>

        <div className="sk" style={{ fontSize: 16, color: SK.ink2, lineHeight: 1.55, marginTop: 28, maxWidth: 720 }}>
          The MCP server installs in one command. The gateway runs in Docker. <b style={{ color: SK.ink }}>There is no sales process.</b>
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 28 }}>
          <SketchButton filled size="lg" w={200}>Get Started →</SketchButton>
          <SketchButton size="lg" w={170}>View on GitHub</SketchButton>
        </div>
        {showAnnotations && (
          <Annot x={56} y={28} w={170} rotate={-2}>three facts · large text · honest not salesy</Annot>
        )}
      </section>

      {/* ── §05 · STILL EVALUATING ──────────────────────── */}
      <section style={{ padding: '56px 56px 72px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 05</span> · still evaluating?</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>no pressure · all the code is public</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 28, lineHeight: 1.1 }}>
          Two paths. Take whichever you'd take anyway.
        </HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <SketchBox h={170} pad={24} thick={1.8}>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.06em', marginBottom: 8 }}>DOCS</div>
            <HandText size={22} as="div" style={{ marginBottom: 10 }}>Read the architecture docs</HandText>
            <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5, marginBottom: 14 }}>
              Understand exactly how it works before committing. Every design decision is documented in the open.
            </div>
            <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600 }}>
              quorum.dev/docs/architecture →
            </div>
          </SketchBox>
          <SketchBox h={170} pad={24} thick={1.8}>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.06em', marginBottom: 8 }}>SOURCE</div>
            <HandText size={22} as="div" style={{ marginBottom: 10 }}>Browse the GitHub repo</HandText>
            <div className="sk" style={{ fontSize: 14, color: SK.ink2, lineHeight: 1.5, marginBottom: 14 }}>
              All the code is public. All the RFCs are merged in the open. Issue tracker is the source of truth.
            </div>
            <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600 }}>
              github.com/as-quorum/quorum →
            </div>
          </SketchBox>
        </div>
      </section>

      <Footer />
    </div>
  );
}

window.CostROIPage = CostROIPage;
