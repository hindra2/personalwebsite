import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import Intro from "@/pages/intro";
import AboutMe from "@/pages/aboutme";
import Projects from "@/pages/projects";
import Skills from "@/pages/skills";
import Contact from "@/components/mainpage/contact";

const ScrollPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const sections = [
    { id: 'intro', Component: Intro },
    { id: 'about', Component: AboutMe },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex(prev => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isScrolling, activeIndex, sections.length]);

  const navigate = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background text-text">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-center items-center p-4">
          <div className="flex bg-overlay1/40 backdrop-blur-lg rounded-full items-center justify-center px-5 py-1 border border-overlay1">
            <div className="flex gap-4">
              <button onClick={() => navigate(0)}>
                <img src={"/favicon.svg"} alt="Logo" width={40}/>  
              </button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}
                className={`px-5 py-2 rounded-full transition-all duration-300 font-bold hover:bg-overlay1/50 ${activeIndex === 1 ? 'bg-overlay1 text-xl' : ''}`}
                onClick={() => navigate(1)}
              >
                About Me
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}
                className={`px-5 py-2 rounded-full transition-all duration-300 font-bold hover:bg-overlay1/50 ${activeIndex === 2 ? 'bg-overlay1 text-xl' : ''}`}
                onClick={() => navigate(2)}
              >
                Skills
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}
                className={`px-5 py-2 rounded-full transition-all duration-300 font-bold hover:bg-overlay1/50 ${activeIndex === 3 ? 'bg-overlay1 text-xl' : ''}`}
                onClick={() => navigate(3)}
              >
                Projects
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative h-full">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className="absolute w-full h-full transition-all duration-1000 ease-in-out"
            style={{
              transform: `translateY(${(index - activeIndex) * 100}%)`,
              opacity: index === activeIndex ? 1 : 0.3,
            }}
          >
            <section className="h-full flex items-center justify-center">
              <section.Component />
            </section>
          </div>
        ))}
      </div>

      <div className="fixed bottom-8 right-8">
        <Contact />
      </div>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigate(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-overlay1 scale-150' : 'bg-overlay1/50 hover:bg-overlay1'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollPage;