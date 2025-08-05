import React, { useState } from "react";
import "./ResumeSection.css";

const ResumeSection = () => {
    const [copyText, setCopyText] = useState("Email");

    const handleEmailCopy = () => {
        navigator.clipboard.writeText("vighneshkhadake@outlook.com").then(() => {
            setCopyText("Copied!");
            setTimeout(() => setCopyText("Email"), 1500);
        });
    };

    return (
        <div className="resume-section">
            <div className="contact-links">
                <a
                    href="https://github.com/vighnesh583"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/vighnesh-k-903754281/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>

                <span
                    className="email-copy"
                    onClick={handleEmailCopy}
                    onMouseEnter={() => setCopyText("Copy")}
                    onMouseLeave={() => setCopyText("Email")}
                >
                    {copyText}
                </span>
            </div>

            <a href="/Vighneshkhadake.pdf.pdf" download className="download-btn">
                Download Resume
            </a>
        </div>
    );
};

export default ResumeSection;
