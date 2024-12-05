import React from 'react';
import { motion } from 'framer-motion';



const Intro: React.FC = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center'>
      <h1 className="text-4xl font-bold mb-4">Hello, my name is Harold Indra.</h1>
      <p className="text-xl">Welcome to my website!</p>
    </motion.div>
  );
};

export default Intro;