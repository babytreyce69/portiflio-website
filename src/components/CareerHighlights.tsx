import { ButtonLink } from './Button'
import FeatureCard from './FeatureCard'

export default function CareerHighlights() {
  return (
    <section id="highlights" className="canvas snap-section lg:flex lg:min-h-screen lg:items-center">
      <div className="section-inner py-16 lg:py-20">
        <div className="section-header">
          <h2 className="header">Hes done some cool stuff</h2>
          <ButtonLink
            href="https://www.linkedin.com/in/treycemeredith/"
            target="_blank"
            rel="noreferrer"
            className="button--filled shrink-0"
          >
            View Linkedin
          </ButtonLink>
        </div>

        <div className="card-row">
          <FeatureCard
            label="He works at"
            title="Mercury"
            action="Learn more"
            href="https://mercury.com"
          />
          <FeatureCard
            label="He spoke at"
            title="Config"
            action="Watch talk"
            href="https://www.youtube.com/watch?v=3aH--S3r9n4"
          />
          <FeatureCard
            label="He worked at"
            title="Dropbox"
            action="Learn more"
            href="https://www.dropbox.com"
          />
        </div>
      </div>
    </section>
  )
}
