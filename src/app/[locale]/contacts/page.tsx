import { ContactsSection } from '@/shared/ContactsSection'
import { withSeo } from '../seo/withSeo'
import { LocationSection } from '../ui/sections/LocationSection'
import { HeroSection } from './ui/HeroSection'

export const generateMetadata = withSeo('metadata.contactsPageMetadata', '/contacts')

export default async function Contacts() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ContactsSection />
      <LocationSection className="bg-zinc-900 pt-0 text-white" />
    </main>
  )
}
