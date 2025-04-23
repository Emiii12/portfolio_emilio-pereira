import AboutMe from "@/components/AboutMeSection/AboutMe";
import ContactSection from "@/components/ContactSection/ContactSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import HomeSection from "@/components/HomeSection/HomeSection"
import ProjectsSection from "@/components/ProjectsSecion/ProjectsSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <ProjectsSection />
      <AboutMe />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}
