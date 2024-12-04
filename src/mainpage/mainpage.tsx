import { useState, useEffect } from "react";

import Intro from "../pages/intro";
import AboutMe from "../pages/aboutme";
import Projects from "../pages/projects";
import Skills from "../pages/skills";
import Contact from "../components/contact";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introSection = document.getElementById('intro');
      const introHeight = introSection?.offsetHeight || 0;
      
      setShowNav(window.scrollY > introHeight * 0.7);
      
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen text-text bg-background overflow-x-hidden overflow-y-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex justify-center items-center p-4 bg-background">
          <h1 className="mr-8 text-xl font-bold">Harold Indra</h1>
          <div className="flex gap-4">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => scroll(section.id)}
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeSection === section.id ? 'bg-overlay1' : 'hover:bg-overlay1/50'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="intro" className="h-screen flex flex-col justify-center items-center">
        <Intro />
      </section>

      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>

      <div className={`fixed bottom-8 right-8 transition-all duration-500 ${
        showNav ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}>
        <Contact />
      </div>
    </div>
  );
};

export default MainPage;