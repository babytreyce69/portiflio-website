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
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-12 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-12 lg:px-10 lg:py-[68px]">
        {/* Left: text + button */}
        <div className="flex flex-1 flex-col gap-4 lg:max-w-[380px]">
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

        {/* Right: portraits cluster with offset + chat bubbles — matches Figma 675×501 */}
        <div
          className="relative shrink-0"
          style={{
            width: 'clamp(430px, 44.6vw, 675px)',
            height: 'clamp(330px, 33vw, 501px)',
          }}
        >
          {/* Portrait 1 — Figma: (0, 0) */}
          <div className="absolute left-0 top-0">
            <OvalPortrait />
          </div>

          {/* Portrait 2 — Figma: (408, 76) */}
          <div
            className="absolute"
            style={{
              left: 'clamp(260px, 27vw, 408px)',
              top: 'clamp(48px, 5vw, 76px)',
            }}
          >
            <OvalPortrait flipped />
          </div>

          {/* Chat bubble — "Hi Treyce" — Figma: (222, 93), overlaps right edge of portrait 1 + upper gap */}
          <div
            className="absolute"
            style={{
              left: 'clamp(142px, 14.7vw, 222px)',
              top: 'clamp(60px, 6.2vw, 93px)',
            }}
          >
            <ChatBubble>Hi Treyce</ChatBubble>
          </div>

          {/* Chat bubble — "Oh hey Treyce" — Figma: (267, 197), sits across the gap */}
          <div
            className="absolute"
            style={{
              left: 'clamp(170px, 17.7vw, 267px)',
              top: 'clamp(125px, 13vw, 197px)',
            }}
          >
            <ChatBubble>Oh hey Treyce</ChatBubble>
          </div>
        </div>
      </div>
    </section>
  )
}
