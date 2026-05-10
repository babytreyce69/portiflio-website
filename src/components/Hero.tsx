function OvalPortrait({ flipped = false }: { flipped?: boolean }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[267.5px] border-4 border-[#8e8e93] bg-white"
      style={{
        width: 'clamp(180px, 17.7vw, 267px)',
        height: 'clamp(245px, 24vw, 364px)',
        transform: flipped ? 'scaleX(-1)' : undefined,
      }}
    >
      <img
        src="/assets/treyce-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute left-[-64.81%] top-[-19.95%] h-[112.59%] w-[230.25%] max-w-none object-cover"
      />
      <img
        src="/assets/treyce-portrait.png"
        alt={flipped ? '' : 'Treyce Meredith'}
        aria-hidden={flipped}
        className="absolute inset-0 top-[-1.59%] h-[110.03%] w-full max-w-none object-cover"
      />
    </div>
  )
}

function ChatBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block rounded-2xl bg-[#278eff] px-3.5 py-1.5 text-[14px] font-normal leading-tight text-white shadow-sm">
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-[215px] lg:py-[68px]">
        {/* Left: text + button */}
        <div className="flex flex-1 flex-col gap-4 lg:max-w-[528px]">
          <h1 className="text-xl font-black leading-snug text-black lg:text-[24px] lg:leading-[1.35]">
            This is Treyce,
            <br />
            He is a Growth Designer with an endless amount of energy and
            enthusiasm
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

        {/* Right: portraits cluster with offset + chat bubbles */}
        <div
          className="relative shrink-0"
          style={{
            width: 'clamp(380px, 38vw, 574px)',
            height: 'clamp(330px, 33vw, 501px)',
          }}
        >
          {/* Portrait 1 (left, higher) — Figma: left=0, top=0 within 574x440 cluster */}
          <div className="absolute left-0 top-0">
            <OvalPortrait />
          </div>

          {/* Portrait 2 (right, offset down ~76px) — Figma: left=408, top=76 */}
          <div
            className="absolute"
            style={{
              left: 'clamp(200px, 21.3vw, 308px)',
              top: 'clamp(40px, 5vw, 76px)',
            }}
          >
            <OvalPortrait flipped />
          </div>

          {/* Chat bubble — "Hi Treyce" — upper-right gap, above portrait 2 */}
          <div
            className="absolute"
            style={{
              left: 'clamp(170px, 18vw, 275px)',
              top: 'clamp(20px, 2.4vw, 36px)',
            }}
          >
            <ChatBubble>Hi Treyce</ChatBubble>
          </div>

          {/* Chat bubble — "Oh hey Treyce" — lower-mid gap, below portrait 1 face */}
          <div
            className="absolute"
            style={{
              left: 'clamp(150px, 16vw, 240px)',
              top: 'clamp(185px, 19.6vw, 296px)',
            }}
          >
            <ChatBubble>Oh hey Treyce</ChatBubble>
          </div>
        </div>
      </div>
    </section>
  )
}
