import { Metadata } from "next";
import ru from "../../public/locales/ru/common.json";
import en from "../../public/locales/en/common.json";

const translations = {
  ru,
  en,
};

type generateMetadataProps = {
  params: Promise<{ lang: "ru" | "en" }>;
};

export async function generateMetadata({ params }: generateMetadataProps) {
  const { lang } = await params;
  const t = translations[lang] || translations.en;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    robots: "index, follow",
    openGraph: {
      title: t.openGraphTitle,
      description: t.openGraphDescription,
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
      url: t.openGraphUrl,
      type: "website",
      siteName: "TrinkoTattoo",
      locale: lang,
    },
    twitter: {
      card: "summary_large_image",
      title: t.twitterTitle,
      description: t.twitterDescription,
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
    },
  };
}
