
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentIndex } from '../../store/reducers/modalImageSlice';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from 'react-icons/ai';

export default function Lightbox({ images, closeLightbox }) {

  const { currentIndex } = useSelector((state) => state.modalImageSlice);

  const dispatch = useDispatch();

  const handlePrev = () => {
    dispatch(setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    dispatch(setCurrentIndex(currentIndex < images.length - 1 ? currentIndex + 1 : 0));
  };

  return (
    <div className='lightbox'>
      <AiOutlineClose className='lightbox__close' onClick={closeLightbox} />
      <AiOutlineLeft className='lightbox__nav lightbox__nav--left' onClick={handlePrev} />
      <div className='lightbox__margin'>
        <img
        className='lightbox__image'
          src={images[currentIndex].url}
          alt={images[currentIndex]._id}
        />
      </div>
      <AiOutlineRight className='lightbox__nav lightbox__nav--right' onClick={handleNext} />
    </div>
  );
  
  
}
