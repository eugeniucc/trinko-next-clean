import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "ro", "it", "uk"],
  defaultLocale: "ru",
});

export type AppLocale = (typeof routing.locales)[number];
