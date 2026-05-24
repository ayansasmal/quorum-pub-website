'use client'

import { useRef, useState, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'
import { PALETTES, PALETTE_KEYS, type ModeKey } from '@/lib/themes'

const MODES: { key: ModeKey; label: string }[] = [
  { key: 'system', label: 'System' },
  { key: 'light',  label: 'Light'  },
  { key: 'dark',   label: 'Dark'   },
]

export function ThemeSwitcher() {
  const { palette, mode, setPalette, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger button — 2×2 palette dots */}
      <button
        type="button"
        aria-label="Switch theme"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          width: 32,
          height: 32,
          padding: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: open ? 'var(--primary-soft)' : 'transparent',
          border: `1px solid ${open ? 'var(--primary)' : 'var(--border)'}`,
          borderRadius: 'var(--r-2)',
          cursor: 'pointer',
          transition: 'background 150ms ease, border-color 150ms ease',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
          {PALETTE_KEYS.map((key) => (
            <div
              key={key}
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: PALETTES[key].swatch,
                boxShadow: key === palette ? `0 0 0 1.5px var(--bg), 0 0 0 3px ${PALETTES[key].swatch}` : 'none',
                transition: 'box-shadow 150ms ease',
              }}
            />
          ))}
        </div>
      </button>

      {/* Popover panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Theme picker"
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(100% + 8px)',
            width: 228,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-4)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 100,
            overflow: 'hidden',
          }}
        >
          {/* Palette section */}
          <div style={{ padding: '10px 12px 6px' }}>
            <div
              className="qh-mono"
              style={{ fontSize: 9, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 8 }}
            >
              Palette
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {PALETTE_KEYS.map((key) => {
                const active = key === palette
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPalette(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      padding: '7px 8px',
                      borderRadius: 'var(--r-2)',
                      border: 'none',
                      background: active ? 'var(--primary-soft)' : 'transparent',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background 120ms ease',
                    }}
                  >
                    {/* Swatch */}
                    <div style={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: PALETTES[key].swatch,
                      flexShrink: 0,
                      border: active ? '2px solid var(--primary)' : '1px solid var(--border)',
                      boxSizing: 'border-box',
                    }} />
                    <div>
                      <div style={{
                        fontSize: 13,
                        fontWeight: active ? 600 : 400,
                        color: active ? 'var(--primary)' : 'var(--ink)',
                        lineHeight: 1.2,
                      }}>
                        {PALETTES[key].label}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', lineHeight: 1.3, marginTop: 1 }}>
                        {PALETTES[key].sub}
                      </div>
                    </div>
                    {active && (
                      <div style={{ marginLeft: 'auto', color: 'var(--primary)', fontSize: 12 }}>✓</div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--border)', margin: '4px 0' }} />

          {/* Mode section */}
          <div style={{ padding: '6px 12px 12px' }}>
            <div
              className="qh-mono"
              style={{ fontSize: 9, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 8 }}
            >
              Mode
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {MODES.map(({ key, label }) => {
                const active = key === mode
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setMode(key)}
                    style={{
                      flex: 1,
                      padding: '5px 0',
                      fontSize: 12,
                      fontWeight: active ? 600 : 400,
                      color: active ? 'var(--primary)' : 'var(--ink-2)',
                      background: active ? 'var(--primary-soft)' : 'var(--surface-2)',
                      border: `1px solid ${active ? 'var(--primary)' : 'var(--border)'}`,
                      borderRadius: 'var(--r-2)',
                      cursor: 'pointer',
                      transition: 'all 120ms ease',
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
