import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";

export default async function AboutPage() {
  const headersList = await headers();
  const locale = headersList.get("x-lang") as string;

  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return <div className="text-white">{t("title")}</div>;
}
