import { Bot, CheckCircle2, Layers, ShieldCheck, Zap } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

const cardPillars = [
  {
    icon: Layers,
    pillar: 'Architecture',
    accent: 'from-cyan-500/20 via-blue-500/5 to-transparent',
    borderGlow: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]',
    iconBg: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
  },
  {
    icon: ShieldCheck,
    pillar: 'Security & Isolation',
    accent: 'from-emerald-500/20 via-teal-500/5 to-transparent',
    borderGlow: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]',
    iconBg: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: Bot,
    pillar: 'AI & Automation',
    accent: 'from-purple-500/20 via-indigo-500/5 to-transparent',
    borderGlow: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)]',
    iconBg: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
  },
  {
    icon: Zap,
    pillar: 'Performance & Ops',
    accent: 'from-amber-500/20 via-orange-500/5 to-transparent',
    borderGlow: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]',
    iconBg: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
  },
]

const coreTenets = [
  'PostgreSQL RLS & Middleware RBAC',
  'Next.js Server Actions & Route Handlers',
  'Stripe Webhooks & Real-time State',
  'AI Pipelines & Automated Crawling',
]

export function AboutSection() {
  const { about } = portfolioConfig

  return (
    <section id="about" className="relative py-[clamp(3.5rem,8vw,7rem)] overflow-hidden">
      {/* Background ambient lighting accent */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_4%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <SectionHeader
            number={about.sectionNumber}
            label="About"
            heading={about.heading}
            description={about.description}
          />
        </Reveal>

        {/* Bento Grid of Architectural Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {about.valueCards.map((card, index) => {
            const meta = cardPillars[index] ?? cardPillars[0]
            const Icon = meta.icon

            return (
              <Reveal key={card.title} delay={index * 0.08} className="h-full">
                <article
                  className={`group relative h-full flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${meta.borderGlow}`}
                >
                  {/* Subtle top corner gradient glow on hover */}
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${meta.accent} blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div>
                    {/* Header: Icon & Category Tag */}
                    <div className="flex items-center justify-between gap-4">
                      <div
                        className={`flex size-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${meta.iconBg}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.2em] text-muted uppercase">
                        {String(index + 1).padStart(2, '0')} // {meta.pillar}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-6 text-lg sm:text-xl font-semibold tracking-tight text-fg transition-colors duration-200 group-hover:text-primary">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.925rem]">
                      {card.description}
                    </p>
                  </div>

                  {/* Micro bottom status indicator line */}
                  <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted/80">
                    <span className="font-mono text-[11px] tracking-wider text-muted/70 uppercase">
                      Production Standard
                    </span>
                    <span className="inline-block size-1.5 rounded-full bg-primary/70 transition-transform duration-300 group-hover:scale-125" />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Engineering Philosophy Bar */}
        <Reveal delay={0.35}>
          <div className="mt-8 sm:mt-10 rounded-2xl border border-line/80 bg-surface/50 p-4 sm:p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-muted">
                  Engineering Baseline
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-muted">
                {coreTenets.map((tenet) => (
                  <div key={tenet} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span>{tenet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
