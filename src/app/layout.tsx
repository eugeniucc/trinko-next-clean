import Script from "next/script";
import { ReactNode } from "react";
import { Roboto, Montserrat } from "next/font/google";

import "./globals.css";
import { headers } from "next/headers";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Trinko Tattoo",
  url: "https://www.trinkotattoo.ink/",
  logo: "/logo/icon.png",
  image: "/logo/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+37379146506",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.instagram.com/trinko_tattoo/",
    "https://t.me/Trinkonfox",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Албишоара 4, ТЦ Атриум",
    addressLocality: "Кишинев",
    postalCode: "MD-2005",
    addressCountry: "MD",
  },
  openingHours: ["Mo-Fr 10:00-20:00", "Sa-Su 11:00-18:00"],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.0146",
    longitude: "28.8558",
  },
};

type LayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  const head = await headers();
  const locale = head.get("x-locale") ?? "ru";

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
        <link rel="icon" href="/logo/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/logo/favicon-96x96.png"
          type="image/png"
          sizes="96x96"
        />
        <link rel="icon" href="/logo/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo/apple-touch-icon.png" />
        <link rel="manifest" href="/logo/manifest.json" />
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${roboto.variable} ${montserrat.variable} bg-zinc-900 text-sm`}
      >
        {children}
      </body>
    </html>
  );
}
