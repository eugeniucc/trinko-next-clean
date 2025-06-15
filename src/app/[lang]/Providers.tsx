"use client";

import { ReactNode, useLayoutEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n-client";
import { usePathname } from "next/navigation";
import { AgeConfirm } from "./components/AgeConfirm";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { JivoChat } from "./components/JivoChat";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
