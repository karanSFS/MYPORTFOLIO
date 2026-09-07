import { useMemo, useState } from 'react'
import { portfolioConfig } from '../../config/index.ts'
import { skillIcon } from '../../utils/skill-icons.ts'
import { Container } from '../common/Container.tsx'
import { Surface } from '../common/GlowCard.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'
import { ProjectFilters } from '../projects/ProjectFilters.tsx'

export function SkillsSection() {
  const { skills } = portfolioConfig
  const filterOptions = useMemo(
    () => [
      { id: 'All', label: 'All' },
      ...skills.map((group) => ({
        id: group.id,
        label: group.label,
      })),
    ],
    [skills],
  )
  const [active, setActive] = useState('All')

  const groups = useMemo(() => {
    if (active === 'All') return skills
    return skills.filter((group) => group.id === active)
  }, [active, skills])

  return (
    <section id="skills" className="py-[clamp(3rem,8vw,6.5rem)]">
      <Container>
        <Reveal>
          <SectionHeader
            number="04"
            label="Skills"
            heading="Technologies I Work With"
            description="A practical stack for production SaaS — not a list of everything I have ever opened once."
          />
        </Reveal>
        <div className="mt-8">
          <ProjectFilters
            filters={filterOptions.map((item) => item.label)}
            active={filterOptions.find((item) => item.id === active)?.label ?? 'All'}
            onChange={(label) => {
              const match = filterOptions.find((item) => item.label === label)
              setActive(match?.id ?? 'All')
            }}
          />
        </div>
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <div key={group.id}>
              <h3 className="mb-4 text-sm tracking-[0.16em] text-muted uppercase">{group.label}</h3>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                {group.items.map((item, index) => {
                  const Icon = skillIcon(item)
                  return (
                    <Reveal key={item} delay={index * 0.02} as="li">
                      <Surface
                        interactive
                        className="flex h-full items-center gap-3 px-4 py-3"
                      >
                        <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                        <span className="text-sm text-fg">{item}</span>
                      </Surface>
                    </Reveal>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
