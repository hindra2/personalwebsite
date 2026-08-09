import { cn } from "@/lib/utils";

export const SkillTags = ({
    skills,
    className,
}: {
    skills: string[];
    className?: string;
}) => {
    if (skills.length === 0) return null;

    return (
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span
                    key={skill}
                    className={cn(
                        "px-2 py-1 text-xs rounded-full bg-overlay1 text-text border border-overlay1",
                        className,
                    )}
                >
                    {skill}
                </span>
            ))}
        </div>
    );
};
