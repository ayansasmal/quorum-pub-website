// THEME — palettes (4) × modes (light/dark) injected as CSS variables.
// Tweaks panel swaps palette + mode at runtime.

const PALETTES = {
  'warm-editorial': {
    label: 'Warm Editorial',
    sub:   'carries the wireframes · paper + indigo',
    light: {
      bg:        '#f7f4ee',
      bgAlt:     '#efebe2',
      surface:   '#fdfbf6',
      surface2:  '#f1ede4',
      ink:       '#191713',
      ink2:      '#4a4640',
      muted:     '#8a857c',
      border:    'rgba(20,15,5,0.10)',
      borderStrong: 'rgba(20,15,5,0.22)',
      primary:   '#4f46e5',
      primarySoft: 'rgba(79,70,229,0.10)',
      primaryInk: '#ffffff',
      red:       '#c0392b',
      redSoft:   'rgba(192,57,43,0.08)',
      green:     '#047857',
      greenSoft: 'rgba(4,120,87,0.10)',
      amber:     '#a07900',
    },
    dark: {
      bg:        '#15120c',
      bgAlt:     '#1c1812',
      surface:   '#1d1a14',
      surface2:  '#26221a',
      ink:       '#f1ece1',
      ink2:      '#c2bba9',
      muted:     '#7a7567',
      border:    'rgba(241,236,225,0.10)',
      borderStrong: 'rgba(241,236,225,0.24)',
      primary:   '#a5b4fc',
      primarySoft: 'rgba(165,180,252,0.14)',
      primaryInk: '#0a0a0e',
      red:       '#f87171',
      redSoft:   'rgba(248,113,113,0.12)',
      green:     '#6ee7b7',
      greenSoft: 'rgba(110,231,183,0.12)',
      amber:     '#f0c674',
    },
  },

  'library-slate': {
    label: 'Library Slate',
    sub:   'archival blue + warm gold · refined',
    light: {
      bg:        '#f4f1e9',
      bgAlt:     '#e9e5d8',
      surface:   '#fcfaf3',
      surface2:  '#ebe6d6',
      ink:       '#0f1419',
      ink2:      '#3a4350',
      muted:     '#7a808c',
      border:    'rgba(8,16,32,0.12)',
      borderStrong: 'rgba(8,16,32,0.30)',
      primary:   '#1f4d6b',
      primarySoft: 'rgba(31,77,107,0.12)',
      primaryInk: '#ffffff',
      red:       '#9c3636',
      redSoft:   'rgba(156,54,54,0.10)',
      green:     '#356b48',
      greenSoft: 'rgba(53,107,72,0.12)',
      amber:     '#a86b1f',
    },
    dark: {
      bg:        '#0d1117',
      bgAlt:     '#141a23',
      surface:   '#171e28',
      surface2:  '#222a36',
      ink:       '#f1ede3',
      ink2:      '#b2b0a8',
      muted:     '#6f7177',
      border:    'rgba(241,237,227,0.12)',
      borderStrong: 'rgba(241,237,227,0.28)',
      primary:   '#bdd6e5',
      primarySoft: 'rgba(189,214,229,0.16)',
      primaryInk: '#0a0d12',
      red:       '#e88a8a',
      redSoft:   'rgba(232,138,138,0.14)',
      green:     '#9fc9a6',
      greenSoft: 'rgba(159,201,166,0.14)',
      amber:     '#e5b878',
    },
  },

  'forest-atlas': {
    label: 'Forest Atlas',
    sub:   'deep green + rust + parchment · knowledge garden',
    light: {
      bg:        '#f6f1e5',
      bgAlt:     '#ede8d9',
      surface:   '#fbf7ec',
      surface2:  '#ede7d4',
      ink:       '#1c241a',
      ink2:      '#3f4a3b',
      muted:     '#85877b',
      border:    'rgba(20,30,15,0.10)',
      borderStrong: 'rgba(20,30,15,0.22)',
      primary:   '#2d5a3d',
      primarySoft: 'rgba(45,90,61,0.10)',
      primaryInk: '#ffffff',
      red:       '#a13e2a',
      redSoft:   'rgba(161,62,42,0.08)',
      green:     '#3d6b4a',
      greenSoft: 'rgba(61,107,74,0.10)',
      amber:     '#b8602e',
    },
    dark: {
      bg:        '#141710',
      bgAlt:     '#1a1d15',
      surface:   '#1e2218',
      surface2:  '#272c20',
      ink:       '#ece7d6',
      ink2:      '#aab09f',
      muted:     '#6e7367',
      border:    'rgba(236,231,214,0.10)',
      borderStrong: 'rgba(236,231,214,0.24)',
      primary:   '#86b894',
      primarySoft: 'rgba(134,184,148,0.14)',
      primaryInk: '#0a0a0e',
      red:       '#d97765',
      redSoft:   'rgba(217,119,101,0.12)',
      green:     '#86b894',
      greenSoft: 'rgba(134,184,148,0.12)',
      amber:     '#d49060',
    },
  },

  'mono-ink': {
    label: 'Mono Ink',
    sub:   'high-contrast bone + indigo · governance',
    light: {
      bg:        '#fafaf7',
      bgAlt:     '#f0f0eb',
      surface:   '#ffffff',
      surface2:  '#f3f3ee',
      ink:       '#0a0b0e',
      ink2:      '#3a3b40',
      muted:     '#888892',
      border:    'rgba(10,10,15,0.10)',
      borderStrong: 'rgba(10,10,15,0.26)',
      primary:   '#4f46e5',
      primarySoft: 'rgba(79,70,229,0.09)',
      primaryInk: '#ffffff',
      red:       '#dc2626',
      redSoft:   'rgba(220,38,38,0.07)',
      green:     '#059669',
      greenSoft: 'rgba(5,150,105,0.10)',
      amber:     '#b45309',
    },
    dark: {
      bg:        '#09090c',
      bgAlt:     '#0f0f14',
      surface:   '#13131a',
      surface2:  '#1c1c24',
      ink:       '#f3f3f7',
      ink2:      '#b6b6c0',
      muted:     '#67676c',
      border:    'rgba(243,243,247,0.10)',
      borderStrong: 'rgba(243,243,247,0.24)',
      primary:   '#a5b4fc',
      primarySoft: 'rgba(165,180,252,0.14)',
      primaryInk: '#09090c',
      red:       '#f87171',
      redSoft:   'rgba(248,113,113,0.12)',
      green:     '#34d399',
      greenSoft: 'rgba(52,211,153,0.14)',
      amber:     '#f6c14b',
    },
  },
};

