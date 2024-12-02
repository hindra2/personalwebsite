import React, { useState, useEffect } from "react";

import AboutMe from "../pages/aboutme";
import Projects from "../pages/projects";
import Skills from "../pages/skills";


const MainPage: React.FC = () => {
    const [activeSection, setActiveSection] = useState("intro");

    useEffect(() => {
        const handleScroll = () => {
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
            element.scrollIntoView({ behavior: "smooth" })
            setActiveSection(id);
        }
    }

    return (
        <div className="bg-background h-screen w-screen p-10 overflow-x-hidden">
            {/* tabs */}
            <nav className="flex flex-col">
                <div className="flex space-x-10 text-2xl text-text items-center justify-center w-full">
                {[
                    { id: 'intro', label: 'Intro' },
                    { id: 'skills', label: 'Skills' },
                    { id: 'about', label: 'About' },
                    { id: 'projects', label: 'Projects' }
                    ].map((section) => (
                    <button
                        key={section.id}
                        onClick={() => scroll(section.id)}
                        className={`px-5 py-2 rounded-full transition-all duration-300
                        ${activeSection === section.id 
                            ? 'bg-overlay1' 
                            : 'hover:bg-overlay1/50'
                        }`}
                    >
                        {section.label}
                    </button>
                ))}
                </div>
            </nav>

            {/* section 1 */}
            <div id="intro" className="flex flex-col items-center justify-center w-screen">
                <span className='text-xl font-bold text-text'>
                    harold indra
                </span>
                <span className='text-xl font-bold text-text'>
                    +1 (847) 654-7447
                </span>
                <span className='text-xl font-bold text-text'>
                    harold.d.indra.uni@gmail.com
                </span>
            </div>

            <div id="skills" className="flex flex-cols w-full">
                <Skills />
            </div>

            <div id="about">
                <AboutMe />
            </div>


            <div id="projects" className="flex flex-cols items-center justify-center w-screen text-lg text-text">
                <Projects />
            </div>
        </div>
    );
};
export default MainPage