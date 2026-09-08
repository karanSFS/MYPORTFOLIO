import { CheckCircle2, Cpu, Database, Gauge, Server } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'

interface CompetencyPillar {
  title: string
  subtitle: string
  icon: typeof Database
  badgeClass: string
  glowClass: string
  accentBorder: string
  items: string[]
}

const PILLARS: CompetencyPillar[] = [
  {
    title: 'SaaS & Multi-Tenant Systems',
    subtitle: 'Data isolation, authorization & resilient database design',
    icon: Database,
    badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
    glowClass: 'from-emerald-500/15 via-teal-500/5 to-transparent',
    accentBorder: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]',
    items: [
      'Full-Stack SaaS Product Architecture',
      'Multi-Tenant System Design',
      'PostgreSQL Row Level Security (RLS)',
      'Role-Based Access Control (RBAC)',
    ],
  },
  {
    title: 'Modern Server & APIs',
    subtitle: 'Server-side data contracts, streaming & crawling pipelines',
    icon: Server,
    badgeClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400',
    glowClass: 'from-cyan-500/15 via-blue-500/5 to-transparent',
    accentBorder: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)]',
    items: [
      'Next.js Server Actions & Route Handlers',
      'Real-Time Data Sync & Webhooks',
      'Automated Web Crawling Engines',
    ],
  },
  {
    title: 'Monetization, AI & Messaging',
    subtitle: 'Tiered billing, intelligence pipelines & push alerts',
    icon: Cpu,
    badgeClass: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
    glowClass: 'from-purple-500/15 via-indigo-500/5 to-transparent',
    accentBorder: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.2)]',
    items: [
      'Stripe Subscription & Billing Flows',
      'AI Model Integration & Pipelines',
      'Firebase Cloud Messaging (FCM)',
    ],
  },
  {
    title: 'Performance & Production Ops',
    subtitle: 'State persistence, sub-second latency & cloud delivery',
    icon: Gauge,
    badgeClass: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
    glowClass: 'from-amber-500/15 via-orange-500/5 to-transparent',
    accentBorder: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.2)]',
    items: [
      'State Management & Performance Tuning',
      'Production Deployment on Vercel & Supabase',
    ],
  },
]

export function CompetenciesSection() {
  const { competencies } = portfolioConfig

  // Map any remaining competencies that aren't categorized into pillars as fallback
  const categorizedItems = new Set(PILLARS.flatMap((p) => p.items))
  const remaining = competencies.filter((item) => !categorizedItems.has(item))

  return (
    <section id="competencies" className="relative py-[clamp(3.5rem,7vw,6.5rem)] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_3%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <SectionHeader
            number="05"
            label="Competencies"
            heading="Architectural Capabilities"
            description="The core engineering pillars and production standards behind every system I ship."
          />
        </Reveal>

        {/* 4 Architectural Capability Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon

            return (
              <Reveal key={pillar.title} delay={index * 0.08} className="h-full">
                <article
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${pillar.accentBorder}`}
                >
                  {/* Subtle corner light */}
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${pillar.glowClass} blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    aria-hidden="true"
                  />

                  <div>
                    {/* Header: Icon, Pillar Title, Subtitle */}
                    <div className="flex items-start gap-3.5">
                      <div
                        className={`flex size-11 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${pillar.badgeClass}`}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold tracking-tight text-fg group-hover:text-primary transition-colors">
                          {pillar.title}
                        </h3>
                        <p className="mt-1 text-xs text-muted leading-relaxed">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Competency Items as Clean Interactive Tiles */}
                    <div className="mt-6 space-y-2.5">
                      {pillar.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-2.5 rounded-xl border border-line/70 bg-white/[0.02] px-3.5 py-2.5 text-xs sm:text-sm text-fg transition-all duration-200 hover:border-line hover:bg-surface-secondary/70 hover:translate-x-0.5"
                        >
                          <CheckCircle2
                            className="size-3.5 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Footer Indicator */}
                  <div className="mt-6 pt-3.5 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted/70">
                      {pillar.items.length} Production Capabilities
                    </span>
                    <span className="font-mono text-[11px] text-muted/70">
                      0{index + 1}
                    </span>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Fallback for any unmapped competencies */}
        {remaining.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2.5">
            {remaining.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-line bg-surface px-3 py-1.5 text-xs text-muted"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
