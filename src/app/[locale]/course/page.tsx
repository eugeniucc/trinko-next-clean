import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { getPathname } from '@/i18n/navigation'
import { buildCoursesJsonLd } from '@/lib/jsonld'
import { withSeo } from '@/lib/metadata'
import { ContactsSection } from '@/shared/ContactsSection'
import { CertificateSection } from './ui/CertificateSection'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.coursePageMetadata', '/course')

export default async function Course({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations('homePage.contactsSection.contacts')

  return (
    <main className="flex flex-col bg-zinc-900">
      <HeroSection />
      <CertificateSection />
      <Link href={getPathname({ locale, href: '/contacts' })} data-gtm="course-contacts" className="mx-auto mb-20 rounded-md bg-white px-6 py-4 font-bold text-black hover:text-red-500">
        {t('title')}
      </Link>
      <ContactsSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(await buildCoursesJsonLd(locale))
        }}
      />
    </main>
  )
}
