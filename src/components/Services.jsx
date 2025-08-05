import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern technologies like React, Vite, Node.js, and MongoDB.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Designing clean and intuitive user interfaces with attention to detail and user experience.",
    icon: "🎨",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating REST APIs and third-party services to power web applications.",
    icon: "🔌",
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility and performance on search engines through SEO best practices.",
    icon: "🚀",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="service-icon">{service.icon}</span>
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
