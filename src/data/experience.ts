import type { Experience } from "@/components/experience-card";

export const experiences: Experience[] = [
    {
        title: "Software Development Intern @ Temas TBK",
        desc: "Worked with a team to maintain old React codebases used for creating work and trucking orders by migrating and refactoring to LTS versions of outdated libraries, while also helping rewrite and refactor parts of a NodeJS backend of an internal tool for making work requests to Golang.",
        date: "May - August 2025",
        location: "Jakarta, Indonesia",
        link: "https://temas.id/en",
        skills: ["ReactJS", "NodeJS", "TypeScript", "Golang"],
    },
    {
        title: "Software Engineer @ Tulip",
        desc: "Developed a frontend for a mobile application with React Native for an app that helps bring a stock market like perspective to real estate, while implementing and deploying a backend on AWS with flask for a price making on the beta website.",
        date: "June 2024 - August 2025",
        location: "Urbana, Illinois",
        link: "https://tulip.markets",
        skills: ["React Native", "AWS", "Flask", "Typescript", "Python"],
    },
];
