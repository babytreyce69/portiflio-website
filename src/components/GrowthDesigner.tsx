const BEIGE = '#f2f0e6'
const R = 154.5
const CY = 160
const CX_LEFT = 154.5
const CX_RIGHT = 305.5
const MID_X = (CX_LEFT + CX_RIGHT) / 2
const LENS_HALF_HEIGHT = Math.sqrt(R * R - ((CX_RIGHT - CX_LEFT) / 2) ** 2)
const LENS_TOP = CY - LENS_HALF_HEIGHT
const LENS_BOTTOM = CY + LENS_HALF_HEIGHT

/** Intersection of two equal circles — beige fill in the overlap */
const lensPath = [
  `M ${MID_X} ${LENS_TOP}`,
  `A ${R} ${R} 0 0 1 ${MID_X} ${LENS_BOTTOM}`,
  `A ${R} ${R} 0 0 1 ${MID_X} ${LENS_TOP}`,
  'Z',
].join(' ')

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
            viewBox="0 0 460 320"
            className="absolute inset-0"
            fill="none"
          >
            <circle
              cx={CX_LEFT}
              cy={CY}
              r={R}
              fill="white"
              stroke="black"
              strokeWidth={2}
            />
            <circle
              cx={CX_RIGHT}
              cy={CY}
              r={R}
              fill="white"
              stroke="black"
              strokeWidth={2}
            />
            <path d={lensPath} fill={BEIGE} />
          </svg>

          <span className="absolute left-[86px] top-[144px] z-10 text-[16px] font-semibold text-black">
            Design
          </span>
          <span className="absolute right-[70px] top-[144px] z-10 text-[16px] font-semibold text-black">
            Growth
          </span>

          <div
            className="absolute left-1/2 z-10 flex flex-col items-center gap-0"
            style={{ top: CY, transform: 'translate(-50%, -50%)' }}
          >
            <span className="text-[48px] leading-none">👨‍🦰</span>
            <span className="-mt-1 text-[16px] font-semibold leading-tight text-black">
              Me
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
