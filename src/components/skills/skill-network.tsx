// SkillTreeTailwind.tsx
import React, { useEffect, useRef, useState } from "react";

interface Skill {
  id: string;
  name: string;
  level: number; // 1-10
  category: string;
  description: string;
}

interface SkillTreeProps {
  skills: Skill[];
  title?: string;
  categoryColors?: Record<string, string>;
}

// Default category colors - Tailwind compatible colors
const DEFAULT_CATEGORY_COLORS: Record<string, string> = {
  Frontend: "bg-blue-500",
  Backend: "bg-green-500",
  Tools: "bg-yellow-500",
  DevOps: "bg-red-500",
  Design: "bg-purple-500",
  Quality: "bg-orange-500",
};

// Text colors to match backgrounds
const TEXT_COLORS: Record<string, string> = {
  "bg-blue-500": "text-blue-500",
  "bg-green-500": "text-green-500",
  "bg-yellow-500": "text-yellow-500",
  "bg-red-500": "text-red-500",
  "bg-purple-500": "text-purple-500",
  "bg-orange-500": "text-orange-500",
};

const SkillTree: React.FC<SkillTreeProps> = ({
  skills,
  title = "My Skills",
  categoryColors = DEFAULT_CATEGORY_COLORS,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0, visible: false });
  const [tooltipContent, setTooltipContent] = useState<Skill | null>(null);

  // Group skills by category
  const skillsByCategory: Record<string, Skill[]> = {};
  skills.forEach((skill) => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = [];
    }
    skillsByCategory[skill.category].push(skill);
  });

  // Calculate dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate center position and radii
  const centerX = dimensions.width / 2;
  const centerY = dimensions.height / 2;
  const outerRadius = Math.min(centerX, centerY) * 0.8;
  const innerRadius = outerRadius * 0.3;

  // Handle tooltip display
  const showTooltip = (skill: Skill, x: number, y: number) => {
    setTooltipContent(skill);
    setTooltipPos({ x, y, visible: true });
  };

  const hideTooltip = () => {
    setTooltipPos((prev) => ({ ...prev, visible: false }));
  };

  // Helper function to generate a lighter version of the category color for connectors
  const getLighterColor = (colorClass: string) => {
    return colorClass.replace("500", "300");
  };

  return (
    <div
      className="w-full h-full bg-white rounded-lg shadow-lg relative overflow-hidden"
      ref={containerRef}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-gray-100"></div>

      {/* Center circle */}
      <div
        className="absolute rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-center p-4 z-10"
        style={{
          width: innerRadius * 2,
          height: innerRadius * 2,
          left: centerX - innerRadius,
          top: centerY - innerRadius,
        }}
      >
        {selectedSkill ? (
          <div className="flex flex-col items-center">
            <div className="text-xl mb-1">{selectedSkill.name}</div>
            <div className="text-base mb-2">{selectedSkill.category}</div>
            <div className="text-sm opacity-80">
              {selectedSkill.description}
            </div>
            <div className="mt-2 text-lg">Level: {selectedSkill.level}/10</div>
          </div>
        ) : (
          <div className="text-xl">{title}</div>
        )}
      </div>

      {/* Category sections and labels */}
      {Object.keys(skillsByCategory).map((category, index) => {
        const categories = Object.keys(skillsByCategory);
        const anglePerCategory = (2 * Math.PI) / categories.length;
        const startAngle = index * anglePerCategory;
        const midAngle = startAngle + anglePerCategory / 2;

        const labelX = centerX + Math.cos(midAngle) * (outerRadius + 40);
        const labelY = centerY + Math.sin(midAngle) * (outerRadius + 40);

        const textColorClass =
          TEXT_COLORS[categoryColors[category]] || "text-gray-700";

        return (
          <React.Fragment key={category}>
            <div
              className="absolute h-0.5 z-1 bg-gray-100"
              style={{
                left: centerX,
                top: centerY,
                width: outerRadius,
                transform: `rotate(${midAngle}rad)`,
                transformOrigin: "0 0",
              }}
            />
            <div
              className={`absolute font-bold text-base ${textColorClass} shadow-sm`}
              style={{
                left: labelX,
                top: labelY,
                transform: "translate(-50%, -50%)",
              }}
            >
              {category}
            </div>
          </React.Fragment>
        );
      })}

      {/* Skill nodes */}
      {Object.keys(skillsByCategory).map((category, categoryIndex) => {
        const skills = skillsByCategory[category];
        const categories = Object.keys(skillsByCategory);
        const anglePerCategory = (2 * Math.PI) / categories.length;
        const categoryStartAngle = categoryIndex * anglePerCategory;
        const skillAngleSpace = anglePerCategory * 0.8;
        const skillAngleOffset = (anglePerCategory - skillAngleSpace) / 2;
        const anglePerSkill = skillAngleSpace / Math.max(skills.length, 1);

        return skills.map((skill, skillIndex) => {
          const skillAngle =
            categoryStartAngle + skillAngleOffset + skillIndex * anglePerSkill;
          const skillRadius =
            innerRadius + (outerRadius - innerRadius) * (skill.level / 10);

          const x = centerX + Math.cos(skillAngle) * skillRadius;
          const y = centerY + Math.sin(skillAngle) * skillRadius;

          const colorClass = categoryColors[category] || "bg-gray-500";
          const lighterColorClass = getLighterColor(colorClass);

          return (
            <React.Fragment key={skill.id}>
              {/* Connector line */}
              <div
                className={`absolute h-px ${lighterColorClass} opacity-60 z-0`}
                style={{
                  left: centerX,
                  top: centerY,
                  width: skillRadius,
                  transform: `rotate(${skillAngle}rad)`,
                  transformOrigin: "0 0",
                }}
              />

              {/* Skill node */}
              <div
                className={`absolute w-10 h-10 md:w-10 md:h-10 rounded-full ${colorClass} flex items-center justify-center text-white font-bold text-xs md:text-sm text-center shadow cursor-pointer transition-transform duration-200 ease-in-out hover:scale-110 hover:shadow-md z-10 animate-pulse`}
                style={{
                  left: x - 20,
                  top: y - 20,
                  animationDelay: `${(skillIndex * 0.2) % 1.5}s`,
                  animationDuration: "3s",
                }}
                onClick={() => setSelectedSkill(skill)}
                onMouseEnter={() => showTooltip(skill, x, y - 60)}
                onMouseLeave={hideTooltip}
              >
                {skill.name.substring(0, 4)}
              </div>
            </React.Fragment>
          );
        });
      })}

      {/* Tooltip */}
      {tooltipPos.visible && tooltipContent && (
        <div
          className="absolute bg-black bg-opacity-80 text-white p-3 rounded text-sm z-50 max-w-xs shadow-lg"
          style={{
            left: tooltipPos.x,
            top: tooltipPos.y,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div>
            <span className="font-bold">{tooltipContent.name}</span> (
            {tooltipContent.level}/10)
          </div>
          <div>{tooltipContent.description}</div>
        </div>
      )}
    </div>
  );
};

export default SkillTree;
