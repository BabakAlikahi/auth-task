import { z } from "zod";

const passwordField = z.string("فیلد اجباری میباشد").min(3, "تعداد کارکتر کمتر از حد مجاز میباشد.").max(20, "تعداد کارکتر بیش از حد مجاز میباشد.");
const emailField = z.email("فرمت ایمیل اشتباه میباشد").max(50, "تعداد کارکتر بیش از حد مجاز میباشد.");

export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

export type LoginFormValues = z.infer<typeof loginSchema>;
