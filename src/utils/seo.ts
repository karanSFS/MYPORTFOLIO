import { portfolioConfig } from '../config/index.ts'

export function getSiteUrl() {
  const fromEnv = import.meta.env.VITE_SITE_URL ?? portfolioConfig.seo.siteUrl
  return fromEnv.replace(/\/$/, '')
}

export function absoluteUrl(path = '/') {
  const origin = getSiteUrl()
  if (path.startsWith('http')) return path
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

export function personJsonLd() {
  const { personal, seo, socialLinks, education } = portfolioConfig
  const sameAs = socialLinks.map((link) => link.href).filter(Boolean)
  const image = absoluteUrl(seo.ogImage)

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personal.name,
    jobTitle: personal.jobTitle,
    url: getSiteUrl(),
    ...(personal.email ? { email: personal.email } : {}),
    ...(personal.location
      ? {
          address: {
            '@type': 'PostalAddress',
            addressLocality: personal.location,
          },
        }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
    knowsAbout: seo.keywords,
    alumniOf: education.map((item) => ({
      '@type': 'EducationalOrganization',
      name: item.school,
    })),
    image,
  }
}

export function projectJsonLd(slug: string) {
  const project = portfolioConfig.projects.find((item) => item.slug === slug)
  if (!project) return null

  const url = absoluteUrl(`/projects/${project.slug}`)

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    applicationCategory: project.category,
    description: project.shortDescription,
    url: project.liveUrl || url,
    ...(project.githubUrl ? { codeRepository: project.githubUrl } : {}),
    offers: undefined,
    author: {
      '@type': 'Person',
      name: portfolioConfig.personal.name,
    },
  }
}
