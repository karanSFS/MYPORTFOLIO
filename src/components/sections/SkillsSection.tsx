import { useMemo, useState } from 'react'
import {
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
  Sparkles,
  Wrench,
} from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { skillIcon } from '../../utils/skill-icons.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

const CORE_STACK = new Set([
  'Next.js (App Router)',
  'React.js',
  'TypeScript',
  'Tailwind CSS',
  'PostgreSQL',
  'Supabase (Auth / RLS)',
  'Stripe Billing',
  'Server Actions',
  'Route Handlers',
])

const CATEGORY_ICONS: Record<string, typeof Layers> = {
  frontend: Code2,
  backend: Server,
  database: Database,
  cloud: Cpu,
  tools: Wrench,
}

export function SkillsSection() {
  const { skills } = portfolioConfig

  const totalCount = useMemo(
    () => skills.reduce((acc, group) => acc + group.items.length, 0),
    [skills],
  )

  const filterOptions = useMemo(
    () => [
      { id: 'All', label: 'All', count: totalCount },
      ...skills.map((group) => ({
        id: group.id,
        label: group.label,
        count: group.items.length,
      })),
    ],
    [skills, totalCount],
  )

  const [active, setActive] = useState('All')

  const groups = useMemo(() => {
    if (active === 'All') return skills
    return skills.filter((group) => group.id === active)
  }, [active, skills])

  return (
    <section id="skills" className="relative py-[clamp(3.5rem,8vw,7rem)] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 -left-24 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_4%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <SectionHeader
            number="04"
            label="Skills"
            heading="Technologies I Work With"
            description="A battle-tested production stack for building resilient SaaS platforms, scalable APIs, and reactive interfaces."
          />
        </Reveal>

        {/* Enhanced Category Filter Tabs with Item Counts */}
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill category filters">
          {filterOptions.map((item) => {
            const isActive = item.id === active
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(item.id)}
                className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_-3px_rgba(var(--portfolio-primary-rgb),0.25)]'
                    : 'border-line bg-surface/70 text-muted hover:border-line/90 hover:bg-surface-secondary/70 hover:text-fg'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] ${
                    isActive
                      ? 'bg-primary/20 text-primary'
                      : 'bg-surface-secondary text-muted/80'
                  }`}
                >
                  {item.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="mt-12 space-y-12">
          {groups.map((group) => {
            const CategoryIcon = CATEGORY_ICONS[group.id] ?? Layers

            return (
              <div key={group.id}>
                {/* Category Header */}
                <div className="mb-5 flex items-center justify-between border-b border-line/60 pb-3">
                  <div className="flex items-center gap-2.5">
                    <CategoryIcon className="size-4 text-primary" aria-hidden="true" />
                    <h3 className="font-mono text-xs tracking-[0.18em] text-fg uppercase font-semibold">
                      {group.label}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-muted/70">
                    {group.items.length} technologies
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {group.items.map((item, index) => {
                    const Icon = skillIcon(item)
                    const isCore = CORE_STACK.has(item)

                    return (
                      <Reveal key={item} delay={index * 0.02} as="li" className="h-full">
                        <div
                          className={`group relative flex h-full items-center justify-between gap-3 rounded-xl border bg-surface/80 px-4 py-3 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-surface-secondary/80 ${
                            isCore
                              ? 'border-primary/30 hover:border-primary/60 hover:shadow-[0_0_20px_-5px_rgba(var(--portfolio-primary-rgb),0.2)]'
                              : 'border-line hover:border-line/90'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`flex size-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105 ${
                                isCore
                                  ? 'border-primary/30 bg-primary/10 text-primary'
                                  : 'border-line bg-surface-secondary text-muted group-hover:text-primary'
                              }`}
                            >
                              <Icon className="size-4" aria-hidden="true" />
                            </div>
                            <span className="truncate text-xs sm:text-sm font-medium text-fg">
                              {item}
                            </span>
                          </div>

                          {isCore && (
                            <span
                              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary"
                              title="Core Production Daily Driver"
                            >
                              <Sparkles className="size-2.5" aria-hidden="true" />
                              Core
                            </span>
                          )}
                        </div>
                      </Reveal>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
