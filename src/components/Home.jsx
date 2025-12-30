import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumeSection from './ResumeSection';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'about', label: 'About', icon: '👋' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  return (
    <>
      <ResumeSection />

      {/* Enhanced Hero Section */}
      <section className="home-hero" style={{
        minHeight: '100vh',
        background: `White`,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 1rem'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(200px circle at 20% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(150px circle at 80% 20%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
            radial-gradient(120px circle at 40% 60%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
          `
        }} />

        <div className="container-fluid position-relative px-3 px-md-4">
          <div className="row align-items-center g-4 g-lg-5">
            {/* Left Column - Content */}
            <div className="col-12 col-lg-6">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                {/* Interactive Navigation Tabs */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '2rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(255, 255, 255, 0.8)',
                  borderRadius: '50px',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.06)',
                  justifyContent: 'center'
                }}>
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: '0.75rem 1.25rem',
                        border: 'none',
                        background: activeTab === tab.id ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : 'transparent',
                        color: activeTab === tab.id ? 'white' : '#64748b',
                        borderRadius: '25px',
                        fontWeight: 600,
                        fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        whiteSpace: 'nowrap',
                        flex: '0 0 auto'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </motion.button>
                  ))}
                </div>

                {/* Dynamic Content based on Tab */}
                <AnimatePresence>
                  {activeTab === 'about' && (
                    <motion.div
                      key="about"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h1 style={{
                        fontSize: 'clamp(2rem, 8vw, 4.2rem)',
                        fontWeight: 800,
                        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        lineHeight: 1.1,
                        marginBottom: '1rem'
                      }}>
                        Vighnesh Khadake
                      </h1>
                      <h2 style={{
                        fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
                        color: '#475569',
                        fontWeight: 600,
                        marginBottom: '1.5rem'
                      }}>
                        MERN Stack Developer
                      </h2>
                      <p style={{
                        fontSize: 'clamp(1rem, 3vw, 1.15rem)',
                        color: '#64748b',
                        lineHeight: 1.7,
                        marginBottom: '2.5rem',
                        maxWidth: '450px'
                      }}>
                        Building scalable web applications with React, Node.js, and modern
                        technologies. Passionate about clean code and exceptional user experiences.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'skills' && (
                    <motion.div
                      key="skills"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div style={{ maxWidth: '450px' }}>
                        <h3 style={{
                          fontSize: 'clamp(1.4rem, 5vw, 1.75rem)',
                          fontWeight: 700,
                          color: '#1e293b',
                          marginBottom: '1.5rem'
                        }}>
                          Tech Stack
                        </h3>
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(min(120px, 90vw), 1fr))',
                          gap: '1rem'
                        }}>
                          {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind'].map((skill, i) => (
                            <motion.div
                              key={skill}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              whileHover={{ y: -8, scale: 1.02 }}
                              style={{
                                padding: '1rem 1.25rem',
                                background: 'white',
                                borderRadius: '16px',
                                textAlign: 'center',
                                fontWeight: 600,
                                color: '#374151',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.8)',
                                fontSize: 'clamp(0.9rem, 3vw, 1rem)'
                              }}
                            >
                              {skill}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'projects' && (
                    <motion.div
                      key="projects"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div style={{ maxWidth: '450px' }}>
                        <h3 style={{
                          fontSize: 'clamp(1.4rem, 5vw, 1.75rem)',
                          fontWeight: 700,
                          color: '#1e293b',
                          marginBottom: '1.5rem'
                        }}>
                          Featured Projects
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {['E-Commerce Platform', 'Task Management App', 'Social Media Dashboard'].map((project, i) => (
                            <motion.div
                              key={project}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.2 + i * 0.1 }}
                              whileHover={{ x: 8 }}
                              style={{
                                padding: '1.25rem',
                                background: 'white',
                                borderRadius: '12px',
                                borderLeft: '4px solid #3b82f6',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                fontSize: 'clamp(0.9rem, 2.8vw, 1rem)'
                              }}
                            >
                              <div style={{ fontWeight: 600, color: '#1e293b', marginBottom: '0.25rem' }}>
                                {project}
                              </div>
                              <div style={{ color: '#64748b', fontSize: '0.85rem' }}>
                                Full-stack application with modern UI/UX
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginTop: '2rem',
                    width: '100%'
                  }}
                >
                  <Link to="/projects" style={{
                    padding: 'clamp(14px, 3vw, 16px) clamp(32px, 8vw, 40px)',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                    boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    textAlign: 'center'
                  }}>
                    <span>View All Projects</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>

                  <Link to="/contact" style={{
                    padding: 'clamp(14px, 3vw, 16px) clamp(32px, 8vw, 40px)',
                    background: 'transparent',
                    color: '#374151',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: 600,
                    fontSize: 'clamp(0.95rem, 2.5vw, 1rem)',
                    border: '2px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center'
                  }}>
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column - Profile Image */}
            <div className="col-12 col-lg-6 text-center mt-5 mt-lg-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.02, rotateY: 5 }}
              >
                <div style={{
                  position: 'relative',
                  width: 'min(90vw, 380px)',
                  height: 'min(90vw, 380px)',
                  maxWidth: '400px',
                  margin: '0 auto'
                }}>
                  <img
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
                        inset 0 4px 20px rgba(255, 255, 255, 0.4)
                      `,
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  />
                  {/* Floating status indicators */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 'clamp(15px, 4vw, 20px)',
                      right: 'clamp(15px, 4vw, 20px)',
                      width: '12px',
                      height: '12px',
                      background: '#10b981',
                      borderRadius: '50%',
                      boxShadow: '0 0 12px rgba(16, 185, 129, 0.5)'
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: 'clamp(15px, 4vw, 20px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      borderRadius: '20px',
                      fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
                      fontWeight: 600,
                      color: '#374151',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                      whiteSpace: 'nowrap'
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    Available for work
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
