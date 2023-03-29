import React, { useState } from 'react';
import { Image } from '@mantine/core';

const CustomCarousel = ({ images }) => {

console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__slides">
        {images.map((image, index) => (
          <div
            className={`carousel__slide${index === currentIndex ? ' carousel__slide-active' : ''}`}
            key={index}
          >
            <Image height={700} width={600} fit='contain' src={image.url} alt={image.alt} />
          </div>
        ))}
      </div>
      <button
        className={`carousel__button carousel__button-prev${currentIndex === 0 ? ' carousel__button-disabled' : ''}`}
        onClick={prevSlide}
        disabled={currentIndex === 0}
      >
        &lsaquo;
      </button>
      <button
        className={`carousel__button carousel__button-next${currentIndex === images.length - 1 ? ' carousel__button-disabled' : ''}`}
        onClick={nextSlide}
        disabled={currentIndex === images.length - 1}
      >
        &rsaquo;
      </button>
    </div>
  );
};

export default CustomCarousel;
