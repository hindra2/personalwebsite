import { cardClassName } from "@/components/card";
import { formatDate } from "@/lib/utils";

/** Blog list entry, laid out like the experience and project cards. */
export const PostCard = ({
    title,
    date,
    summary,
    href,
}: {
    title: string;
    date: Date;
    summary: string;
    href: string;
}) => {
    return (
        <a href={href} className={cardClassName}>
            <div className="flex md:mb-0 mb-2 text-sm text-text/70 shrink-0 w-50 me-4 font-mono">
                <p>{formatDate(date)}</p>
            </div>

            <div className="flex-col">
                <p className="font-bold text-sm md:text-text text-overlay2 md:mb-4 mb-2">
                    {title}
                </p>
                <p className="text-sm text-justify">{summary}</p>
            </div>
        </a>
    );
};
