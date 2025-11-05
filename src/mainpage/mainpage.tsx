import { useEffect, useRef, useState } from "react";

import { Contact } from "../components/contacts";
import { Card } from "../components/card";
import { SectionButton } from "../components/section-button";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "projects", ref: projectsRef },
    ];

    const options = {
      root: scrollViewRef.current,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, []);

  const scrollToSection = (
    id: string,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    setActiveSection(id);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-screen text-text flex bg-gradient-to-br from-base1 to-background overflow-hidden">
      {/* Left section */}
      <div className="w-full h-full ps-[10rem] py-[5rem] flex flex-col space-y-10 justify-between">
        <div className="flex flex-col">
          <span className="text-7xl font-bold">Harold Indra</span>
          <span className="text-3xl">Software Engineer</span>
          <span>CS + Advertising @ UIUC</span>

          {/* Sections */}
          <div className="flex flex-col text-sm mt-5 spacce-y-3 gap-2">
            <SectionButton
              title="about me"
              isActive={activeSection == "about"}
              onClick={() => scrollToSection("about", aboutRef)}
            />
            <SectionButton
              title="experience"
              isActive={activeSection == "experience"}
              onClick={() => scrollToSection("experience", experienceRef)}
            />
            <SectionButton
              title="projects"
              isActive={activeSection == "projects"}
              onClick={() => scrollToSection("projects", projectsRef)}
            />
          </div>
        </div>

        {/* Footer */}
        <div>
          <Contact />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full align-bottom py-[5rem] pr-[10rem] overflow-y-scroll">
        <div className="py-[2rem]" id="about" ref={aboutRef}>
          <span>
            I'm a developer from Jakarta, Indonesia with an interest in full
            stack software development, mobile development.
          </span>
        </div>

        <div
          className="flex flex-col py-[2rem] space-y-2 gap-3"
          id="experience"
          ref={experienceRef}
        >
          <span>Experience</span>
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
        </div>

        <div
          className="flex flex-col py-[2rem] space-y-2 gap-3"
          id="projects"
          ref={projectsRef}
        >
          <span>Projects</span>
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
          <Card title="Test" content="Test2" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
