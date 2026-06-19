const base = import.meta.env.BASE_URL

function VerticalVenn() {
  return (
    <div className="venn-vertical" aria-hidden="true">
      <img
        src={`${base}assets/venn-top.svg`}
        alt=""
        className="venn-vertical__top"
      />
      <img
        src={`${base}assets/venn-bottom.svg`}
        alt=""
        className="venn-vertical__bottom"
      />
      <span className="venn-vertical__emoji">👨‍🦰</span>
      <span className="venn-vertical__label venn-vertical__label--design">
        Design
      </span>
      <span className="venn-vertical__label venn-vertical__label--me">Me!</span>
      <span className="venn-vertical__label venn-vertical__label--growth">
        Growth
      </span>
    </div>
  )
}

export default function GrowthDesigner() {
  return (
    <section id="growth" className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
      <div className="section-inner py-16 lg:py-20">
        <div className="growth-layout">
          <div className="growth-copy">
            <h2 className="header mb-[8px]">He is a Growth Designer</h2>
            <div className="body-copy">
              <p className="mb-0">
                He has been doing growth design for 10 years
              </p>
              <p className="mb-0">
                Before it was even really a thing (but it was)
              </p>
            </div>
          </div>

          <VerticalVenn />
        </div>
      </div>
    </section>
  )
}
