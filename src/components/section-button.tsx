import { motion } from "motion/react";

export const SectionButton = ({
  title,
  isActive,
  onClick,
}: {
  title: string;
  isActive: boolean;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      className="flex items-center w-fit"
      whileHover="hover"
      initial="rest"
      animate={isActive ? "active" : "rest"}
      onClick={onClick}
    >
      <motion.div
        className="h-0.5 w-6 bg-text origin-left mr-[5px]"
        variants={{
          rest: { scaleX: 1, opacity: 0.4 },
          hover: { scaleX: 2, opacity: 1 },
          active: { scaleX: 2, opacity: 1 },
        }}
        transition={{
          duration: 0.1,
          type: "tween",
        }}
      />
      <motion.span
        variants={{
          rest: { x: 0, opacity: 0.4 },
          hover: { x: 24, opacity: 1 },
          active: { x: 24, opacity: 1 },
        }}
        transition={{
          duration: 0.1,
          type: "tween",
        }}
      >
        {title}
      </motion.span>
    </motion.button>
  );
};
