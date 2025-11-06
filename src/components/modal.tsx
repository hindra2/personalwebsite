import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Modal = ({
  isOpen,
  cardBounds,
  handleClose,
  content,
}: {
  isOpen: boolean;
  cardBounds: DOMRect | null;
  handleClose: () => void;
  content: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      {isOpen && cardBounds && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-base z-40"
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
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[90%] md:h-[90%] w-[95%] h-[95%] bg-background rounded-lg shadow-2xl flex flex-col"
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-overlay1 z-10 items-center justify-center"
            >
              <X size={20} />
            </button>
            <div className="h-full overflow-y-auto md:p-10 pt-10 scrollbar scrollbar-thumb-base1 scrollbar-track-background">
              <div className="space-y-4">{content}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
