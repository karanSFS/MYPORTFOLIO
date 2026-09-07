import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

export function CompetenciesSection() {
  const { competencies } = portfolioConfig

  return (
    <section id="competencies" className="py-[clamp(2.5rem,6vw,4.5rem)]">
      <Container>
        <Reveal>
          <SectionHeader
            number="05"
            label="Competencies"
            heading="How I work"
            description="The professional capabilities behind the technology list."
          />
        </Reveal>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {competencies.map((item) => (
            <li
              key={item}
              className="border border-line bg-surface px-4 py-3.5 text-sm text-fg transition-colors hover:border-secondary/40"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
