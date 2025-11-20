import React from "react";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const EducationSection = () => {
  return (
    <section id="education" className="section education-section">
      <style>{`
        .education-section {
          padding: 4rem 2rem;
          background-color: #0d1117;
          color: white;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #00faff;
          text-shadow: 0 0 10px #00faff;
        }

        .education-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .education-card {
          display: flex;
          align-items: center;
          background-color: #121418;
          border-radius: 12px;
          border: 1px solid #00faff;
          box-shadow: 0 0 15px #00faff;
          padding: 1.5rem 2rem;
          gap: 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .education-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px #00faff;
        }

        .edu-icon {
          font-size: 3rem;
          color: #ff77ff;
          flex-shrink: 0;
        }

        .education-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center; /* ✅ Center all text */
        }

        .education-text p {
          margin: 0.2rem 0;
          line-height: 1.6;
        }

        .highlight {
          color: #ff77ff;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .edu-icon {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <h2 className="section-title">Education</h2>
      <div className="education-content">
        {/* College Card */}
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <div className="education-text">
            <p className="highlight">Bachelor of Engineering, Computer Science</p>
            <p>Government College of Engineering, Bargur, Krishnagiri (2022–Present)</p>
            <p>CGPA: 8.80 (till VI semester)</p>
          </div>
        </div>

        {/* School Card */}
        <div className="education-card">
          <FaSchool className="edu-icon" />
          <div className="education-text">
            <p className="highlight">Vaani Matriculation Hr Sec School, Vaniyambadi</p>
            <p>HSC: 94% | SSLC: 92%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
