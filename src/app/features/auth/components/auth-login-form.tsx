"use client";

import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { LoginFormValues, loginSchema } from "../schema/auth-schema";

import ControllInput from "../../components/controll-input";

export default function AuthLoginForm() {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldGroup>
          <ControllInput
            control={control}
            label="آدرس ایمیل"
            name="email"
            type="email"
            placeHolder="name@example.com"
          />

          <Button>
            ادامه
            <ArrowLeft className="me-2" />
          </Button>
        </FieldGroup>
      </form>
    </div>
  );
}
