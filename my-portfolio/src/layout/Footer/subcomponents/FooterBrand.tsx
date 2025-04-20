"use client";
import { NamePage } from "@/ui/common/CommonTexts";
import IconGroup from "@/ui/common/IconGroup";
import { FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const FooterBrand = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-[60%] flex flex-col justify-center items-center md:items-start gap-3">
      <NamePage className="text-xl" />
      <p className="text-center sm:text-start text-sm md:text-base text-lightSeaGreen cursor-default">
        Mis webs son como yo: siempre <br /> buscando la mejor versión.
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
