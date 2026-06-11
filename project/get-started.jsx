// CHILD PAGE · Get Started — wireframe. Inherits V6 vocabulary.
// Goal: developer feels confident they can be running in <10 min.
// Five sections + CTA.

// ── Code block (terminal-style chrome + monospace body) ──
function CodeBlock({ lang = 'bash', children, caption, w = '100%', minH = 110 }) {
  return (
    <div style={{ width: w }}>
      <SketchBox h="auto" pad={0} thick={1.8} style={{ minHeight: minH, background: 'rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ width: 10, height: 10, border: '1.4px solid #222', borderRadius: '50%' }} />
            ))}
          </div>
          <span className="sk-mono" style={{ marginLeft: 14, fontSize: 11, color: SK.pencil, letterSpacing: '0.04em' }}>{lang}</span>
        </div>
        <pre className="sk-mono" style={{ margin: 0, padding: '14px 18px', fontSize: 13, lineHeight: 1.7, color: SK.ink, whiteSpace: 'pre', overflowX: 'auto' }}>
{children}
        </pre>
      </SketchBox>
      {caption && (
        <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginTop: 8, lineHeight: 1.5, fontStyle: 'italic' }}>
          {caption}
        </div>
      )}
    </div>
  );
}

// ── Step row in the vertical stepper ──
function Step({ n, title, children, last = false }) {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '56px 1fr', gap: 24, paddingBottom: last ? 0 : 40 }}>
      {/* connector line */}
      {!last && (
        <div style={{ position: 'absolute', left: 23, top: 56, bottom: 0, width: 0, borderLeft: `2px dashed ${SK.accent}`, opacity: 0.45 }} />
      )}
      {/* numbered indigo circle */}
      <div style={{ position: 'relative', width: 48, height: 48 }}>
        <svg width="48" height="48" viewBox="0 0 48 48" style={{ position: 'absolute', inset: 0 }}>
          <g filter="url(#sk-wobble)">
            <circle cx="24" cy="24" r="20" fill={SK.accent} stroke={SK.ink} strokeWidth="1.8" />
          </g>
          <text x="24" y="29" textAnchor="middle" className="sk-h" style={{ fontSize: 18, fontWeight: 700, fill: '#fff' }}>{n}</text>
        </svg>
      </div>
      <div style={{ paddingTop: 4 }}>
        <HandText size={24} as="div" style={{ marginBottom: 14, lineHeight: 1.15 }}>{title}</HandText>
        {children}
      </div>
    </div>
  );
}

// ── First-node visual (right side of §3) — sketched dashboard node card ──
function NodeViz() {
  return (
    <div style={{ position: 'relative', height: 280 }}>
      {/* faint companion nodes in the background */}
      <svg width="100%" height="100%" viewBox="0 0 360 280" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
        <g filter="url(#sk-wobble)" opacity="0.35">
          <circle cx="50"  cy="60"  r="18" fill="none" stroke={SK.ink} strokeWidth="1.4" />
          <circle cx="310" cy="80"  r="14" fill="none" stroke={SK.ink} strokeWidth="1.4" />
          <circle cx="60"  cy="220" r="14" fill="none" stroke={SK.ink} strokeWidth="1.4" />
          <circle cx="300" cy="230" r="16" fill="none" stroke={SK.ink} strokeWidth="1.4" />
          <line x1="50"  y1="60"  x2="180" y2="140" stroke={SK.ink} strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="310" y1="80"  x2="180" y2="140" stroke={SK.ink} strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="60"  y1="220" x2="180" y2="140" stroke={SK.ink} strokeWidth="1" strokeDasharray="4 3"/>
          <line x1="300" y1="230" x2="180" y2="140" stroke={SK.ink} strokeWidth="1" strokeDasharray="4 3"/>
        </g>
      </svg>
      {/* the new node — centered, prominent */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 280 }}>
        <SketchBox h={150} pad={14} thick={2} style={{ background: 'rgba(91,91,214,0.08)', boxShadow: '0 0 0 4px rgba(91,91,214,0.06)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.06em' }}>D-001</span>
            <span className="sk-mono" style={{ fontSize: 10, padding: '2px 7px', borderRadius: 999, background: 'rgba(0,150,80,0.08)', color: '#0a6', border: '1px solid #0a6', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 700 }}>ACTIVE</span>
          </div>
          <HandText size={17} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>
            Use FalkorDB for the knowledge graph
          </HandText>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.65 }}>
            <div><span style={{ color: SK.muted }}>topic:</span> infrastructure</div>
            <div><span style={{ color: SK.muted }}>key:</span> graph-backend-choice</div>
            <div><span style={{ color: SK.muted }}>author:</span> <span style={{ color: SK.accent }}>@you</span> · 12s ago</div>
            <div><span style={{ color: SK.muted }}>confidence:</span> 0.90</div>
          </div>
        </SketchBox>
      </div>
      <div className="sk-scribble" style={{ position: 'absolute', bottom: 0, right: 0, fontSize: 11, color: SK.muted }}>
        ↳ first node · audit chain begins
      </div>
    </div>
  );
}

