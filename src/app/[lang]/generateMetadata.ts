import { Metadata } from "next";
import { Locale } from "@/app/[lang]/i18n.config";
import { getDictionary } from "@/lib/getDictionary";

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const t = await getDictionary(params.lang);

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
      locale: params.lang,
    },
    twitter: {
      card: "summary_large_image",
      title: t.twitterTitle,
      description: t.twitterDescription,
      images: ["https://trinko-next.vercel.app/logo/icon.png"],
    },
  };
}
