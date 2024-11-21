
import React, { useState } from "react";
import "./OurChildren.css";
 import img1 from "../Images/img1.jpg"

const images = [
  "/images/child1.jpg", // Replace with your image paths
  "/images/child2.jpg",
  "/images/child3.jpg",
  "/images/child4.jpg",
  "/images/child5.jpg",
  "/images/child6.jpg",
  "/images/child7.jpg",
  "/images/child8.jpg",
  "/images/child9.jpg",
];

const OurChildren = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <section className="our-children">
      <div className="children-container">
        <h2 className="children-title">Our Children</h2>
        <p className="children-description">
          Celebrating the joy, growth, and creativity of our children through a
          visual story. Explore the moments that shape their future.
        </p>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openLightbox(image)}
            >
              <img
                src={img1}
                // src={image}
                alt={`Child ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>

        {isOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img src={currentImage} alt="Enlarged view" />
              <span className="close-button" onClick={closeLightbox}>
                &times;
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurChildren;


// import React, { useState } from "react";
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";
// import img1 from "../Images/img1.jpg"
// import "./OurChildren.css";

// const images = [
//   "/images/child1.jpg", // Replace with actual image paths
//   "/images/child2.jpg",
//   "/images/child3.jpg",
//   "/images/child4.jpg",
//   "/images/child5.jpg",
//   "/images/child6.jpg",
//   "/images/child7.jpg",
//   "/images/child8.jpg",
//   "/images/child9.jpg",
// ];

// const OurChildren = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const handleImageClick = (index) => {
//     setPhotoIndex(index);
//     setIsOpen(true);
//   };

//   return (
//     <section className="our-children">
//       <div className="children-container">
//         <h2 className="children-title">Our Children</h2>
//         <p className="children-description">
//           Celebrating the joy, growth, and creativity of our children through a visual story. Explore the moments that shape their future.
//         </p>
//         <div className="gallery-grid">
//           {images.map((image, index) => (
//             <div
//               className="gallery-item"
//               key={index}
//               onClick={() => handleImageClick(index)}
//             >
//               <img
//                 src={img1}
//                 //src={image}
//                 alt={`Child ${index + 1}`}
//                 className="gallery-image"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {isOpen && (
//         <Lightbox
//           mainSrc={images[photoIndex]}
//           nextSrc={images[(photoIndex + 1) % images.length]}
//           prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//           onCloseRequest={() => setIsOpen(false)}
//           onMovePrevRequest={() =>
//             setPhotoIndex((photoIndex + images.length - 1) % images.length)
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex((photoIndex + 1) % images.length)
//           }
//         />
//       )}
//     </section>
//   );
// };

// export default OurChildren;