// ── Chat-bubble snippet (left side of §3) ──
function ChatSnippet() {
  return (
    <SketchBox h={320} pad={18} thick={1.8} style={{ background: 'rgba(0,0,0,0.025)' }}>
      <MonoEyebrow style={{ marginBottom: 14 }}>~/quorum · claude code · live session</MonoEyebrow>

      {/* user bubble */}
      <div style={{ marginBottom: 14 }}>
        <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, marginBottom: 4 }}>@you · just now</div>
        <SketchBox h="auto" pad={10} thick={1.4} style={{ background: 'rgba(255,255,255,0.6)' }}>
          <div className="sk" style={{ fontSize: 13, color: SK.ink, lineHeight: 1.5 }}>
            "let's use FalkorDB for the knowledge graph — Redis-native, low overhead. Cypher queries."
          </div>
        </SketchBox>
      </div>

      {/* claude bubble — indigo tinted */}
      <div>
        <div className="sk-mono" style={{ fontSize: 11, color: SK.accent, marginBottom: 4 }}>● claude code · agent</div>
        <SketchBox h="auto" pad={10} thick={1.4} style={{ background: 'rgba(91,91,214,0.10)', borderColor: SK.accent }}>
          <div className="sk" style={{ fontSize: 13, color: SK.ink, lineHeight: 1.5, marginBottom: 8 }}>
            Captured — let me record this as a Quorum decision.
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: SK.ink2, lineHeight: 1.65, background: 'rgba(0,0,0,0.05)', padding: '8px 10px', borderRadius: 3 }}>
            <span style={{ color: SK.muted }}>↳</span> remember(<br/>
            &nbsp;&nbsp;topic: <span style={{ color: SK.accent }}>"infrastructure"</span>,<br/>
            &nbsp;&nbsp;key: <span style={{ color: SK.accent }}>"graph-backend-choice"</span>,<br/>
            &nbsp;&nbsp;rationale: <span style={{ color: SK.accent }}>"Redis-native, Cypher"</span><br/>
            )
          </div>
          <div className="sk-mono" style={{ fontSize: 11, color: '#0a6', marginTop: 8 }}>
            ✓ D-001 stored · audit signed · confidence 0.90
          </div>
        </SketchBox>
      </div>
    </SketchBox>
  );
}

// ── Next-step card ──
function NextStepCard({ icon, title, body, link, badge }) {
  return (
    <SketchBox h={210} pad={20} thick={1.8}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
        {icon}
        {badge && (
          <span className="sk-mono" style={{ fontSize: 10, padding: '3px 8px', borderRadius: 999, letterSpacing: '0.1em', textTransform: 'uppercase', color: SK.accent, border: `1px solid ${SK.accent}`, background: 'rgba(91,91,214,0.08)', fontWeight: 700 }}>{badge}</span>
        )}
      </div>
      <HandText size={20} as="div" style={{ marginBottom: 8, lineHeight: 1.15 }}>{title}</HandText>
      <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5, marginBottom: 12 }}>{body}</div>
      <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600 }}>
        {link} →
      </div>
    </SketchBox>
  );
}

