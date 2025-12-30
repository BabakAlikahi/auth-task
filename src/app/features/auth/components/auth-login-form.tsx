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
  const [isOtpStep, setIsOtpStep] = useState(false);
  const t = useI18n();

  const form = useForm({
    resolver: zodResolver(tab === "email" ? emailSchema : mobileSchema),
    defaultValues: {
      value: "",
      otp: "",
    },
  });

  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    reset({ value: "", otp: "" });
    setIsOtpStep(false);
  }, [tab, reset]);

  const onSubmit = (data: any) => {
    if (!isOtpStep) {
      console.log("Sending OTP to:", data.value);
      setIsOtpStep(true);
    } else {
      console.log("Verifying OTP:", data.otp, "for", data.value);
    }
  };

  return (
    <div className="space-y-4">
      <Tabs
        value={tab}
        onValueChange={(v) => setTab(v as TabType)}
      >
        {!isOtpStep && (
          <TabsList className="mx-auto mb-6 grid h-auto grid-cols-2 rounded-4xl p-1.5">
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
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="space-y-4">
            <div className={isOtpStep ? "pointer-events-none opacity-60" : ""}>
              <TabsContent
                value="email"
                className="mt-0 text-start rtl:text-center"
              >
                <ControllInput
                  control={control}
                  name="value"
                  label={t("Auth.email_label")}
                  type="email"
                  placeHolder={t("Auth.email_placeholder")}
                />
              </TabsContent>

              <TabsContent
                value="mobile"
                className="mt-0"
              >
                <ControllInput
                  control={control}
                  name="value"
                  label={t("Auth.phone_label")}
                  type="tel"
                  placeHolder="9123456789"
                  className="text-end"
                />
              </TabsContent>
            </div>

            {isOtpStep && (
              <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                <ControllInput
                  control={control}
                  name="otp"
                  label={t("Auth.otp_label") || "کد تایید"}
                  type="text"
                  placeHolder="••••••"
                  className="text-center font-mono text-lg tracking-[0.5em]"
                  autoFocus
                />
                <p className="text-secondary-foreground text-center text-[10px]">{t("Auth.otp_placeholder")}</p>
              </div>
            )}

            <Button
              className="w-full"
              size={"lg"}
              type="submit"
            >
              <ArrowLeft />
              {t("Auth.continue")}
            </Button>
          </FieldGroup>
        </form>
      </Tabs>

      {!isOtpStep && (
        <Button
          type="button"
          variant={"link"}
          className="text-muted-foreground hover:text-primary mx-auto flex w-fit justify-center text-xs"
        >
          {t("Auth.guest_login")}
        </Button>
      )}
    </div>
  );
}
