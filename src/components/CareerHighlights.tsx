export default function CareerHighlights() {
  return (
    <section className="bg-[#033017] text-white">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-20 sm:px-10 lg:px-24 lg:py-[110px]">
        <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-[48px]">
          Career Highlights
        </h2>
        <p className="mt-6 text-lg font-semibold sm:text-xl lg:mt-[78px] lg:text-2xl">
          Some really cool stuff I have done
        </p>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-xl border border-white px-4 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-[#033017]"
        >
          Visit Linkedin
        </a>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[44px] lg:grid-cols-4 lg:gap-5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="aspect-[315/354] w-full rounded-xl bg-[#21452d]"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
