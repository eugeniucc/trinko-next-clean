export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Trinko Tattoo',
  url: 'https://www.trinkotattoo.ink/',
  logo: '/logo/icon.png',
  image: '/logo/icon.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+37379146506',
    contactType: 'customer service'
  },
  sameAs: ['https://www.instagram.com/trinko_tattoo/', 'https://t.me/Trinkonfox'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Албишоара 4, ТЦ Атриум',
    addressLocality: 'Кишинев',
    postalCode: 'MD-2005',
    addressCountry: 'MD'
  },
  openingHours: ['Mo-Fr 10:00-20:00', 'Sa-Su 11:00-18:00'],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '47.0146',
    longitude: '28.8558'
  }
}
