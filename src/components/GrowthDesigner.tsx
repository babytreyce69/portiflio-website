import Pill from './Pill'

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
      <span className="venn-vertical__label venn-vertical__label--me">Me</span>
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
          <div className="growth-copy max-w-[505px]">
            <Pill className="mb-[14px]">Welcome friends!!!</Pill>
            <h2 className="header mb-[8px]">This is Treyce</h2>
            <div className="body-copy">
              <p className="mb-0">You pronounce it &ldquo;Trace&rdquo;</p>
              <p className="mb-0">Yes his parents spelled it funny....</p>
              <p>It&rsquo;s a long story</p>
            </div>
          </div>

          <VerticalVenn />
        </div>
      </div>
    </section>
  )
}
