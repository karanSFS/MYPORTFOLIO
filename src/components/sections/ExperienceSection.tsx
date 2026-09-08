import { Building2, Calendar, CheckCircle2, MapPin } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'
import { TechBadge } from '../common/TechBadge.tsx'

const experienceStacks: Record<string, string[]> = {
  'Full-Stack Developer': [
    'Next.js (App Router)',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Supabase (Auth/RLS)',
    'Stripe Billing',
    'Firebase FCM',
    'Vercel',
  ],
  'Full-Stack Developer Intern': [
    'Next.js',
    'React',
    'TypeScript',
    'MongoDB',
    'REST APIs',
    'Tailwind CSS',
    'Component Systems',
  ],
}

export function ExperienceSection() {
  const { experience } = portfolioConfig

  return (
    <section id="experience" className="relative py-[clamp(3.5rem,8vw,7rem)] overflow-hidden">
      {/* Subtle atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_4%,transparent)_0%,transparent_70%)] blur-3xl" />
      </div>

      <Container>
        <Reveal>
          <SectionHeader
            number="03"
            label="Experience"
            heading="Where I've Been Building"
            description="Production ownership across SaaS products — building scalable systems from architecture to production deployment."
          />
        </Reveal>

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Vertical Glowing Timeline Rail */}
          <div
            className="absolute top-6 bottom-8 left-3.5 sm:left-5 w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary via-line to-line/20"
            aria-hidden="true"
          />

          <ol className="space-y-10 sm:space-y-12">
            {experience.map((item, index) => {
              const isCurrent = item.period.toLowerCase().includes('present')
              const stack = experienceStacks[item.role] ?? []

              return (
                <li key={`${item.company}-${item.role}`} className="relative pl-9 sm:pl-14">
                  {/* Timeline Milestone Node - perfectly centered on the rail */}
                  <div
                    className={`absolute left-3.5 sm:left-5 top-6 flex size-5 -translate-x-1/2 items-center justify-center rounded-full border bg-background transition-transform duration-300 ${
                      isCurrent
                        ? 'border-primary shadow-[0_0_12px_rgba(var(--portfolio-primary-rgb),0.5)]'
                        : 'border-line'
                    }`}
                    aria-hidden="true"
                  >
                    <div
                      className={`size-2 rounded-full ${
                        isCurrent ? 'bg-primary animate-pulse' : 'bg-muted/60'
                      }`}
                    />
                  </div>

                  <Reveal delay={index * 0.1}>
                    <article className="group relative rounded-2xl border border-line bg-surface/75 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-line/90 hover:bg-surface/95 hover:-translate-y-0.5 hover:shadow-lg">
                      {/* Top Header Row: Status Badge & Date */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line/60">
                        {isCurrent ? (
                          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                            <span className="relative flex size-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            Current Role · Full-Time
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-full border border-line bg-surface-secondary/70 px-3 py-1 text-xs font-medium text-muted">
                            Completed · Internship
                          </span>
                        )}

                        <div className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                          <Calendar className="size-3.5 text-secondary" aria-hidden="true" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Role & Company Information */}
                      <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-fg group-hover:text-primary transition-colors">
                            {item.role}
                          </h3>
                          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted">
                            <span className="inline-flex items-center gap-1.5 font-medium text-primary">
                              <Building2 className="size-4 shrink-0" aria-hidden="true" />
                              {item.company}
                            </span>
                            {item.location && (
                              <span className="inline-flex items-center gap-1 text-muted/80">
                                <span className="text-line">•</span>
                                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Accomplishments Bullet Points */}
                      <ul className="mt-6 space-y-3">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-[0.93rem]"
                          >
                            <CheckCircle2
                              className="size-4 shrink-0 text-primary mt-1"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Role Tech Stack Pills */}
                      {stack.length > 0 && (
                        <div className="mt-6 pt-5 border-t border-line/60">
                          <p className="text-xs font-mono uppercase tracking-wider text-muted/70 mb-3">
                            Technologies & Architecture
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {stack.map((tech) => (
                              <TechBadge key={tech} label={tech} />
                            ))}
                          </div>
                        </div>
                      )}
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
