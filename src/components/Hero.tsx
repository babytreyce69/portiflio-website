const base = import.meta.env.BASE_URL

function Portrait() {
  return (
    <div className="portrait">
      <img
        src={`${base}assets/treyce-portrait.png`}
        alt="Treyce Meredith"
        className="portrait__image"
      />
    </div>
  )
}

function ChatBubble() {
  return (
    <div className="hero-bubble" aria-hidden="true">
      <div className="hero-bubble__row">
        <div className="hero-bubble__rail hero-bubble__rail--left">
          <div className="hero-bubble__cap hero-bubble__cap--tl" />
          <div className="hero-bubble__edge" />
          <svg
            className="hero-bubble__tail"
            viewBox="0 0 19.4595 19.1517"
            aria-hidden="true"
          >
            <path d="M19.1957 0.26382V18.8878C16.0791 18.8878 13.2211 17.7802 10.9945 15.9367C8.7733 17.4164 5.21248 18.8245 0.909546 18.0421C2.09474 17.5342 6.66577 14.486 6.49646 8.39077C6.51667 8.41856 6.54 8.4443 6.56189 8.47085C6.40893 7.67757 6.32753 6.85859 6.32751 6.02066V0.26382H19.1957Z" />
          </svg>
        </div>

        <div className="hero-bubble__body">
          <p className="hero-bubble__text">
            <span>Nice to</span>
            <span>meet ya!</span>
          </p>
        </div>

        <div className="hero-bubble__rail hero-bubble__rail--right">
          <div className="hero-bubble__rail-flip">
            <div className="hero-bubble__cap hero-bubble__cap--tl" />
            <div className="hero-bubble__edge" />
            <div className="hero-bubble__cap hero-bubble__cap--tl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
      <div className="section-inner py-24 lg:py-28">
        <div className="split-section">
          <div className="split-section__col split-section__col--start">
            <div className="hero-visual">
              <Portrait />
              <ChatBubble />
            </div>
          </div>

          <div className="split-section__col split-section__col--end">
            <div className="hero-copy">
              <h1 className="header mb-[8px]">This is Treyce</h1>
              <div className="body-copy">
                <p className="mb-0">
                  You pronounce it &ldquo;Trace&rdquo;. Yes his parents spelled it
                  funny....It&rsquo;s a long story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
