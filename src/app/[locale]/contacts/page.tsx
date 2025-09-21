import { ContactsSection } from '@/shared/ContactsSection'
import { buildMetadata } from '../seo/buildMetadata'
import { LocationSection } from '../ui/sections/LocationSection'
import { contactsJsonLd } from './seo/contactsJsonLd'
import { HeroSection } from './ui/HeroSection'

export async function generateMetadata() {
  return buildMetadata({
    path: 'contacts'
  })
}

export default async function Contacts() {
  const jsonLd = await contactsJsonLd()

  return (
    <main className="flex flex-col">
      <HeroSection />
      <ContactsSection />
      <LocationSection className="bg-zinc-900 pt-0 text-white" />
      <script id="contacts-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  )
}
