import { z } from "zod";

export const emailSchema = z.object({
  value: z.string().email("فرمت ایمیل اشتباه می‌باشد").max(50, "تعداد کاراکتر بیش از حد مجاز است"),
});

export const mobileSchema = z.object({
  value: z.string().regex(/^\d{10}$/, "شماره موبایل باید ۱۰ رقم باشد"),
});

export type EmailFormValues = z.infer<typeof emailSchema>;
export type MobileFormValues = z.infer<typeof mobileSchema>;
