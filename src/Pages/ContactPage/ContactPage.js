import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you. Reach out to us for inquiries, support, or feedback.
        </p>
      </header>

      <section className="contact-info">
        <div className="info-item">
          <h3>Address</h3>
          <p>
            Mujo’s Sky Limit School <br />
            Linda Compound, 16Km South West of Lusaka City <br />
            Lusaka, Zambia
          </p>
        </div>

        <div className="info-item">
          <h3>Phone</h3>
          <p>
            General Inquiries: +260977875855 <br />
            Admissions: +260977875855
          </p>
        </div>

        <div className="info-item">
          <h3>Email</h3>
          <p>
            General: info@mujosskylimit.edu.zm <br />
            Admissions: admissions@mujosskylimit.edu.zm
          </p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
