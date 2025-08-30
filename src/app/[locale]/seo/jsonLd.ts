const domain = process.env.NEXT_PUBLIC_DOMAIN_URL

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  '@id': `${domain}/#org`,
  name: 'OblivionTattoo',
  url: domain,
  logo: `${domain}/logo/logo.png`,
  image: `${domain}/logo/logo.png`,
  telephone: '+37379146506',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+37379146506',
    contactType: 'customer service'
  },
  sameAs: ['https://www.instagram.com/trinko_tattoo/', 'https://t.me/Trinkonfox'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Албишоара 4, ТЦ Атриум',
    addressLocality: 'Кишинёв',
    addressRegion: 'Municipiul Chișinău',
    postalCode: 'MD-2005',
    addressCountry: 'MD'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.0146,
    longitude: 28.8558
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '11:00',
      closes: '18:00'
    }
  ],
  areaServed: 'Chișinău, Moldova',
  priceRange: 'MDL'
}
