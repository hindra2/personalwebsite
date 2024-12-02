import { FlipWords } from "../components/flip-words";

const words = ["software developer", "speedcuber", "learner", "linux lover", "nerd", "gamer", "bookworm"]


const AboutMe: React.FC = () => {
    return (
        <div className="text-3xl">
            <span className="text-text">
                I am a
            </span>
            <FlipWords words={words} /> <br />
        </div>
    );
};
export default AboutMe