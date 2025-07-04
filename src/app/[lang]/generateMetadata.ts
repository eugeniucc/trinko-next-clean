import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang, namespace: "seo" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: "index, follow",
    openGraph: {
      title: t("openGraphTitle"),
      description: t("openGraphDescription"),
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
      url: t("openGraphUrl"),
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
