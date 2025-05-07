import React, { useState } from 'react'
import { supabase } from '../supabaseClient'
import { motion } from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Contact.css' // Optional for dark mode support

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from('emailmessages').insert([formData])
    if (error) {
      setStatus('❌ Error submitting form. Please try again.')
      console.error(error)
    } else {
      setStatus('✅ Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <motion.div
      className="container my-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4">
            <h2 className="text-center text-primary mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your message"
                  rows="4"
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </div>
            </form>
            {status && (
              <p className={`mt-3 text-center ${status.includes('❌') ? 'text-danger' : 'text-success'}`}>
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
