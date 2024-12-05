import { FlipWords } from "../components/about/flip-words";

const words = ["software developer", "speedcuber", "learner", "linux lover", "nerd", "gamer", "bookworm"]


const AboutMe: React.FC = () => {
    return (
        <div className="text-xl flex flex-col mt-10 w-screen h-screen ml-10 text-text p-[90px]">
            <span className="text-3xl font-bold">
                About Me
            </span>
            <div className="text-2xl">
                I am a
                <FlipWords words={words} /> <br />
            </div>
            <div>
                <span>
                    I'm a student in Computer Science. I'm interested in doing fullstack web development, 
                </span>
            </div>
        </div>
    );
};
export default AboutMe