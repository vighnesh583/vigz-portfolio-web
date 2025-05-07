import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import './App.css'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.body.className = darkMode ? '' : 'dark-theme'
  }

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-theme' : ''}`}>
        <nav className="navbar">
          <div className="logo"><b className="text-orange">Vighz</b></div>

          <div className="nav-links">
            <Link to="/"><b>Home</b></Link>
            <Link to="/about"><b>About</b></Link>
            <Link to="/projects"><b>Projects</b></Link>
            <Link to="/contact"><b>Contact</b></Link>
          </div>

          <div className="theme-toggle">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} checked={darkMode} />
              <span className="slider round"></span>
            </label>
          </div>
        </nav>

        {/* WRAP ROUTES WITH CENTERED CONTAINER */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
