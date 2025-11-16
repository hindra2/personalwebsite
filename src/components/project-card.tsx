import { useState, useRef } from "react";
import { Modal } from "./modal";

export const ProjectCard = ({
  title,
  desc,
  date,
  location,
  content,
  skills,
}: {
  title: string;
  desc: string;
  date: string;
  location: string;
  content: React.ReactNode;
  skills: string[];
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
        <div className="flex md:mb-0 mb-2 text-sm text-text/70 shrink-0 w-50 me-4">
          <p>{date}</p>
        </div>

        <div className="flex-col">
          <div className="flex flex-col justify-center md:mb-4 mb-2">
            <p className="font-bold text-sm md:text-text text-overlay2">
              {title}
            </p>
            <p className="text-sm text-text/70">{location}</p>
          </div>

          <p className="font text-sm text-justify">{desc}</p>

          <div className="flex">
            {skills && skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-overlay1 text-text border border-overlay1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
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
