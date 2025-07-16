import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ru", "de", "fr"],
  defaultLocale: "ru",
});
