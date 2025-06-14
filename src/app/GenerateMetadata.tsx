import { Metadata } from "next";
import ru from "../../public/locales/ru/common.json";

export const metadata: Metadata = {
  title: ru.title,
  description: ru.description,
  keywords: ru.keywords,
  robots: "index, follow",
  openGraph: {
    title: ru.openGraphTitle,
    description: ru.openGraphDescription,
    images: ["https://trinko-next.vercel.app/logo/icon.png"],
    url: ru.openGraphUrl,
    type: "website",
    siteName: "TrinkoTattoo",
    locale: "ru",
  },
  twitter: {
    card: "summary_large_image",
    title: ru.openGraphTitle,
    description: ru.openGraphDescription,
    images: ["https://trinko-next.vercel.app/logo/icon.png"],
  },
};
