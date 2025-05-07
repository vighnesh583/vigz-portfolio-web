import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './data/ProjectsData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p className="text-center">Project not found</p>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <img src={project.image1} className="card-img-top" alt={project.name} />
        <div className="card-body">
          <h2 className="display-5 fw-bold text-warning">{project.name}</h2>
          <br />
          {/* ✅ Short Description */}
          {project.shortDesc && (
            <>
              <h5 className="fw-bold mb-2">✅ Description</h5>
              <p>{project.shortDesc}</p>
            </>
          )}

          {/* 📄 Long Description */}
          {Array.isArray(project.longDesc) ? (
            project.longDesc.map((section, idx) => (
              <div key={idx} className="mb-4">
                <h5 className="fw-bold">
                  {section.emoji} {section.title}
                </h5>
                {section.content.map((point, i) => (
                  <p key={i} className="mb-2" style={{ whiteSpace: 'pre-line' }}>
                    {point}
                  </p>
                ))}
              </div>
            ))
          ) : (
            <p className="card-text">{project.longDesc}</p>
          )}

          {/* 🔧 Technologies */}
          <h5 className="mt-4">🔧 Technologies Used:</h5>
          <div className="d-flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, i) => (
              <span key={i} className="badge bg-secondary">{tech}</span>
            ))}
          </div>

          {/* 🔗 Live Link */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary mt-2"
          >
            🔗 View Live Project
          </a>
        </div>
      </div>
    </div>
  );
}
