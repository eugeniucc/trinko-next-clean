import { headers } from "next/headers";

export default async function getRequestLocale() {
  const headersList = await headers();
  return headersList.get("x-next-intl-locale") || "ru";
}
