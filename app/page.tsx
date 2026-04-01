import Hero from "@/components/Hero/Hero";
import CurrentRole from "@/components/Sections/CurrentRole";
import ExperienceMagiicians from "@/components/Sections/ExperienceMagiicians";
import Skills from "@/components/Sections/Skills";
import Education from "@/components/Sections/Education";
import Certification from "@/components/Sections/Certification";
import Contact from "@/components/Sections/Contact";
import About from "@/components/Sections/About";
import ThemeToggle from "@/components/UI/ThemeToggle";
import MouseGlow from "@/components/UI/MouseGlow";
import Starfield from "@/components/Effects/Starfield";
import SectionDots from "@/components/UI/SectionDots";
import { Certificate } from "crypto";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <MouseGlow />
      <Starfield />
      <SectionDots />

      <Hero />
      <About />
      <CurrentRole />
      {/* <ExperienceMagiicians /> */}
       <Skills />
       <Education/>
       <Certification/>
        <Contact/>
    </>
  );
}
