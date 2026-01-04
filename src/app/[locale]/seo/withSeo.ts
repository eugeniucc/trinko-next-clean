import { Locale } from 'next-intl'
import { buildMetadata } from './buildMetadata'

export function withSeo(namespace: string, path?: string) {
  return async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    return buildMetadata({ locale, namespace, path })
  }
}
