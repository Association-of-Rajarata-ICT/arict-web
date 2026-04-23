import React from 'react';
import { Award } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  const awards = [
    { year: "2018", title: "Best Design Agency", org: "Awwwards" },
    { year: "2020", title: "Design of the Year", org: "CSS Design Awards" },
    { year: "2022", title: "Innovation in Web", org: "Webby Awards" },
    { year: "2023", title: "Agency of the Year", org: "FWA" }
  ];

  return (
    <section className="awards bg-white section-padding text-center">
      <div className="container">
        <div className="section-header">
          <div className="pill-tag text-black">Awards</div>
          <h2>Our Journey to Award-<br/>Winning Success</h2>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-icon">
                <Award size={40} />
              </div>
              <div className="award-info">
                <span className="year text-primary">{award.year}</span>
                <h3>{award.title}</h3>
                <p>{award.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
