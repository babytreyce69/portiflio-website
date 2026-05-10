export default function CareerHighlights() {
  return (
    <section className="bg-[#033017] text-white">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-14 sm:px-10 lg:px-24 lg:py-[110px]">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-[48px]">
          Career Highlights
        </h2>
        <p className="mt-3 text-lg font-semibold sm:text-xl lg:mt-4 lg:text-2xl">
          Some really cool stuff I have done
        </p>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center justify-center rounded-xl border border-white px-4 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-[#033017]"
        >
          Visit Linkedin
        </a>

        {/* Mobile: horizontal scroll row */}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 sm:hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[315/354] w-[72vw] max-w-[280px] shrink-0 rounded-xl bg-[#21452d]"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Tablet + Desktop: grid with hover lift */}
        <div className="mt-8 hidden grid-cols-2 gap-5 sm:grid lg:mt-[44px] lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[315/354] w-full rounded-xl bg-[#21452d] transition-transform duration-300 ease-out hover:-translate-y-4"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
