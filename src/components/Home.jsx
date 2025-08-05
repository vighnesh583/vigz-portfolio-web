import React from 'react';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import ResumeSection from './ResumeSection';

export default function Home() {
  return (
    <>
      <ResumeSection />
      <motion.div
        className="home-section py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left Section: Text */}
            <div className="col-md-6 text-section">
              <motion.h1
                className="main-heading"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to My Portfolio
              </motion.h1>
              <motion.h2
                className="sub-heading"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I'm <span className="highlighted">Vighnesh Khadake</span> — MERN Stack Developer
              </motion.h2>
              <motion.p
                className="description"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                I build responsive, modern web apps with clean UI & optimized performance.
              </motion.p>
              <motion.div
                className="mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <a href="/projects" className="btn btn-primary btn-lg mx-2">
                  View Projects
                </a>
                <a href="/contact" className="btn btn-outline-secondary btn-lg mx-2">
                  Contact Me
                </a>
              </motion.div>
            </div>

            {/* Right Section: Profile Image */}
            <div className="col-md-6 text-center image-section">
              <motion.img
                src="./images/Vighnesh.png"
                alt="Profile"
                className="profile-image"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

    </>

  );
}
