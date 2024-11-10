import Image from "next/image";
import Hero from "./COMPONENT/Hero";
import {SectionAbout} from "./COMPONENT/About";
import Skills from "./COMPONENT/Skills";
import Projects from "./COMPONENT/Project";
import Contact from "./COMPONENT/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <SectionAbout />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
