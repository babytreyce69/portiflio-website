import { useId } from 'react'

/** One zig-zag period from Figma wave (node 76:1604), normalized to x=0. */
const TILE_VIEW_W = 16.0465
const TILE_VIEW_H = 18
const TILE_PATH = 'M0 13 L7.7017 6.53913 L16.0465 12.4609'

type WaveLineProps = {
  className?: string
}

export default function WaveLine({ className }: WaveLineProps) {
  const patternId = useId()
  const tileWidth = (TILE_VIEW_W / TILE_VIEW_H) * 7

  return (
    <svg
      className={className}
      width="100%"
      height="7"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id={patternId}
          patternUnits="userSpaceOnUse"
          width={tileWidth}
          height="7"
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
      <rect width="100%" height="7" fill={`url(#${patternId})`} />
    </svg>
  )
}