const PALETTE_KEYS = Object.keys(PALETTES);

// Build CSS variable string for a given palette + mode.
function paletteToVars(paletteKey, mode) {
  const p = PALETTES[paletteKey];
  if (!p) return '';
  const tokens = p[mode] || p.light;
  return Object.entries(tokens)
    .map(([k, v]) => `--${k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())}: ${v};`)
    .join('\n');
}

// Return a palette's tokens as a JS object suitable for inline style={{}}.
// Used to scope a palette to a single DOM subtree (palette gallery cards).
function paletteToStyleObject(paletteKey, mode) {
  const p = PALETTES[paletteKey];
  if (!p) return {};
  const tokens = p[mode] || p.light;
  const out = {};
  for (const [k, v] of Object.entries(tokens)) {
    out['--' + k.replace(/[A-Z]/g, m => '-' + m.toLowerCase())] = v;
  }
  out['colorScheme'] = mode;
  return out;
}

// Inject globals + palette. Updates --vars on subsequent calls.
function injectTheme(paletteKey, mode) {
  const id = 'qh-theme';
  let style = document.getElementById(id);
  if (!style) {
    style = document.createElement('style');
    style.id = id;
    document.head.appendChild(style);
  }
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap');
    :root {
      ${paletteToVars(paletteKey, mode)}
      --font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif;
      --font-mono: 'Geist Mono', ui-monospace, 'JetBrains Mono', monospace;
      --r-1: 4px;
      --r-2: 6px;
      --r-3: 10px;
      --r-4: 16px;
      --r-5: 24px;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
      --shadow-md: 0 4px 14px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
      --shadow-lg: 0 24px 60px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.04);
      color-scheme: ${mode};
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: var(--font-sans);
      font-feature-settings: 'ss01', 'cv11';
      background: var(--bg);
      color: var(--ink);
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
    .qh-mono { font-family: var(--font-mono); font-feature-settings: 'ss01'; }
    .qh-eyebrow {
      font-family: var(--font-mono);
      font-size: 11px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--muted);
    }
    .qh-eyebrow b, .qh-eyebrow .lead { color: var(--primary); font-weight: 600; }
    a { color: inherit; }
    button { font-family: inherit; }

    /* ─── responsive (container queries on .qh-site) ─── */
    .qh-site {
      container-type: inline-size;
      container-name: site;
      position: relative;
    }
    .qh-nav-inline { display: none; }
    .qh-cta-desktop { display: none; }
    .qh-stars { display: none; }
    .qh-hamburger { display: inline-flex; }
    .qh-hero-grid { grid-template-columns: 1fr; }
    .qh-pain-grid { grid-template-columns: 1fr; }
    .qh-2col { grid-template-columns: 1fr; }

    @container site (min-width: 720px) {
      .qh-hero-grid { grid-template-columns: 1.05fr 0.95fr !important; gap: 40px !important; }
      .qh-pain-grid { grid-template-columns: 1fr 1fr 1fr !important; }
      .qh-2col { grid-template-columns: 1fr 1.05fr !important; gap: 48px !important; }
      .qh-stars { display: inline-flex !important; }
    }
    @container site (min-width: 1024px) {
      .qh-nav-inline { display: flex !important; }
      .qh-cta-desktop { display: inline-flex !important; }
      .qh-hamburger { display: none !important; }
    }
    @container site (min-width: 1180px) {
      .qh-hero-section { padding: 64px 20px 56px !important; }
      .qh-2col { gap: 64px !important; }
    }
  `;
}

window.PALETTES = PALETTES;
window.PALETTE_KEYS = PALETTE_KEYS;
window.paletteToStyleObject = paletteToStyleObject;
window.injectTheme = injectTheme;
