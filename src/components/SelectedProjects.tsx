import { useState } from 'react'
import { getCaseStudy } from '../data/projectCaseStudies'
import { Button } from './Button'
import Pill from './Pill'
import ProjectCaseStudyModal from './ProjectCaseStudyModal'

function ProjectCard({
  tag,
  tagIcon,
  title,
  description,
  caseStudyId,
  onLearnMore,
  imageClassName = 'bg-placeholder-dark',
}: {
  tag: string
  tagIcon?: React.ReactNode
  title: string
  description: string
  caseStudyId: string
  onLearnMore: (id: string) => void
  imageClassName?: string
}) {
  return (
    <article className="card overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:min-h-[444px]">
        <div className="flex flex-col justify-center gap-4 p-8 lg:w-[55%] lg:p-12">
          <Pill>
            {tagIcon}
            {tag}
          </Pill>
          <h3 className="headline">{title}</h3>
          <p className="body-copy">{description}</p>
          <Button className="mt-1" onClick={() => onLearnMore(caseStudyId)}>
            Learn more
          </Button>
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
  const [openCaseStudyId, setOpenCaseStudyId] = useState<string | null>(null)
  const openStudy = openCaseStudyId ? getCaseStudy(openCaseStudyId) : undefined

  return (
    <>
      <section className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
        <div className="mx-auto w-full max-w-[1000px] px-6 py-10 sm:px-10 lg:px-10">
          <header className="mb-8 flex max-w-[739px] flex-col gap-2">
            <h2 className="headline">Selected Projects</h2>
            <p className="body-copy">Some really cool stuff I have done</p>
          </header>

          <div className="flex flex-col gap-6">
            <ProjectCard
              tag="Mercury"
              title="Mobile Web Onboarding"
              description="Over the course of 2 years Treyce and his 2X mobile revenue and making mobile the top grossing platform for Dropbox"
              caseStudyId="mercury"
              onLearnMore={setOpenCaseStudyId}
            />
            <ProjectCard
              tag="Dropbox"
              title="Individual > Business Upsells"
              description="Treyce designed a comprehensive upsell strategy to get individual Dropbox users to see, try and buy teams plans"
              caseStudyId="dropbox"
              onLearnMore={setOpenCaseStudyId}
              imageClassName="bg-placeholder"
            />
          </div>
        </div>
      </section>

      {openStudy ? (
        <ProjectCaseStudyModal
          study={openStudy}
          onClose={() => setOpenCaseStudyId(null)}
        />
      ) : null}
    </>
  )
}
