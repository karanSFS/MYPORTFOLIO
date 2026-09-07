import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'

export function EducationSection() {
  const { education } = portfolioConfig
  if (education.length === 0) return null

  return (
    <section id="education" className="py-[clamp(2rem,5vw,3.5rem)]">
      <Container>
        <Reveal>
          <p className="mb-4 text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
            Education
          </p>
          <div className="divide-y divide-line border-y border-line">
            {education.map((item) => (
              <div
                key={`${item.school}-${item.degree}`}
                className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h2 className="text-base font-medium text-fg">{item.degree}</h2>
                  <p className="text-sm text-muted">{item.school}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{item.period}</p>
                  {item.detail ? <p>{item.detail}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
