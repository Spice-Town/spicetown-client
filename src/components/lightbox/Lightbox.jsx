
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentIndex } from '../../store/reducers/modalImageSlice';
import { Image } from '@mantine/core';
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
      <Image                
        fit='contain'
       src={images[currentIndex].url}
        alt={images[currentIndex]._id}
        height='64%'
        width='64%'
         />
      <AiOutlineRight className='lightbox__nav lightbox__nav--right' onClick={handleNext} />
    </div>
  );
}
