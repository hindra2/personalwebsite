import React from 'react';
import { Mail, Linkedin, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <div className='flex gap-8 bg-overlay1/40 backdrop-blur-sm rounded-full px-10 py-3'>
          <motion.button whileHover={{scale:1.5}} whileTap={{scale:0.9}} className='text-text hover:text-overlay2' onClick={() => window.location.href = 'mailto:harold.d.indra.uni@gmail.com'}>
            <Mail size={40} />
          </motion.button>

          <motion.button whileHover={{scale:1.5}} whileTap={{scale:0.9}} className='text-text hover:text-overlay2' onClick={() => window.location.href = 'https://github.com/hindra2'}>
            <Github size={40} />
          </motion.button>

          <motion.button whileHover={{scale:1.5}} whileTap={{scale:0.9}} className='text-text hover:text-overlay2' onClick={() => window.location.href = 'https://www.instagram.com/haroldindra/'}>
            <Instagram size={40} />
          </motion.button>

          <motion.button whileHover={{scale:1.5}} whileTap={{scale:0.9}} className='text-text hover:text-overlay2' onClick={() => window.location.href = 'https://www.linkedin.com/in/harold-indra-4734b9296/'}>
            <Linkedin size={40} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Contact;