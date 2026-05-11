export default function About() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10 lg:py-[60px]">

        {/* Section heading */}
        <div className="mb-6 flex flex-col gap-2">
          <h2 className="text-[24px] font-black text-black">
            Selected Projects
          </h2>
          <p className="text-[16px] font-semibold text-black">
            Some really cool stuff I have done
          </p>
        </div>

        {/* Feature card */}
        <div className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
          <div className="flex flex-col lg:flex-row lg:items-stretch" style={{ minHeight: 344 }}>
            {/* Text side */}
            <div className="flex flex-col gap-3 p-8 lg:w-[340px] lg:shrink-0 lg:justify-center">
              <h3 className="text-[24px] font-black text-black">
                Career Highlights
              </h3>
              <p className="text-[16px] font-semibold text-black">
                Some really cool stuff I have done
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-3 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Visit Linkedin
              </a>
            </div>

            {/* Image side */}
            <div className="relative flex-1 min-h-[228px]">
              <div className="absolute inset-0 rounded-b-xl bg-[#b4b4b4] lg:rounded-none lg:rounded-r-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
