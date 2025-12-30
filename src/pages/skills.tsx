import SkillTree from "../components/skills/skill-network";

// Define your skills data
const mySkills = [
  {
    id: "html",
    name: "HTML",
    level: 9,
    category: "Frontend",
    description: "Structure and semantics",
  },
  {
    id: "css",
    name: "CSS",
    level: 8,
    category: "Frontend",
    description: "Styling and animations",
  },
  {
    id: "js",
    name: "JavaScript",
    level: 9,
    category: "Frontend",
    description: "Dynamic interactions",
  },
  {
    id: "ts",
    name: "TypeScript",
    level: 8,
    category: "Frontend",
    description: "Type-safe JavaScript",
  },
  {
    id: "react",
    name: "React",
    level: 9,
    category: "Frontend",
    description: "UI components",
  },
  {
    id: "vue",
    name: "Vue",
    level: 7,
    category: "Frontend",
    description: "Progressive framework",
  },
  {
    id: "node",
    name: "Node.js",
    level: 8,
    category: "Backend",
    description: "JavaScript runtime",
  },
  {
    id: "express",
    name: "Express",
    level: 7,
    category: "Backend",
    description: "Web framework",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    level: 8,
    category: "Backend",
    description: "NoSQL database",
  },
  {
    id: "postgres",
    name: "PostgreSQL",
    level: 7,
    category: "Backend",
    description: "SQL database",
  },
  {
    id: "git",
    name: "Git",
    level: 9,
    category: "Tools",
    description: "Version control",
  },
  {
    id: "docker",
    name: "Docker",
    level: 6,
    category: "DevOps",
    description: "Containerization",
  },
  {
    id: "aws",
    name: "AWS",
    level: 7,
    category: "DevOps",
    description: "Cloud services",
  },
  {
    id: "figma",
    name: "Figma",
    level: 8,
    category: "Design",
    description: "UI/UX design",
  },
  {
    id: "testing",
    name: "Testing",
    level: 7,
    category: "Quality",
    description: "Jest, Cypress",
  },
];

// Optional custom Tailwind colors
const customColors = {
  Frontend: "bg-white",
  Backend: "bg-white",
  Tools: "bg-white",
  DevOps: "bg-white",
  Design: "bg-white",
  Quality: "bg-white",
};

const Skills: React.FC = () => {
  return (
    <div className="text-xl flex flex-col mt-10 w-screen h-screen ml-10 text-text pt-[50px]">
      <span className="text-3xl font-bold">Skills</span>
      <div className="text-3xl flex flex-col w-full h-screen items-center justify-center">
        <div className="flex items-center justify-center w-screen text-lg text-text">
          <SkillTree
            skills={mySkills}
            title="My Tech Stack"
            categoryColors={customColors} // Optional
          />
        </div>
      </div>
    </div>
  );
};
export default Skills;
