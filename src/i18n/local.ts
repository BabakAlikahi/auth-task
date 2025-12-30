export const locales = ["fa", "en", "de"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export const localeConfigs: Record<Locale, { dir: "rtl" | "ltr" }> = {
  fa: { dir: "rtl" },
  en: { dir: "ltr" },
  de: { dir: "ltr" },
};
