import { cn } from "@/lib/utils";

/**
 * Plain CSS transitions rather than motion: motion's opacity animation flashes
 * the previous value for a frame when it finishes, which flickers the nav.
 */
export const SectionButton = ({
    title,
    isActive,
    onClick,
}: {
    title: string;
    isActive: boolean;
    onClick?: () => void;
}) => {
    return (
        <button
            className="group flex items-center w-fit hover:cursor-pointer"
            onClick={onClick}
        >
            <div
                className={cn(
                    "h-0.5 w-6 bg-text origin-left mr-1.25 transition duration-100 ease-out",
                    isActive
                        ? "scale-x-200 opacity-100"
                        : "opacity-40 group-hover:scale-x-200 group-hover:opacity-100",
                )}
            />
            <span
                className={cn(
                    "transition duration-100 ease-out",
                    isActive
                        ? "translate-x-6 opacity-100"
                        : "opacity-40 group-hover:translate-x-6 group-hover:opacity-100",
                )}
            >
                {title}
            </span>
        </button>
    );
};
