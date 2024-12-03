import SkillNetwork from "../components/skill-network";

const Skills: React.FC = () => {
    return (
        <div className="text-3xl flex flex-col w-full h-screen items-center justify-center">
            <span className="text-text">
                Skills
            </span>
            <div className="flex items-center justify-center w-screen text-lg text-text">
                <SkillNetwork />
            </div>
        </div>
    );
};
export default Skills