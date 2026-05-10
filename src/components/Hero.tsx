export default function Hero() {
  return (
    <section className="bg-[#140018] text-white">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-24 lg:py-[68px]">
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-xl font-black leading-tight sm:text-2xl lg:text-[24px] lg:leading-snug">
            Treyce Meredith
            <br />
            is a Growth Designer
          </h1>
          <p className="text-sm font-semibold sm:text-base lg:text-[16px]">
            Currently Designing at Mercury
          </p>
        </div>

        <div
          className="aspect-[650/443] w-full max-w-[650px] shrink-0 rounded-xl bg-[#d9d9d9] lg:w-[650px]"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
