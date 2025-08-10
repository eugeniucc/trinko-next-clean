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
        hostname: 'weekgblszaodxieblpuz.supabase.co',
        pathname: '/storage/v1/object/public/**'
      }
    ]
  },
  webpack(config, { dev, isServer }) {
    config.infrastructureLogging = { level: 'error' }
    if (dev && !isServer) config.devtool = false
    return config
  }
}

export default withSentryConfig(withAnalyzer(withNextIntl(nextConfig)), {
  org: 'trinko-next',
  project: 'javascript-nextjs',
  silent: true,
  widenClientFileUpload: true,
  disableLogger: true,
  automaticVercelMonitors: true
})
