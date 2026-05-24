'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_TREE } from '@/lib/nav'

interface MenuPanelProps {
  open: boolean
  onClose: () => void
}

function ChevIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" style={{
      transition: 'transform 220ms ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    }} aria-hidden>
      <polyline
        points="5,8 10,13 15,8"
        stroke={open ? 'var(--primary)' : 'var(--muted)'}
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MenuPanel({ open, onClose }: MenuPanelProps) {
  const [expanded, setExpanded] = useState<string | null>('why')

  // Reset accordion when menu closes
  useEffect(() => {
    if (!open) return
    setExpanded('why')
  }, [open])

  const toggle = (id: string) => setExpanded(prev => prev === id ? null : id)

  return (
    <>
      {/* Scrim */}
      <div
        onClick={onClose}
        aria-hidden
        style={{
          position: 'absolute',
          top: 56,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.42)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 220ms ease',
          zIndex: 55,
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-label="Quorum navigation"
        aria-hidden={!open}
        style={{
          position: 'absolute',
          top: 56,
          left: 0,
          right: 0,
          zIndex: 60,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border-strong)',
          boxShadow: '0 12px 30px rgba(0,0,0,0.18)',
          transform: open ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        <ul style={{ margin: 0, padding: '6px 20px 0', listStyle: 'none' }}>
          {NAV_TREE.map((item, i) => {
            const isExpanded = expanded === item.id
            return (
              <li key={item.id} style={{
                listStyle: 'none',
                borderBottom: i < NAV_TREE.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  onClick={() => toggle(item.id)}
                  style={{
                    width: '100%',
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0 4px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: isExpanded ? 'var(--primary)' : 'var(--ink)',
                    fontSize: 17,
                    fontWeight: 500,
                    letterSpacing: '-0.012em',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                  }}
                >
                  <span>{item.label}</span>
                  <ChevIcon open={isExpanded} />
                </button>

                {/* Accordion body */}
                <div style={{
                  display: 'grid',
                  gridTemplateRows: isExpanded ? '1fr' : '0fr',
                  transition: 'grid-template-rows 240ms ease',
                }}>
                  <div style={{ overflow: 'hidden', minHeight: 0 }}>
                    <ul style={{
                      listStyle: 'none',
                      margin: 0,
                      padding: '2px 0 8px 14px',
                      borderLeft: '2px solid var(--primary)',
                      marginLeft: 6,
                    }}>
                      {item.subs.map((sub, si) => (
                        <li key={sub.label} style={{
                          height: 28,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingLeft: 10,
                          borderBottom: si < item.subs.length - 1 ? '1px dashed var(--border)' : 'none',
                        }}>
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            style={{
                              fontSize: 13,
                              color: 'var(--ink-2)',
                              textDecoration: 'none',
                              letterSpacing: '-0.005em',
                            }}
                          >
                            {sub.label}
                          </Link>
                          {sub.badge && (
                            <span className="qh-mono" style={{
                              fontSize: 9,
                              padding: '1px 6px',
                              borderRadius: 999,
                              background: 'var(--primary-soft)',
                              color: 'var(--primary)',
                              fontWeight: 700,
                              letterSpacing: '0.08em',
                            }}>
                              {sub.badge}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        {/* Footer bar */}
        <div style={{
          padding: '10px 20px 10px',
          borderTop: '1px solid var(--border-strong)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}>
          <a
            href="https://github.com/ayansasmal/quorum"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 13,
              color: 'var(--ink)',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
              <polygon points="8,1 10,5.7 15,6.4 11.5,10 12.4,15 8,12.7 3.6,15 4.5,10 1,6.4 6,5.7" fill="currentColor" />
            </svg>
            Star on GitHub
          </a>
          <Link
            href="/get-started"
            onClick={onClose}
            style={{ fontSize: 13, color: 'var(--ink)', textDecoration: 'none', fontWeight: 500 }}
          >
            Read the Docs →
          </Link>
        </div>
        <div style={{
          padding: '0 20px 12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--geist-mono), ui-monospace, monospace',
          fontSize: 11,
          color: 'var(--muted)',
          letterSpacing: '0.04em',
        }}>
          <span>questions?</span>
          <a href="mailto:ayan.m.sasmal@gmail.com" style={{ color: 'var(--ink-2)', textDecoration: 'none' }}>
            ayan.m.sasmal@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
