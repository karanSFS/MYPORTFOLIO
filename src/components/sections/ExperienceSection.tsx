import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

export function ExperienceSection() {
  const { experience } = portfolioConfig

  return (
    <section id="experience" className="py-[clamp(3rem,8vw,6.5rem)]">
      <Container>
        <Reveal>
          <SectionHeader
            number="03"
            label="Experience"
            heading="Where I've been building"
            description="Production ownership across SaaS products — not just ticket throughput."
          />
        </Reveal>
        <ol className="mt-12 space-y-0">
          {experience.map((item, index) => (
            <li key={`${item.company}-${item.role}`}>
              <Reveal delay={index * 0.05}>
                <article className="grid gap-6 border-t border-line py-10 lg:grid-cols-[minmax(12rem,0.35fr)_minmax(0,1fr)] lg:gap-12">
                  <div>
                    <p className="text-[11px] tracking-[0.16em] text-muted uppercase">
                      {item.period}
                    </p>
                    <p className="mt-3 text-sm text-primary">{item.company}</p>
                    {item.location ? (
                      <p className="mt-1 text-sm text-muted">{item.location}</p>
                    ) : null}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium tracking-tight text-fg">{item.role}</h3>
                    <ul className="mt-5 space-y-3">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="relative pl-4 text-sm leading-6 text-muted before:absolute before:top-[0.55em] before:left-0 before:size-1 before:rounded-full before:bg-secondary"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
