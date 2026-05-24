'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import {
  type PaletteKey, type ModeKey,
  DEFAULT_PALETTE, DEFAULT_MODE,
  STORAGE_THEME, STORAGE_MODE,
} from '@/lib/themes'

interface ThemeCtx {
  palette:      PaletteKey
  mode:         ModeKey
  resolvedMode: 'light' | 'dark'
  setPalette:   (p: PaletteKey) => void
  setMode:      (m: ModeKey) => void
}

const ThemeContext = createContext<ThemeCtx>({
  palette:      DEFAULT_PALETTE,
  mode:         DEFAULT_MODE,
  resolvedMode: 'light',
  setPalette:   () => {},
  setMode:      () => {},
})

function resolveMode(m: ModeKey): 'light' | 'dark' {
  if (m !== 'system') return m
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(palette: PaletteKey, resolved: 'light' | 'dark') {
  const el = document.documentElement
  el.dataset.theme = palette
  el.dataset.mode  = resolved
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [palette,      setPaletteState] = useState<PaletteKey>(DEFAULT_PALETTE)
  const [mode,         setModeState]    = useState<ModeKey>(DEFAULT_MODE)
  const [resolvedMode, setResolved]     = useState<'light' | 'dark'>('light')

  // Hydrate from localStorage on mount
  useEffect(() => {
    const p = (localStorage.getItem(STORAGE_THEME) ?? DEFAULT_PALETTE) as PaletteKey
    const m = (localStorage.getItem(STORAGE_MODE)  ?? DEFAULT_MODE)    as ModeKey
    const r = resolveMode(m)
    setPaletteState(p)
    setModeState(m)
    setResolved(r)
    applyTheme(p, r)
  }, [])

  // Track system preference changes when mode is 'system'
  useEffect(() => {
    if (mode !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => {
      const r = e.matches ? 'dark' : 'light'
      setResolved(r)
      document.documentElement.dataset.mode = r
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [mode])

  const setPalette = useCallback((p: PaletteKey) => {
    setPaletteState(p)
    localStorage.setItem(STORAGE_THEME, p)
    document.documentElement.dataset.theme = p
  }, [])

  const setMode = useCallback((m: ModeKey) => {
    setModeState(m)
    localStorage.setItem(STORAGE_MODE, m)
    const r = resolveMode(m)
    setResolved(r)
    document.documentElement.dataset.mode = r
  }, [])

  return (
    <ThemeContext.Provider value={{ palette, mode, resolvedMode, setPalette, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
