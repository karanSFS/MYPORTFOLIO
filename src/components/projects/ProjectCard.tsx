import { ArrowUpRight, ExternalLink, Globe, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { portfolioConfig } from '../../config/index.ts'
import type { Project } from '../../types/portfolio.ts'
import { Surface } from '../common/GlowCard.tsx'
import { TechBadge } from '../common/TechBadge.tsx'
import { ProjectCover } from './ProjectCover.tsx'

interface ProjectCardProps {
  project: Project
  featured?: boolean
  spotlight?: boolean
}

// Brand theme mapping for custom ambient lighting and platform pill badges
interface ProjectMeta {
  accentColor: string
  glowClass: string
  badgeClass: string
  borderHoverClass: string
  platformLabel: string
  platformType: 'appstore' | 'playstore' | 'web'
}

function getProjectMeta(slug: string, liveUrl: string): ProjectMeta {
  if (slug === 'market-ember' || liveUrl.includes('apps.apple.com')) {
    return {
      accentColor: '#f59e0b',
      glowClass: 'from-amber-500/15 via-orange-500/5 to-transparent',
      badgeClass: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
      borderHoverClass: 'hover:border-amber-500/40 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.25)]',
      platformLabel: 'Apple App Store',
      platformType: 'appstore',
    }
  }
  if (slug === 'vora' || liveUrl.includes('play.google.com')) {
    return {
      accentColor: '#a855f7',
      glowClass: 'from-purple-500/15 via-fuchsia-500/5 to-transparent',
      badgeClass: 'border-purple-500/30 bg-purple-500/10 text-purple-300',
      borderHoverClass: 'hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.25)]',
      platformLabel: 'Google Play Store',
      platformType: 'playstore',
    }
  }
  if (slug === 'syncro') {
    return {
      accentColor: '#10b981',
      glowClass: 'from-emerald-500/15 via-teal-500/5 to-transparent',
      badgeClass: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
      borderHoverClass: 'hover:border-emerald-500/40 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.25)]',
      platformLabel: 'Live SaaS Platform',
      platformType: 'web',
    }
  }
  if (slug === 'sossrank') {
    return {
      accentColor: '#6366f1',
      glowClass: 'from-indigo-500/15 via-blue-500/5 to-transparent',
      badgeClass: 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300',
      borderHoverClass: 'hover:border-indigo-500/40 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.25)]',
      platformLabel: 'AI SEO Platform',
      platformType: 'web',
    }
  }
  if (slug === 'docbot-one') {
    return {
      accentColor: '#06b6d4',
      glowClass: 'from-cyan-500/15 via-sky-500/5 to-transparent',
      badgeClass: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300',
      borderHoverClass: 'hover:border-cyan-500/40 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.25)]',
      platformLabel: 'AI Healthcare Platform',
      platformType: 'web',
    }
  }
  return {
    accentColor: '#3b82f6',
    glowClass: 'from-blue-500/15 via-cyan-500/5 to-transparent',
    badgeClass: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    borderHoverClass: 'hover:border-blue-500/40 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.25)]',
    platformLabel: 'Live Platform',
    platformType: 'web',
  }
}

function AppleLogo({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 170 170" fill="currentColor" aria-hidden="true">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.71-14.42-6.19-9.84-10.86-21.2-14.01-34.08-3.16-12.88-4.74-24.36-4.74-34.45 0-14.93 3.65-27.23 10.96-36.88 7.31-9.66 16.59-14.61 27.84-14.86 5.86 0 12.01 1.5 18.45 4.51 6.44 3.01 10.36 4.6 11.76 4.77 1.83-.34 6.07-2.03 12.73-5.07 6.66-3.04 12.74-4.42 18.24-4.14 13.91.73 24.88 5.75 32.92 15.06-11.45 6.94-17.06 16.48-16.83 28.62.24 9.5 3.82 17.47 10.74 23.9 6.92 6.43 15.14 10.15 24.67 11.16-2.04 6.23-4.57 12.77-7.6 19.64zm-30.82-120.9c0 7.42-2.73 14.54-8.19 21.36-5.46 6.82-12.22 11.19-20.28 13.11-.94-6.3-.39-12.92 1.65-19.86 2.04-6.94 5.4-12.67 10.08-17.19 4.68-4.52 10.17-7.23 16.47-8.13.17 3.59.27 7.16.27 10.71z" />
    </svg>
  )
}

function PlayStoreLogo({ className = 'size-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.373 2.373 0 0 1-.61-.924V2.738c.137-.367.348-.684.61-.924zm11.24 11.242L5.436 22.47a2.38 2.38 0 0 0 1.64.444c.594-.038 1.168-.28 1.637-.69l8.608-4.965-2.472-4.203zm0-2.112L17.32 6.74 8.713 1.777a2.404 2.404 0 0 0-1.637-.69c-.6.035-1.173.28-1.64.717l9.413 9.412zm1.484 1.056l3.52 2.032c.983.567.983 1.488 0 2.056l-3.52 2.032-2.187-3.06 2.187-3.06z" />
    </svg>
  )
}

function PlatformPill({ meta }: { meta: ProjectMeta }) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-md border ${meta.badgeClass} shadow-sm`}
    >
      {meta.platformType === 'appstore' && <AppleLogo className="size-3" />}
      {meta.platformType === 'playstore' && <PlayStoreLogo className="size-3" />}
      {meta.platformType === 'web' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
      )}
      <span>{meta.platformLabel}</span>
    </div>
  )
}

export function ProjectCard({ project, featured = false, spotlight = false }: ProjectCardProps) {
  const { cta } = portfolioConfig
  const hasLive = Boolean(project.liveUrl)
  const hasGithub = Boolean(project.githubUrl)
  const isFeatured = featured || Boolean(project.featured)
  const meta = getProjectMeta(project.slug, project.liveUrl)
  const metrics = project.caseStudy?.metrics ?? []

  // ----------------------------------------------------
  // FLAGSHIP SPOTLIGHT HERO CARD (Dual Column Showcase)
  // ----------------------------------------------------
  if (spotlight) {
    return (
      <Surface
        interactive
        className={`group relative overflow-hidden rounded-3xl border border-line/80 ${meta.borderHoverClass} transition-all duration-500 bg-surface/90 shadow-xl`}
      >
        {/* Subtle radial background glow */}
        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br ${meta.glowClass} blur-3xl opacity-70 transition-opacity duration-700 group-hover:opacity-100`}
        />

        <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 sm:p-7 lg:p-8 items-stretch">
          {/* Left / Top: Studio Dark Image Stage (Showing FULL Height & Width with Black BG) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link
              to={`/projects/${project.slug}`}
              className="relative block w-full aspect-[16/10] sm:aspect-[16/10.5] rounded-2xl bg-[#000000] overflow-hidden border border-white/10 shadow-inner group/preview"
            >
              {/* Radial dot grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.12] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
                  backgroundSize: '20px 20px',
                }}
              />

              {project.image ? (
                <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-5 bg-black">
                  {/* Ambient dynamic bloom behind screenshot */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 blur-2xl scale-110 pointer-events-none transition-opacity duration-500 group-hover/preview:opacity-40"
                  />
                  {/* Full HD UI preview contained perfectly */}
                  <img
                    src={project.image}
                    alt={`${project.title} flagship preview`}
                    loading="lazy"
                    className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
                  />
                </div>
              ) : (
                <ProjectCover
                  title={project.title}
                  category={project.category}
                  slug={project.slug}
                  className="h-full w-full"
                />
              )}

              {/* Floating Top Header Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between gap-2 pointer-events-none">
                <PlatformPill meta={meta} />
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-primary uppercase backdrop-blur-md">
                  <Sparkles className="size-3" /> Flagship Project
                </span>
              </div>
            </Link>
          </div>

          {/* Right / Bottom: Rich Content & Architecture Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-1">
            <div>
              {/* Category & Status */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold tracking-[0.18em] text-primary uppercase">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
                <Link
                  to={`/projects/${project.slug}`}
                  className="hover:text-primary transition-colors inline-flex items-center gap-2 group-hover:translate-x-1 duration-300"
                >
                  {project.title}
                  <ArrowUpRight className="size-5 opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all" />
                </Link>
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted">
                {project.shortDescription}
              </p>

              {/* Key Impact Metrics Pill Grid */}
              {metrics.length > 0 && (
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {metrics.slice(0, 3).map((metric, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-line/60 bg-black/30 p-2.5 sm:p-3 text-center backdrop-blur-sm"
                    >
                      <div className="text-sm sm:text-base font-bold text-fg tracking-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-muted line-clamp-1 mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="mt-5">
                <div className="text-[11px] font-mono text-muted/80 uppercase tracking-wider mb-2">
                  Key Technologies
                </div>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 6).map((tech) => (
                    <li key={tech}>
                      <TechBadge label={tech} className="bg-white/[0.04] text-xs py-1" />
                    </li>
                  ))}
                  {project.stack.length > 6 && (
                    <li className="text-[11px] text-muted self-center pl-1 font-mono">
                      +{project.stack.length - 6} more
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line/60">
              <div className="flex items-center gap-3">
                {hasLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 px-3.5 rounded-lg font-medium text-xs sm:text-sm bg-primary text-black hover:bg-primary/90 transition-colors shadow-sm"
                  >
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                    {meta.platformType === 'appstore'
                      ? 'View on App Store'
                      : meta.platformType === 'playstore'
                        ? 'View on Google Play'
                        : cta.liveSite}
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 px-3 rounded-lg text-xs sm:text-sm text-muted hover:text-fg transition-colors border border-line/60 hover:border-line"
                  >
                    {cta.sourceCode}
                  </a>
                )}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="inline-flex h-9 items-center gap-1.5 text-xs sm:text-sm font-semibold text-fg hover:text-primary transition-colors ml-auto"
              >
                {cta.viewCaseStudy}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </article>
      </Surface>
    )
  }

  // ----------------------------------------------------
  // BALANCED 2-COLUMN PROJECT CARD
  // ----------------------------------------------------
  return (
    <Surface
      interactive
      className={`group h-full flex flex-col overflow-hidden rounded-2xl border border-line/75 ${meta.borderHoverClass} transition-all duration-400 bg-surface/95 shadow-md`}
    >
      <article className="flex h-full flex-col">
        {/* Full height and width image preview with solid black background */}
        <Link
          to={`/projects/${project.slug}`}
          className="relative block w-full aspect-[16/10] bg-[#000000] overflow-hidden border-b border-line/60 transition-colors group-hover:border-primary/40 shrink-0"
        >
          {/* Subtle studio dot grid background */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '16px 16px',
            }}
          />

          {project.image ? (
            <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-4 bg-black">
              {/* Subtle ambient blurred glow behind */}
              <img
                src={project.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110 pointer-events-none transition-opacity duration-300 group-hover:opacity-35"
              />
              {/* Main image showing full height and width with black bg */}
              <img
                src={project.image}
                alt={`${project.title} UI preview`}
                loading="lazy"
                className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>
          ) : (
            <ProjectCover
              title={project.title}
              category={project.category}
              slug={project.slug}
              className="h-full w-full"
            />
          )}

          {/* Floating Platform Pill Overlay */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2 pointer-events-none">
            <PlatformPill meta={meta} />
            {isFeatured && (
              <span className="shrink-0 rounded-full border border-secondary/40 bg-secondary/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-secondary uppercase backdrop-blur-sm">
                Featured
              </span>
            )}
          </div>
        </Link>

        {/* Card Body */}
        <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <p className="min-w-0 text-[11px] font-bold tracking-[0.16em] text-primary uppercase truncate">
              {project.category}
            </p>
          </div>

          <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg group-hover:text-primary transition-colors">
            <Link
              to={`/projects/${project.slug}`}
              className="hover:underline underline-offset-4 decoration-primary/40 inline-flex items-center gap-1.5"
            >
              {project.title}
              <ArrowUpRight className="size-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </Link>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-muted line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Metrics Highlight Pills (Top 2 metrics if present) */}
          {metrics.length > 0 && (
            <div className="mt-3.5 flex flex-wrap gap-2">
              {metrics.slice(0, 2).map((m, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/40 border border-line/60 text-[11px] text-fg/90"
                >
                  <span className="font-semibold text-primary">{m.value}</span>
                  <span className="text-muted text-[10px]">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack */}
          <ul className="mt-4 flex flex-wrap gap-1.5 min-h-[2.5rem] content-start">
            {project.stack.slice(0, 5).map((tech) => (
              <li key={tech}>
                <TechBadge label={tech} className="text-xs" />
              </li>
            ))}
            {project.stack.length > 5 && (
              <li className="text-[11px] text-muted self-center pl-1 font-mono">
                +{project.stack.length - 5}
              </li>
            )}
          </ul>

          {/* Bottom Actions */}
          <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line/60 text-sm">
            <div className="flex items-center gap-2 sm:gap-3">
              {hasLive && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-8 items-center gap-1.5 text-xs font-semibold text-primary hover:text-fg transition-colors"
                >
                  {meta.platformType === 'appstore' ? (
                    <AppleLogo className="size-3 shrink-0" />
                  ) : meta.platformType === 'playstore' ? (
                    <PlayStoreLogo className="size-3 shrink-0" />
                  ) : (
                    <Globe className="size-3.5 shrink-0" />
                  )}
                  {meta.platformType === 'appstore'
                    ? 'App Store'
                    : meta.platformType === 'playstore'
                      ? 'Google Play'
                      : cta.liveSite}
                </a>
              )}
              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-8 items-center text-xs text-muted hover:text-fg transition-colors"
                >
                  {cta.sourceCode}
                </a>
              )}
            </div>

            <Link
              to={`/projects/${project.slug}`}
              className="inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-fg hover:text-primary transition-colors ml-auto group/btn"
            >
              {cta.viewCaseStudy}
              <ArrowUpRight className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </article>
    </Surface>
  )
}
