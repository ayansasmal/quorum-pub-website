// App — wraps the four wireframe variations in a DesignCanvas + adds Tweaks.

const HEADLINES = {
  'A — original': 'Your AI agents should remember what your team decided.',
  'B — punchier': "Stop letting AI forget what your team already decided.",
  'C — outcome':  'Governance, audit trails, and memory for AI-assisted engineering.',
};

const PAGE_W = 1280;
const PAGE_H = 2400;

function App() {
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "showAnnotations": true,
    "headlineKey": "A \u2014 original",
    "paperTint": "warm"
  }/*EDITMODE-END*/);

  const headline = HEADLINES[t.headlineKey] || HEADLINES['A — original'];

  // paper tint — purely on the canvas root, doesn't change the artboards
  const paperBg =
    t.paperTint === 'cool'  ? '#eaedee' :
    t.paperTint === 'plain' ? '#f3f3f0' :
    /* warm */ '#f0eee9';

  return (
    <React.Fragment>
      <DesignCanvas style={{ background: paperBg }}>
        <DCSection id="landing" title="Quorum · landing page wireframes"
          subtitle="four full-page sketches · same content, different storytelling spines">

          <DCArtboard id="v1" label="V1 · Classic Split · knowledge graph" width={PAGE_W} height={PAGE_H}>
            <V1ClassicSplit headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="v2" label="V2 · Centered hero · terminal log" width={PAGE_W} height={PAGE_H}>
            <V2CenteredTerminal headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="v3" label="V3 · Full-bleed · decision card stack" width={PAGE_W} height={PAGE_H + 200}>
            <V3FullBleedStack headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="v4" label="V4 · Editorial · audit trail timeline" width={PAGE_W} height={PAGE_H + 100}>
            <V4EditorialTimeline headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="v5" label="V5 · Combo · one section per metaphor" width={PAGE_W} height={PAGE_H + 700}>
            <V5Combo headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="v6" label="V6 · FINAL · V5 + V4 tone + indigo callouts ★" width={PAGE_W} height={PAGE_H + 900}>
            <V6Final headline={headline} showAnnotations={t.showAnnotations} />
          </DCArtboard>

        </DCSection>

        <DCSection id="children" title="Child pages · inherit V6 vocabulary"
          subtitle="every page starts from V6's chrome — mono strip, mono eyebrows, indigo callouts">

          <DCArtboard id="why" label="Why Quorum · five problems / five proofs" width={PAGE_W} height={PAGE_H + 1400}>
            <WhyQuorumPage showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="features" label="Features · 8 primitives + business reqs highlight" width={PAGE_W} height={PAGE_H + 1100}>
            <FeaturesPage showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="gov" label="Governance · constitutional · trust page" width={PAGE_W} height={PAGE_H + 2000}>
            <GovernancePage showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="cost" label="Cost & ROI · honest tone (rev 2)" width={PAGE_W} height={PAGE_H + 1200}>
            <CostROIPage showAnnotations={t.showAnnotations} />
          </DCArtboard>

          <DCArtboard id="start" label="Get Started · 10-min setup" width={PAGE_W} height={PAGE_H + 1700}>
            <GetStartedPage showAnnotations={t.showAnnotations} />
          </DCArtboard>

        </DCSection>
      </DesignCanvas>

      <TweaksPanel title="Tweaks">
        <TweakSection label="View" />
        <TweakToggle label="Show annotations" value={t.showAnnotations}
          onChange={(v) => setTweak('showAnnotations', v)} />
        <TweakRadio label="Paper" value={t.paperTint}
          options={[
            { label: 'Warm',  value: 'warm' },
            { label: 'Plain', value: 'plain' },
            { label: 'Cool',  value: 'cool' },
          ]}
          onChange={(v) => setTweak('paperTint', v)} />
        <TweakSection label="Headline copy" />
        <TweakSelect label="Variant" value={t.headlineKey}
          options={Object.keys(HEADLINES)}
          onChange={(v) => setTweak('headlineKey', v)} />
        <div style={{ fontSize: 11, color: 'rgba(41,38,27,.6)', marginTop: -4, lineHeight: 1.4, fontStyle: 'italic' }}>
          “{headline}”
        </div>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
