'use client';
import { useSidebarContext } from "@/context/SidebarContext";
import React, { useState, useEffect  } from "react";
import { useTranslation } from "react-i18next";

const navItems = [
  { id: "home", href: "#homeSection" },
  { id: "projects", href: "#projectsSection" },
  { id: "about", href: "#aboutSection" },
  { id: "experience", href: "#experienceSection" },
  { id: "contact", href: "#contactSection" }
];

export const NavbarItems = () => {
  const [active, setActive] = useState("home");
  const { t } = useTranslation("layout");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id.replace("Section", "");
            setActive(sectionId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    navItems.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) observer.observe(section);
    });

    return () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav>
      <ul className="flex gap-9 xl:gap-12">
        {navItems.map((item, index) => (
          <li key={item.id} className="relative cursor-pointer group">
            <a
              href={item.href}
              onClick={() => setActive(item.id)}
              className={`text-silverGray text-base xl:text-base group-hover:text-white transition-colors duration-100 
                ${active === item.id ? "text-white" : ""}`}
            >
              <span
                className={`text-aquaCyan group-hover:text-lightSeaGreen transition-colors duration-100 
                  ${active === item.id ? "text-lightSeaGreen" : ""}`}
              >
                #
              </span>
              {t(`header.navItems.${index}`)}
            </a>
            <span
              className={`absolute bottom-0 left-0 h-[1px] bg-lightSeaGreen transition-all duration-300 origin-center 
                ${active === item.id ? "w-full " : "w-0 group-hover:w-full group-hover:left-0"}`}
            ></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const SidebarItems = () => {
  const [active, setActive] = useState("home");
  const { toggleSidebar } = useSidebarContext();
  const { t } = useTranslation("layout");

  return (
    <nav>
      <ul className="space-y-4">
        {navItems.map((item, index) => (
          <li key={item.id} className="relative">
            <a
              href={item.href}
              onClick={() => {
                setActive(item.id);
                toggleSidebar();
              }}
              className="text-white text-base sm:text-xl xs:text-lg inline-block relative pb-1 cursor-pointer"
            >
              <span className="text-lightSeaGreen">#</span>
              {t(`header.navItems.${index}`)}
              <span
                className={`block h-[1px] bg-lightSeaGreen transition-all duration-300
								${active === item.id ? "w-full" : "w-0"}`}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
