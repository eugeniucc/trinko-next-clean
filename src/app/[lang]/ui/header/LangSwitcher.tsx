"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";

const locales = ["en", "ru", "de", "fr"];
const defaultLocale = "ru";

export const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const pathLocale = locales.includes(segments[0])
    ? segments[0]
    : defaultLocale;

  const handleChange = (newLocale: string) => {
    if (newLocale === pathLocale) return;

    const newSegments = [...segments];
    if (locales.includes(newSegments[0])) {
      newSegments.shift();
    }

    const newPath =
      newLocale === defaultLocale
        ? `/${newSegments.join("/")}` || "/"
        : `/${newLocale}/${newSegments.join("/")}`;

    router.replace(newPath);
  };

  return (
    <Select value={pathLocale} onValueChange={handleChange}>
      <SelectTrigger className="bg-transparent text-white [&>svg]:text-white! text-center flex items-center justify-center w-fit">
        <Languages /> <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((lng) => (
          <SelectItem key={lng} value={lng}>
            {lng.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
