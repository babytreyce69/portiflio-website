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
      <svg
        className="hero-bubble__shape"
        viewBox="0 0 132 58"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M22 0h89a15 15 0 0 1 15 15v20a15 15 0 0 1-15 15H28.2c-3.1 0-6-1.5-7.8-4L0 58l10.4-12.6C6.8 42.5 5 38.4 5 34V15A15 15 0 0 1 20 0h2z" />
      </svg>
      <p className="hero-bubble__text">
        <span>Nice to</span>
        <span>meet ya!</span>
      </p>
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
