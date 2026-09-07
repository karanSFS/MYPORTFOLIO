export interface ThemeConfig {
  mode: 'dark' | 'light'
  primary: string
  secondary: string
  background: string
  surface: string
  surfaceSecondary: string
  textPrimary: string
  textSecondary: string
  border: string
  success: string
}

export interface PersonalConfig {
  name: string
  firstName: string
  lastName: string
  initials: string
  jobTitle: string
  tagline: string
  profileImage: string
  resumeUrl: string
  email: string
  phone: string
  location: string
  availability: string
  yearsOfExperience: string
  projectCount: string
}

export interface SeoConfig {
  siteUrl: string
  title: string
  description: string
  ogImage: string
  twitterHandle?: string
  keywords: string[]
}

export interface CtaLink {
  label: string
  href: string
}

export interface HeroConfig {
  availabilityBadge: string
  greeting: string
  description: string
  primaryCta: CtaLink
  secondaryCta: CtaLink
  focusLine: string
}

export interface AboutValueCard {
  title: string
  description: string
}

export interface AboutConfig {
  sectionNumber: string
  heading: string
  description: string
  valueCards: AboutValueCard[]
  image: string
}

export interface NavItem {
  label: string
  href: string
  sectionId: string
}

export interface StatItem {
  value: string
  label: string
}

export interface SocialLink {
  id: 'github' | 'linkedin' | 'email' | 'twitter' | 'website'
  label: string
  href: string
}

export interface CaseStudyMetric {
  label: string
  value: string
}

export interface CaseStudyDecision {
  challenge: string
  decision: string
  outcome?: string
}

export interface CaseStudy {
  overview: string
  role: string
  roleTags: string[]
  problem: string
  solution: string
  features: string[]
  technologies: string[]
  decisions: CaseStudyDecision[]
  screenshots: string[]
  results: string[]
  learned: string[]
  metrics: CaseStudyMetric[]
  pullQuote?: string
}

export interface Project {
  slug: string
  title: string
  category: string
  filters: string[]
  shortDescription: string
  stack: string[]
  image: string
  liveUrl: string
  githubUrl: string
  featured: boolean
  seoTitle: string
  seoDescription: string
  caseStudy: CaseStudy
}

export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface EducationItem {
  degree: string
  school: string
  period: string
  detail: string
}

export interface ContactConfig {
  heading: string
  description: string
  form: {
    nameLabel: string
    emailLabel: string
    messageLabel: string
    submitLabel: string
    successMessage: string
    errorMessage: string
    missingKeyMessage: string
    subject: string
  }
}

export interface FooterConfig {
  copyright: string
  builtWith: string
}

export interface CtaConfig {
  letsTalk: string
  viewWork: string
  openResume: string
  downloadResume: string
  viewCaseStudy: string
  liveSite: string
  sourceCode: string
}

export interface PortfolioConfig {
  personal: PersonalConfig
  seo: SeoConfig
  hero: HeroConfig
  about: AboutConfig
  nav: NavItem[]
  stats: StatItem[]
  projects: Project[]
  projectFilters: string[]
  skills: SkillGroup[]
  competencies: string[]
  experience: ExperienceItem[]
  education: EducationItem[]
  socialLinks: SocialLink[]
  contact: ContactConfig
  footer: FooterConfig
  theme: ThemeConfig
  cta: CtaConfig
}
