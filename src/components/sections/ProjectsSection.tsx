import { useMemo, useState } from 'react'
import { portfolioConfig } from '../../config/index.ts'
import { Container } from '../common/Container.tsx'
import { Reveal } from '../common/Reveal.tsx'
import { SectionHeader } from '../common/SectionHeader.tsx'
import { ProjectCard } from '../projects/ProjectCard.tsx'
import { ProjectFilters } from '../projects/ProjectFilters.tsx'

export function ProjectsSection() {
  const { projects, projectFilters } = portfolioConfig
  const [active, setActive] = useState(projectFilters[0] ?? 'All')

  const visible = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((project) => project.filters.includes(active))
  }, [active, projects])

  // If odd number of projects (e.g. 1, 3, 5), feature the first as a wide Spotlight showcase
  // so the grid stays balanced with zero empty trailing holes.
  const hasSpotlight = visible.length % 2 !== 0
  const spotlightProject = hasSpotlight ? visible[0] : null
  const gridProjects = hasSpotlight ? visible.slice(1) : visible

  return (
    <section id="projects" className="py-[clamp(3rem,8vw,6.5rem)]">
      <Container>
        <Reveal>
          <SectionHeader
            number="02"
            label="Projects"
            heading="Things I've Built"
            description="Selected production work — open a case study for the decisions, trade-offs, and systems behind each product."
          />
        </Reveal>

        <div className="mt-8">
          <ProjectFilters filters={projectFilters} active={active} onChange={setActive} />
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-sm text-muted">No projects in this category yet.</p>
        ) : (
          <div className="mt-10">
            {/* Flagship Spotlight Hero Card (if present) */}
            {spotlightProject && (
              <Reveal key={spotlightProject.slug} delay={0.05} className="w-full mb-7 sm:mb-8">
                <ProjectCard
                  project={spotlightProject}
                  featured={spotlightProject.featured}
                  spotlight={true}
                />
              </Reveal>
            )}

            {/* Symmetrical 2-Column Balanced Grid */}
            {gridProjects.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8 items-stretch">
                {gridProjects.map((project, index) => (
                  <Reveal
                    key={project.slug}
                    delay={(index + 1) * 0.06}
                    className="h-full"
                  >
                    <ProjectCard project={project} featured={project.featured} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        )}
      </Container>
    </section>
  )
}
