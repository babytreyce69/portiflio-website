const BEIGE = '#f2f0e6'
const STROKE = 2
const R = 154.5
const CY = 160
const CX_LEFT = 154.5
const CX_RIGHT = 305.5
const MID_X = (CX_LEFT + CX_RIGHT) / 2
const LENS_HALF_HEIGHT = Math.sqrt(R * R - ((CX_RIGHT - CX_LEFT) / 2) ** 2)
const LENS_TOP = CY - LENS_HALF_HEIGHT
const LENS_BOTTOM = CY + LENS_HALF_HEIGHT

const TOP_ANGLE_LEFT = Math.atan2(LENS_TOP - CY, MID_X - CX_LEFT)
const BOT_ANGLE_LEFT = Math.atan2(LENS_BOTTOM - CY, MID_X - CX_LEFT)
const TOP_ANGLE_RIGHT = Math.atan2(LENS_TOP - CY, MID_X - CX_RIGHT)
const BOT_ANGLE_RIGHT = Math.atan2(LENS_BOTTOM - CY, MID_X - CX_RIGHT)

/** Padding so 2px strokes are not clipped at circle edges */
const PAD = STROKE

const arcCmd = (rx: number, ry: number, large: 0 | 1, sweep: 0 | 1, x: number, y: number) =>
  `A ${rx} ${ry} 0 ${large} ${sweep} ${x} ${y}`

function circleArcSegment(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  clockwise: boolean,
): string {
  const endX = cx + r * Math.cos(endAngle)
  const endY = cy + r * Math.sin(endAngle)
  let diff = endAngle - startAngle
  if (clockwise) {
    while (diff < 0) diff += 2 * Math.PI
  } else {
    while (diff > 0) diff -= 2 * Math.PI
  }
  const large: 0 | 1 = Math.abs(diff) > Math.PI ? 1 : 0
  const sweep: 0 | 1 = clockwise ? 1 : 0
  return arcCmd(r, r, large, sweep, endX, endY)
}

function circleArcPath(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number,
  clockwise: boolean,
): string {
  const startX = cx + r * Math.cos(startAngle)
  const startY = cy + r * Math.sin(startAngle)
  return `M ${startX} ${startY} ${circleArcSegment(cx, cy, r, startAngle, endAngle, clockwise)}`
}

const lensFill = [
  `M ${MID_X} ${LENS_TOP}`,
  circleArcSegment(CX_LEFT, CY, R, TOP_ANGLE_LEFT, BOT_ANGLE_LEFT, true),
  circleArcSegment(CX_RIGHT, CY, R, BOT_ANGLE_RIGHT, TOP_ANGLE_RIGHT, true),
  'Z',
].join(' ')

const leftOuterStroke = circleArcPath(
  CX_LEFT,
  CY,
  R,
  TOP_ANGLE_LEFT,
  BOT_ANGLE_LEFT,
  false,
)
const rightOuterStroke = circleArcPath(
  CX_RIGHT,
  CY,
  R,
  BOT_ANGLE_RIGHT,
  TOP_ANGLE_RIGHT,
  false,
)

const lensStroke = [
  `M ${MID_X} ${LENS_TOP}`,
  circleArcSegment(CX_LEFT, CY, R, TOP_ANGLE_LEFT, BOT_ANGLE_LEFT, true),
  circleArcSegment(CX_RIGHT, CY, R, BOT_ANGLE_RIGHT, TOP_ANGLE_RIGHT, true),
].join(' ')

/** Shared baseline for Design / Me / Growth labels */
const LABEL_TOP = 160

/**
 * Lobe label positions at y = CY.
 * Design uses an optical offset — geometric midpoint reads too far right
 * against the curved inner edge.
 */
const LEFT_LOBE_INNER_X = CX_RIGHT - R
const RIGHT_LOBE_INNER_X = CX_LEFT + R
const DESIGN_LABEL_X =
  (CX_LEFT - R + LEFT_LOBE_INNER_X) / 2 - 16
const GROWTH_LABEL_X = (RIGHT_LOBE_INNER_X + (CX_RIGHT + R)) / 2

export default function GrowthDesigner() {
  return (
    <section className="snap-section bg-[#f2f0e6] lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col items-center gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-10">
        <div className="flex max-w-[390px] flex-col gap-4">
          <h2 className="text-[24px] font-black leading-snug text-black">
            He is a Growth Designer
          </h2>
          <p className="text-[16px] font-semibold leading-snug text-black">
            He has been doing growth design for 10 years Before it was even really
            a thing (but it was)
          </p>
        </div>

        <div
          className="relative mx-auto shrink-0 origin-center max-[520px]:scale-[0.82] max-[400px]:scale-[0.68]"
          style={{ width: 460, height: 320 }}
          aria-hidden="true"
        >
          <svg
            width="460"
            height="320"
            viewBox={`${-PAD} ${-PAD} ${460 + PAD * 2} ${320 + PAD * 2}`}
            className="absolute inset-0 overflow-visible"
            fill="none"
          >
            <circle cx={CX_LEFT} cy={CY} r={R} fill="white" />
            <circle cx={CX_RIGHT} cy={CY} r={R} fill="white" />
            <path d={lensFill} fill={BEIGE} />

            <g
              stroke="black"
              strokeWidth={STROKE}
              fill="none"
              strokeLinecap="butt"
              strokeLinejoin="round"
            >
              <path d={leftOuterStroke} />
              <path d={rightOuterStroke} />
              <path d={lensStroke} />
            </g>
          </svg>

          <span
            className="absolute z-10 -translate-x-1/2 text-[16px] font-semibold leading-none text-black"
            style={{ top: LABEL_TOP, left: DESIGN_LABEL_X }}
          >
            Design
          </span>
          <span
            className="absolute z-10 -translate-x-1/2 text-[16px] font-semibold leading-none text-black"
            style={{ top: LABEL_TOP, left: GROWTH_LABEL_X }}
          >
            Growth
          </span>
          <span
            className="absolute left-1/2 z-10 -translate-x-1/2 text-[16px] font-semibold leading-none text-black"
            style={{ top: LABEL_TOP }}
          >
            Me
          </span>
          <span
            className="absolute left-1/2 z-10 -translate-x-1/2 text-[48px] leading-none"
            style={{ top: LABEL_TOP - 68 }}
            aria-hidden="true"
          >
            👨‍🦰
          </span>
        </div>
      </div>
    </section>
  )
}
