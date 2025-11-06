import { useState, useRef } from "react";
import { Modal } from "./modal";

export const ExperienceCard = ({
  title,
  desc,
  date,
  content,
}: {
  title: string;
  desc: string;
  date: string;
  content: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const [cardBounds, setCardBounds] = useState<DOMRect | null>(null);

  const handleOpen = () => {
    if (cardRef.current) {
      setCardBounds(cardRef.current.getBoundingClientRect());
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="md:flex rounded-lg p-2 text-left border border-transparent hover:border-overlay1 hover:bg-overlay1/10 hover:backdrop-blur-sm hover:shadow-lg hover:cursor-pointer transition-all duration-300"
        ref={cardRef}
        onClick={handleOpen}
      >
        <div className="flex md:mb-0 mb-2 text-sm text-text/40 shrink-0 w-48 me-4">
          <p>{date}</p>
        </div>
        <div className="flex-col">
          <div className="flex items-center md:mb-4 mb-2">
            <p className="font-bold text-sm md:text-text text-overlay2">
              {title}
            </p>
          </div>
          <p className="font-thin text-sm text-justify">{desc}</p>
        </div>
      </button>

      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        cardBounds={cardBounds}
        content={content}
      />
    </>
  );
};
