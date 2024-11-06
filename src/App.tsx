import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StartAnimation from './components/start-animation';
import MainPage from './mainpage/mainpage';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleAnimationComplete = () => {
    setTimeout(() => setShowMain(true), 500);
  };

  return (
    <>
      <AnimatePresence>
        {!showMain && (
          <StartAnimation onAnimationComplete={handleAnimationComplete} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMain && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-cols items-center justify-center min-h-screen"
          >
            <MainPage />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App