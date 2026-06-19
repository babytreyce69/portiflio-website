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
      <img
        src={`${base}assets/chat-bubble-tail.svg`}
        alt=""
        className="hero-bubble__tail"
      />
      <span className="hero-bubble__body">Nice to meet ya!</span>
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
