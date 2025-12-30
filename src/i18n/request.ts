import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, Locale } from "./local";

export default getRequestConfig(async ({ locale: incomingLocale }) => {
  const locale: Locale = locales.includes(incomingLocale as Locale) ? (incomingLocale as Locale) : defaultLocale;
  console.log("local", locale);

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
