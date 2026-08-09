import { useRef, useState, type ReactNode } from "react";

import { Card, type CardDetails } from "@/components/card";
import { Modal } from "@/components/modal";

export type Project = CardDetails & {
    /** Modal body. Omit it and the card renders as plain text. */
    content?: ReactNode;
};

export const ProjectCard = ({ content, ...details }: Project) => {
    const [isOpen, setIsOpen] = useState(false);
    const [cardBounds, setCardBounds] = useState<DOMRect | null>(null);
    const cardRef = useRef<HTMLButtonElement>(null);

    const openModal = () => {
        if (!cardRef.current) return;
        setCardBounds(cardRef.current.getBoundingClientRect());
        setIsOpen(true);
    };

    return (
        <>
            <Card
                {...details}
                ref={cardRef}
                onClick={content ? openModal : undefined}
            />

            {content && (
                <Modal
                    isOpen={isOpen}
                    handleClose={() => setIsOpen(false)}
                    cardBounds={cardBounds}
                    content={content}
                />
            )}
        </>
    );
};
