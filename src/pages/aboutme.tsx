import { FlipWords } from "../components/flip-words";

const words = ["software developer", "speedcuber", "learner", "linux lover", "nerd", "gamer", "bookworm"]


const AboutMe: React.FC = () => {
    return (
        <div className="text-xl flex flex-col mt-10 w-screen h-screen ml-10 text-text">
            <span className="text-3xl font-bold">
                About Me
            </span>
            <span>
                Hello!
            </span>
            <div className="text-2xl">
                I am a
                <FlipWords words={words} /> <br />
            </div>
            <span>
                I'm a student in Computer Science. I'm interested in doing fullstack web development, 
            </span>
        </div>
    );
};
export default AboutMe