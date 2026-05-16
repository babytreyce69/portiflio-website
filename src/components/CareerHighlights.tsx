const businesses = ['Mercury', 'Dropbox', 'OpenTable', 'Life360'] as const

import Tag from './Tag'

function OutlineButton({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-2 inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-4 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white"
    >
      {children}
    </a>
  )
}

export default function CareerHighlights() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="snap-section bg-[#f2f0e6] lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10">
        <header className="mb-8 flex max-w-[739px] flex-col gap-2">
          <h2 className="text-[24px] font-black text-black">
            Treyce has done some pretty cool stuff
          </h2>
          <p className="text-[16px] font-semibold leading-snug text-black">
            He has been a product designer for 10+ years (He&apos;s sorta proud and
            sorta embraced about that it&apos;s a really long time)
          </p>
          <OutlineButton href="https://www.linkedin.com/in/treycemeredith/">
            Visit Linkedin
          </OutlineButton>
        </header>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          {/* Businesses list */}
          <div className="w-full rounded-xl border border-black/20 bg-white p-6 lg:max-w-[460px] lg:shrink-0">
            <Tag>Treyce has grown these businesses</Tag>
            <ul className="mt-6 flex flex-col">
              {businesses.map((name, i) => (
                <li
                  key={name}
                  className={`flex items-center justify-between py-4 ${
                    i < businesses.length - 1 ? 'border-b border-black/10' : ''
                  }`}
                >
                  <span className="text-[16px] font-semibold text-black">{name}</span>
                  <div
                    className="h-[34px] w-[34px] shrink-0 rounded bg-black/5"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Right column */}
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="relative min-h-[200px] overflow-hidden rounded-xl border border-black/20 bg-white p-6 lg:min-h-[166px]">
              <div className="relative z-10 max-w-[55%]">
                <Tag>He spoke at</Tag>
                <p className="mt-4 text-[16px] font-semibold text-black">Config 2022</p>
                <a
                  href="https://www.youtube.com/watch?v=3aH--S3r9n4"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-[14px] font-semibold text-black underline"
                >
                  Watch his talk
                </a>
              </div>
              <img
                src={`${base}assets/card-screenshot.png`}
                alt="Treyce speaking at Config 2022"
                className="absolute right-0 top-0 h-full w-[min(243px,45%)] object-cover"
              />
            </div>

            <div className="min-h-[166px] rounded-xl border border-black/20 bg-white p-6">
              <Tag>Hes great at growth</Tag>
              <p className="mt-4 text-[16px] font-semibold leading-snug text-black">
                Most recently he 2X Banking Application Submissions at Mercury
              </p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[14px] font-semibold text-black underline"
              >
                See case study
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
