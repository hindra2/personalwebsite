import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Skill {
  id: string;
  name: string;
  x: number;
  y: number;
  connections: string[];
}

interface SkillBubbleProps {
  skill: string;
  x: number;
  y: number;
  onHover: () => void;
  isHovered: boolean;
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ skill, x, y, onHover, isHovered }) => {
  return (
    <motion.div
      className={`absolute rounded-full px-4 py-2 cursor-pointer transform
        ${isHovered ? 'bg-overlay1 text-text' : 'bg-overlay1/50'}`}
      style={{ 
        left: x, 
        top: y,
      }}
      initial={false}
      animate={{
        scale: isHovered ? 1.1 : 1,
      }}
      onHoverStart={onHover}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {skill}
    </motion.div>
  );
};

const SkillNetwork: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const generateCircularLayout = (skillsData: Array<{ name: string, connections: string[] }>) => {
      const radius = 200;
      const center = { x: 300, y: 300 };
      
      return skillsData.map((skill, index) => {
        const angle = (2 * Math.PI * index) / skillsData.length;
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        
        return {
          id: (index + 1).toString(),
          name: skill.name,
          x,
          y,
          connections: skill.connections,
        };
      });
    };

    const skillsData = [
      { name: 'React', connections: ['2', '3', '4'] },
      { name: 'TypeScript', connections: ['1', '3'] },
      { name: 'Node.js', connections: ['1', '2', '4'] },
      { name: 'GraphQL', connections: ['1', '3'] },
      { name: 'REST API', connections: ['3', '4'] },
      { name: 'Redux', connections: ['1', '2'] },
    ];

    const layoutSkills = generateCircularLayout(skillsData);
    setSkills(layoutSkills);
  }, []);

  const drawConnections = () => {
    return skills.flatMap(skill => 
      skill.connections.map(connectionId => {
        const connectedSkill = skills.find(s => s.id === connectionId);
        if (!connectedSkill) return null;

        const isHighlighted = 
          hoveredSkill === skill.id || 
          hoveredSkill === connectionId;

        return (
          <svg
            key={`${skill.id}-${connectionId}`}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            style={{ zIndex: -1 }}
          >
            <line
              x1={skill.x}
              y1={skill.y}
              x2={connectedSkill.x}
              y2={connectedSkill.y}
              stroke={isHighlighted ? "white" : 'black'}
              strokeWidth={isHighlighted ? 2 : 1}
            />
          </svg>
        );
      })
    );
  };

  return (
    <div className="relative w-[600px] h-[600px] bg-background">
      {drawConnections()}
      {skills.map((skill) => (
        <SkillBubble
          key={skill.id}
          skill={skill.name}
          x={skill.x}
          y={skill.y}
          onHover={() => setHoveredSkill(skill.id)}
          isHovered={hoveredSkill === skill.id}
        />
      ))}
    </div>
  );
};

export default SkillNetwork;