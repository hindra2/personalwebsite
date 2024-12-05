import React from 'react';
import { motion } from 'framer-motion';



const Intro: React.FC = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center'>
      <motion.h1 className="text-4xl font-bold mb-4" initial={{y:-100}} animate={{y:0}}>Hello, my name is Harold Indra.</motion.h1>
      <motion.p className="text-xl">Welcome to my website!</motion.p>
    </motion.div>
  );
};

export default Intro;