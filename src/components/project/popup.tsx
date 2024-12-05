import { motion } from "framer-motion";

const Popup = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 items-center justify-center flex"
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="h-full overflow-y-auto bg-background w-[60%]"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="relative w-full h-[50vh] md:h-[60vh]">
          <img 
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative bg-background min-h-[50vh]">
          <div className="max-w-4xl mx-auto px-8 py-12">
            <h2 className="text-4xl font-bold text-text mb-8">
              {project.title}
            </h2>
            <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
              {project.desc}
            </div>
            <div className="text-text space-y-6">
              {project.content}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Popup;