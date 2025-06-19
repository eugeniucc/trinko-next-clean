import { create } from "zustand";
import { Locale } from "@/app/[lang]/i18n.config";

type LangStore = {
  language: Locale | "";
  setLanguage: (language: Locale) => void;
};

export const useLangStore = create<LangStore>((set) => ({
  language: "",
  setLanguage: (language) => set({ language }),
}));
