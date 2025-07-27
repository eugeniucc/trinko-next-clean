import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="text-center min-h-screen w-full bg-zinc-900 py-16">
      <h1 className="text-3xl font-bold mb-4">{t("title")}</h1>
      <p className="text-gray-600">{t("description")}</p>
    </div>
  );
}
