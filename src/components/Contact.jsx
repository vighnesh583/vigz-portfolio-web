import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === '✅ Message sent successfully!') setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const { error } = await supabase.from('emailmessages').insert([formData]);
      if (error) {
        setStatus('❌ Error sending message');
      } else {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      setStatus('❌ Please try again');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      style={{
        background: 'white',
        minHeight: '100vh',
        padding: '5rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(400px circle at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
          radial-gradient(300px circle at 80% 70%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', maxWidth: '700px' }}>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(25px)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)',
            overflow: 'hidden',
            padding: '3rem'
          }}
        >
          {/* Header */}
          <motion.div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(2.2rem, 6vw, 3rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.1,
                marginBottom: '1rem'
              }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                color: '#64748b',
                fontSize: '1.15rem',
                lineHeight: 1.7,
                maxWidth: '450px',
                margin: '0 auto'
              }}
            >
              Have a project in mind? Send me a message and let's discuss!
            </motion.p>
          </motion.div>

          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.75rem' }}>
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <label style={{
                display: 'block',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '0.75rem',
                fontSize: '1rem'
              }}>
                👤 Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField('')}
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  border: focusedField === 'name' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  boxShadow: focusedField === 'name' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none'
                }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <label style={{
                display: 'block',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '0.75rem',
                fontSize: '1rem'
              }}>
                📧 Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  border: focusedField === 'email' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  boxShadow: focusedField === 'email' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none'
                }}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <label style={{
                display: 'block',
                fontWeight: 600,
                color: '#374151',
                marginBottom: '0.75rem',
                fontSize: '1rem'
              }}>
                💬 Message
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField('')}
                placeholder="Tell me about your project..."
                rows="5"
                style={{
                  width: '100%',
                  padding: '1.25rem 1.5rem',
                  border: focusedField === 'message' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '16px',
                  fontSize: '1rem',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '140px',
                  boxShadow: focusedField === 'message' ? '0 0 0 4px rgba(59, 130, 246, 0.1)' : 'none'
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  background: isSubmitting
                    ? 'linear-gradient(135deg, #9ca3af, #6b7280)'
                    : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 10px 30px rgba(59, 130, 246, 0.35)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  minHeight: '60px'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Sending...
                  </>
                ) : (
                  <>
                    ✉️ Send Message
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>

          {/* Status Message - FIXED: Removed AnimatePresence */}
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              style={{
                marginTop: '2rem',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                textAlign: 'center',
                fontSize: '1.05rem',
                fontWeight: 600,
                background: status.includes('✅')
                  ? 'linear-gradient(135deg, #dcfce7, #bbf7d0)'
                  : 'linear-gradient(135deg, #fee2e2, #fecaca)',
                color: status.includes('✅') ? '#166534' : '#991b1b',
                border: status.includes('✅') ? '1px solid #4ade80' : '1px solid #f87171',
                boxShadow: status.includes('✅')
                  ? '0 8px 25px rgba(74, 222, 128, 0.25)'
                  : '0 8px 25px rgba(248, 113, 113, 0.25)'
              }}
            >
              {status}
            </motion.div>
          )}

          {/* Quick Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            style={{
              marginTop: '3.5rem',
              padding: '2rem 1.5rem',
              background: 'rgba(248, 250, 252, 0.7)',
              borderRadius: '20px',
              textAlign: 'center',
              border: '1px solid rgba(226, 232, 240, 0.8)'
            }}
          >
            <p style={{
              color: '#64748b',
              marginBottom: '1.5rem',
              fontSize: '0.95rem'
            }}>
              Or reach me directly:
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              justifyContent: 'center'
            }}>
              <motion.a
                href="mailto:vighnesh@example.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#3b82f6',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}
                whileHover={{ scale: 1.05, background: 'rgba(59, 130, 246, 0.15)' }}
              >
                📧 vighnesh@example.com
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  color: '#10b981',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  transition: 'all 0.2s ease',
                  border: '1px solid rgba(16, 185, 129, 0.2)'
                }}
                whileHover={{ scale: 1.05, background: 'rgba(16, 185, 129, 0.15)' }}
              >
                📱 +91 98765 43210
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </motion.section>
  );
}
