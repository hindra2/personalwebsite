import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface StartAnimationProps {
  onAnimationComplete: () => void;
}

const StartAnimation: React.FC<StartAnimationProps> = ({ onAnimationComplete }) => {
  const [text, setText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Group commands with their outputs
  const terminalSequence = [
    { 
      command: 'npm install personalwebsite',
      outputs: [
        'Installing dependencies...',
        'Added 324 packages in 2.1s'
      ]
    },
    {
      command: 'npm run dev',
      outputs: [
        'Starting development server...',
        'Ready to rock! 🚀'
      ]
    }
  ];

  const skipAnimation = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    onAnimationComplete();
  }, [onAnimationComplete]);

  useEffect(() => {
    if (isComplete) return;

    const currentStep = terminalSequence[Math.floor(currentLineIndex / 3)];
    if (!currentStep) {
      const completionTimer = setTimeout(() => {
        setIsComplete(true);
        onAnimationComplete();
      }, 500);
      return () => clearTimeout(completionTimer);
    }

    const isTypingCommand = currentLineIndex % 3 === 0;
    
    if (isTypingCommand) {
      // Type out the command character by character
      if (currentCharIndex < currentStep.command.length) {
        const timer = setTimeout(() => {
          setText(prev => prev + currentStep.command[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, Math.random() * 50 + 50);
        return () => clearTimeout(timer);
      } else {
        // Command finished typing, add newline and move to output
        const lineBreakTimer = setTimeout(() => {
          setText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 500);
        return () => clearTimeout(lineBreakTimer);
      }
    } else {
      // Show output instantly after a delay
      const outputIndex = (currentLineIndex % 3) - 1;
      if (outputIndex < currentStep.outputs.length) {
        const outputTimer = setTimeout(() => {
          setText(prev => prev + currentStep.outputs[outputIndex] + '\n');
          setCurrentLineIndex(prev => prev + 1);
        }, 300);
        return () => clearTimeout(outputTimer);
      } else {
        // Add an extra line break between command sequences
        const breakTimer = setTimeout(() => {
          setText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
        }, 200);
        return () => clearTimeout(breakTimer);
      }
    }
  }, [currentLineIndex, currentCharIndex, onAnimationComplete, isComplete]);

  return (
    <motion.div
      className="flex py-[200px] px-[300px] bg-black text-text h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onClick={skipAnimation}
    >
      <motion.div
        className="text-text"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={skipAnimation}
          className="absolute top-2 right-2 px-2 py-1 my-[200px] mx-[300px] rounded bg-gray-800 hover:bg-gray-700 text-gray-400 transition-colors text-xl"
          title="Skip animation"
        >
          Skip Animation  &gt;&gt;
        </button>
        <div className="p-4">
          <div className="text-green-500 text-3xl">
            {text.split('\n').map((line, i) => (
              <div key={i} className="flex">
                {line.startsWith('npm') && <span className="mr-2">~/projects/personalwebsite </span>}
                <span>{line}</span>
                {i === text.split('\n').length - 1 && !isComplete && (
                  <span className="ml-px animate-cursor-blink">|</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StartAnimation;