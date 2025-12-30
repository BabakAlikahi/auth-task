import Link from "next/link";

import { getI18n } from "@/locales/server";

export default async function AuthFooter() {
  const t = await getI18n();

  return (
    <div className="mt-4 text-center">
      <p className="text-muted-foreground text-[10px]">
        {t("Auth.terms_text")}{" "}
        <Link
          className="underline decoration-dotted"
          href={"#"}
        >
          {t("Auth.terms_link")}
        </Link>{" "}
        و{" "}
        <Link
          className="underline decoration-dotted"
          href={"#"}
        >
          {t("Auth.privacy_link")}
        </Link>
        .
      </p>
    </div>
  );
}
