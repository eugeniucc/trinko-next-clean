"use client";

import { ReactNode, useEffect, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n-client";
import { usePathname } from "next/navigation";
import { AgeConfirm } from "./components/AgeConfirm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { JivoChat } from "./components/JivoChat";
import { Locale } from "./i18n.config";
import { useLangStore } from "./stores/useLangStore";

const queryClient = new QueryClient();

type ProvidersProps = {
  children: ReactNode;
  lang: Locale;
};

export default function Providers({ children, lang }: ProvidersProps) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const setLanguage = useLangStore((s) => s.setLanguage);

  useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);

  return (
    <>
      <SpeedInsights />
      <Analytics />
      <JivoChat />
      <AgeConfirm />
      <I18nextProvider i18n={i18next}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </I18nextProvider>
    </>
  );
}
