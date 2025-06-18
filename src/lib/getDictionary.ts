import { Locale } from "@/app/[lang]/i18n.config";

export const getDictionary = async (locale: Locale) => {
  const dict = await import(`../../public/locales/${locale}/common.json`);
  return dict.default;
};
