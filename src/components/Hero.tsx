import React from 'react'

function OvalPortrait({ flipped = false }: { flipped?: boolean }) {
  const base = import.meta.env.BASE_URL
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[200px] border-[3px] border-[#8e8e93] bg-white"
      style={{
        width: 177,
        height: 241,
        transform: flipped ? 'scaleX(-1)' : undefined,
      }}
    >
      <img
        src={`${base}assets/treyce-bg.png`}
        alt=""
        aria-hidden="true"
        className="absolute left-[-64.81%] top-[-19.95%] h-[112.59%] w-[230.25%] max-w-none object-cover"
      />
      <img
        src={`${base}assets/treyce-portrait.png`}
        alt={flipped ? '' : 'Treyce Meredith'}
        aria-hidden={flipped}
        className="absolute inset-0 top-[-1.59%] h-[110.03%] w-full max-w-none object-cover"
      />
    </div>
  )
}

function ChatBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block rounded-2xl bg-[#278eff] px-4 py-2 text-[15px] font-normal leading-tight text-white shadow-sm">
      {children}
    </div>
  )
}

/** Arch wave: each letter has a peak height + slight horizontal offset; staggered delay sweeps along the word */
const ENERGY_ARCH: ReadonlyArray<{ ax: number; ay: number }> = [
  { ax: -5, ay: -8 },
  { ax: -2.5, ay: -12 },
  { ax: -1, ay: -15 },
  { ax: 0, ay: -17 },
  { ax: 1.5, ay: -15 },
  { ax: 5, ay: -9 },
]

function EnergyWord() {
  const letters = 'energy'.split('')
  return (
    <span className="energy-word" aria-label="energy">
      {letters.map((ch, i) => {
        const { ax, ay } = ENERGY_ARCH[i]!
        return (
          <span
            key={i}
            className="energy-letter"
            style={
              {
                '--energy-ax': `${ax}px`,
                '--energy-ay': `${ay}px`,
                animationDelay: `${i * 0.014}s`,
              } as React.CSSProperties
            }
          >
            {ch}
          </span>
        )
      })}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:gap-6 lg:px-10 lg:py-[40px]">

        {/* Left: grows to fill row so portraits align with right margin / career cards */}
        <div className="flex min-w-0 flex-1 flex-col gap-3 lg:pr-2">
          <h1 className="text-[24px] font-black leading-snug text-black">
            This is Treyce,{' '}
            He is a Growth Designer with an endless amount of{' '}
            <EnergyWord /> and enthusiasm
          </h1>
          <p className="text-[16px] font-semibold text-black">
            Currently Designing at Mercury
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-3 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Fun button
          </a>
        </div>

        {/* Right: portrait cluster — 447px wide × 291px tall (scaled from 675×440) */}
        <div
          className="relative shrink-0"
          style={{ width: 447, height: 291 }}
        >
          {/* Portrait 1 */}
          <div className="absolute left-4 top-0">
            <OvalPortrait />
          </div>

          {/* Portrait 2 — (+270px right, +50px down) */}
          <div className="absolute" style={{ left: 270, top: 50 }}>
            <OvalPortrait flipped />
          </div>

          {/* "Hi Treyce" — overlaps portrait 1 right edge, stays above face */}
          <div className="absolute z-10" style={{ left: 144, top: 38 }}>
            <ChatBubble>Hi Treyce</ChatBubble>
          </div>

          {/* "Oh hey Treyce" — overlaps portrait 2 left edge, sits below face */}
          <div className="absolute z-10" style={{ left: 228, top: 196 }}>
            <ChatBubble>Oh hey Treyce</ChatBubble>
          </div>
        </div>
      </div>
    </section>
  )
}
