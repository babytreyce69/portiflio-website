import { useState } from 'react'
import { getCaseStudy } from '../data/projectCaseStudies'
import FeatureCard from './FeatureCard'
import ProjectCaseStudyModal from './ProjectCaseStudyModal'

const projects = [
  {
    id: 'mercury',
    tag: 'Mercury',
    title: 'Mobile Onboarding Redesign',
    action: 'Learn more',
  },
  {
    id: 'dropbox',
    tag: 'Dropbox',
    title: 'Individual to Teams Upsells',
    action: 'Learn more',
  },
  {
    id: 'opentable',
    tag: 'OpenTable',
    title: 'Self Service Transformation',
    action: 'Learn more',
    href: 'https://www.linkedin.com/in/treycemeredith/',
  },
] as const

export default function SelectedProjects() {
  const [openCaseStudyId, setOpenCaseStudyId] = useState<string | null>(null)
  const openStudy = openCaseStudyId ? getCaseStudy(openCaseStudyId) : undefined

  return (
    <>
      <section id="projects" className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
        <div className="section-inner py-16 lg:py-20">
          <div className="section-header">
            <h2 className="header">Projects</h2>
          </div>

          <div className="card-row">
            {projects.map((project) => (
              <FeatureCard
                key={project.id}
                label={project.tag}
                title={project.title}
                action={project.action}
                href={'href' in project ? project.href : undefined}
                onAction={
                  !('href' in project)
                    ? () => setOpenCaseStudyId(project.id)
                    : undefined
                }
              />
            ))}
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
