import { Separator } from "@/components/ui/separator";
import AuthHeader from "../features/auth/components/auth-header";
import AuthLoginForm from "../features/auth/components/auth-login-form";
import AuthLoginTypes from "../features/auth/components/auth-login-types";
import AuthFooter from "../features/auth/components/auth-footer";

export default function HomePage() {
  return (
    <>
      <AuthHeader
        title="خوش آمدید"
        description="برای ادامه وارد حساب خود شوید"
      />
      <AuthLoginTypes />

      <AuthLoginForm />
      <Separator className="mt-4" />
      <AuthFooter />
    </>
  );
}
