import React from 'react';
import './SupportUs.css';

const SupportUs = () => {
  return (
    <section className="support-us">
      <div className="support-container">
        <h2>Support a Child</h2>
        <p className="support-description">
          Your contribution can make a significant difference in the life of a child. Help us empower the next generation by supporting a child today.
        </p>
        <button className="donate-button">Donate Now</button>
        <div className="payment-options">
          <h3>Payment Methods:</h3>
          <ul>
            <li>Credit/Debit Card</li>
            <li>Bank Transfer</li>
            <li>PayPal</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SupportUs;
