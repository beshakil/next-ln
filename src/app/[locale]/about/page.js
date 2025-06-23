
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function AboutPage() {
  const t = await getTranslations("HomePage");
  return (
    <div>
      <h1 className="">About</h1>
      <h1>{t("title")}</h1>
      <Link color="success" href="/">
        Success
      </Link>
    </div>
  );
}
