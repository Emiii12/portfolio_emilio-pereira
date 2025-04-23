import { FaLinkedinIn } from 'react-icons/fa';
import { TbBrandGithubFilled } from "react-icons/tb";
import IconGroup from '@/ui/common/IconGroup';
import { useTranslation } from 'react-i18next';

const SocialLinks = () => {
  const { t } = useTranslation("contactSection");
  return (
    <div>
      <p className='text-lg font-semibold mb-6'>{t("socialsText")}</p>
      <IconGroup
        links={[
          { href: "https://www.linkedin.com/in/emilio-pereira-a1071126a", icon: <FaLinkedinIn /> },
          { href: "https://github.com/Emiii12", icon: <TbBrandGithubFilled /> }
        ]}
        iconClassName="size-6 text-white"
        containerClassName="flex justify-center gap-5"
        itemClassName="hover:scale-[115%] transition-transform duration-150"
      />
    </div>
  );
};

export default SocialLinks;