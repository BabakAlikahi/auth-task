"use client";

import { MoonStar, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useThemeStore } from "../../theme/store/theme-store";

import LanguageSwitcher from "../../ui/components/language-switcher";

export default function HeaderTop() {
  const { theme, toggle } = useThemeStore();
  return (
    <div className="absolute start-0 top-0 flex w-full justify-between p-6">
      <div>
        <Button size={"icon-sm"}>AI</Button>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => toggle()}
          size={"icon-sm"}
          variant={"ghost"}
          className="rounded-full"
        >
          {theme == "dark" ? <Sun /> : <MoonStar />}
        </Button>

        <LanguageSwitcher />
      </div>
    </div>
  );
}
