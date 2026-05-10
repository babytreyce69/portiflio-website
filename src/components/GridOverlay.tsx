/**
 * Dev-only 8-column grid overlay.
 * Toggle with: G key
 * Only renders in development (import.meta.env.DEV).
 */
import { useEffect, useState } from 'react'

const COLUMNS = 8
const GUTTER = 20   // px between columns
const MARGIN = 40   // px outer margin (matches lg:px-10 = 40px)

export default function GridOverlay() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') setVisible((v) => !v)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  if (!visible) return null

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] flex justify-center"
      aria-hidden="true"
    >
      <div
        className="relative h-full w-full"
        style={{ maxWidth: 1000 }}
      >
        {/* Column tracks */}
        <div
          className="absolute inset-0 grid h-full"
          style={{
            gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
            columnGap: GUTTER,
            paddingLeft: MARGIN,
            paddingRight: MARGIN,
          }}
        >
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <div
              key={i}
              className="h-full"
              style={{ background: 'rgba(99, 179, 237, 0.18)' }}
            />
          ))}
        </div>

        {/* Outer margin guides */}
        <div
          className="absolute inset-y-0 left-0 border-r border-dashed border-blue-400/40"
          style={{ width: MARGIN }}
        />
        <div
          className="absolute inset-y-0 right-0 border-l border-dashed border-blue-400/40"
          style={{ width: MARGIN }}
        />

        {/* Column number labels */}
        <div
          className="absolute top-2 grid w-full"
          style={{
            gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,
            columnGap: GUTTER,
            paddingLeft: MARGIN,
            paddingRight: MARGIN,
          }}
        >
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <div
              key={i}
              className="text-center text-[10px] font-bold text-blue-500/70"
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Toggle hint */}
      <div className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-[11px] text-white">
        Press <kbd className="rounded bg-white/20 px-1">G</kbd> to toggle grid
      </div>
    </div>
  )
}
