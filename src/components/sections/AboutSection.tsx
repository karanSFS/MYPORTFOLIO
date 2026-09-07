import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

export function AboutSection() {
  const { about } = portfolioConfig

  return (
    <section id="about" className="py-[clamp(3rem,8vw,6.5rem)]">
      <Container>
        <Reveal>
          <SectionHeader
            number={about.sectionNumber}
            label="About"
            heading={about.heading}
            description={about.description}
          />
        </Reveal>

        <div className="mt-12 grid gap-0 border-t border-line sm:grid-cols-2">
          {about.valueCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.05}>
              <article
                className={`group border-line p-6 transition-colors hover:bg-surface/60 sm:p-8 ${
                  index % 2 === 0 ? 'sm:border-r' : ''
                } ${index < 2 ? 'border-b' : ''} ${index >= 2 ? 'max-sm:border-b max-sm:last:border-b-0' : ''}`}
              >
                <p className="text-[11px] tracking-[0.2em] text-secondary uppercase">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-fg transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{card.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
