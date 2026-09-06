import NavigationLink from './NavigationLink'

export default function HeaderNavigation({ locale, links }: { locale: string; links: { label: string; href: string }[] }) {
  return (
    <nav className="hidden items-center gap-12 lg:flex lg:gap-20">
      <NavigationLink locale={locale} links={links} />
    </nav>
  )
}
