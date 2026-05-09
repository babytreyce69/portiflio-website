export default function Hero() {
  return (
    <section className="bg-[#140018] text-white">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-24 lg:py-[68px]">
        <div className="flex-1">
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-[48px] lg:leading-[1.1]">
            Treyce Meredith
            <br />
            is a Growth Designer
          </h1>
          <p className="mt-6 text-lg font-semibold sm:text-xl lg:mt-9 lg:text-2xl">
            Currently Designing at Mercury
          </p>
        </div>

        <div
          className="aspect-[691/443] w-full max-w-[691px] shrink-0 rounded-xl bg-[#d9d9d9] lg:w-[691px]"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
