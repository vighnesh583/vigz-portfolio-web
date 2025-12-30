import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import projects from './data/ProjectsData';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'web', 'mobile', 'api', 'ecommerce'];

  const filteredProjects = projects.filter(project =>
    filter === 'all' || project.category === filter
  );

  return (
    <motion.section
      className="projects-section py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'white',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background gradients */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(300px circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
          radial-gradient(250px circle at 80% 70%, rgba(16, 185, 129, 0.04) 0%, transparent 50%),
          radial-gradient(200px circle at 50% 90%, rgba(245, 158, 11, 0.03) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container position-relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.8rem, 7vw, 4rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
            marginBottom: '1rem'
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7
          }}>
            Handcrafted web applications showcasing modern development practices
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                padding: '0.875rem 2rem',
                border: filter === category ? 'none' : '2px solid #e2e8f0',
                background: filter === category
                  ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                  : 'rgba(255, 255, 255, 0.8)',
                color: filter === category ? 'white' : '#64748b',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: filter === category
                  ? '0 8px 25px rgba(59, 130, 246, 0.3)'
                  : '0 4px 12px rgba(0, 0, 0, 0.08)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="row g-4">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <div className="col-xl-4 col-lg-6 col-md-6" key={project.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{
                    y: -15,
                    scale: 1.02
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-decoration-none"
                    style={{ display: 'block', height: '100%' }}
                  >
                    <div
                      className="project-card h-100"
                      style={{
                        background: 'white',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 15px 50px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        position: 'relative'
                      }}
                    >
                      {/* Project Image */}
                      <motion.div
                        style={{
                          height: '220px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s ease'
                          }}
                        />
                        {/* Overlay gradient */}
                        <div style={{
                          position: 'absolute',
                          inset: 0,
                          background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
                        }} />

                        {/* Hover overlay */}
                        <AnimatePresence>
                          {hoveredProject === project.id && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0, 0, 0, 0.8)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(8px)'
                              }}
                            >
                              <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                style={{
                                  textAlign: 'center',
                                  color: 'white',
                                  padding: '2rem'
                                }}
                              >
                                <h4 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
                                  View Project
                                </h4>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Project Content */}
                      <div style={{
                        padding: '2rem',
                        height: 'calc(100% - 220px)'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '1rem'
                        }}>
                          <div style={{
                            width: '8px',
                            height: '8px',
                            background: '#3b82f6',
                            borderRadius: '50%',
                            boxShadow: '0 0 12px rgba(59, 130, 246, 0.5)'
                          }} />
                          <span style={{
                            color: '#64748b',
                            fontSize: '0.85rem',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {project.category?.toUpperCase() || 'WEB'}
                          </span>
                        </div>

                        <h3 style={{
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          color: '#1e293b',
                          marginBottom: '1rem',
                          lineHeight: 1.3
                        }}>
                          {project.name}
                        </h3>

                        <p style={{
                          color: '#64748b',
                          lineHeight: 1.7,
                          fontSize: '0.95rem',
                          marginBottom: '1.5rem',
                          flexGrow: 1
                        }}>
                          {project.shortDesc}
                        </p>

                        {/* Tech Stack Tags */}
                        <div style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem'
                        }}>
                          {project.techStack?.slice(0, 3).map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.4 + i * 0.05 }}
                              style={{
                                padding: '0.375rem 1rem',
                                background: 'rgba(59, 130, 246, 0.1)',
                                color: '#3b82f6',
                                borderRadius: '20px',
                                fontSize: '0.8rem',
                                fontWeight: 500
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginTop: '5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            padding: '3rem 0'
          }}
        >
          <div>
            <div style={{ fontSize: '3rem', color: '#3b82f6', fontWeight: 800 }}>
              {projects.length}+
            </div>
            <div style={{ color: '#64748b', fontWeight: 600 }}>Projects Completed</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', color: '#10b981', fontWeight: 800 }}>
              100%
            </div>
            <div style={{ color: '#64748b', fontWeight: 600 }}>Client Satisfaction</div>
          </div>
          <div>
            <div style={{ fontSize: '3rem', color: '#f59e0b', fontWeight: 800 }}>
              50+
            </div>
            <div style={{ color: '#64748b', fontWeight: 600 }}>Technologies Used</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
