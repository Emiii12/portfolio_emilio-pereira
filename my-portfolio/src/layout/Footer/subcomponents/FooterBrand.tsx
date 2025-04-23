"use client";
import { NamePage } from "@/ui/common/CommonTexts";
import IconGroup from "@/ui/common/IconGroup";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const FooterBrand = () => {
  const { t } = useTranslation("layout");

  return (
    <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col justify-center items-center md:items-start gap-3">
      <NamePage className="text-xl" />
      <p className="w-46 smx:w-80 text-center md:text-start text-sm md:text-base text-lightSeaGreen cursor-default">
        {t("footer.major")}
      </p>
      <IconGroup
        links={[
          { href: "https://www.linkedin.com/in/emilio-pereira-a1071126a", icon: <FaLinkedinIn /> },
          { href: "https://github.com/Emiii12", icon: <TbBrandGithubFilled /> }
        ]}
        iconClassName="size-6 text-white"
        containerClassName="flex justify-center gap-5 mt-2"
        itemClassName="hover:scale-[115%] transition-transform duration-150"
      />
    </div>
  );
};

export default FooterBrand;
