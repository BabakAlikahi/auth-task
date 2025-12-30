import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="space-y-6">
      <h1 className="text-primary text-2xl font-bold">{t("title")}</h1>

      <p className="text-muted-foreground">{t("description")}</p>

      <hr className="my-4" />
    </div>
  );
}
