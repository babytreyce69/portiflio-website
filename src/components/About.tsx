export default function About() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-16 sm:px-10 lg:px-[215px] lg:py-[63px]">
        {/* Section heading */}
        <div className="mb-8 flex flex-col gap-4">
          <h2 className="text-xl font-black text-black lg:text-[24px]">
            Selected Projects
          </h2>
          <p className="text-sm font-semibold text-black lg:text-[16px]">
            Some really cool stuff I have done
          </p>
        </div>

        {/* Feature card */}
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            {/* Text side */}
            <div className="flex flex-col gap-4 p-8 lg:w-[400px] lg:shrink-0 lg:justify-center lg:p-12">
              <h3 className="text-xl font-black text-black lg:text-[24px]">
                Career Highlights
              </h3>
              <p className="text-sm font-semibold text-black lg:text-[16px]">
                Some really cool stuff I have done
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-4 text-xs font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Visit Linkedin
              </a>
            </div>

            {/* Image side */}
            <div className="relative flex-1">
              <div
                className="aspect-[344/444] h-full w-full rounded-xl bg-[#b4b4b4] object-cover lg:aspect-auto lg:absolute lg:inset-0 lg:rounded-none lg:rounded-r-xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
