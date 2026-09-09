import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { friendOneConfig } from './src/config/friend-one.ts'
import type { PortfolioConfig } from './src/types/portfolio.ts'

const root = fileURLToPath(new URL('.', import.meta.url))

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function portfolioSeoPlugin(config: PortfolioConfig, siteOrigin: string): Plugin {
  const url = siteOrigin.replace(/\/$/, '')

  function personJsonLd() {
    const { personal, seo, socialLinks, education } = config
    const sameAs = socialLinks.map((link) => link.href).filter(Boolean)

    return {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personal.name,
      jobTitle: personal.jobTitle,
      url,
      email: personal.email || undefined,
      address: personal.location
        ? { '@type': 'PostalAddress', addressLocality: personal.location }
        : undefined,
      sameAs: sameAs.length ? sameAs : undefined,
      knowsAbout: seo.keywords,
      alumniOf: education.map((item) => ({
        '@type': 'EducationalOrganization',
        name: item.school,
      })),
      image: seo.ogImage.startsWith('http') ? seo.ogImage : `${url}${seo.ogImage}`,
    }
  }

  return {
    name: 'portfolio-seo',
    transformIndexHtml(html) {
      const { seo, personal } = config
      const title = escapeHtml(seo.title)
      const description = escapeHtml(seo.description)
      const ogImage = seo.ogImage.startsWith('http')
        ? seo.ogImage
        : `${url}${seo.ogImage}`
      const jsonLd = JSON.stringify(personJsonLd())

      const tags = [
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        `<meta name="author" content="${escapeHtml(personal.name)}" />`,
        `<link rel="canonical" href="${url}/" />`,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        `<meta property="og:url" content="${url}/" />`,
        `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:title" content="${title}" />`,
        `<meta name="twitter:description" content="${description}" />`,
        `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
        `<link rel="manifest" href="/site.webmanifest" />`,
        `<script type="application/ld+json">${jsonLd}</script>`,
      ].join('\n    ')

      return html.replace('<title>portfolio</title>', tags)
    },
    closeBundle() {
      const outDir = path.resolve(root, 'dist')
      if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

      const projectUrls = config.projects.map(
        (project) => `  <url><loc>${url}/projects/${project.slug}</loc></url>`,
      )
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${url}/</loc></url>
${projectUrls.join('\n')}
</urlset>
`

      writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap)
      writeFileSync(
        path.join(outDir, 'robots.txt'),
        `User-agent: *\nAllow: /\n\nSitemap: ${url}/sitemap.xml\n`,
      )
      writeFileSync(
        path.join(outDir, 'favicon.svg'),
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" role="img" aria-label="${config.personal.initials}">
  <rect width="32" height="32" rx="8" fill="${config.theme.background}"/>
  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="none" stroke="rgba(255,255,255,0.12)"/>
  <text x="16" y="21" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="12" font-weight="600" fill="${config.theme.textPrimary}">${config.personal.initials}</text>
</svg>
`,
      )
      writeFileSync(
        path.join(outDir, 'site.webmanifest'),
        JSON.stringify(
          {
            name: config.personal.name,
            short_name: config.personal.initials,
            description: config.seo.description,
            start_url: '/',
            display: 'standalone',
            background_color: config.theme.background,
            theme_color: config.theme.background,
            icons: [{ src: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
          },
          null,
          2,
        ),
      )
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  const config = friendOneConfig
  const siteOrigin = env.VITE_SITE_URL || config.seo.siteUrl

  return {
    plugins: [react(), tailwindcss(), portfolioSeoPlugin(config, siteOrigin)],
    resolve: {
      alias: {
        '@': path.resolve(root, 'src'),
      },
    },
  }
})
