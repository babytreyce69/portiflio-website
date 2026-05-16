const businesses = ['Mercury', 'Dropbox', 'OpenTable', 'Life360'] as const

import { ButtonLink } from './Button'
import Pill, { PillLink } from './Pill'

export default function CareerHighlights() {
  const base = import.meta.env.BASE_URL

  return (
    <section className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10">
        <header className="mb-8 flex max-w-[739px] flex-col gap-2">
          <h2 className="headline">Treyce has done some pretty cool stuff</h2>
          <p className="body-copy">
            He has been a product designer for 10+ years (He&apos;s sorta proud and
            sorta embraced about that it&apos;s a really long time)
          </p>
          <ButtonLink
            href="https://www.linkedin.com/in/treycemeredith/"
            target="_blank"
            rel="noreferrer"
            className="mt-2"
          >
            Visit Linkedin
          </ButtonLink>
        </header>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
          <div className="card w-full p-6 lg:max-w-[460px] lg:shrink-0">
            <Pill onCard={true}>Treyce has grown these businesses</Pill>
            <ul className="mt-2 flex flex-col">
              {businesses.map((name, i) => (
                <li
                  key={name}
                  className={`flex items-center justify-between py-4 ${
                    i < businesses.length - 1 ? 'border-b border-black/10' : ''
                  }`}
                >
                  <span className="body-copy">{name}</span>
                  <div
                    className="h-[34px] w-[34px] shrink-0 rounded bg-black/5"
                    aria-hidden="true"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <div className="card relative min-h-[200px] overflow-hidden p-6 lg:min-h-[166px]">
              <div className="relative z-10 max-w-[55%]">
                <Pill onCard={true}>He spoke at</Pill>
                <p className="body-copy mt-4">Config 2022</p>
                <PillLink
                  href="https://www.youtube.com/watch?v=3aH--S3r9n4"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4"
                >
                  Watch his talk
                </PillLink>
              </div>
              <img
                src={`${base}assets/card-screenshot.png`}
                alt="Treyce speaking at Config 2022"
                className="absolute right-0 top-0 h-full w-[min(243px,45%)] object-cover"
              />
            </div>

            <div className="card min-h-[166px] p-6">
              <Pill onCard={true}>Hes great at growth</Pill>
              <p className="body-copy mt-4">
                Most recently he 2X Banking Application Submissions at Mercury
              </p>
              <PillLink
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mt-4"
              >
                See case study
              </PillLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
