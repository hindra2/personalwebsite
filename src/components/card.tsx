import type { Ref } from "react";

import { SkillTags } from "@/components/skill-tags";
import { cn } from "@/lib/utils";

export type CardDetails = {
    title: string;
    desc: string;
    date: string;
    location: string;
    skills: string[];
};

/** Shared layout for the experience and project entries. */
export const Card = ({
    title,
    desc,
    date,
    location,
    skills,
    onClick,
    ref,
}: CardDetails & {
    onClick?: () => void;
    ref?: Ref<HTMLButtonElement>;
}) => {
    return (
        <button
            ref={ref}
            onClick={onClick}
            className={cn(
                "md:flex rounded-lg p-2 text-left border border-transparent transition-all duration-300",
                "hover:border-overlay1 hover:bg-overlay1/10 hover:backdrop-blur-sm hover:shadow-lg",
                onClick ? "hover:cursor-pointer" : "cursor-default",
            )}
        >
            <div className="flex md:mb-0 mb-2 text-sm text-text/70 shrink-0 w-50 me-4 font-mono">
                <p>{date}</p>
            </div>

            <div className="flex-col">
                <div className="flex flex-col justify-center md:mb-4 mb-2">
                    <p className="font-bold text-sm md:text-text text-overlay2">
                        {title}
                    </p>
                    <p className="text-sm text-text/70">{location}</p>
                </div>

                <p className="text-sm text-justify">{desc}</p>

                <div className="mt-5">
                    <SkillTags skills={skills} />
                </div>
            </div>
        </button>
    );
};
