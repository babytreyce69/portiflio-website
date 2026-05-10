interface CardProps {
  title: string
  tag: string
  imageSrc?: string
}

function ProjectCard({ title, tag, imageSrc }: CardProps) {
  return (
    <div className="flex flex-1 min-w-[280px] flex-col overflow-hidden rounded-xl border border-black/20 bg-white transition-transform duration-300 ease-out hover:-translate-y-2">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="h-[238px] w-full object-cover"
        />
      )}
      {!imageSrc && (
        <div className="h-[238px] w-full bg-[rgba(120,120,120,0.1)]" aria-hidden="true" />
      )}
      <div className="flex flex-col gap-2 p-5">
        <span className="inline-flex w-fit items-center rounded-xl bg-black/10 px-2 py-1 text-[14px] font-semibold text-black">
          {tag}
        </span>
        <p className="text-[16px] font-semibold text-black">{title}</p>
      </div>
    </div>
  )
}

export default function CareerHighlights() {
  return (
    <section className="bg-[#f2f0e6]">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-14 sm:px-10 lg:px-10 lg:py-[110px]">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-black text-black lg:text-[24px]">
            Career Highlights
          </h2>
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

        {/* Mobile: horizontal scroll */}
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {[
            { title: 'Config 2022', tag: 'Speaking', imageSrc: undefined },
            { title: 'Config 2022', tag: 'Speaking', imageSrc: '/assets/card-screenshot.png' },
            { title: 'Config 2022', tag: 'Speaking', imageSrc: undefined },
          ].map((card, i) => (
            <div key={i} className="w-[80vw] max-w-[320px] shrink-0">
              <ProjectCard {...card} />
            </div>
          ))}
        </div>

        {/* Tablet + Desktop: 3-col grid */}
        <div className="mt-10 hidden gap-4 sm:flex lg:gap-4">
          <ProjectCard title="Config 2022" tag="Speaking" />
          <ProjectCard title="Config 2022" tag="Speaking" imageSrc="/assets/card-screenshot.png" />
          <ProjectCard title="Config 2022" tag="Speaking" />
        </div>
      </div>
    </section>
  )
}
