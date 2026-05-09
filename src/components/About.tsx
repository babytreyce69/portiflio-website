export default function About() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1512px] px-6 py-16 sm:px-10 lg:px-24 lg:py-[63px]">
        <div className="relative rounded-xl bg-white p-8 shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] sm:p-12 lg:min-h-[520px] lg:p-[56px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-black leading-tight text-black sm:text-5xl lg:text-[48px] lg:leading-[1.1]">
                Treyce Meredith
                <br />
                is a Growth Designer
              </h2>
            </div>

            <div className="relative w-full shrink-0 lg:w-[545px]">
              <div
                className="aspect-[545/444] w-full rounded-xl bg-[#b4b4b4]"
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
