import React from 'react';
import '../css/howitWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      stepNumber: 'Step 1',
      text: 'Tell us what you need and provide details about the job.',
    },
    {
      id: 2,
      stepNumber: 'Step 2',
      text: 'Get matched with skilled and verified artisans.',
    },
    {
      id: 3,
      stepNumber: 'Step 3',
      text: 'Choose the best artisan and confirm the job.',
    },
    {
      id: 4,
      stepNumber: 'Step 4',
      text: 'Sit back while your job gets done perfectly.',
    },
  ];

  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-badge">{step.stepNumber}</div>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;