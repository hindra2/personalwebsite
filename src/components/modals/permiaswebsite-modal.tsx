import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { SkillTags } from "@/components/skill-tags";

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
                    onClick={() =>
                        window.open(
                            "https://permiasuiuc.org/",
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
                        Permias is the Indonesian student community in
                        universities in the US. This website was made for the
                        branch in UIUC, with the goal of helping students find
                        more information about the organization before coming to
                        the US, as this was something I didn't have as a
                        freshman. It's a pretty simple static site that does
                        it's job well.
                    </span>
                </div>

                <div className="flex flex-col mt-3">
                    <span className="text-overlay2">Images</span>
                    <img
                        src="/assets/projects/permiaswebsite.png"
                        alt="Screenshot of the Permias UIUC website"
                    />
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
