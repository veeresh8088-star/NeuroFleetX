import React from "react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <style>{`
        .certifications-section {
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

        .certifications-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .certification-card {
          background-color: #121418;
          border-radius: 12px;
          border: 1px solid #00faff;
          box-shadow: 0 0 15px #00faff;
          padding: 1.5rem 2rem;
          flex: 1 1 260px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .certification-card::before {
          content: "🏆";
          display: block;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .certification-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 0 25px #00faff;
        }

        .certification-text {
          font-size: 1.1rem;
          line-height: 1.5;
          color: #fff;
        }

        @media (max-width: 768px) {
          .certification-card {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">
        <div className="certification-card">
          <p className="certification-text">Google Cloud Data Analytics</p>
        </div>

        <div className="certification-card">
          <p className="certification-text">Google Cloud Engineering Certificate</p>
        </div>

        <div className="certification-card">
          <p className="certification-text">Python for Data Science – IBM</p>
        </div>

        <div className="certification-card">
          <p className="certification-text">Data Science & Machine Learning for AI – Microsoft</p>
        </div>

        <div className="certification-card">
          <p className="certification-text">Oracle Cloud AI and Data Science Infrastructure</p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
