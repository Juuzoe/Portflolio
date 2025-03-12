// src/components/ProjectCard.js
import React, { useState } from 'react';

function ProjectCard({ project }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <button onClick={() => setShowModal(true)}>Learn More</button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{project.title}</h3>
            <p>{project.details}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
