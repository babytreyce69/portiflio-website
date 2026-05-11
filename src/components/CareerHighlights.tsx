interface CardProps {
  title: string
  tag: string
  imageSrc?: string
}

function ProjectCard({ title, tag, imageSrc }: CardProps) {
  return (
    <div className="flex flex-1 min-w-[200px] flex-col overflow-hidden rounded-xl border border-black/20 bg-white transition-transform duration-300 ease-out hover:-translate-y-2">
      {imageSrc ? (
        <img src={imageSrc} alt={title} className="h-[158px] w-full object-cover" />
      ) : (
        <div className="h-[158px] w-full bg-black/5" aria-hidden="true" />
      )}
      <div className="flex flex-col gap-1.5 p-4">
        <span className="inline-flex w-fit items-center rounded-lg bg-black/10 px-2 py-1 text-[12px] font-semibold text-black">
          {tag}
        </span>
        <p className="text-[14px] font-semibold text-black">{title}</p>
      </div>
    </div>
  )
}

export default function CareerHighlights() {
  const cards = [
    { title: 'Config 2022', tag: 'Speaking' },
    { title: 'Config 2022', tag: 'Speaking', imageSrc: `${import.meta.env.BASE_URL}assets/card-screenshot.png` },
    { title: 'Config 2022', tag: 'Speaking' },
  ]

  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10 lg:py-[60px]">

        {/* Header row */}
        <div className="flex flex-col gap-2 mb-6">
          <h2 className="text-[24px] font-black text-black">
            Career Highlights
          </h2>
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

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-2 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {cards.map((card, i) => (
            <div key={i} className="w-[75vw] max-w-[260px] shrink-0">
              <ProjectCard {...card} />
            </div>
          ))}
        </div>

        {/* Tablet + Desktop: 3-col grid */}
        <div className="hidden gap-4 sm:flex">
          {cards.map((card, i) => (
            <ProjectCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
