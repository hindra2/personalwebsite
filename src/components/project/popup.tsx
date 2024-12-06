import { motion } from "framer-motion";
import React from "react";

type ProjectSize = 'default' | 'wide' | 'tall' | 'large';

interface Project {
  id: number;
  imageUrl: string;
  size: ProjectSize;
  title: string;
  desc: string;
  content: React.ReactNode;
}

interface PopupProps {
  project: Project;
  onClose: () => void;
}


const Popup: React.FC<PopupProps> = ({ project, onClose }) => {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-background/50 items-center justify-center flex"
      onClick={handleBackdropClick}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        className="h-[75vh] overflow-y-auto bg-base1 w-[80%] rounded-xl border border-overlay1"
      >
        <div className="relative">
          <motion.div className="relative w-full h-[50vh]">
            <motion.img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative bg-base1 min-h-[50vh]"
          >
            <div className="max-w-4xl mx-auto py-8 px-8">
              <motion.h2 className="text-4xl font-bold text-text">
                {project.title}
              </motion.h2>
              <motion.div className="text-sm text-gray-400 font-bold tracking-wider mb-8">
                {project.desc}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-text space-y-6"
              >
                {project.content}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;