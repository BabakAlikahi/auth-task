import Link from "next/link";

export default function AuthFooter() {
  return (
    <div className="mt-4 text-center">
      <p className="text-muted-foreground text-[10px]">
        با ادامه دادن، شما قوانین ما را می‌پذیرید:{" "}
        <Link
          className="underline decoration-dotted"
          href={"#"}
        >
          شرایط استفاده
        </Link>{" "}
        و{" "}
        <Link
          className="underline decoration-dotted"
          href={"#"}
        >
          حریم خصوصی
        </Link>
        .
      </p>
    </div>
  );
}
