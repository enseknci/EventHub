import React, { useState } from "react";
import "../styles/Slider.css";

function Slider() {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 3;
      }
      return prevIndex - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 3) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <div className="gallery-container">
      <div className="arrow left-arrow" onClick={goToPrev}>
        {"<"}
      </div>
      <div className="image-container">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
      <div className="arrow right-arrow" onClick={goToNext}>
        {">"}
      </div>
    </div>
  );
}

export default Slider;
