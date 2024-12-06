import React, { useRef } from 'react';
import { motion } from 'framer-motion';

// The container that defines the drag bounds
const DraggableContainer = ({ children }) => {
  const containerRef = useRef(null);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-64 h-64 border-2 border-gray-300 rounded-lg bg-gray-50"
    >
      {React.Children.map(children, child => 
        React.cloneElement(child, { dragConstraints: containerRef })
      )}
    </div>
  );
};

// The draggable element
const DraggableObject = ({ dragConstraints }) => {
  return (
    <motion.div
      drag
      dragConstraints={dragConstraints}
      whileHover={{ scale: 1.1 }}
      whileDrag={{ scale: 0.95 }}
      className="w-16 h-16 bg-overlay1 rounded-lg cursor-grab active:cursor-grabbing"
    />
  );
};

// Example usage
const DraggableDemo = () => {
  return (
    <DraggableContainer>
      <DraggableObject />
    </DraggableContainer>
  );
};

export default DraggableDemo;