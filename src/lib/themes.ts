export type PaletteKey = 'library-slate' | 'warm-editorial' | 'forest-atlas' | 'mono-ink'
export type ModeKey   = 'light' | 'dark' | 'system'

export interface PaletteMeta {
  label: string
  sub:   string
  swatch: string  // hex used for the color dot in the picker
}

export const PALETTES: Record<PaletteKey, PaletteMeta> = {
  'library-slate':  { label: 'Library Slate',  sub: 'archival blue · parchment',     swatch: '#1f4d6b' },
  'warm-editorial': { label: 'Warm Editorial', sub: 'paper · indigo',                swatch: '#4f46e5' },
  'forest-atlas':   { label: 'Forest Atlas',   sub: 'deep green · knowledge garden', swatch: '#2d5a3d' },
  'mono-ink':       { label: 'Mono Ink',       sub: 'high contrast · governance',    swatch: '#888892' },
}

export const PALETTE_KEYS = Object.keys(PALETTES) as PaletteKey[]

export const STORAGE_THEME = 'qh-theme'
export const STORAGE_MODE  = 'qh-mode'

export const DEFAULT_PALETTE: PaletteKey = 'library-slate'
export const DEFAULT_MODE:    ModeKey    = 'system'

/** Inline script injected in <head> to prevent FOUC. Must be a plain string. */
export const THEME_SCRIPT = `(function(){try{
  var t=localStorage.getItem('qh-theme')||'library-slate';
  var m=localStorage.getItem('qh-mode')||'system';
  var r=m==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):m;
  document.documentElement.dataset.theme=t;
  document.documentElement.dataset.mode=r;
}catch(e){}})();`
