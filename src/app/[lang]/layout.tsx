import { ReactNode } from "react";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import Providers from "./Providers";

export { generateMetadata } from "./generateMetadata";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    return null;
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <Providers>{children}</Providers>
    </NextIntlClientProvider>
  );
}
