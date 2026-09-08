import { Award, Calendar, GraduationCap } from 'lucide-react'
import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'

export function EducationSection() {
  const { education } = portfolioConfig
  if (education.length === 0) return null

  return (
    <section id="education" className="relative py-[clamp(3rem,6vw,5rem)] overflow-hidden">
      <Container>
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <GraduationCap className="size-4.5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Credentials & Background
              </p>
              <h2 className="text-xl font-semibold tracking-tight text-fg">
                Academic Qualifications
              </h2>
            </div>
          </div>

          {/* Academic Credential Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {education.map((item, index) => {
              const isMasters = item.degree.toLowerCase().includes('master')

              return (
                <Reveal key={`${item.school}-${item.degree}`} delay={index * 0.08} className="h-full">
                  <div
                    className={`group relative flex h-full flex-col justify-between rounded-2xl border border-line bg-surface/80 p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-line/90 hover:bg-surface/95 ${
                      isMasters
                        ? 'hover:shadow-[0_0_30px_-10px_rgba(var(--portfolio-primary-rgb),0.18)]'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Top Header: Period & Honors Pill */}
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-line/60">
                        <div className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
                          <Calendar className="size-3.5 text-secondary" aria-hidden="true" />
                          <span>{item.period}</span>
                        </div>

                        {item.detail && (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 font-mono text-xs font-medium ${
                              isMasters
                                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                                : 'border-line bg-surface-secondary text-muted'
                            }`}
                          >
                            <Award className="size-3" aria-hidden="true" />
                            {item.detail}
                          </span>
                        )}
                      </div>

                      {/* Degree & School Info */}
                      <div className="mt-5">
                        <h3 className="text-lg font-semibold tracking-tight text-fg group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                        <p className="mt-2 text-sm text-muted leading-relaxed">
                          {item.school}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status Chip */}
                    <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted/70">
                      <span className="font-mono text-[11px] uppercase tracking-wider">
                        {isMasters ? 'Postgraduate Degree' : 'Undergraduate Degree'}
                      </span>
                      <span className="font-mono text-[11px]">
                        Graduated
                      </span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
