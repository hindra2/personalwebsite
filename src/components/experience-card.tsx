import { Card, type CardDetails } from "@/components/card";

export type Experience = CardDetails & {
    /** Company site. Omit it and the card renders as plain text. */
    link?: string;
};

export const ExperienceCard = ({ link, ...details }: Experience) => {
    return (
        <Card
            {...details}
            onClick={
                link
                    ? () => window.open(link, "_blank", "noopener,noreferrer")
                    : undefined
            }
        />
    );
};
