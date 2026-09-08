import { ChevronDown, MapPin } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import { portfolioConfig } from '../../config/index.ts'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.ts'
import { Button } from '../common/Button.tsx'
import { ResumeActions } from '../common/ResumeActions.tsx'

const CAPABILITIES = [
  'Next.js',
  'React',
  'TypeScript',
  'PostgreSQL',
  'AI Integration',
  'Cloud Architecture',
  'Stripe Billing',
]

const cubicEase = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const { personal, hero, stats, cta } = portfolioConfig
  const prefersReducedMotion = usePrefersReducedMotion()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.07,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.45,
        ease: cubicEase,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : 0.2,
        ease: cubicEase,
      },
    },
  }

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-14 sm:pt-12 sm:pb-20 lg:min-h-[calc(90vh-var(--header-height))] lg:flex lg:flex-col lg:justify-between"
    >
      {/* Subtle atmospheric background depth & micro technical grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft radial glow behind identity panel and hero */}
        <div className="absolute -top-24 right-[5%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_8%,transparent)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute top-[40%] -left-28 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--portfolio-primary)_4%,transparent)_0%,transparent_70%)] blur-3xl" />
        {/* Barely visible technical micro-grid lines (low opacity, masked) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--portfolio-line)_40%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--portfolio-line)_40%,transparent)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_65%,transparent_100%)] opacity-30" />
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.22fr)_minmax(19rem,0.78fr)] lg:gap-14 xl:gap-20">
          {/* LEFT SIDE: Personal & Engineering Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Availability Indicator & Eyebrow */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-success/25 bg-success/10 px-3 py-1 text-xs font-medium text-success backdrop-blur-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-success" />
                </span>
                <span>{hero.availabilityBadge}</span>
              </div>
              <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
                {hero.focusLine}
              </p>
            </motion.div>

            {/* Greeting and Large Responsive Name */}
            <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
              <span className="block text-base font-normal tracking-wide text-muted sm:text-lg">
                {hero.greeting}
              </span>
              <h1 className="mt-1 text-[clamp(3rem,8.5vw,3.75rem)] md:text-[clamp(3.75rem,7vw,4.5rem)] lg:text-[clamp(4.75rem,5.5vw,5.75rem)] font-bold leading-[0.93] tracking-[-0.04em] text-fg">
                {personal.name}
              </h1>
            </motion.div>

            {/* Primary Supporting Headline */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 max-w-[660px] text-lg font-medium leading-snug tracking-tight text-fg/90 sm:text-xl lg:text-[1.4rem]"
            >
              {personal.tagline}
            </motion.h2>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-[620px] text-[0.98rem] leading-relaxed text-muted sm:text-[1.05rem]"
            >
              {hero.description}
            </motion.p>

            {/* Tech Stack / Capability Signal Row */}
            <motion.div variants={itemVariants} className="mt-6 w-full">
              <p className="font-mono text-[10.5px] font-medium tracking-[0.16em] text-muted/75 uppercase mb-2.5">
                Core Capabilities
              </p>
              <div
                className="flex flex-wrap items-center gap-2"
                aria-label="Core Engineering Capabilities"
              >
                {CAPABILITIES.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line/60 bg-surface/50 px-2.5 py-1 text-xs font-mono text-muted/90 backdrop-blur-xs transition-colors hover:border-primary/40 hover:bg-surface-secondary/70 hover:text-fg"
                  >
                    <span
                      className="size-1 rounded-full bg-primary/70"
                      aria-hidden="true"
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-3.5"
            >
              <Button
                href={hero.primaryCta.href}
                size="lg"
                className="w-full sm:w-auto"
                arrow
              >
                {cta.viewWork}
              </Button>
              <ResumeActions size="lg" />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: Identity Panel / Portrait Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[440px] justify-self-center lg:justify-self-end"
          >
            <div className="group relative overflow-hidden rounded-2xl border border-line/80 bg-surface/75 p-5 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 hover:border-line hover:shadow-primary/5 sm:p-6">
              {/* Subtle accent glow gradient overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_right,color-mix(in_srgb,var(--portfolio-primary)_14%,transparent),transparent_65%)]"
                aria-hidden="true"
              />

              {/* Card Header: Marker and Status */}
              <div className="relative mb-4 flex items-center justify-between border-b border-line/60 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-primary" />
                  <p className="font-mono text-[10.5px] font-medium tracking-[0.22em] text-muted uppercase">
                    PORTRAIT
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium tracking-wider text-muted/80 uppercase">
                  <span className="size-1.5 rounded-full bg-success/80" />
                  ONLINE
                </span>
              </div>

              {/* Framed Portrait Image */}
              <div className="relative overflow-hidden rounded-xl border border-line/70 bg-surface-secondary/40 aspect-[4/4.5] sm:aspect-square">
                {personal.profileImage ? (
                  <img
                    src={personal.profileImage}
                    alt={`Portrait of ${personal.name}`}
                    className="size-full object-cover object-[center_20%] contrast-[103%] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-surface-secondary text-5xl font-semibold text-fg">
                    {personal.initials}
                  </div>
                )}
              </div>

              {/* Role and Location Readout */}
              <div className="relative mt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-base font-semibold tracking-tight text-fg">
                    {personal.jobTitle}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                    <MapPin className="size-3 text-primary" aria-hidden="true" />
                    {personal.location}
                  </span>
                </div>

                {/* Technical Metadata Area */}
                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-line/60 pt-3.5">
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted/75 uppercase">
                      BUILDING
                    </p>
                    <p className="mt-1 font-mono text-xs font-medium text-fg">
                      Production SaaS
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] font-semibold tracking-[0.18em] text-muted/75 uppercase">
                      FOCUS
                    </p>
                    <p className="mt-1 font-mono text-xs font-medium text-fg">
                      AI · Cloud · Full-Stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Footer: Stats strip & Scroll indicator */}
      <div className="mx-auto mt-12 w-full max-w-[1240px] px-5 sm:mt-16 sm:px-6 lg:px-8">
        <div className="editorial-rule mb-8" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-10 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <dt className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-2xl font-semibold tracking-tight text-fg transition-colors group-hover:text-primary sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#about"
            className="group inline-flex items-center gap-2 self-start font-mono text-[11px] font-medium tracking-[0.2em] text-muted/70 uppercase transition-colors hover:text-fg sm:self-auto"
            aria-label="Scroll to explore portfolio"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown
              className="size-3.5 text-primary transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
