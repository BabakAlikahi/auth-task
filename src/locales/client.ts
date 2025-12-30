"use client";
import { createI18nClient } from "next-international/client";

// اینجا هوک‌ها تولید و اکسپورت می‌شوند
export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale, // <--- این را اضافه کنید
  useCurrentLocale, // <--- این را اضافه کنید
} = createI18nClient({
  en: () => import("../messages/en.json"),
  fa: () => import("../messages/fa.json"),
});
