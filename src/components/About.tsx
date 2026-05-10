export default function About() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-16 sm:px-10 lg:px-24 lg:py-[63px]">
        <div className="relative rounded-xl bg-white p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] sm:p-12 lg:min-h-[520px] lg:p-[56px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-black leading-tight text-black lg:text-[24px]">
                  Career Highlights
                </h2>
                <p className="text-sm font-semibold text-black lg:text-[16px]">
                  Some really cool stuff I have done
                </p>
              </div>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-4 text-xs font-semibold text-black transition hover:bg-black hover:text-white"
              >
                Visit Linkedin
              </a>
            </div>

            <div className="relative w-full shrink-0 lg:w-[600px]">
              <div
                className="aspect-[600/444] w-full rounded-xl bg-[#b4b4b4]"
                aria-hidden="true"
              />

              <div
                className="absolute -left-12 top-[36%] hidden h-[38px] w-[96px] rounded-sm bg-[#d9d9d9] lg:block"
                aria-hidden="true"
              />
              <div
                className="absolute -right-12 top-1/2 hidden h-[38px] w-[48px] -translate-y-1/2 rounded-sm bg-[#d9d9d9] lg:block"
                aria-hidden="true"
              />
              <div
                className="absolute -top-10 right-[8%] hidden h-[38px] w-[48px] rounded-sm bg-[#d9d9d9] lg:block"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-10 right-[8%] hidden h-[38px] w-[48px] rounded-sm bg-[#d9d9d9] lg:block"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
