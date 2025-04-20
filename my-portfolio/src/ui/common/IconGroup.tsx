import React, { ReactElement } from "react";

interface IconLink {
  href: string;
  icon: ReactElement;
}

interface IconGroupProps {
  links: IconLink[];
  iconClassName?: string;
  containerClassName?: string;
  itemClassName?: string;
}

const IconGroup: React.FC<IconGroupProps> = ({
  links,
  iconClassName = "",
  containerClassName = "",
  itemClassName = ""
}) => {
  return (
    <div className={containerClassName}>
      {links.map(({ href, icon }, index) => {
        const element = icon as ReactElement<{ className?: string }>;
        return (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={itemClassName}
          >
            {React.cloneElement(element, {
              className: `${iconClassName} ${element.props.className || ""}`.trim(),
            })}
          </a>
        );
      })}
    </div>
  );
};

export default IconGroup;
