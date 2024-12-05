import React from "react";

import ProjectGrid from "../components/project/project-card";

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col mt-10 w-screen h-screen ml-10 text-text p-[80px]">
            <div className="flex flex-col">
                <span className="text-4xl font-bold border-b-2 pb-[10px] border-white">
                    Projects
                </span>
                <ProjectGrid />
            </div>
        </div>
)};

export default Projects