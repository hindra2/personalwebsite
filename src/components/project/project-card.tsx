import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import projects from './data';
import Popup from './popup';
import Card from './card';


const ProjectGrid = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="p-8 bg-gray-900 min-h-screen">      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 auto-rows-min">
        {projects.map((project) => (
          <Card
            key={project.id}
            project={project}
            onExpand={() => setSelectedId(project.id)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <Popup
            project={selectedProject}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGrid;