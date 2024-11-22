
import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Hero from "../../components/Hero/Hero";
// import Section from "../../components/Section/Section";
// import Accordion from "../../components/Accordion/Accordion";
// import Footer from "../../components/Footer/Footer";
// import styles from "./AdmissionPage.css";

// import React from "react";

import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Accordion from "../../Components/Accordion/Accordion";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/NavBar/NavBar";
import FeesTable from "../../Components/FeesTable/FeesTable";


import "./AdmissionPage.css";
import ScrollToTop from "../../Components/ScrollTop/ScroolTop";


const AdmissionPage = () => {
    return (
      <div className="page">
        <ScrollToTop/>
        <Navbar />
        <Hero
          title="Admission & Fee Structure"
          subtitle="Explore our tuition fees and download the admission form to get started."
        />
        <Section
          title="Fee Structure "
          content="We provide an affordable education system from Grade 1 to Grade 12. Below is a detailed breakdown of our fee structure."
        />
        <FeesTable />
        <Section
          title="Download Admission Form"
          content="Start your journey with us by downloading and filling out the admission form. Submit it to our office to complete the process."
          buttonText="Download Form"
          buttonLink="/admission-form.pdf"
        />
        <Footer />
      </div>
    );
  };
  
  export default AdmissionPage;


// import React from "react";
// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Section from "../components/Section";
// import Accordion from "../components/Accordion";
// import Footer from "../components/Footer";

// const AdmissionPage = () => {
//   const accordionData = [
//     {
//       question: "What is the tuition fee?",
//       answer: "Our tuition starts at $20,000, with various financial aid options available.",
//     },
//     {
//       question: "How do I apply for financial aid?",
//       answer: "You can apply through our online portal by submitting the required documents.",
//     },
//     {
//       question: "Are there scholarships available?",
//       answer: "Yes, we offer need-based scholarships. Visit the scholarships page for details.",
//     },
//   ];

//   return (
//     <div>
//       <Navbar />
//       <Hero
//         title="Tuition & Affordability"
//         subtitle="Learn more about how we make quality education accessible for everyone."
//       />
//       <Section
//         title="Our Commitment to Affordability"
//         content="At Khan Lab School, we believe that financial constraints should not be a barrier to accessing quality education. We offer flexible payment plans and scholarships to support families."
//       />
//       <Accordion data={accordionData} />
//       <Section
//         title="Apply for Financial Aid"
//         content="Ready to get started? Click below to begin your application process."
//         buttonText="Apply Now"
//         buttonLink="#apply"
//       />
//       <Footer />
//     </div>
//   );
// };

// export default AdmissionPage;
