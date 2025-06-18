import { Metadata } from "next";
import { Locale } from "@/app/[lang]/i18n.config";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata(props: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const params = await props.params;
  const lang = params.lang;
  const t = await getDictionary(lang);

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
