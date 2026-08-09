import { ExplorifyModal } from "@/components/modals/explorify-modal";
import { PermiasWebsiteModal } from "@/components/modals/permiaswebsite-modal";
import type { Project } from "@/components/project-card";

export const projects: Project[] = [
    {
        title: "Scheduling Dashboard",
        desc: "Created a private dashboard to automate tracking a comapny's production cycle. A simple project where I developed a more efficient workflow by utilizing AI tools. Used by 1000+ workers and administrator in factories.",
        date: "June 2026 - Present",
        location: "Jakarta, Indonesia",
        skills: ["Administration", "AI"],
    },
    {
        title: "Explorifyy",
        desc: "Created a fullstack application using React Native and Supabase for an app to host events and share them in a feedlike application structure, filtered by location and interest categories.",
        date: "February - March 2024",
        location: "Urbana, Illinois",
        content: <ExplorifyModal />,
        skills: [
            "React Native",
            "Supabase",
            "TailwindCSS",
            "Typescript",
            "PSQL",
        ],
    },
    {
        title: "Akar.study",
        desc: "A fullstack web application built on ReactJS and Supabase, a flashcard website utilizng a basic spaced repitition algiorithm and a Pomodor timer to help boost productivity and learning.",
        date: "April - February 2024",
        location: "Urbana, Illinois",
        skills: ["ReactJS", "Supabase", "TailwindCSS", "Typescript", "PSQL"],
    },
    {
        title: "Permias Website",
        desc: "Created a website to promote the Indonesian Student Association (PERMIAS) at UIUC with ReactJS, showcasing events and information about the school to help new students get acclimated.",
        date: "March - April 2024",
        location: "Urbana, Illinois",
        content: <PermiasWebsiteModal />,
        skills: ["ReactJS", "Typescript", "TailwindCSS"],
    },
    {
        title: "Talenta",
        desc: "Developed a frontend for an educational database for schools with NextJS, allowing for the administration and management of students, with the goal of enabling a more customized and informed learning experience. This was built for the Cozad New Venture Challenge and won $500.",
        date: "January - April 2024",
        location: "Urbana, Illinois",
        skills: ["ReactJS", "Typescript", "TailwindCSS"],
    },
];
