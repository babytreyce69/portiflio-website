export default function CareerHighlights() {
  return (
    <section className="bg-[#033017] text-white">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-14 sm:px-10 lg:px-24 lg:py-[110px]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-black leading-tight lg:text-[24px]">
              Career Highlights
            </h2>
            <p className="text-sm font-semibold lg:text-[16px]">
              Some really cool stuff I have done
            </p>
          </div>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-white px-4 py-4 text-xs font-semibold text-white transition hover:bg-white hover:text-[#033017]"
          >
            Visit Linkedin
          </a>
        </div>

        {/* Mobile: horizontal scroll row */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[315/354] w-[72vw] max-w-[280px] shrink-0 rounded-xl bg-[#21452d]"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Tablet + Desktop: grid with hover lift */}
        <div className="mt-10 hidden grid-cols-2 gap-5 sm:grid lg:grid-cols-4">
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
