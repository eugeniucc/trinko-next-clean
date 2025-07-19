import { ReactNode } from "react";
import { hasLocale, Locale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";
import ClientWrapper from "./ClientWrapper";
import HeaderMenu from "./components/header/HeaderMenu";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
};

export { generateMetadata } from "./generateMetadata";

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    return null;
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <HeaderMenu />
      <ClientWrapper>{children}</ClientWrapper>
    </NextIntlClientProvider>
  );
}
