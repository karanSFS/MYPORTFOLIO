import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronsDown,
  Cpu,
  ExternalLink,
  Layers,
  Lightbulb,
  Maximize2,
  Minimize2,
  MoveDown,
  RotateCcw,
  Sparkles,
  Trophy,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { portfolioConfig } from '../config/index.ts'
import { Button } from '../components/common/Button.tsx'
import { Container } from '../components/common/Container.tsx'
import { Seo } from '../components/common/Seo.tsx'
import { TechBadge } from '../components/common/TechBadge.tsx'
import { ProjectCover } from '../components/projects/ProjectCover.tsx'
import { NotFoundPage } from '../pages/NotFoundPage.tsx'
import { projectJsonLd } from '../utils/seo.ts'
import { cn } from '../utils/cn.ts'
function ScreenshotItem({
  src,
  title,
  index,
  total,
  onClick,
}: {
  src: string
  title: string
  index: number
  total: number
  onClick: () => void
}) {
  const [isTall, setIsTall] = useState(false)

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-line/80 bg-[#000000] p-3 shadow-xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#000000] flex items-center justify-center">
        {/* Ambient glow behind */}
        <img
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl scale-110 pointer-events-none"
        />

        {isTall ? (
          <div className="relative z-10 w-full h-full overflow-hidden flex items-start justify-center">
            <img
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              loading="lazy"
              onLoad={(e) => {
                const img = e.currentTarget
                if (img.naturalHeight > img.naturalWidth * 1.15) {
                  setIsTall(true)
                }
              }}
              className="w-full h-auto object-top transition-transform duration-[6000ms] ease-in-out group-hover:-translate-y-[calc(100%-100%)]"
            />
          </div>
        ) : (
          <img
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            loading="lazy"
            onLoad={(e) => {
              const img = e.currentTarget
              if (img.naturalHeight > img.naturalWidth * 1.15) {
                setIsTall(true)
              }
            }}
            className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}

        {/* Top-right badge if tall/scrollable */}
        {isTall && (
          <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1.5 rounded-full border border-primary/40 bg-black/80 px-2.5 py-1 text-[10px] font-semibold text-primary backdrop-blur-md shadow-md">
            <ChevronsDown className="size-3 animate-bounce" />
            Full Scroll Page
          </div>
        )}

        {/* Hover expand overlay */}
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/85 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:scale-105 transition-transform">
            <Maximize2 className="size-3.5 text-primary" />
            {isTall ? 'Full Zoom & Scroll' : 'Expand Full HD'}
          </span>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between px-2 text-xs text-muted">
        <span className="font-medium text-fg/85">
          {title} — View {index + 1} of {total}
        </span>
        <span className="text-primary font-mono text-[11px]">
          {isTall ? 'Scrollable Page' : 'HD Preview'}
        </span>
      </div>
    </div>
  )
}

export default function ProjectCaseStudyPage() {
  const { slug } = useParams()
  const projects = portfolioConfig.projects
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projectIndex >= 0 ? projects[projectIndex] : undefined
  const { cta } = portfolioConfig
  const [headerCompact, setHeaderCompact] = useState(false)
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null)
  const [activeModalIndex, setActiveModalIndex] = useState<number>(0)
  const [modalZoomMode, setModalZoomMode] = useState<'scroll' | 'fit'>('scroll')
  const [zoomScale, setZoomScale] = useState<number>(1)
  const [isModalImageTall, setIsModalImageTall] = useState<boolean>(false)
  const [scrolledModal, setScrolledModal] = useState<boolean>(false)

  const openModal = (src: string, index: number) => {
    setActiveModalImage(src)
    setActiveModalIndex(index)
    setZoomScale(1)
    setModalZoomMode('scroll')
    setIsModalImageTall(false)
    setScrolledModal(false)
  }

  const prev = projectIndex > 0 ? projects[projectIndex - 1] : undefined
  const next =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : undefined

  useEffect(() => {
    const onScroll = () => setHeaderCompact(window.scrollY > 240)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModalImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!project) return <NotFoundPage />

  const study = project.caseStudy
  const jsonLd = projectJsonLd(project.slug)

  return (
    <article className="overflow-x-hidden pb-[clamp(3rem,8vw,6.5rem)]">
      <Seo
        title={project.seoTitle}
        description={project.seoDescription}
        path={`/projects/${project.slug}`}
        jsonLd={jsonLd}
      />

      {/* Sticky Project Bar */}
      <div
        className={cn(
          'sticky top-[var(--header-height)] z-30 border-b transition-all duration-300',
          headerCompact
            ? 'border-line/80 bg-background/90 py-3 backdrop-blur-xl shadow-lg'
            : 'border-transparent bg-transparent py-0 pointer-events-none opacity-0 h-0 overflow-hidden',
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-fg">{project.title}</p>
            <p className="truncate text-xs text-muted">{project.category}</p>
          </div>
          <div className="flex items-center gap-2">
            {project.liveUrl ? (
              <Button href={project.liveUrl} target="_blank" rel="noreferrer" size="md">
                <ExternalLink className="size-3.5 mr-1" />
                {cta.liveSite}
              </Button>
            ) : null}
            <Button href="/#projects" variant="secondary" size="md">
              All Projects
            </Button>
          </div>
        </Container>
      </div>

      {/* Header & Meta */}
      <Container className="pt-8 sm:pt-12">
        <Link
          to="/#projects"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg transition-colors group"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to all projects
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase">
            {project.category}
          </span>
          {project.company ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              <Building2 className="size-3.5 text-sky-400" />
              Associated with {project.company}
            </span>
          ) : null}
          {project.featured ? (
            <span className="rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-xs font-medium tracking-wider text-secondary uppercase">
              Featured Case Study
            </span>
          ) : null}
          {project.liveUrl ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live in Production
            </span>
          ) : null}
        </div>

        <h1 className="mt-4 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.03em] text-fg">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg sm:text-xl leading-relaxed text-muted">
          {project.shortDescription}
        </p>

        {study.roleTags && study.roleTags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {study.roleTags.map((tag) => (
              <li
                key={tag}
                className="rounded-lg border border-line bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-fg shadow-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          {project.liveUrl ? (
            <Button href={project.liveUrl} target="_blank" rel="noreferrer" arrow size="lg">
              <ExternalLink className="size-4 mr-1.5" />
              {cta.liveSite}
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button href={project.githubUrl} variant="secondary" target="_blank" rel="noreferrer" size="lg">
              {cta.sourceCode}
            </Button>
          ) : null}
          <a
            href="#case-study-grid"
            className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-line bg-surface/50 px-5 text-sm font-medium text-muted hover:text-fg hover:border-line-hover transition-colors"
          >
            Explore Case Study
            <ArrowRight className="size-4" />
          </a>
        </div>
      </Container>

      {/* Hero Visual Preview Card with Pure Black Background */}
      <Container className="mt-10">
        {project.image ? (
          <div className="group relative w-full aspect-[16/10] sm:aspect-[21/9] bg-[#000000] rounded-2xl border border-line/80 overflow-hidden flex items-center justify-center p-3 sm:p-6 shadow-2xl">
            {/* Ambient colorful backlight glow */}
            <img
              src={project.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover opacity-25 blur-3xl scale-110 pointer-events-none"
            />
            {/* Main image showing full height and width with black bg */}
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] drop-shadow-2xl"
            />

            <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
              HD Live Interface
            </div>

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 z-20 hidden sm:inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-black/80 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-md hover:bg-primary hover:text-black transition-all shadow-lg"
              >
                <ExternalLink className="size-3.5" />
                Launch App
              </a>
            ) : null}
          </div>
        ) : (
          <ProjectCover
            title={project.title}
            category={project.category}
            slug={project.slug}
            className="aspect-[16/8] rounded-2xl border border-line"
          />
        )}
      </Container>

      {/* Key Architectural Metrics Bar */}
      {study.metrics && study.metrics.length > 0 ? (
        <Container className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="relative overflow-hidden rounded-2xl border border-line/80 bg-surface/80 p-6 backdrop-blur-md transition-all hover:border-primary/40 hover:shadow-lg group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <dt className="text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
                  {metric.label}
                </dt>
                <dd className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-fg break-words">
                  {metric.value}
                </dd>
              </div>
            ))}
          </div>
        </Container>
      ) : null}

      {/* MAIN BENTO GRID CONTENT */}
      <Container id="case-study-grid" className="mt-12 space-y-10 sm:space-y-12">
        {/* ROW 1: Executive Overview (7 cols) & Tech Stack Matrix (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Overview & Role Card */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl border border-line/80 bg-surface/60 p-7 sm:p-9 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              <Layers className="size-4" />
              Executive Overview & Role
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
              The Product Vision
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-fg/90">
              {study.overview}
            </p>

            <div className="mt-6 rounded-2xl border border-line bg-background/50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-semibold tracking-wider text-secondary uppercase">
                  My Core Ownership
                </p>
                {project.company && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-300">
                    <Building2 className="size-3 text-sky-400" />
                    {project.company}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted">
                {study.role}
              </p>
            </div>

            {study.pullQuote ? (
              <blockquote className="mt-6 border-l-3 border-primary pl-5 py-1 text-lg sm:text-xl italic font-medium text-fg">
                "{study.pullQuote}"
              </blockquote>
            ) : null}
          </div>

          {/* Tech Stack & System Architecture Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-line/80 bg-surface/60 p-7 sm:p-9 backdrop-blur-md shadow-sm">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
                <Cpu className="size-4" />
                System Architecture
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-fg">
                Technologies & Tools
              </h2>
              <p className="mt-2 text-sm text-muted">
                Production-grade technologies utilized in this application.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-line bg-background/60 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                    Deployment
                  </p>
                  <p className="mt-1 text-sm font-medium text-fg">
                    {project.liveUrl ? 'Active Production Environment' : 'Completed Delivery'}
                  </p>
                </div>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-black transition-colors"
                  >
                    Launch
                    <ExternalLink className="size-3" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Problem & Solution (Side-by-Side 2-Column Comparison Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Problem Card */}
          <div className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/5 via-surface/80 to-surface/40 p-7 sm:p-9 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-red-400 uppercase">
              <AlertCircle className="size-4" />
              The Challenge
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">
              The Problem Statement
            </h3>
            <p className="mt-4 text-base leading-relaxed text-fg/80">
              {study.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-surface/80 to-surface/40 p-7 sm:p-9 backdrop-blur-md shadow-sm">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-emerald-400 uppercase">
              <Sparkles className="size-4" />
              The Architecture
            </div>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">
              The Solution & Execution
            </h3>
            <p className="mt-4 text-base leading-relaxed text-fg/80">
              {study.solution}
            </p>
          </div>
        </div>

        {/* ROW 3: Core Features & Capabilities (Rich Responsive Grid) */}
        <div className="rounded-3xl border border-line/80 bg-surface/40 p-7 sm:p-10 backdrop-blur-md">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Capabilities
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
              Key Features & Implementation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted">
              Core user flows and production capabilities engineered into {project.title}.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {study.features.map((feature, idx) => (
              <div
                key={feature}
                className="group relative flex flex-col justify-between rounded-2xl border border-line/70 bg-background/80 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-background hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs font-bold text-primary/70">
                    0{idx + 1}
                  </span>
                  <div className="size-8 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="size-4" />
                  </div>
                </div>
                <p className="mt-4 text-sm sm:text-[0.95rem] font-medium leading-snug text-fg/95">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4: Challenges & Strategic Architectural Decisions (Grid) */}
        {study.decisions && study.decisions.length > 0 ? (
          <div className="rounded-3xl border border-line/80 bg-surface/40 p-7 sm:p-10 backdrop-blur-md">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                Engineering Trade-offs
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
                Challenges & Strategic Decisions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted">
                How technical roadblocks were approached, architected, and resolved.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {study.decisions.map((item, idx) => (
                <div
                  key={item.challenge}
                  className="flex flex-col justify-between rounded-2xl border border-line/80 bg-background/80 p-6 shadow-sm hover:border-secondary/50 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-amber-400 uppercase">
                        Challenge 0{idx + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium text-fg">
                      {item.challenge}
                    </p>

                    <div className="my-4 border-t border-line/60" />

                    <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-primary uppercase">
                      Decision
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-fg/90">
                      {item.decision}
                    </p>
                  </div>

                  {item.outcome ? (
                    <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-3.5 text-xs text-muted">
                      <span className="font-semibold text-emerald-400">Outcome: </span>
                      {item.outcome}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* ROW 5: Visual Production UI Gallery (Grid with Solid Black Background) */}
        {study.screenshots && study.screenshots.length > 0 ? (
          <div className="rounded-3xl border border-line/80 bg-surface/40 p-7 sm:p-10 backdrop-blur-md">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                  Interface Showcase
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight text-fg">
                  Real UI & Production Views
                </h2>
                <p className="mt-2 text-sm sm:text-base text-muted">
                  High-definition captures of the live application interface.
                </p>
              </div>
              <span className="text-xs text-muted">
                {study.screenshots.length} {study.screenshots.length === 1 ? 'view' : 'views'} captured
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {study.screenshots.map((src, index) => (
                <ScreenshotItem
                  key={src}
                  src={src}
                  title={project.title}
                  index={index}
                  total={study.screenshots.length}
                  onClick={() => openModal(src, index)}
                />
              ))}
            </div>
          </div>
        ) : null}

        {/* ROW 6: Results & Key Learnings (Side-by-Side 2-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Results Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-line/80 bg-surface/60 p-7 sm:p-9 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                <Trophy className="size-4" />
                Impact & Milestones
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">
                Quantifiable Results
              </h3>
              <ul className="mt-6 space-y-4">
                {study.results.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-fg/90">
                    <div className="mt-1 size-5 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="size-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learnings Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-line/80 bg-surface/60 p-7 sm:p-9 backdrop-blur-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-secondary uppercase">
                <Lightbulb className="size-4" />
                Key Takeaways
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">
                What I Learned
              </h3>
              <ul className="mt-6 space-y-4">
                {study.learned.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-fg/90">
                    <div className="mt-1 size-5 rounded-full border border-secondary/30 bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Sparkles className="size-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Next / Previous Project Navigation (2-Column Grid) */}
      <Container className="mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-line/80 pt-10">
          {prev ? (
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-surface/50 p-6 transition-all hover:border-primary/40 hover:bg-surface"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-muted uppercase">
                <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                Previous Project
              </span>
              <span className="mt-3 text-xl font-semibold text-fg group-hover:text-primary transition-colors">
                {prev.title}
              </span>
              <span className="mt-1 text-xs text-muted">{prev.category}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              to={`/projects/${next.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line/80 bg-surface/50 p-6 text-right transition-all hover:border-primary/40 hover:bg-surface sm:items-end"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider text-muted uppercase">
                Next Project
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="mt-3 text-xl font-semibold text-fg group-hover:text-primary transition-colors">
                {next.title}
              </span>
              <span className="mt-1 text-xs text-muted">{next.category}</span>
            </Link>
          ) : null}
        </div>
      </Container>

      {/* Fullscreen Interactive Zoom & Scroll Lightbox Modal */}
      {activeModalImage ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 p-3 sm:p-6 backdrop-blur-2xl animate-fade-in select-none"
          onClick={() => setActiveModalImage(null)}
        >
          {/* Top Floating Control Bar */}
          <div
            className="relative z-50 flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#0B0F17]/95 px-4 py-3 backdrop-blur-xl shadow-2xl shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5">
              <span className="text-sm font-semibold text-white">
                {project.title} — View {activeModalIndex + 1}
              </span>
              {isModalImageTall && (
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                  <ChevronsDown className="size-3" />
                  Full Page Capture
                </span>
              )}
            </div>

            {/* View Mode & Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setModalZoomMode((prev) => (prev === 'scroll' ? 'fit' : 'scroll'))
                  setZoomScale(1)
                }}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors',
                  modalZoomMode === 'scroll'
                    ? 'border-primary/50 bg-primary/20 text-primary hover:bg-primary/30'
                    : 'border-white/15 bg-white/5 text-white/80 hover:bg-white/10'
                )}
                title={modalZoomMode === 'scroll' ? 'Switch to Fit Screen view' : 'Switch to Full Zoom Scroll view'}
              >
                {modalZoomMode === 'scroll' ? (
                  <>
                    <Minimize2 className="size-3.5" />
                    <span>Fit View</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="size-3.5" />
                    <span>Full Zoom Scroll</span>
                  </>
                )}
              </button>

              <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.max(0.6, Math.round((s - 0.2) * 10) / 10))}
                  className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="size-3.5" />
                </button>
                <span className="min-w-10 text-center font-mono text-[11px] text-white/80">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={() => setZoomScale((s) => Math.min(2.5, Math.round((s + 0.2) * 10) / 10))}
                  className="rounded p-1 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="size-3.5" />
                </button>
                {zoomScale !== 1 && (
                  <button
                    type="button"
                    onClick={() => setZoomScale(1)}
                    className="ml-1 rounded p-1 text-primary hover:bg-primary/10 transition-colors"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="size-3" />
                  </button>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveModalImage(null)}
                className="rounded-lg border border-white/15 bg-white/5 p-1.5 text-white/80 hover:bg-white hover:text-black transition-colors"
                aria-label="Close fullscreen preview"
              >
                <X className="size-4" />
              </button>
            </div>
          </div>

          {/* Modal Image Body with Smooth Full Page Scroll */}
          <div
            className={cn(
              'relative my-auto flex w-full max-w-5xl flex-col items-center justify-start overflow-y-auto overflow-x-hidden rounded-2xl border border-white/10 bg-[#0B0F17]/95 p-3 sm:p-6 shadow-2xl transition-all',
              modalZoomMode === 'fit' ? 'max-h-[82vh] justify-center' : 'max-h-[84vh]'
            )}
            onScroll={(e) => {
              if (e.currentTarget.scrollTop > 30) {
                setScrolledModal(true)
              }
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeModalImage}
              alt="Fullscreen UI view"
              onLoad={(e) => {
                const img = e.currentTarget
                if (img.naturalHeight > img.naturalWidth * 1.15) {
                  setIsModalImageTall(true)
                }
              }}
              style={{
                width:
                  modalZoomMode === 'fit'
                    ? 'auto'
                    : isModalImageTall
                    ? `${Math.round(zoomScale * 100)}%`
                    : `${Math.round(zoomScale * 100)}%`,
                maxWidth:
                  modalZoomMode === 'fit'
                    ? '100%'
                    : isModalImageTall
                    ? `${Math.round(zoomScale * 52)}rem`
                    : `${Math.round(zoomScale * 64)}rem`,
              }}
              className={cn(
                'rounded-xl shadow-2xl transition-all duration-200 block mx-auto',
                modalZoomMode === 'fit'
                  ? 'max-h-[78vh] w-auto object-contain'
                  : 'h-auto object-contain'
              )}
            />

            {/* Scroll Indicator */}
            {isModalImageTall && modalZoomMode === 'scroll' && !scrolledModal && (
              <div className="sticky bottom-3 z-30 mt-4 flex items-center gap-2 rounded-full border border-primary/40 bg-black/90 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-md shadow-2xl animate-bounce pointer-events-none">
                <MoveDown className="size-3.5" />
                Scroll to view full page content
              </div>
            )}
          </div>

          <div className="text-center text-[11px] text-white/50 pt-2 shrink-0">
            Click outside or press <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/80">ESC</kbd> to close
          </div>
        </div>
      ) : null}
    </article>
  )
}
