import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const ExperienceCard = ({
  title,
  content,
  date,
  modal,
}: {
  title: string;
  content: string;
  date: string;
  modal: React.ReactNode;
}) => {
  const MODAL_WIDTH = 1000;
  const MODAL_HEIGHT = 800;

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
        className="flex rounded-lg p-2 text-left border border-transparent hover:border-overlay1 hover:bg-overlay1/10 hover:backdrop-blur-sm hover:shadow-lg transition-all duration-300"
        ref={cardRef}
        onClick={handleOpen}
      >
        <div className="flex text-sm text-text/40 shrink-0 w-48 me-4">
          <p>{date}</p>
        </div>
        <div className="flex-col">
          <div className="flex items-center mb-4">
            <p className="font-bold text-sm">{title}</p>
          </div>
          <p className="font-thin text-sm text-justify">{content}</p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && cardBounds && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.75,
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 300,
              }}
              className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-background2 rounded-lg shadow-2xl flex flex-col"
            >
              <div className="relative h-full overflow-y-auto p-6">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-overlay1/20 transition-colors"
                >
                  <X size={20} />
                </button>

                {/* Modal content */}
                <div className="pr-10">
                  <div className="space-y-4">{modal}</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
