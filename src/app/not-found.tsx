import { getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <html>
      <body className="bg-zinc-900 text-white min-h-screen flex items-center justify-center flex-col">
        <div className="flex items-center justify-center gap-6 flex-col">
          <div className="flex items-center justify-center gap-4">
            <p className="text-white font-bold text-9xl">4</p>
            <Image
              className="animate-spin [animation-duration:10s]"
              src="/logo/icon.png"
              alt="Логотип TrinkoTattoo"
              width={120}
              height={120}
            />
            <p className="text-white font-bold text-9xl">4</p>
          </div>
          <h1 className="text-4xl font-bold ">{t("title")}</h1>
          <p className="text-gray-400">{t("text")}</p>
          <Link href="/" className="text-white transition-colors hover:text-red-500">
            {t("button")}
          </Link>
        </div>
      </body>
    </html>
  );
}
