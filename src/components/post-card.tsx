import { ArrowRight } from "lucide-react";

import { cardClassName } from "@/components/card";
import { formatDate, cn } from "@/lib/utils";

/**
 * Blog list entry: just the date and title. Uses the same card hover as the
 * experience and project entries, with the date in the same column.
 */
export const PostCard = ({
    title,
    date,
    href,
}: {
    title: string;
    date: Date;
    href: string;
}) => {
    return (
        <a href={href} className={cn(cardClassName, "group md:items-baseline")}>
            <time
                dateTime={date.toISOString()}
                className="block text-sm text-text/70 font-mono shrink-0 md:w-50 md:me-4 mb-1 md:mb-0"
            >
                {formatDate(date)}
            </time>

            <span className="flex items-center gap-2 font-bold text-sm md:text-text text-overlay2">
                {title}
                <ArrowRight
                    size={14}
                    className="shrink-0 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-70 group-hover:translate-x-0"
                />
            </span>
        </a>
    );
};
