const OvalPortrait = ({ flipped = false }: { flipped?: boolean }) => (
  <div
    className="relative shrink-0 overflow-hidden rounded-[267.5px] border-4 border-[#8e8e93]"
    style={{
      width: 'clamp(180px, 17.6vw, 267px)',
      height: 'clamp(245px, 24vw, 364px)',
      transform: flipped ? 'scaleX(-1)' : undefined,
    }}
  >
    {/* clouds background layer */}
    <img
      src="/assets/treyce-bg.png"
      alt=""
      aria-hidden="true"
      className="absolute left-[-64.81%] top-[-19.95%] h-[112.59%] w-[230.25%] max-w-none object-cover"
    />
    {/* person layer */}
    <img
      src="/assets/treyce-portrait.png"
      alt={flipped ? '' : 'Treyce Meredith'}
      aria-hidden={flipped}
      className="absolute inset-0 top-[-1.59%] h-[110.03%] w-full max-w-none object-cover"
    />
  </div>
)

export default function Hero() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-start lg:gap-16 lg:px-[215px] lg:py-[68px]">
        {/* Left: text */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-xl font-black leading-snug text-black lg:text-[24px]">
            This is Treyce,{' '}
            <span className="font-black">
              He is a Growth Designer with an endless amount of energy and enthusiasm
            </span>
          </h1>
          <p className="text-sm font-semibold text-black lg:text-[16px]">
            Currently Designing at Mercury
          </p>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-4 text-xs font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Fun button
          </a>
        </div>

        {/* Right: two oval portraits */}
        <div className="flex shrink-0 items-end gap-6 lg:gap-10">
          <OvalPortrait />

          <div className="relative">
            <OvalPortrait flipped />
            {/* Chat bubbles (decorative) */}
            <div className="absolute -left-28 top-10 hidden flex-col gap-1 lg:flex">
              <div className="rounded-xl bg-[#278eff] px-3 py-2 text-[12px] font-normal text-white shadow-sm">
                Hi Treyce
              </div>
            </div>
            <div className="absolute -left-40 bottom-12 hidden flex-col gap-1 lg:flex">
              <div className="rounded-xl bg-[#278eff] px-3 py-2 text-[12px] font-normal text-white shadow-sm">
                Oh hey Treyce
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
