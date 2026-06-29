import { useId } from 'react'

/** Figma wave divider (nodes 76:1604 / 80:1889) — one tile period, x normalized to 0. */
export const WAVE_HEIGHT = 18
const TILE_VIEW_W = 16.0465
const TILE_VIEW_H = 18
const TILE_PATH =
  'M0 13 L7.7017 6.53913 C8.0734 6.22731 8.6153 6.2273 8.987 6.53912 L16.0465 12.4609'

type WaveLineProps = {
  className?: string
}

export default function WaveLine({ className }: WaveLineProps) {
  const patternId = useId()
  const tileWidth = (TILE_VIEW_W / TILE_VIEW_H) * WAVE_HEIGHT

  return (
    <svg
      className={className}
      width="100%"
      height={WAVE_HEIGHT}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={tileWidth}
          height={WAVE_HEIGHT}
          viewBox={`0 0 ${TILE_VIEW_W} ${TILE_VIEW_H}`}
          preserveAspectRatio="none"
        >
          <path
            d={TILE_PATH}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height={WAVE_HEIGHT} fill={`url(#${patternId})`} />
    </svg>
  )
}
