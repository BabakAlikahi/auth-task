import { getI18n } from "@/locales/server";

export default async function AuthHeader() {
  const t = await getI18n();

  return (
    <div className="mb-8 text-center">
      <h1 className="mb-2 text-2xl font-bold"> {t("HomePage.title")}</h1>
      <p className="text-secondary-foreground text-sm">{t("HomePage.description")}</p>
    </div>
  );
}
