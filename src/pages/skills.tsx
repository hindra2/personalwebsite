import SkillNetwork from "../components/skill-network";

const Skills: React.FC = () => {
    return (
        <div className="text-xl flex flex-col mt-10 w-screen h-screen ml-10 text-text">
            <span className="text-3xl font-bold">
                Skills
            </span>
            <div className="text-3xl flex flex-col w-full h-screen items-center justify-center">
                <div className="flex items-center justify-center w-screen text-lg text-text">
                    <SkillNetwork />
                </div>
            </div>
        </div>
    );
};
export default Skills