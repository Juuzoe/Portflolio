// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A brief description of Project One.',
    details:
      'Detailed information about Project One. This project was built using React and modern design principles.',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'A brief description of Project Two.',
    details:
      'Detailed information about Project Two. It features interactive components and responsive design.',
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
