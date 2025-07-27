"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Languages } from "lucide-react";
import { routing, AppLocale } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "react";

export const LangSwitcher = () => {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLanguageChange = (newLocale: AppLocale) => {
    startTransition(() => {
      const segments = pathname.split("/");

      if (routing.locales.includes(segments[1] as AppLocale)) {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }

      const newPath = segments.join("/");
      router.push(newPath);
    });
  };

  return (
    <Select
      value={locale}
      onValueChange={handleLanguageChange}
      disabled={isPending}
    >
      <SelectTrigger className="bg-transparent [&>svg]:text-white! text-white flex items-center gap-2 w-fit min-w-[120px]">
        <Languages className="text-white" size={16} />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((localeOption) => (
          <SelectItem key={localeOption} value={localeOption}>
            <div className="flex items-center gap-2">
              {localeOption.toUpperCase()}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
