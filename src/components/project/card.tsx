import { motion } from 'framer-motion';

const Card = ({ project, onExpand }) => {
  const sizeClasses = {
    default: "col-span-2 row-span-1 h-80",
    wide: "col-span-3 row-span-1 h-80",
    tall: "col-span-1 row-span-2 h-full min-h-[32rem]",
    large: "col-span-2 row-span-2 h-full min-h-[32rem]"
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      className={`relative overflow-hidden rounded-xl cursor-pointer ${sizeClasses[project.size || 'default']}`}
      onClick={onExpand}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative w-full h-[50vh] md:h-[80vh]">
        <img 
          src={project.imageUrl}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <motion.span className="text-sm uppercase tracking-wider mb-2 inline-block">
          {project.category}
        </motion.span>
        <motion.h2 className="text-2xl font-bold">
          {project.title}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Card;