import React from 'react';
import './Application2025.css';

const Application2025 = () => {
  return (
    <section className="application-2025">
      <div className="application-container">
        <h2>Application for 2025 is Open!</h2>
        <p className="application-description">
          We are now accepting applications for the 2025 academic year. Give your child the opportunity to join a community of independent and curious learners.
        </p>
        <button className="apply-now-button">Apply Now</button>
        <div className="application-details">
          <h3>Important Dates:</h3>
          <ul>
            <li>Application Deadline: January 15, 2025</li>
            <li>Interviews: February 2025</li>
            <li>Enrollment Confirmation: March 2025</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Application2025;
