"use client";

import { useTransition } from "react";

import { Switch } from "@/components/ui/switch";
import { useLanguageStore } from "@/locales/locales-store";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function LanguageSwitcher() {
  const currentLocale = useCurrentLocale();

  const changeLocale = useChangeLocale();

  const { isPending, setPending } = useLanguageStore();

  const [isTransitioning, startTransition] = useTransition();

  const isEnglish = currentLocale === "en";

  const toggleLanguage = (checked: boolean) => {
    const newLocale = checked ? "en" : "fa";

    setPending(true);

    startTransition(() => {
      changeLocale(newLocale);
      setPending(false);
    });
  };

  const isLoading = isPending || isTransitioning;

  return (
    <div className={`flex items-center gap-2 transition-opacity ${isLoading ? "opacity-50" : "opacity-100"}`}>
      <span className={`text-xs ${!isEnglish ? "text-primary font-bold" : "text-secondary-foreground"}`}>Fa</span>

      <Switch
        dir="ltr"
        checked={isEnglish}
        onCheckedChange={toggleLanguage}
        disabled={isLoading}
      />

      <span className={`text-xs ${isEnglish ? "text-primary font-bold" : "text-secondary-foreground"}`}>En</span>

      {isLoading && <div className="border-primary h-3 w-3 animate-spin rounded-full border-2 border-t-transparent" />}
    </div>
  );
}
