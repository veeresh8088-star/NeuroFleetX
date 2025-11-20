import React from "react";
import { FaReact, FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaGoogle, FaCloud, FaDatabase, FaDocker } from "react-icons/fa";
import { SiTensorflow, SiOpenai, SiJupyter, SiVmware } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title">My Technical Skills</h2>
      <div className="skills-grid">

        <div className="skill-card">
          <FaReact size={50} color="#61DBFB" />
          <p>React</p>
        </div>

        <div className="skill-card">
          <FaJava size={50} color="#f89820" />
          <p>Java</p>
        </div>

        <div className="skill-card">
          <FaPython size={50} color="#306998" />
          <p>Python</p>
        </div>

        <div className="skill-card">
          <FaJsSquare size={50} color="#f0db4f" />
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaHtml5 size={50} color="#e34c26" />
          <p>HTML5</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={50} color="#264de4" />
          <p>CSS3</p>
        </div>

        {/* ✅ Fixed GitHub icon color + white glow */}
        <div className="skill-card github-icon">
          <FaGithub size={50} color="#ffffff" />
          <p>GitHub</p>
        </div>

        <div className="skill-card">
          <SiJupyter size={50} color="#F37626" />
          <p>Jupyter / Colab</p>
        </div>

        <div className="skill-card">
          <FaGoogle size={50} color="#4285F4" />
          <p>GCP / Cloud</p>
        </div>

        <div className="skill-card">
          <FaDatabase size={50} color="#4479A1" />
          <p>MySQL & Data Structures</p>
        </div>

        <div className="skill-card">
          <SiTensorflow size={50} color="#FF6F00" />
          <p>TensorFlow / AI & ML</p>
        </div>

        <div className="skill-card">
          <SiOpenai size={50} color="#412991" />
          <p>LLM / OpenAI Models</p>
        </div>

        <div className="skill-card">
          <SiVmware size={50} color="#607078" />
          <p>VMware</p>
        </div>

        <div className="skill-card">
          <FaDocker size={50} color="#0db7ed" />
          <p>Docker</p>
        </div>

      </div>

      {/* ✅ Added inline CSS only for GitHub icon hover glow */}
      <style>{`
        .github-icon svg {
          transition: all 0.3s ease;
        }

        .github-icon:hover svg {
          color: #ffffff;
          filter: drop-shadow(0 0 10px #ffffff);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default Skills;
