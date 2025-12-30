import AuthHeader from "../features/auth/components/auth-header";
import AuthLoginForm from "../features/auth/components/auth-login-form";
import AuthLoginTypes from "../features/auth/components/auth-login-types";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <AuthHeader
        title="خوش آمدید"
        description="برای ادامه وارد حساب خود شوید"
      />
      <AuthLoginTypes />

      <AuthLoginForm />
    </div>
  );
}
