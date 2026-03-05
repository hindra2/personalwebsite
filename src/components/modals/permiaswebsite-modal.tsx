import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const PermiasWebsiteModal = () => {
  const technologies = ["ReactJS", "Typescript", "TailwindCSS"];
  return (
    <div className="flex flex-col px-5">
      <div className="flex items-center">
        <span className="flex md:text-2xl text-xl md:text-text text-overlay2">
          Permias Website
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
          onClick={() => window.open("https://permiasuiuc.org/")}
        >
          <ArrowUpRight className="ml-1" />
        </motion.button>
      </div>

      <div className="flex flex-col px-3 py-1 border border-overlay1 rounded-lg mt-3">
        <div className="flex flex-col">
          <span className="text-overlay2">About</span>
          <span className="">
            Permias is the Indonesian student community in universities in the
            US. This website was made for the branch in UIUC, with the goal of
            helping students find more information about the organization before
            coming to the US, as this was something I didn't have as a freshman.
            It's a pretty simple static site that does it's job well.
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">Images</span>
          <span className="">
            <img src="/assets/projects/permiaswebsite.png"></img>
          </span>
        </div>

        {/* <div className="flex flex-col mt-3">
          <span className="text-overlay2">Features</span>
          <span className="">
            <ul className="list-disc ml-5">
              <li>Merch Selling</li>
              <li>RSVP and save system</li>
              <li>Sharing events with a deep link</li>
            </ul>
          </span>
        </div> */}

        {/* <div className="flex flex-col mt-3">
          <span className="text-overlay2">What I did</span>
          <span className="font-thin"></span>
        </div> */}
      </div>
      <div className="flex flex-col mt-3">
        <span className="text-overlay2">Technologies Used</span>
        <div className="flex w-full rounded-xl h-full bg-surface0 p-3 items-center justify-center">
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((technology, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-overlay1/60 text-text border border-overlay1"
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
