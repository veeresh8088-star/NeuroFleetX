import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section about">
      <style>{`
        .about {
          padding: 4rem 2rem;
          background-color: #0d1117;
          color: white;
        }
        .about .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #00faff;
          text-shadow: 0 0 10px #00faff;
        }
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .about-card {
          background-color: #121418;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #00faff;
          box-shadow: 0 0 15px #00faff;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px #00faff;
        }
        .about-card p {
          margin: 0.8rem 0;
          line-height: 1.6;
        }
        .highlight {
          color: #ff77ff;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .about-content {
            gap: 1rem;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-card">
            <p>
              Hello! I'm <span className="highlight">Swaranthi B</span>, an enthusiastic and curious learner passionate about technology and innovation. I enjoy solving problems, thinking critically, and exploring new domains in computer science. My journey into development started with curiosity, and has grown into a full-fledged passion for building intelligent, scalable solutions.
            </p>
          </div>
          <div className="about-card">
            <p>
              Currently, I am an <span className="highlight">Infosys Springboard Intern</span> working on the <span className="highlight">Java Technology Stack</span>. I specialize in <span className="highlight">Java, Python, C, and modern web technologies</span>, with a growing focus on creating responsive, user-friendly applications and exploring AI-driven automation.
            </p>
          </div>
          <div className="about-card">
            <p>
              I have a growing interest in <span className="highlight">AI, ML, and LLMs</span>, and I aim to expand my knowledge in AI-driven automation and cloud platforms. My goal is to leverage cutting-edge technologies like neural networks and large language models to create impactful solutions.
            </p>
          </div>
          <div className="about-card">
            <p>
              I value <span className="highlight">adaptability, problem-solving, and collaboration</span> and aim to leverage my skills to create impactful solutions and scalable applications. When I'm not coding, I enjoy exploring new tech trends, working on innovative projects, and helping others learn programming concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
