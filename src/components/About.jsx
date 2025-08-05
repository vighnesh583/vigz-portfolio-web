import React from 'react'
import { motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'
import Services from './Services'

export default function About() {
  return (
    <>
      <motion.div
        className="about-section py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Image Section */}
            <motion.div
              className="col-md-4 text-center mb-4 mb-md-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <img
                src="./images/Vighnesh.png"
                alt="Vighnesh Khadake"
                className="img-fluid rounded-circle border-4 border-primary shadow"
                style={{ maxWidth: '200px', height: 'auto' }}
              />
            </motion.div>

            {/* Text Section */}
            <div className="col-md-8 text-md-start text-center">
              <h2 className="display-5 fw-bold text-primary mb-3">About Me</h2>
              <p className="lead">
                I'm <strong>Vighnesh Khadake</strong>, a passionate MERN Stack developer focused on building modern,
                responsive, and intuitive web applications.
              </p>
              <p>
                I specialize in <strong>React, Node.js, MongoDB</strong>, and love solving real-world problems through
                code.
              </p>
              <p>
                I’m constantly learning, working on personal projects, and love to share knowledge through YouTube. Let's
                build something amazing together!
              </p>

              {/* Social Icons */}
              {/* Social Icons */}
              <div className="mt-4 social-icons">
                <a
                  href="https://www.linkedin.com/in/vighnesh-k-903754281/"
                  className="text-decoration-none text-primary me-4 fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://github.com/vighnesh583"
                  className="text-decoration-none text-dark me-4 fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://codeworkbench.blogspot.com/"
                  className="text-decoration-none text-warning fs-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-blogger"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
      <Services />
    </>
  )
}
