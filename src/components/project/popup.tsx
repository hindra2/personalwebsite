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
      className="fixed inset-0 z-50 bg-background/50 items-center justify-center flex"
      onClick={handleBackdropClick}
    >
      <motion.div 
        className="h-[75vh] overflow-y-auto bg-base1 w-[80%] rounded-xl border border-overlay1 drop-shadow-xl"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
      >
        <div className="relative bg-base1 min-h-[50vh]">
          <div className="max-w-4xl mx-auto py-8">
            <h2 className="text-4xl font-bold text-text">
              {project.title}
            </h2>
            <div className="text-sm text-gray-400 font-bold tracking-wider mb-8">
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