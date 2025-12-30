import { Separator } from "@/components/ui/separator";

import AuthHeader from "../features/auth/components/auth-header";
import AuthFooter from "../features/auth/components/auth-footer";
import AuthLoginForm from "../features/auth/components/auth-login-form";
import AuthLoginTypes from "../features/auth/components/auth-login-types";

export default async function HomePage() {
  return (
    <>
      <AuthHeader />

      <AuthLoginTypes />

      <AuthLoginForm />

      <Separator className="mt-4" />

      <AuthFooter />
    </>
  );
}
