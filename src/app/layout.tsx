import Script from "next/script";
import { ReactNode } from "react";
import { Roboto, Montserrat } from "next/font/google";

import "./globals.css";
import { jsonLd } from "./jsonLd";
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

type LayoutProps = {
  children: ReactNode;
};

export default async function RootLayout({ children }: LayoutProps) {
  const headersList = await headers();
  const lang = headersList.get("x-next-intl-locale") || "ru";

  return (
    <html lang={lang}>
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
