"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FieldGroup } from "@/components/ui/field";

import ControllInput from "../../components/controll-input";
import { emailSchema, mobileSchema } from "../schema/auth-schema";
import Link from "next/link";

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
            موبایل
          </TabsTrigger>
          <TabsTrigger
            className="font-sm rounded-4xl px-6 py-1.5"
            value="email"
          >
            ایمیل
          </TabsTrigger>
        </TabsList>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <TabsContent value="email">
              <ControllInput
                control={control}
                name="value"
                label="آدرس ایمیل"
                type="email"
                placeHolder="name@example.com"
              />
            </TabsContent>

            <TabsContent value="mobile">
              <ControllInput
                control={control}
                name="value"
                label="شماره موبایل"
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
              ادامه
            </Button>
          </FieldGroup>
        </form>
      </Tabs>

      <Button
        type="button"
        variant={"link"}
        className="text-muted-foreground hover:text-primary mx-auto flex w-fit justify-center text-xs"
      >
        ادامه به صورت مهمان
      </Button>
    </div>
  );
}
