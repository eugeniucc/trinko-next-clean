import withBundleAnalyzer from '@next/bundle-analyzer'
import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'weekgblszaodxieblpuz.supabase.co',
        pathname: '/storage/v1/object/public/homepage-slider/**'
      }
    ]
  }
}

export default withAnalyzer(withNextIntl(nextConfig))
