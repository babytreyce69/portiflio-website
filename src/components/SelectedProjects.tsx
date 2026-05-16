import Tag from './Tag'

function ProjectCard({
  tag,
  tagIcon,
  title,
  description,
  href,
  imageClassName = 'bg-[#b4b4b4]',
}: {
  tag: string
  tagIcon?: React.ReactNode
  title: string
  description: string
  href: string
  imageClassName?: string
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
      <div className="flex flex-col lg:flex-row lg:min-h-[444px]">
        <div className="flex flex-col justify-center gap-4 p-8 lg:w-[55%] lg:p-12">
          <Tag>
            {tagIcon}
            {tag}
          </Tag>
          <h3 className="text-[24px] font-black leading-snug text-black">{title}</h3>
          <p className="text-[16px] font-semibold leading-snug text-black">
            {description}
          </p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex w-fit items-center justify-center rounded-xl border border-black px-4 py-4 text-[12px] font-semibold text-black transition hover:bg-black hover:text-white"
          >
            Learn more
          </a>
        </div>
        <div
          className={`min-h-[280px] flex-1 lg:min-h-0 ${imageClassName}`}
          aria-hidden="true"
        />
      </div>
    </article>
  )
}

export default function SelectedProjects() {
  return (
    <section className="snap-section bg-[#f2f0e6] lg:flex lg:min-h-screen lg:items-center">
      <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10">
        <header className="mb-8 flex max-w-[739px] flex-col gap-2">
          <h2 className="text-[24px] font-black text-black">Selected Projects</h2>
          <p className="text-[16px] font-semibold text-black">
            Some really cool stuff I have done
          </p>
        </header>

        <div className="flex flex-col gap-6">
          <ProjectCard
            tag="Mercury"
            title="Mobile Web Onboarding"
            description="Over the course of 2 years Treyce and his 2X mobile revenue and making mobile the top grossing platform for Dropbox"
            href="https://www.linkedin.com"
          />
          <ProjectCard
            tag="Dropbox"
            title="Individual > Business Upsells"
            description="Treyce designed a comprehensive upsell strategy to get individual Dropbox users to see, try and buy teams plans"
            href="https://www.linkedin.com"
            imageClassName="bg-[#d9d9d9]"
          />
        </div>
      </div>
    </section>
  )
}
