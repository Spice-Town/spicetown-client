import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentIndex } from '../../store/reducers/modalImageSlice';

const CustomCarousel = ({ images, openLightbox, isMobile }) => {

  const { currentIndex } = useSelector((state) => state.modalImageSlice);

  const dispatch = useDispatch();

  const prevSlide = () => {
    dispatch(setCurrentIndex((currentIndex - 1 + images.length) % images.length));
  };

  const nextSlide = () => {
    dispatch(setCurrentIndex((currentIndex + 1) % images.length));
  };

  return (
    <div className="carousel">
      <div className="carousel__slides">
        {images.map((image, index) => (
          <div
            className={`carousel__slide${index === currentIndex ? ' carousel__slide-active' : ''}`}
            key={index}
          >
            {isMobile ? (
              <img
                className='carousel__slide-image'
                src={image.url}
                alt={image.alt}
              />
            ) : (
              <img
                className='carousel__slide-image'
                src={image.url}
                alt={image.alt}
                onClick={() => openLightbox()}
              />
            )}
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
