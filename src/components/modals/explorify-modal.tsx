import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { SkillTags } from "@/components/skill-tags";

export const ExplorifyModal = () => {
    const technologies = [
        "React Native",
        "Supabase",
        "TailwindCSS",
        "Typescript",
        "PSQL",
    ];

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
                        window.open(
                            "https://apps.apple.com/us/app/explorifyy/id6739402841",
                            "_blank",
                            "noopener,noreferrer",
                        )
                    }
                >
                    <ArrowUpRight className="ml-1" />
                </motion.button>
            </div>

            <div className="flex flex-col px-3 py-1 border border-overlay1 rounded-lg mt-3">
                <div className="flex flex-col">
                    <span className="text-overlay2">About</span>
                    <span>
                        Explorifyy is a mobile application that aggregates
                        events to help students find things to do in campus. The
                        idea came from when me and my friends missed out on a
                        lot of interesting events in our freshmen year, so I
                        wanted to build something that would help with the
                        awareness of events happening around campus.
                    </span>
                </div>

                <div className="flex flex-col mt-3">
                    <span className="text-overlay2">Images</span>
                    <img
                        src="/assets/projects/explorify.png"
                        alt="Screenshots of the Explorifyy mobile app"
                    />
                </div>

                <div className="flex flex-col mt-3">
                    <span className="text-overlay2">Features</span>
                    <ul className="list-disc ml-5">
                        <li>Explore events</li>
                        <li>RSVP and save system</li>
                        <li>Sharing events with a deep link</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col mt-3">
                <span className="text-overlay2">Technologies Used</span>
                <div className="flex w-full rounded-xl h-full bg-surface0 p-3 items-center justify-center">
                    <SkillTags
                        skills={technologies}
                        className="bg-overlay1/60"
                    />
                </div>
            </div>
        </div>
    );
};
