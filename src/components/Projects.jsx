import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import projects from './data/ProjectsData'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Projects() {
  return (
    <motion.div
      className="container py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-center mb-8 text-primary fw-bold display-5">Projects</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-6 mb-4" key={project.id}>
            <Link to={`/projects/${project.id}`} className="text-decoration-none text-dark">
              <div className="card shadow-sm h-100 hover-shadow transition">
                <img src={project.image} className="card-img-top" alt={project.name} />
                <div className="card-body">
                  <h5 className="display-6 fw-bold text-warning">{project.name}</h5>
                  <p className="card-text">{project.shortDesc}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
