import { z } from "zod";

const otpField = z.string().length(6, "کد تایید باید ۶ رقم باشد").regex(/^\d+$/, "کد تایید فقط باید شامل اعداد باشد").optional().or(z.literal("")); // برای اینکه اگر خالی بود خطا نگیرد

export const emailSchema = z.object({
  value: z.string().email("فرمت ایمیل اشتباه می‌باشد").max(50, "تعداد کاراکتر بیش از حد مجاز است"),
  otp: otpField,
});

export const mobileSchema = z.object({
  value: z.string().regex(/^9\d{9}$/, "شماره موبایل باید با ۹ شروع شده و ۱۰ رقم باشد (مثال: 9123456789)"),
  otp: otpField,
});

export type EmailFormValues = z.infer<typeof emailSchema>;
export type MobileFormValues = z.infer<typeof mobileSchema>;
