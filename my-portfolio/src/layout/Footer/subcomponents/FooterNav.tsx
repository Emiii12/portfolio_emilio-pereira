"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const navItemsFooter = [
  { id: "home", href: "#homeSection" },
  { id: "projects", href: "#projectSection" },
  { id: "about", href: "#aboutMeSection" },
  { id: "experience", href: "#experienceSection" },
  { id: "contact", href: "#contactSection" }
];

const FooterNav = () => {
  const { t } = useTranslation("layout");

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold">
        {t("footer.navigation.title")}
      </h3>
      <nav className="flex flex-col gap-3 flex-wrap justify-center items-center md:items-start">
        {navItemsFooter.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-whiteOff hover:text-aquaCyan transition-colors capitalize"
          >
            {t(`footer.navigation.items.${index}`)}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FooterNav;
