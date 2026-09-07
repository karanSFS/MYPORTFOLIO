import { portfolioConfig } from '../../config/index.ts'
import { Badge } from '../common/Badge.tsx'
import { Button } from '../common/Button.tsx'
import { ResumeActions } from '../common/ResumeActions.tsx'
import { Reveal } from '../common/Reveal.tsx'

export function HeroSection() {
  const { personal, hero, stats, cta } = portfolioConfig

  return (
    <section id="home" className="atmosphere relative overflow-hidden pt-12 pb-[clamp(3.5rem,9vw,7rem)] sm:pt-16">
      <div className="mx-auto grid max-w-[1200px] items-end gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-20 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="success">
              <span className="bg-success size-1.5 rounded-full" />
              {hero.availabilityBadge}
            </Badge>
            <p className="text-xs tracking-[0.14em] text-muted uppercase">{hero.focusLine}</p>
          </div>

          <h1 className="mt-7 text-[clamp(2.6rem,7vw,5rem)] leading-[0.92] font-medium tracking-[-0.045em] text-fg">
            <span className="block text-[clamp(1rem,2vw,1.2rem)] font-normal tracking-[0.02em] text-muted">
              {hero.greeting}
            </span>
            <span className="mt-2 block">{personal.name}</span>
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-snug text-fg/90">{personal.tagline}</p>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-7 text-muted">{hero.description}</p>

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button href={hero.primaryCta.href} size="lg" className="w-full sm:w-auto" arrow>
              {cta.viewWork}
            </Button>
            <ResumeActions size="lg" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:pb-2">
          <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
            <div className="absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--portfolio-primary)_18%,transparent),transparent_55%)]" />
            <div className="relative flex aspect-[4/5] flex-col justify-between p-6 sm:p-7">
              <div>
                <p className="text-[11px] tracking-[0.2em] text-secondary uppercase">Portrait</p>
                {personal.profileImage ? (
                  <img
                    src={personal.profileImage}
                    alt={`Portrait of ${personal.name}`}
                    className="mt-6 aspect-square w-full rounded-lg object-cover object-[center_20%]"
                  />
                ) : (
                  <div className="mt-10 flex items-end gap-1">
                    <span className="text-[5.5rem] leading-none font-medium tracking-tight text-fg/90 sm:text-[6.5rem]">
                      {personal.initials}
                    </span>
                  </div>
                )}
              </div>
              <div className="border-t border-line pt-5">
                <p className="text-sm text-fg">{personal.jobTitle}</p>
                <p className="mt-1 text-sm text-muted">{personal.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-[1200px] px-5 sm:mt-16 sm:px-6 lg:px-8">
        <div className="editorial-rule mb-8" />
        <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-medium tracking-tight text-fg transition-colors group-hover:text-primary">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
