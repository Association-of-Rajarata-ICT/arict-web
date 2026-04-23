import React from 'react';
import { Lightbulb, PenTool, Code } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: <Lightbulb size={40} />,
      title: "Plan & Research",
      desc: "We analyze your requirements and target audience to build a solid foundation."
    },
    {
      icon: <PenTool size={40} />,
      title: "Design & Prototype",
      desc: "Creating intuitive user interfaces and beautiful visual concepts."
    },
    {
      icon: <Code size={40} />,
      title: "Development & Test",
      desc: "Bringing designs to life with robust code and thorough quality assurance."
    }
  ];

  return (
    <section className="process bg-white section-padding">
      <div className="container">
        <div className="section-header text-center">
          <div className="pill-tag">Our Process</div>
          <h2>Our Working Process</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-icon">
                {step.icon}
                <div className="step-number">{index + 1}</div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
