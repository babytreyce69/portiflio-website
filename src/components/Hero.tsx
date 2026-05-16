import type { ReactNode } from 'react'

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

function ChatBubble({ children }: { children: ReactNode }) {
  return (
    <div className="inline-block rounded-2xl bg-[#278eff] px-4 py-2 text-[15px] font-normal leading-tight text-white shadow-sm">
      {children}
    </div>
  )
}

export default function Hero() {
  return (
    <section className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 px-6 py-10 sm:px-10 lg:flex-row lg:items-start lg:gap-6 lg:px-10 lg:py-[40px]">
        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:max-w-[360px] lg:pt-8">
          <span className="text-[64px] leading-none" aria-hidden="true">
            👉
          </span>
          <h1 className="headline">This is Treyce</h1>
          <p className="body-copy">
            You pronounce it &ldquo;Trace&rdquo; Yes his parents spelled it funny....
            It&rsquo;s a long story
          </p>
        </div>

        <div
          className="relative mx-auto shrink-0 lg:mx-0"
          style={{ width: 447, height: 291 }}
        >
          <div className="absolute left-4 top-0">
            <OvalPortrait />
          </div>
          <div className="absolute" style={{ left: 270, top: 50 }}>
            <OvalPortrait flipped />
          </div>
          <div className="absolute z-10" style={{ left: 144, top: 38 }}>
            <ChatBubble>Hi Treyce</ChatBubble>
          </div>
          <div className="absolute z-10" style={{ left: 228, top: 196 }}>
            <ChatBubble>Oh hey Treyce</ChatBubble>
          </div>
        </div>
      </div>
    </section>
  )
}
