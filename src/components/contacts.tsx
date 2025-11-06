import { Mail, Linkedin, Github, FileUser } from "lucide-react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <div className="flex gap-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text hover:text-overlay2"
        onClick={() =>
          (window.location.href = "mailto:harold.d.indra.uni@gmail.com")
        }
      >
        <Mail size={32} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text hover:text-overlay2"
        onClick={() => window.open("https://github.com/hindra2")}
      >
        <Github size={32} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text hover:text-overlay2"
        onClick={() =>
          window.open("https://www.linkedin.com/in/harold-indra-4734b9296/")
        }
      >
        <Linkedin size={32} />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-text hover:text-overlay2"
        onClick={() => window.open("/resume.pdf")}
      >
        <FileUser size={32} />
      </motion.button>
    </div>
  );
};
