import React from "react";
import {
  FaBookOpen,
  FaImages,
  FaShoppingCart,
  FaShip,
  FaTwitter,
  FaBrain,
  FaLaptopCode,
  FaRobot,
} from "react-icons/fa";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <style>{`
        .projects-section {
          background-color: #0d1117;
          color: white;
          padding: 4rem 2rem;
          text-align: center;
        }

        .section-title {
          font-size: 2.2rem;
          margin-bottom: 2rem;
          background: linear-gradient(90deg, #00faff, #ff00ff);
          -webkit-background-clip: text;
          color: transparent;
          font-weight: bold;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .project-card {
          background-color: #121418;
          border: 1px solid #00faff;
          border-radius: 10px;
          padding: 1.5rem;
          text-align: left;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 0 15px rgba(0, 250, 255, 0.3);
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px #00faff;
        }

        .project-icon {
          font-size: 2rem;
          color: #00faff;
          margin-bottom: 0.8rem;
        }

        .project-card h3 {
          font-size: 1.2rem;
          color: #ff00ff;
          margin-bottom: 0.5rem;
        }

        .project-card p {
          color: #ddd;
          font-size: 0.95rem;
          line-height: 1.4;
        }
      `}</style>

      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        <div className="project-card">
          <FaBookOpen className="project-icon" />
          <h3>Mindful Journaling Reflectora Website</h3>
          <p>
            A reflective journaling web app that helps users track daily
            mindfulness and productivity. Built with modern web technologies
            to provide an intuitive and peaceful user experience for mental
            wellness tracking.
          </p>
        </div>

        <div className="project-card">
          <FaImages className="project-icon" />
          <h3>Enceladus Image Carousel Website</h3>
          <p>
            Interactive image carousel website showcasing stunning visuals of
            Enceladus. Features smooth transitions, responsive design, and
            optimized loading for an immersive space exploration experience.
          </p>
        </div>

        <div className="project-card">
          <FaShoppingCart className="project-icon" />
          <h3>Enceladus E-commerce Website</h3>
          <p>
            Fully responsive e-commerce site with product showcase, cart
            functionality, and checkout process. Built with modern web
            standards featuring user authentication and secure payment
            integration.
          </p>
        </div>

        <div className="project-card">
          <FaShip className="project-icon" />
          <h3>Titanic Survival Prediction (Data Analytics)</h3>
          <p>
            Data analytics project predicting Titanic passenger survival using
            Python and machine learning models. Implemented feature
            engineering, data visualization, and statistical analysis for
            accurate predictions.
          </p>
        </div>

        <div className="project-card">
          <FaTwitter className="project-icon" />
          <h3>Social Media Management System (Twitter Clone)</h3>
          <p>
            Web application simulating Twitter functionality for posting,
            following, and messaging. Features real-time updates, user
            profiles, and a responsive interface for seamless social
            interaction.
          </p>
        </div>

        <div className="project-card">
          <FaBrain className="project-icon" />
          <h3>Fraud Detection with Neural Networks (Data Science)</h3>
          <p>
            Neural network model detecting fraudulent transactions in
            financial datasets. Implemented deep learning algorithms with high
            accuracy for real-time fraud detection and prevention.
          </p>
        </div>

        <div className="project-card">
          <FaLaptopCode className="project-icon" />
          <h3>Full Stack E-commerce Website</h3>
          <p>
            Complete e-commerce web application with user authentication,
            product management, shopping cart, and secure checkout. Built with
            modern full-stack technologies and RESTful API architecture.
          </p>
        </div>

        <div className="project-card">
          <FaRobot className="project-icon" />
          <h3>
            LLM Augmented Neural Cognitive Diagnosis (Multi-Model AI & NCDM)
          </h3>
          <p>
            AI + EdTech project integrating LLMs (GPT-4/LLAMA) with cognitive
            student knowledge modeling. Advanced research project combining
            neural cognitive diagnosis models with large language models for
            personalized education.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
