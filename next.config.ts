import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

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

export default withNextIntl(nextConfig)
