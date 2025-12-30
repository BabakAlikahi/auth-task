"use client";

import { useState } from "react";
import { Apple, Diamond, Facebook, Github, Linkedin, Mail, PcCase, X } from "lucide-react";

import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ApplicationNameType } from "../types/auth-types";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function AuthLoginTypes() {
  const [isOpen, setIsOpen] = useState(false);

  const t = useI18n();

  return (
    <div className="space-y-3">
      <Button
        variant={"outline"}
        className="w-full rounded-4xl text-base font-medium"
      >
        <Mail />
        {t("Auth.google_login")}
      </Button>

      <div className="grid grid-cols-3 gap-3">
        {ApplicationName.slice(0, 3).map((application) => {
          const Icon = application.icon;

          return (
            <Button
              key={application.name}
              variant={"outline"}
              size={"lg"}
              className="rounded-4xl text-base font-medium"
            >
              <Icon />
            </Button>
          );
        })}
      </div>

      <div>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <CollapsibleTrigger
            asChild
            className="mx-auto flex h-fit py-0 text-center"
          >
            <Button
              variant={"link"}
              className="text-muted-foreground hover:text-primary hover:decoration-doted text-xs underline decoration-dotted"
            >
              {t("Auth.more_options")}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent className="mt-3 grid grid-cols-5 gap-3">
            {ApplicationName.slice(3).map((application) => (
              <Button
                key={application.name}
                variant={"outline"}
                size={"sm"}
                className="text-muted-foreground text-[10px] capitalize"
              >
                {application.name}
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>

      <div className="relative my-6 flex items-center justify-center overflow-hidden">
        <Separator />
        <p className="text-muted-foreground shrink-0 px-2 text-center text-xs">{t("Auth.or_continue")}</p>
        <Separator />
      </div>
    </div>
  );
}

const ApplicationName: ApplicationNameType[] = [
  {
    name: "apple",
    icon: Apple,
  },
  {
    name: "linkedin",
    icon: Linkedin,
  },
  {
    name: "X",
    icon: X,
  },
  {
    name: "microsoft",
    icon: PcCase,
  },
  {
    name: "facebook",
    icon: Facebook,
  },
  {
    name: "gitHub",
    icon: Github,
  },
  {
    name: "gitLab",
    icon: Github,
  },
  {
    name: "discord",
    icon: Diamond,
  },
];
