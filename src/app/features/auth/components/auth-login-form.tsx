"use client";

import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { emailSchema, mobileSchema } from "../schema/auth-schema";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import ControllInput from "../../components/controll-input";

type TabType = "email" | "mobile";

export default function AuthLoginForm() {
  const [tab, setTab] = useState<TabType>("email");

  const form = useForm({
    resolver: zodResolver(tab === "email" ? emailSchema : mobileSchema),
    defaultValues: {
      value: "",
    },
  });

  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    reset({ value: "" });
  }, [tab, reset]);

  const onSubmit = (data: { value: string }) => {
    console.log(tab, data);
  };

  const t = useI18n();

  return (
    <div>
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as TabType)}
      >
        <TabsList className="mx-auto mb-4 grid h-auto grid-cols-2 rounded-4xl p-1.5">
          <TabsTrigger
            className="font-sm rounded-4xl px-6 py-1.5"
            value="mobile"
          >
            {t("Auth.phone")}
          </TabsTrigger>
          <TabsTrigger
            className="font-sm rounded-4xl px-6 py-1.5"
            value="email"
          >
            {t("Auth.email")}
          </TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <TabsContent value="email">
              <ControllInput
                control={control}
                name="value"
                label={t("Auth.email_label")}
                type="email"
                placeHolder={t("Auth.email_placeholder")}
              />
            </TabsContent>

            <TabsContent value="mobile">
              <ControllInput
                control={control}
                name="value"
                label={t("Auth.phone_label")}
                type="tel"
                placeHolder="9123456789"
                className="text-end"
              />
            </TabsContent>

            <Button
              className="w-full"
              size={"lg"}
            >
              <ArrowLeft className="me-0.5" />
              {t("Auth.continue")}
            </Button>
          </FieldGroup>
        </form>
      </Tabs>

      <Button
        type="button"
        variant={"link"}
        className="text-muted-foreground hover:text-primary mx-auto flex w-fit justify-center text-xs"
      >
        {t("Auth.guest_login")}
      </Button>
    </div>
  );
}
