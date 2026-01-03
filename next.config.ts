import withBundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const withAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rpyrrptaqexhjqszbgiq.supabase.co',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  }
}

export default withSentryConfig(withAnalyzer(withNextIntl(nextConfig)), {
  org: 'trinko-next',
  project: 'javascript-nextjs',
  silent: true,
  widenClientFileUpload: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true
    },
    automaticVercelMonitors: true
  }
})
