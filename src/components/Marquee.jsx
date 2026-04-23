import React from 'react';
import './Marquee.css';

const Marquee = () => {
  const items = [
    "Website Design",
    "UX/UI Design",
    "Creative Design",
    "Digital Mkt"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="marquee-group">
            {items.map((item, index) => (
              <React.Fragment key={`${i}-${index}`}>
                <span className="marquee-item">{item}</span>
                <span className="marquee-separator">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
