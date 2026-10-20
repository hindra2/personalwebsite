import { SkillTags } from "@/components/skill-tags";
import { cn } from "@/lib/utils";

export type CardDetails = {
    title: string;
    desc: string;
    date: string;
    location: string;
    skills: string[];
};

export const cardClassName =
    "md:flex p-2 text-left border border-transparent transition-all duration-300 hover:border-overlay1 hover:bg-overlay1/10 hover:backdrop-blur-sm hover:shadow-lg";

/**
 * Shared layout for the experience and project entries. Given `href` it's a
 * plain link, so it works without any client-side JS. External links (the
 * experience entries) open in a new tab; a project's own page doesn't.
 */
export const Card = ({
    title,
    desc,
    date,
    location,
    skills,
    href,
}: CardDetails & {
    href?: string;
}) => {
    const body = (
        <>
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
        </>
    );

    if (href) {
        const external = href.startsWith("http");
        return (
            <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={cardClassName}
            >
                {body}
            </a>
        );
    }

    return <div className={cn(cardClassName, "cursor-default")}>{body}</div>;
};
