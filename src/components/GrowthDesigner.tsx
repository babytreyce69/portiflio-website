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
          {/* Left circle — Design */}
          <div
            className="absolute left-0 top-1/2 h-[309px] w-[309px] -translate-y-1/2 rounded-full border-2 border-black/15 bg-white"
          />
          <span className="absolute left-[86px] top-[144px] text-[16px] font-semibold text-black">
            Design
          </span>

          {/* Right circle — Growth */}
          <div
            className="absolute right-0 top-1/2 h-[309px] w-[309px] -translate-y-1/2 rounded-full border-2 border-black/15 bg-[#f2f0e6]"
          />
          <span className="absolute right-[70px] top-[144px] text-[16px] font-semibold text-black">
            Growth
          </span>

          {/* Center overlap / Me */}
          <span className="absolute left-1/2 top-[128px] -translate-x-1/2 text-[48px] leading-none">
            👨‍🦰
          </span>
          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[16px] font-semibold text-black">
            Me
          </span>
        </div>
      </div>
    </section>
  )
}
