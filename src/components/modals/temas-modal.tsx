import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const TemasModal = () => {
  const technologies = ["ReactJS", "NodeJS", "TypeScript", "Golang"];
  return (
    <div className="flex flex-col px-5">
      <div className="flex items-center">
        <span className="flex md:text-2xl text-xl md:text-text text-overlay2">
          SWE Intern @ Temas TBK
        </span>
        <motion.button
          className="hover:cursor-pointer"
          whileHover={{
            x: 5,
            y: -5,
            scale: 1.1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          onClick={() => window.open("https://temas.id/en")}
        >
          <ArrowUpRight className="ml-1" />
        </motion.button>
      </div>
      <div className="flex flex-col p-3 border border-overlay1 rounded-lg">
        <div className="flex flex-col">
          <span className="text-overlay2">About</span>
          <span className="font-thin">
            Temas TBK is a shipping company in Jakarta Indonesia
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">Features</span>
          <span className="font-thin">
            <ul className="list-disc ml-5">
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
              <li>Test1</li>
            </ul>
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">What I did</span>
          <span className="font-thin">this is what I did</span>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <span className="text-overlay2">Technologies Used</span>
        <div className="flex w-full rounded-xl h-full bg-surface0 p-3 items-center justify-center">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs text-thin rounded-full bg-overlay1/60 text-text border border-overlay1"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