// ── PAGE ──
function GetStartedPage({ showAnnotations }) {
  return (
    <div className="sk sk-page" style={{ width: '100%', minHeight: '100%', position: 'relative' }}>
      <EditorialStrip>QUORUM / GET STARTED · v0.4 · APACHE 2.0 · OPEN SOURCE</EditorialStrip>
      <Header />

      {/* HERO — narrow, centered */}
      <section style={{ padding: '88px 56px 48px', textAlign: 'center', maxWidth: 940, margin: '0 auto', position: 'relative' }}>
        <MonoEyebrow style={{ marginBottom: 18, display: 'inline-block' }}>
          <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: SK.accent, marginRight: 8, verticalAlign: 'middle' }}/>
          open source · self-hosted · zero config
        </MonoEyebrow>
        <HandText size={56} weight={700} as="div" style={{ lineHeight: 1.04, marginBottom: 18, textWrap: 'balance' }}>
          Up and running in under <span style={{ color: SK.accent }}>10 minutes</span>.
        </HandText>
        <div className="sk" style={{ fontSize: 18, color: SK.ink2, lineHeight: 1.55, maxWidth: 660, margin: '0 auto' }}>
          One Docker command. One npm install. Your team's AI agents start building institutional memory immediately.
        </div>
        {showAnnotations && (
          <Annot x={770} y={50} w={170} rotate={3}>centered hero · "10 minutes" in indigo</Annot>
        )}
      </section>

      {/* ── §1 · PREREQUISITES (pill chips) ────────────── */}
      <section style={{ padding: '32px 56px 48px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 01</span> · prerequisites</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>everything you probably already have</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {[
            { ic: '🐳', label: 'Docker + Docker Compose' },
            { ic: '⬢',  label: 'Node.js 18+' },
            { ic: '✦',  label: 'Claude Code (with MCP support)' },
            { ic: '⎇',  label: 'A GitHub account (for OAuth)' },
          ].map((p) => (
            <SketchBox key={p.label} h={48} pad={0} thick={1.6} style={{ width: 'auto', display: 'inline-block' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 18px', height: '100%' }}>
                <span style={{ fontSize: 16 }}>{p.ic}</span>
                <span className="sk-h" style={{ fontSize: 15, color: SK.ink, lineHeight: 1 }}>{p.label}</span>
              </div>
            </SketchBox>
          ))}
        </div>
        {showAnnotations && (
          <Annot x={56} y={20} w={170} rotate={-3}>pill chips · no walls of text · scannable</Annot>
        )}
      </section>

      {/* ── §2 · STEP-BY-STEP SETUP (vertical stepper) ── */}
      <section style={{ padding: '48px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)', background: 'rgba(0,0,0,0.025)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 02</span> · step-by-step setup</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>~8 min · copy-paste · no surprises</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 32, lineHeight: 1.1 }}>
          Four steps. Zero config files to hand-author.
        </HandText>

        <div style={{ maxWidth: 980 }}>
          <Step n="1" title="Clone and start with Docker Compose">
            <CodeBlock lang="terminal" caption="Starts FalkorDB, PostgreSQL, Redis, the Gateway (:3001), and Dashboard (:3002).">
{`$ git clone https://github.com/as-quorum/quorum
$ cd quorum
$ ./scripts/setup.sh docker`}
            </CodeBlock>
          </Step>

          <Step n="2" title="Define your team">
            <CodeBlock lang="my-team.quorum.json" caption="Save as my-team.quorum.json and upload to the S3 bucket.">
{`{
  "$schema": "http://localhost:3001/schema/config",
  "group_id": "my-team",
  "owner": "your-github-username",
  "members": [
    { "name": "Alice", "role": "principal_architect", "github_username": "alice-gh" },
    { "name": "Bob",   "role": "senior_engineer",     "github_username": "bob-gh"   }
  ]
}`}
            </CodeBlock>
          </Step>

          <Step n="3" title="Install the MCP server and skill">
            <CodeBlock lang="terminal" caption="Registers the Quorum MCP server and installs the Claude Code skill in one command.">
{`$ npx @as-quorum/mcp install`}
            </CodeBlock>
          </Step>

          <Step n="4" title="Ask Claude a question" last>
            {/* chat-style snippet for the verify step */}
            <SketchBox h="auto" pad={0} thick={1.8} style={{ minHeight: 160, background: 'rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', padding: '8px 14px', borderBottom: '1.2px dashed rgba(0,0,0,0.18)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{ width: 10, height: 10, border: '1.4px solid #222', borderRadius: '50%' }} />
                  ))}
                </div>
                <span className="sk-mono" style={{ marginLeft: 14, fontSize: 11, color: SK.pencil }}>claude code</span>
              </div>
              <div style={{ padding: '14px 18px' }}>
                <div className="sk-mono" style={{ fontSize: 12, color: SK.muted, marginBottom: 4 }}>You:</div>
                <div className="sk" style={{ fontSize: 14, color: SK.ink, marginBottom: 14 }}>
                  "What pending Quorum decisions are there?"
                </div>
                <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, marginBottom: 4 }}>● Claude:</div>
                <SketchBox h="auto" pad={10} thick={1.4} style={{ background: 'rgba(91,91,214,0.1)', borderColor: SK.accent }}>
                  <div className="sk" style={{ fontSize: 14, color: SK.ink }}>
                    "No pending items — ready to start."
                  </div>
                </SketchBox>
              </div>
            </SketchBox>
            <div className="sk" style={{ fontSize: 13, color: SK.ink2, marginTop: 8, lineHeight: 1.5, fontStyle: 'italic' }}>
              If Claude responds with this, Quorum is fully wired and ready.
            </div>
          </Step>
        </div>

        {showAnnotations && (
          <Annot x={56} y={28} w={170} rotate={-3}>vertical stepper · indigo numbered circles · dashed connector</Annot>
        )}
      </section>

      {/* ── §3 · FIRST KNOWLEDGE NODE (full-width indigo card) ── */}
      <section style={{ padding: '72px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 03</span> · your first knowledge node</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>captured automatically · no extra commands</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 28, lineHeight: 1.1 }}>
          Store your first decision.
        </HandText>

        <SketchBox h={440} pad={28} double thick={2.2} style={{ background: 'rgba(91,91,214,0.04)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <MonoEyebrow style={{ marginBottom: 10, color: SK.accent }}>← in Claude Code</MonoEyebrow>
              <ChatSnippet />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <MonoEyebrow style={{ marginBottom: 10, color: SK.accent }}>→ in the Quorum Dashboard</MonoEyebrow>
              <SketchBox h={320} pad={14} thick={1.8} style={{ background: 'rgba(255,255,255,0.5)' }}>
                <NodeViz />
              </SketchBox>
            </div>
          </div>
        </SketchBox>
        <div className="sk" style={{ fontSize: 14, color: SK.ink2, marginTop: 18, lineHeight: 1.5, fontStyle: 'italic', maxWidth: 720 }}>
          Every decision Claude Code helps make is a candidate for Quorum. The skill handles <code style={{ fontFamily: 'monospace', color: SK.ink }}>reflect()</code> automatically at session end — no extra commands.
        </div>
        {showAnnotations && (
          <Annot x={66} y={70} w={180} rotate={-2}>split panel · chat left · graph node right · indigo card</Annot>
        )}
      </section>

      {/* ── §4 · WHAT TO DO NEXT (3-up) ───────────────── */}
      <section style={{ padding: '64px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 18 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 04</span> · what to do next</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>three trails · pick one</span>
        </div>
        <HandText size={32} as="div" style={{ marginBottom: 28, lineHeight: 1.1 }}>
          You've got memory. Now what?
        </HandText>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 22 }}>
          <NextStepCard
            icon={<SketchIcon name="brain" />}
            title="Onboard your team"
            body="Add roles, set authority weights, and import your first Markdown / ADR backlog."
            link="Onboarding docs" />
          <NextStepCard
            icon={<SketchIcon name="layers" />}
            title="Explore the dashboard"
            body="Walk through the graph viewer, audit chain, conflict queue, and pending decisions."
            link="Dashboard walkthrough" />
          <NextStepCard
            icon={<SketchIcon name="briefcase" />}
            title="Add business requirements"
            body="Promote PM rules, compliance constraints, and feature rationale to first-class Requirement entities."
            link="Features → Business Requirements"
            badge="NEW" />
        </div>
        {showAnnotations && (
          <Annot x={56} y={28} w={170} rotate={-3}>3-up cards · same sketch icons as Features page</Annot>
        )}
      </section>

      {/* pull-quote breather */}
      <div style={{ padding: '16px 56px 16px' }}>
        <PullQuote cite="early adopter · staff eng">
          The whole setup took about six minutes. The first time Claude cited a prior decision back to me, I laughed out loud.
        </PullQuote>
      </div>

      {/* ── §5 · NEED HELP (2-col, minimal) ───────────── */}
      <section style={{ padding: '56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 22 }}>
          <MonoEyebrow><span style={{ color: SK.accent }}>SECTION 05</span> · need help?</MonoEyebrow>
          <span className="sk-mono" style={{ fontSize: 11, color: SK.muted }}>no slack · no discord · honest, for now</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          <SketchBox h={160} pad={22} thick={1.8}>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.06em', marginBottom: 8 }}>GITHUB · DISCUSSIONS</div>
            <HandText size={22} as="div" style={{ marginBottom: 8 }}>Ask questions, share use cases</HandText>
            <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5 }}>
              Best place for "how would I model X?" / "anyone else doing Y?" — public, searchable.
            </div>
            <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600, marginTop: 12 }}>
              github.com/as-quorum/quorum/discussions →
            </div>
          </SketchBox>
          <SketchBox h={160} pad={22} thick={1.8}>
            <div className="sk-mono" style={{ fontSize: 11, color: SK.muted, letterSpacing: '0.06em', marginBottom: 8 }}>GITHUB · ISSUES</div>
            <HandText size={22} as="div" style={{ marginBottom: 8 }}>Report bugs or request features</HandText>
            <div className="sk" style={{ fontSize: 13, color: SK.ink2, lineHeight: 1.5 }}>
              Bug reports, feature requests, RFCs. Triaged weekly. Labelled by component.
            </div>
            <div className="sk-mono" style={{ fontSize: 12, color: SK.accent, fontWeight: 600, marginTop: 12 }}>
              github.com/as-quorum/quorum/issues →
            </div>
          </SketchBox>
        </div>
      </section>

      {/* BOTTOM CTA BAR */}
      <section style={{ padding: '64px 56px 56px', borderTop: '1.5px dashed rgba(0,0,0,0.2)' }}>
        <SketchBox h={180} pad={32} thick={2.2} double style={{ background: 'rgba(91,91,214,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 36, height: '100%' }}>
            <div>
              <HandText size={36} as="div" style={{ marginBottom: 8, lineHeight: 1.1 }}>
                Start capturing your team's knowledge today.
              </HandText>
              <div className="sk" style={{ fontSize: 15, color: SK.ink2, maxWidth: 540, lineHeight: 1.5 }}>
                Star the repo, run the setup, and your AI agents stop forgetting. ~10 minutes, ~zero risk.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 14, flexShrink: 0 }}>
              <SketchButton filled size="lg" w={200}>View on GitHub →</SketchButton>
              <SketchButton size="lg" w={170}>Read the Docs</SketchButton>
            </div>
          </div>
        </SketchBox>
      </section>

      <Footer />
    </div>
  );
}

window.GetStartedPage = GetStartedPage;
