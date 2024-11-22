import React, { useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import Footer from "../../Components/Footer/Footer";

import "./GalleryPage.css";
//import img1 from "../../Components/Images/img1.jpg"
import vol1 from "../../Components/Images/vol1.jpg";
import vol2 from "../../Components/Images/vol2.jpg";
import vol3 from "../../Components/Images/vol3.jpg";
import vol4 from "../../Components/Images/vol4.jpg";
import vol5 from "../../Components/Images/vol5.jpg";
import vol6 from "../../Components/Images/vol6.jpg";
import vol7 from "../../Components/Images/vol7.jpg";
import vol8 from "../../Components/Images/vol8.jpg";
import vol9 from "../../Components/Images/vol9.jpg";
import vol10 from "../../Components/Images/vol10.jpg";
// import vol11 from "../../Components/Images/vol11.jpg";
// import vol12 from "../../Components/Images/vol12.jpg";

// const images = [
//   vol1, vol2, vol3, vol4, vol5, vol6, vol7, vol8, vol9, vol10
// ];


import img1 from "../../Components/Images/pup1.jpg";
import img2 from "../../Components/Images/pup2.jpg";
import img3 from "../../Components/Images/pup3.jpg";
// import img4 from "../../Components/Images/pup4.jpg";
import img5 from "../../Components/Images/pup5.jpg";
// import img6 from "../../Components/Images/pup6.jpg";
import img7 from "../../Components/Images/pup7.jpg";
import img8 from "../../Components/Images/pu4.jpg"; // Notice this looks like a typo, should this be "pup4.jpg"?
import img9 from "../../Components/Images/pup9.jpg";
import img10 from "../../Components/Images/pup10.jpg";
import img11 from "../../Components/Images/pup11.jpg";
import img12 from "../../Components/Images/pup12.jpg";

const images = [
  img1, img2, img3, img5, img7, img8, img9, img10, img11, img12
];





const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  const learnersImages = [
    { src: img1, caption: "Learners in class." },
    { src: img2, caption: "Students at a school event." },
    { src: img3, caption: "Group study session." },
    { src: img5, caption: "Recess playtime fun." },
    { src: img7, caption: "Learners participating in hands-on activities." },
    { src: img8, caption: "Students collaborating on a project." },
    { src: img9, caption: "Focused learners during class time." },
    { src: img10, caption: "Learners interacting with teachers." },
    { src: img11, caption: "Learners engaging in sports activities." },
    { src: img12, caption: "Students in a creative arts class." },
  ];

  const volunteersImages = [
    { src: vol1, caption: "Volunteers building classrooms." },
    { src: vol2, caption: "Sponsors and students group photo." },
    { src: vol3, caption: "Workshop with volunteers." },
    { src: vol4, caption: "Community outreach event." },
    { src: vol5, caption: "Teaching volunteers conducting a session." },
    { src: vol6, caption: "Hands-on activities with volunteers." },
    { src: vol7, caption: "Students learning in a newly built classroom." },
    { src: vol8, caption: "Community event with local leaders and volunteers." },
    { src: vol9, caption: "Volunteer team organizing educational materials." },
    { src: vol10, caption: "Volunteers interacting with children in the community." },
    // { src: vol11, caption: "Group of volunteers participating in a clean-up drive." },
    // { src: vol12, caption: "Volunteers engaging in team-building exercises." },
  ];

  const openModal = (src, caption) => {
    setSelectedImage(src);
    setSelectedCaption(caption);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedCaption("");
  };

  return (
    <div className="gallery-page">
      <Navbar />
      <header className="gallery-header">
        <h1>Our Gallery</h1>
        <p>
          Explore the vibrant moments from Mujo’s Sky Limit School. Witness the dedication of our learners and the unwavering support from our sponsors and volunteers.
        </p>
      </header>

      <section className="gallery-section">
        <h2>Our Learners</h2>
        <p>
          Our students are the heart of Mujo’s Sky Limit School. Their curiosity, resilience, and enthusiasm drive our mission to provide quality education. Here are some of their memorable moments.
        </p>
        <div className="image-grid">
          {learnersImages.map((image, index) => (
            <div
              className="image-container"
              key={index}
              onClick={() => openModal(image.src, image.caption)}
            >
              <img src={image.src} alt={image.caption} className="gallery-image" />
              <div className="caption-overlay">{image.caption}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery-section">
        <h2>Sponsors and Volunteers</h2>
        <p>
          We are deeply grateful for the unwavering support of individuals and organizations like the Asbiro Foundation. Their contributions, time, and resources empower us to continue our mission.
        </p>
        <div className="image-grid">
          {volunteersImages.map((image, index) => (
            <div
              className="image-container"
              key={index}
              onClick={() => openModal(img1, image.caption)}
            >
              {/* <img src={image.src} alt={image.caption} className="gallery-image" /> */}
              <img src={image.src} alt={image.caption} className="gallery-image" />
              <div className="caption-overlay">{image.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            {/* <img src={selectedImage} alt={selectedCaption} className="modal-image" /> */}
            <img src={img1} alt={selectedCaption} className="modal-image" />
            <p className="modal-caption">{selectedCaption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GalleryPage;
