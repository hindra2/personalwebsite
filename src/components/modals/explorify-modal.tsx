import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const ExplorifyModal = () => {
  const technologies = ["ReactJS", "NodeJS", "TypeScript", "Golang"];
  return (
    <div className="flex flex-col px-5">
      <div className="flex items-center">
        <span className="flex md:text-2xl text-xl md:text-text text-overlay2">
          Explorifyy
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
          onClick={() =>
            window.open("https://apps.apple.com/us/app/explorifyy/id6739402841")
          }
        >
          <ArrowUpRight className="ml-1" />
        </motion.button>
      </div>

      <div className="flex flex-col px-3 py-1 border border-overlay1 rounded-lg mt-3">
        <div className="flex flex-col">
          <span className="text-overlay2">About</span>
          <span className="">
            Explorifyy is a mobile application that aggregates events to help
            students find things to do in campus. The idea came from when me and
            my friends missed out on a lot of interesting events in our freshmen
            year, so I wanted to build something that would help with the
            awareness of events happening around campus.
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">Images</span>
          <span className="">
            <img src="/assets/projects/explorify.png"></img>
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">Features</span>
          <span className="">
            <ul className="list-disc ml-5">
              <li>Explore events</li>
              <li>RSVP and save system</li>
              <li>Sharing events with a deep link</li>
            </ul>
          </span>
        </div>

        <div className="flex flex-col mt-3">
          <span className="text-overlay2">What I did</span>
          <span className="font-thin"></span>
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
