import { portfolioConfig } from '../config/index.ts'
import { Seo } from '../components/common/Seo.tsx'
import { AboutSection } from '../components/sections/AboutSection.tsx'
import { CompetenciesSection } from '../components/sections/CompetenciesSection.tsx'
import { ContactSection } from '../components/sections/ContactSection.tsx'
import { EducationSection } from '../components/sections/EducationSection.tsx'
import { ExperienceSection } from '../components/sections/ExperienceSection.tsx'
import { HeroSection } from '../components/sections/HeroSection.tsx'
import { ProjectsSection } from '../components/sections/ProjectsSection.tsx'
import { SkillsSection } from '../components/sections/SkillsSection.tsx'
import { personJsonLd } from '../utils/seo.ts'

export function HomePage() {
  const { seo } = portfolioConfig

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/" jsonLd={personJsonLd()} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <CompetenciesSection />
      <ContactSection />
    </>
  )
}
