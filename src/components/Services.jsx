import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern technologies like React, Vite, Node.js, and MongoDB.",
    icon: "💻",
    color: "#3b82f6"
  },
  {
    title: "UI/UX Design",
    description: "Designing clean and intuitive user interfaces with attention to detail and user experience.",
    icon: "🎨",
    color: "#10b981"
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating REST APIs and third-party services to power web applications.",
    icon: "🔌",
    color: "#f59e0b"
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility and performance on search engines through SEO best practices.",
    icon: "🚀",
    color: "#8b5cf6"
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <motion.section
      className="services-section py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background gradients */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(300px circle at 20% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
          radial-gradient(250px circle at 80% 20%, rgba(16, 185, 129, 0.04) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container position-relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.1,
            marginBottom: '1rem'
          }}>
            What I Offer
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.7'
          }}>
            Professional web solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-lg-6 col-xl-3" key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -20,
                  scale: 1.02,
                  boxShadow: `0 25px 50px ${service.color}30`
                }}
                onHoverStart={() => setHoveredService(service.title)}
                onHoverEnd={() => setHoveredService(null)}
                style={{
                  position: 'relative',
                  height: '100%'
                }}
              >
                <div
                  className="service-card h-100"
                  style={{
                    padding: '2.5rem 2rem',
                    background: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    overflow: 'hidden'
                  }}
                >
                  {/* Animated Icon Background */}
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '-50px',
                      right: '-50px',
                      width: '120px',
                      height: '120px',
                      background: `${service.color}20`,
                      borderRadius: '50%',
                      opacity: hoveredService === service.title ? 0.3 : 0.1
                    }}
                    animate={{
                      rotate: [0, 180],
                      scale: hoveredService === service.title ? [1, 1.2, 1] : 1
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Infinity },
                      scale: { duration: 2 }
                    }}
                  />

                  {/* Service Icon */}
                  <motion.div
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `linear-gradient(135deg, ${service.color}, ${service.color}cc)`,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: `0 12px 30px ${service.color}40`,
                      position: 'relative',
                      zIndex: 2
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5
                    }}
                  >
                    <motion.span
                      style={{ fontSize: '2rem' }}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360]
                      }}
                      transition={{
                        scale: { duration: 2, repeat: Infinity },
                        rotate: { duration: 4, repeat: Infinity }
                      }}
                    >
                      {service.icon}
                    </motion.span>
                  </motion.div>

                  {/* Service Content */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#1e293b',
                    marginBottom: '1rem',
                    lineHeight: 1.3
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    color: '#64748b',
                    lineHeight: 1.7,
                    fontSize: '0.98rem',
                    marginBottom: '1.5rem'
                  }}>
                    {service.description}
                  </p>

                  {/* Hover glow effect */}
                  <AnimatePresence>
                    {hoveredService === service.title && (
                      <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 1, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '4px',
                          background: `linear-gradient(90deg, ${service.color}, transparent)`,
                          borderRadius: '0 0 24px 24px'
                        }}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '5rem',
            padding: '3rem 2rem',
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '24px',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 700,
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Ready to start your project?
          </h3>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem'
          }}>
            Let's discuss how I can help bring your vision to life
          </p>
          <a href="/contact" style={{
            padding: '1.25rem 3rem',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '16px',
            fontWeight: 600,
            fontSize: '1.1rem',
            boxShadow: '0 12px 35px rgba(59, 130, 246, 0.4)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem'
          }}>
            Get Started
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
