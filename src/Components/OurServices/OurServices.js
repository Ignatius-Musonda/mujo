import React from "react";
import "./OurServices.css";
import img1 from "../../Components/Images/img1.jpg"

const services = [
  {
    title: "Learner-Centered",
    description:
      "At KLS, students have the space and encouragement to take control of their own learning journey. Our teacher-guides cultivate an environment that nurtures independence and curiosity. With ample time, space, and support, students are empowered to pursue authentic interests.",
    image: "/images/learner-centered.jpg", // Update with actual image paths
    linkText: "Learn More",
  },
  {
    title: "Active Learning",
    description:
      "Learning happens through active engagement, and communication and collaboration are essential skills for success. We dedicate roughly half of each student's experience to collaborative discussions, problem-solving, and real-world applications. The other half focuses on developing fluency in essential skills and content, all at a pace that suits the individual learner.",
    image: "/images/active-learning.jpg", // Update with actual image paths
    linkText: "Learn More",
  },
  {
    title: "Flexible & Accelerated Pacing",
    description:
      "Mastery of skills and content knowledge matters more than seat time. Freed from traditional pacing, our students often accelerate their learning by 1.5-2 grade levels per year and tackle college-level work as high school freshmen.",
    image: "/images/flexible-pacing.jpg", // Update with actual image paths
    linkText: "Learn More",
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={img1}
                // src={service.image}
                alt={service.title}
                className="service-image"
              />
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;