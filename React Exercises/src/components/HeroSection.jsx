import React from "react";
import profileImage from "../assets/profile.jpeg";
import resumeFile from "../assets/resume.pdf"; // ✅ Import your resume
import { FaDownload, FaPaperPlane } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <style>{`
        .hero {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 3rem 2rem;
          background-color: #0d1117;
          color: white;
          min-height: 100vh;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .hero-content {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          gap: 3rem;
          width: 100%;
          max-width: 1200px;
        }
        .terminal {
          background-color: #121418;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 0 20px #00faff;
          flex: 1 1 480px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .terminal-line {
          padding: 0.6rem 1rem;
          border-radius: 6px;
          border: 1px solid #00faff;
          background-color: #1c1f25;
        }
        .identity-glow { box-shadow: 0 0 10px #00faff; }
        .status-glow { box-shadow: 0 0 10px #ffb347; }
        .specialization-glow { box-shadow: 0 0 10px #ff77ff; }
        .skills-glow { box-shadow: 0 0 10px #33ffcc; }
        .mission-glow { box-shadow: 0 0 10px #ff6f61; }
        .location-glow { box-shadow: 0 0 10px #faff00; }
        .terminal-label { font-weight: bold; }
        .ai-gradient {
          background: linear-gradient(90deg, #00faff, #ff00ff);
          -webkit-background-clip: text;
          color: transparent;
        }
        .hero-btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }
        .advanced-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          border: 1px solid #00faff;
          border-radius: 5px;
          color: white;
          text-decoration: none;
          transition: 0.3s;
          font-weight: 500;
        }
        .advanced-btn:hover {
          background-color: #00faff;
          color: #000;
        }
        .hero-photo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex: 0 0 250px;
        }
        .hero-photo img {
          width: 250px;
          max-width: 100%;
          border-radius: 50%;
          border: 3px solid #00faff;
          box-shadow: 0 0 20px #00faff;
        }
        .photo-badge {
          margin-top: 1rem;
          padding: 0.3rem 1rem;
          background: linear-gradient(90deg, #00faff, #ff00ff);
          color: #0d1117;
          font-weight: bold;
          border-radius: 20px;
          box-shadow: 0 0 10px #00faff;
        }
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            align-items: center;
          }
          .terminal {
            flex: 1 1 100%;
          }
          .hero-photo {
            flex: 1 1 200px;
            margin-top: 2rem;
          }
        }
      `}</style>

      <div className="hero-content">
        {/* Terminal Box */}
        <div className="terminal">
          <div className="terminal-line identity-glow">
            <span className="terminal-label">Identity confirmed:</span>{" "}
            <span className="name">Swaranthi B</span>
          </div>
          <div className="terminal-line status-glow">
            <span className="terminal-label">Status:</span>{" "}
            Infosys Springboard Intern{" "}
            <span className="tech-badge">Java Tech Stack 💻</span>
          </div>
          <div className="terminal-line specialization-glow">
            <span className="terminal-label">Specialization:</span>{" "}
            <span className="highlight">AI & ML Enthusiast</span> |{" "}
            <span className="highlight">Problem Solver 🤖</span>
          </div>
          <div className="terminal-line skills-glow">
            <span className="terminal-label">Skills active:</span>{" "}
            <span className="highlight">Java</span> |{" "}
            <span className="highlight">Python</span> |{" "}
            <span className="highlight">C</span> |{" "}
            <span className="highlight">Web Tech</span> |{" "}
            <span className="highlight">Cloud</span>
          </div>
          <div className="terminal-line mission-glow">
            <span className="terminal-label">Mission:</span>{" "}
            <span className="mission-text">
              Building scalable <span className="ai-gradient">AI-driven</span> solutions... 🚀
            </span>
          </div>
          <div className="terminal-line location-glow">
            <span className="terminal-label">Location:</span>{" "}
            <span className="highlight">Vellore</span> |{" "}
            <span className="collab">Ready for collaboration ✨</span>
          </div>

          <div className="hero-btns">
            {/* ✅ Use imported file here */}
            <a href={resumeFile} className="resume-btn advanced-btn" download>
              <FaDownload />
              <span>Download Resume</span>
            </a>
            <a href="#contact" className="contact-btn advanced-btn">
              <FaPaperPlane />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Profile Photo + Badge */}
        <div className="hero-photo">
          <img src={profileImage} alt="Swaranthi B Developer" />
          <div className="photo-badge">Tech Enthusiast 💡</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
