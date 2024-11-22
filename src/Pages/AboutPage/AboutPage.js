

import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";
import "./AboutPage.css";

import img1 from "../../Components/Images/img1.jpg"
import Director from "../../Components/Images/Director.jpg"
import pup10 from "../../Components/Images/pup10.jpg"



const AboutPage = () => {
  return (
    <div className="page">
      <Navbar />
      <Hero
        title="About Mujo’s Sky Limit School"
        subtitle="Committed to quality education and community development since 2006."
      />
      <Section
        title="Our Mission"
        content="To provide quality education within the Linda Compound community, ensuring children receive the knowledge and skills necessary to achieve their dreams and contribute meaningfully to society."
      />
      <Section
        title="History and Background"
        content={`Mujo’s Sky Limit School is located in Linda Compound, 16km southwest of Lusaka City, off Kafue Road. 
        Established in 2006, it has grown from humble beginnings to serve a community of over 36,000 people. 
        The school initially opened with classes from Baby to Grade 3 and has expanded to include up to Grade 7, 
        providing a much-needed educational resource in a community with limited schooling options.`}
      />
      <Section
        title="Community Support"
        content="Mujo’s Sky Limit School receives invaluable support from individuals and organizations, including the Asbiro Foundation. This support enables us to provide quality education to underprivileged children and ensure sustainable growth. Volunteers play a vital role in improving infrastructure, providing teaching resources, and supporting community initiatives."
      />
      <Section
        title="Ownership and Leadership"
        content="The school and its infrastructure are owned by the Mujo’s Family, led by Mr. John M. Musonda, the school Principal. His vision and dedication have been instrumental in the school's growth and its commitment to the community."
      />
      <div className="photo-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="photo-grid">
          <div className="photo-card">
            <img
              //src="/images/director.jpg" // Replace with actual path
              src={Director} // Replace with actual path
              alt="Director"
              className="photo"
            />
            <p className="photo-caption">Mr. John M. Musonda - School Principal</p>
          </div>
          <div className="photo-card">
            <img
              //src="/images/teachers.jpg" // Replace with actual path
              src={pup10}// Replace with actual path
              alt="Teachers"
              className="photo"
            />
            <p className="photo-caption">Our Dedicated Teachers</p>
          </div>
        </div>
      </div>
      <Section
        title="Why Choose Mujo’s Sky Limit School?"
        content={`
        - A focus on quality education tailored to the needs of the community.
        - A nurturing environment that fosters learning and growth.
        - Support from dedicated staff, volunteers, and organizations.
        - Conveniently located within the Linda Compound to reduce travel for students.`}
      />
      <Footer />
    </div>
  );
};

export default AboutPage;
