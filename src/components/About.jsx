import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import Services from './Services';

export default function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'education', label: 'Education', icon: '🎓' }
  ];

  const experienceContent = [
    { title: 'MERN Stack Developer', company: 'Freelance', duration: '2023 - Present', desc: 'Building scalable web apps with React, Node.js & MongoDB' },
    { title: 'Frontend Developer', company: 'Startup Projects', duration: '2022 - 2023', desc: 'Created responsive UIs using React & modern JavaScript' }
  ];

  return (
    <>
      <motion.section
        className="about-section py-5"
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
            radial-gradient(200px circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(150px circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%)
          `,
          pointerEvents: 'none'
        }} />

        <div className="container position-relative">
          <div className="row align-items-center g-5">
            {/* Profile Image Section */}
            <motion.div
              className="col-lg-4 col-md-5 text-center mb-4 mb-lg-0"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div style={{
                position: 'relative',
                width: 'min(280px, 80vw)',
                height: 'min(280px, 80vw)',
                margin: '0 auto'
              }}>
                <motion.img
                  src="./images/Vighnesh.png"
                  alt="Vighnesh Khadake"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    boxShadow: `
                      0 40px 80px rgba(0, 0, 0, 0.15),
                      0 20px 40px rgba(0, 0, 0, 0.1),
                      inset 0 8px 30px rgba(255, 255, 255, 0.6)
                    `,
                    border: '4px solid rgba(255, 255, 255, 0.8)'
                  }}
                />
                {/* Online status indicator */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    width: 16,
                    height: 16,
                    background: '#10b981',
                    borderRadius: '50%',
                    boxShadow: '0 0 16px rgba(16, 185, 129, 0.6)',
                    border: '3px solid white'
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                {/* Developer badge */}
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.5rem 1.5rem',
                    background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                    color: 'white',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  MERN Developer
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <div className="col-lg-8 col-md-7">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Interactive Tabs */}
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  marginBottom: '3rem',
                  padding: '1rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                }}>
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: '0.875rem 1.75rem',
                        border: 'none',
                        background: activeTab === tab.id
                          ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)'
                          : 'transparent',
                        color: activeTab === tab.id ? 'white' : '#64748b',
                        borderRadius: '12px',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: activeTab === tab.id
                          ? '0 6px 20px rgba(59, 130, 246, 0.3)'
                          : 'none'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span style={{ fontSize: '1.1em' }}>{tab.icon}</span>
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Tabbed Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    {activeTab === 'experience' && (
                      <div>
                        <h2 style={{
                          fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          lineHeight: 1.1,
                          marginBottom: '1.5rem'
                        }}>
                          About Vighnesh
                        </h2>
                        <p style={{
                          fontSize: '1.2rem',
                          color: '#374151',
                          lineHeight: 1.8,
                          marginBottom: '2rem',
                          maxWidth: '550px'
                        }}>
                          Passionate MERN Stack Developer crafting modern, responsive web applications.
                        </p>
                        <div style={{ display: 'grid', gap: '1rem', maxWidth: '550px' }}>
                          {experienceContent.map((exp, index) => (
                            <motion.div
                              key={exp.title}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + index * 0.1 }}
                              whileHover={{ x: 10 }}
                              style={{
                                padding: '1.25rem',
                                background: 'white',
                                borderRadius: '12px',
                                borderLeft: '4px solid #3b82f6',
                                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)',
                                cursor: 'pointer'
                              }}
                            >
                              <div style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: '#1e293b',
                                marginBottom: '0.25rem'
                              }}>
                                {exp.title}
                              </div>
                              <div style={{
                                color: '#3b82f6',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                marginBottom: '0.25rem'
                              }}>
                                {exp.company} • {exp.duration}
                              </div>
                              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                                {exp.desc}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'skills' && (
                      <div>
                        <h2 style={{
                          fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          lineHeight: 1.1,
                          marginBottom: '2rem'
                        }}>
                          Tech Stack
                        </h2>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                          gap: '1.25rem'
                        }}>
                          {[
                            { name: 'React', icon: '⚛️', color: '#61dafb' },
                            { name: 'Node.js', icon: '🟢', color: '#68a063' },
                            { name: 'MongoDB', icon: '🟢', color: '#47a248' },
                            { name: 'Express', icon: '⚡', color: '#404d59' },
                            { name: 'JavaScript', icon: '📜', color: '#f7df1e' },
                            { name: 'Tailwind', icon: '🎨', color: '#38bdf8' }
                          ].map((skill, i) => (
                            <motion.div
                              key={skill.name}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.3 + i * 0.08 }}
                              whileHover={{ y: -12, scale: 1.05 }}
                              style={{
                                padding: '1.5rem 1rem',
                                background: 'white',
                                borderRadius: '20px',
                                textAlign: 'center',
                                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                                border: `2px solid ${skill.color}20`
                              }}
                            >
                              <div style={{
                                fontSize: '2.5rem',
                                marginBottom: '0.5rem'
                              }}>
                                {skill.icon}
                              </div>
                              <div style={{
                                fontWeight: 700,
                                color: '#1e293b',
                                fontSize: '1rem'
                              }}>
                                {skill.name}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'education' && (
                      <div>
                        <h2 style={{
                          fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                          fontWeight: 800,
                          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          lineHeight: 1.1,
                          marginBottom: '1.5rem'
                        }}>
                          Let's Connect
                        </h2>
                        <p style={{
                          fontSize: '1.2rem',
                          color: '#374151',
                          lineHeight: 1.8,
                          marginBottom: '2.5rem',
                          maxWidth: '500px'
                        }}>
                          I'm always open to discussing new opportunities, interesting projects,
                          or just sharing knowledge about web development!
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
                          <motion.a
                            href="https://www.linkedin.com/in/vighnesh-k-903754281/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              padding: '1.25rem 2rem',
                              background: 'linear-gradient(135deg, #0077b5, #005c91)',
                              color: 'white',
                              textDecoration: 'none',
                              borderRadius: '16px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              boxShadow: '0 8px 25px rgba(0, 119, 181, 0.3)'
                            }}
                          >
                            <span style={{ fontSize: '1.5rem' }}>💼</span>
                            LinkedIn
                          </motion.a>
                          <motion.a
                            href="https://github.com/vighnesh583"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              padding: '1.25rem 2rem',
                              background: 'linear-gradient(135deg, #24292e, #1a1e22)',
                              color: 'white',
                              textDecoration: 'none',
                              borderRadius: '16px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              boxShadow: '0 8px 25px rgba(36, 41, 46, 0.3)'
                            }}
                          >
                            <span style={{ fontSize: '1.5rem' }}>📂</span>
                            GitHub
                          </motion.a>
                          <motion.a
                            href="https://codeworkbench.blogspot.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                              padding: '1.25rem 2rem',
                              background: 'linear-gradient(135deg, #ff9800, #f57c00)',
                              color: 'white',
                              textDecoration: 'none',
                              borderRadius: '16px',
                              fontWeight: 600,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '1rem',
                              boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)'
                            }}
                          >
                            <span style={{ fontSize: '1.5rem' }}>📝</span>
                            Blog
                          </motion.a>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <Services />
    </>
  );
}
