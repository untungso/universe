import type { Locale } from "./i18n-config";

const dictionaries = {
  id: () => import("@/lang/id.json").then((module) => module.default),
  en: () => import("@/lang/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
