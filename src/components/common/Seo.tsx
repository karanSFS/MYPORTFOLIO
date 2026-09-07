import { Helmet } from 'react-helmet-async'
import { portfolioConfig } from '../../config/index.ts'
import { absoluteUrl, getSiteUrl } from '../../utils/seo.ts'

interface SeoProps {
  title: string
  description: string
  path?: string
  image?: string
  jsonLd?: unknown
}

export function Seo({ title, description, path = '/', image, jsonLd }: SeoProps) {
  const canonical = absoluteUrl(path)
  const ogImage = absoluteUrl(image ?? portfolioConfig.seo.ogImage)
  const twitter = portfolioConfig.seo.twitterHandle

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={path === '/' ? 'website' : 'article'} />
      <meta property="og:site_name" content={portfolioConfig.personal.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitter ? <meta name="twitter:creator" content={twitter} /> : null}
      <link rel="alternate" href={getSiteUrl()} />
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
