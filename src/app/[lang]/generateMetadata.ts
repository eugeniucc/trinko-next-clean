import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";
import { DOMAIN_URL } from "@/features/constants/constants.contants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "seo" });

  const fullUrl = `${DOMAIN_URL}/${lang}/`;

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
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
    },
  };
}
