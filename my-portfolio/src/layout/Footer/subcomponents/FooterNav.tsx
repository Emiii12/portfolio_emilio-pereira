"use client";
import Link from "next/link";

const navItemsFooter = [
  { id: "home", text: "Inicio", href: "#homeSection" },
  { id: "about", text: "Sobre mí", href: "#aboutMeSection" },
  { id: "projects", text: "Proyectos", href: "#projectSection" },
  { id: "experience", text: "Experiencia", href: "#experienceSection" },
  { id: "contact", text: "Contacto", href: "#contactSection" }
];

const FooterNav = () => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-xl font-semibold">Navegación</h3>
      <nav className="flex flex-col gap-3 flex-wrap justify-center items-center md:items-start">
        {navItemsFooter.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="text-whiteOff hover:text-aquaCyan transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default FooterNav;
