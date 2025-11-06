import { useEffect, useRef, useState } from "react";

import { Contact } from "@/components/contacts";
import { ExperienceCard } from "@/components/experience-card";
import { SectionButton } from "@/components/section-button";

import { TemasModal } from "@/components/modals/temas-modal";

const MainPage = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollViewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: scrollViewRef.current,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sections = [
      aboutRef.current,
      experienceRef.current,
      projectsRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
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
    <div
      className="relative md:h-screen text-text md:flex bg-linear-to-br from-background2 to-background overflow-y-scroll scrollbar scrollbar-thumb-base1 scrollbar-track-background "
      ref={scrollViewRef}
    >
      {/* Left section */}
      <div className="w-full h-full md:ps-40 ps-7 py-20 md:flex md:flex-col space-y-10 justify-between md:sticky md:top-0">
        <div className="flex flex-col">
          <span className="md:text-7xl text-5xl font-bold">Harold Indra</span>
          <span className="md:text-3xl text-2xl">Software Engineer</span>
          <span className="md:text-base text-sm">CS + Advertising @ UIUC</span>

          {/* Sections */}
          <div className="flex-col text-sm mt-5 spacce-y-3 gap-2 hidden md:flex">
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
      <div className="w-full align-bottom md:py-20 md:pr-40 py-5 px-4">
        <div className="py-8 text-justify" id="about" ref={aboutRef}>
          <p className="md:hidden font-bold mb-1 text-xl text-overlay2">
            About Me
          </p>
          <span>
            I'm a developer from Jakarta, Indonesia with a drive to create
            software that solves problems. My passion for development started
            with my love for probelm solving.
          </span>
          <br />
          <br />
          <span>
            My hobbies include speedcubing, playing games and ...My hobbies
            include speedcubing, playing games and ...My hobbies include
            speedcubing, playing games and ...My hobbies include speedcubing,
            playing games and ...My hobbies include speedcubing, playing games
            and ...My hobbies include speedcubing, playing games and ...
          </span>
        </div>

        <div
          className="flex flex-col py-8 space-y-2 gap-3"
          id="experience"
          ref={experienceRef}
        >
          <p className="font-bold md:font-normal mb-1 md:mb-0 text-xl md:text-base text-overlay2 md:text-text">
            Experience
          </p>
          <ExperienceCard
            title="Software Development Intern @ Temas TBK"
            desc="Worked with a team to maintain old React codebases used for creating work and trucking orders by migrating and refactoring to LTS versions of outdated libraries, while also helping rewrite and refactor parts of a NodeJS backend of an internal tool for making work requests to Golang."
            date="May - August 2025"
            content={<TemasModal />}
            link="https://temas.id/en"
          />
        </div>

        <div
          className="flex flex-col py-8 space-y-2 gap-3"
          id="projects"
          ref={projectsRef}
        >
          <p className="font-bold md:font-normal mb-1 md:mb-0 text-xl md:text-base text-overlay2 md:text-text">
            Projects
          </p>
          <ExperienceCard
            title="Tulip Estate"
            desc="Developed a frontend for a mobile application with React Native for an app that helps bring a stock market like perspective to real estate, while implementing and deploying a backend on AWS with flask for an algorithm to calculate price changes."
            date="June 2024 - August 2025"
            link="https://tulip.markets"
          />
          <ExperienceCard
            title="Explorifyy"
            desc="Created a fullstack application using React Native and Supabase for an app to host events and share them in a feedlike application structure, filtered by location and interest categories."
            date="February - March 2024"
            link="https://apps.apple.com/us/app/explorifyy/id6739402841"
          />
          <ExperienceCard
            title="Akar.study"
            desc="A fullstack web application built on ReactJS and Supabase, a flashcard website utilizng a basic spaced repitition algiorithm and a Pomodor timer to help boost productivity and learning."
            date="April - February 2024"
            link="https://akar.study"
          />
          <ExperienceCard
            title="Permias Website"
            desc="Created a website to promote the Indonesian Student Association (PERMIAS) at UIUC with ReactJS, showcasing events and information about the school to help new students get acclimated."
            date="March - April 2024"
            link="https://permiasuiuc.org/"
          />
          <ExperienceCard
            title="Talenta"
            desc="Developed a frontend for an educational database for schools with NextJS, allowing for the administration and management of students, with the goal of enabling a more customized and informed learning experience. This was built for the Cozad New Venture Challenge and won $500."
            date="January - April 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
