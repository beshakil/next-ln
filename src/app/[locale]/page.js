import Image from "next/image";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import NavbarHeader from "@/components/NavbarCom/NavbarHeader";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "../../config/site";
import FooterMain from "@/components/Footer/FooterMain";
import { button as buttonStyles } from "@heroui/theme";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <NavbarHeader />
      <main className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="inline-block max-w-xl text-center justify-center">
            <p>{t("topTip")}</p>
            <h1 className="bg-gradient-to-r p-2 text-4xl font-bold from-[#FF1CF7] to-[#b249f8] inline-block text-transparent bg-clip-text">{t("title")}</h1>
            <p>{t("description")}</p>
          </div>
        </section>
      </main>
      <FooterMain />
    </div>
  );
}
