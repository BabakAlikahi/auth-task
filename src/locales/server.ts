import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
  en: () => import("../messages/en.json"),
  fa: () => import("../messages/fa.json"),
  de: () => import("../messages/de.json"),
});
