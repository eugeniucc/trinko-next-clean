"use client";

import { ReactNode, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { JivoChat } from "./components/JivoChat";
import { Messages, NextIntlClientProvider } from "next-intl";

const queryClient = new QueryClient();

type ProvidersProps = {
  children: ReactNode;
  messages: Messages;
  locale: string;
};

export default function Providers({
  children,
  messages,
  locale,
}: ProvidersProps) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <JivoChat />
      <NextIntlClientProvider messages={messages} locale={locale}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextIntlClientProvider>
    </>
  );
}
