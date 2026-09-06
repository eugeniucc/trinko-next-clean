import { MetadataRoute } from 'next'
const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL?.replace(/\/$/, '')

if (!BASE_URL) {
  throw new Error('NEXT_PUBLIC_DOMAIN_URL is required')
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${BASE_URL}/sitemap.xml`
  }
}
