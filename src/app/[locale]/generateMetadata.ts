import { getLocale, getTranslations } from "next-intl/server";
import { DOMAIN_URL } from "@/features/constants/constants.contants";

export async function generateMetadata() {
  const locale = await getLocale();

  const t = await getTranslations("seo");

  const fullUrl = `${DOMAIN_URL}/${locale}/`;

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: "index, follow",
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
      url: fullUrl,
      type: "website",
      siteName: "TrinkoTattoo",
      locale: locale,
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
    },
  };
}
