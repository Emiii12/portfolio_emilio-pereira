"use client";
import Image from "next/image";
import tailwindCssIcon from "../../../../public/icon/front/tailwindCssIcon.svg";
import reactIcon from "../../../../public/icon/front/reactIcon.svg";
import nextJsIcon from "../../../../public/icon/front/nextJsIcon.svg";
import { useTranslation } from "react-i18next";

const techStack = [
  { name: "Next.js", icon: nextJsIcon },
  { name: "React", icon: reactIcon },
  { name: "Tailwind CSS", icon: tailwindCssIcon }
];

const FooterTech = () => {
  const { t } = useTranslation("layout");

  return (
    <div className="flex flex-col gap-5 flex-wrap justify-center items-center md:items-start">
      <h3 className="text-xl font-semibold">{t("footer.myPortfolio.title")}</h3>
      <p className="text-sm text-whiteOff mt-1 cursor-default">{t("footer.myPortfolio.subtitle")}</p>
      <div className="flex flex-col gap-3 items-center md:items-start">
        {techStack.map((tech) => (
          <span key={tech.name} className="flex gap-2 text-white cursor-default">
            <Image src={tech.icon} alt={tech.name} className="w-6 h-6" />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterTech;
