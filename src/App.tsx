import { useEffect, useRef, useState, type ReactNode } from "react";

import { Contact } from "@/components/contacts";
import { ExperienceCard } from "@/components/experience-card";
import { ProjectCard } from "@/components/project-card";
import { SectionButton } from "@/components/section-button";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

/** Only shown on mobile, where the side nav is hidden. */
const SectionHeading = ({ children }: { children: ReactNode }) => (
    <p className="font-mono md:font-normal mb-1 md:mb-0 text-xl md:text-base text-overlay2 md:text-text">
        {children}
    </p>
);

const MainPage = () => {
    const [activeSection, setActiveSection] = useState("about");

    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const scrollViewRef = useRef<HTMLDivElement>(null);

    const sections = [
        { id: "about", label: "about me", ref: aboutRef },
        { id: "experience", label: "experience", ref: experienceRef },
        { id: "projects", label: "projects", ref: projectsRef },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            {
                root: scrollViewRef.current,
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            },
        );

        [aboutRef.current, experienceRef.current, projectsRef.current]
            .filter((section) => section !== null)
            .forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (section: (typeof sections)[number]) => {
        setActiveSection(section.id);
        section.ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="relative md:h-screen text-text md:flex bg-linear-to-br from-background2 to-background overflow-y-scroll scrollbar scrollbar-thumb-base1 scrollbar-track-background"
            ref={scrollViewRef}
        >
            {/* Left section */}
            <div className="w-[80%] h-full md:ps-40 ps-7 py-20 md:flex md:flex-col space-y-10 justify-between md:sticky md:top-0">
                <div className="flex flex-col">
                    <span className="md:text-7xl text-5xl font-bold">
                        Harold Indra
                    </span>
                    <span className="md:text-3xl text-2xl">
                        Software Engineer
                    </span>
                    <span className="md:text-base text-sm">
                        CS + Advertising @ UIUC
                    </span>

                    {/* Sections */}
                    <div className="flex-col text-sm mt-5 space-y-3 gap-2 hidden md:flex">
                        {sections.map((section) => (
                            <SectionButton
                                key={section.id}
                                title={section.label}
                                isActive={activeSection === section.id}
                                onClick={() => scrollToSection(section)}
                            />
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div>
                    <div className="flex gap-1.5 text-[0.6rem] mb-3 text-text/50">
                        <span>Website colors adapted from </span>
                        <a
                            href="https://github.com/nickberckley/kabadoni"
                            className="underline"
                        >
                            Kabadoni
                        </a>
                    </div>
                    <Contact />
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full align-bottom md:py-20 md:pr-40 py-5 px-5">
                <div className="py-8 text-justify" id="about" ref={aboutRef}>
                    <div className="md:hidden">
                        <SectionHeading>About Me</SectionHeading>
                    </div>

                    <span>I'm a developer from</span>
                    <span className="font-extrabold hover:text-red hover:cursor-[url(/assets/flag.png),default]">
                        {" "}
                        Jakarta, Indonesia
                    </span>
                    <span>
                        , driven by a desire to create software that solves real
                        problems and make a genuine impact. My passion for
                        development started with a love for puzzles, and over
                        time, it's grown into a fascination with the
                        intersection of technology and design.
                    </span>

                    <br />
                    <br />

                    <span>
                        I'm currently looking for opportunities in software
                        engineering or full-stack development positions, where I
                        can build things that not only work beautifully, but
                    </span>
                    <span className="italic"> feel</span>
                    <span> right to use.</span>

                    <br />
                    <br />

                    <span>Outside of coding, you'll find me </span>
                    <span className="font-extrabold hover:text-red hover:cursor-[url(/assets/cube.png),default]">
                        speedcubing
                    </span>
                    <span> or trying to optimize a </span>
                    <span className="font-extrabold group hover:cursor-[url(/assets/dart.png),default]">
                        <span className="group-hover:text-blue">Bloons</span>
                        <span className="group-hover:text-peach"> TD 6</span>
                    </span>
                    <span> run.</span>
                </div>

                <div
                    className="flex flex-col py-8 space-y-2 gap-3"
                    id="experience"
                    ref={experienceRef}
                >
                    <SectionHeading>Experience</SectionHeading>
                    {experiences.map((experience) => (
                        <ExperienceCard
                            key={experience.title}
                            {...experience}
                        />
                    ))}
                </div>

                <div
                    className="flex flex-col py-8 space-y-2 gap-3"
                    id="projects"
                    ref={projectsRef}
                >
                    <SectionHeading>Projects</SectionHeading>
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainPage;
