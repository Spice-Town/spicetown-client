import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Modal } from '@mantine/core';
import { fetchPhotos } from '../../store/reducers/photosSlice';
import { fetchAllModalImages } from '../../store/reducers/modalImageSlice';
import CustomCarousel from '../customCarousel/CustomCarousel';

export default function Gallery() {

  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);

  const { photos } = useSelector((state) => state.photosSlice);
  const { modalImages } = useSelector((state) => state.modalImageSlice);

  const dispatch = useDispatch();

  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchAllModalImages());
  }, []);

  useEffect(() => {
    if (selectedPic) {
      const images = modalImages.filter((img) => img.post_id === selectedPic._id);
      setFilteredImages([...images, selectedPic]);
    }
  }, [selectedPic, modalImages]);


  console.log(filteredImages);

  return (
    <div className='gallery'>
      <div className='gallery__container'>
        {photos.slice().reverse().map(photo => (
          <div className='gallery__image-container' key={photo._id}>
            <div className='gallery__image'>
              {isMobile ? (
                <Image
                  height={600}
                  width={300}
                  radius='xs'
                  onClick={() => {
                    setSelectedPic(photo);
                    setOpened(true);
                  }}
                  src={photo.url}
                  alt={photo._id}
                />
              ) : (
                <Image
                  height={700}
                  width={600}
                  radius='xs'
                  onClick={() => {
                    setSelectedPic(photo);
                    setOpened(true);
                  }}
                  src={photo.url}
                  alt={photo._id}
                />
              )}
            </div>
            <p className='gallery__title'>
              {photo.title}</p>
          </div>
        ))}
      </div>
      <div className='gallery__modal'>
        <Modal
          size="80%"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className='gallery__modal-content'>
            {selectedPic && (
              <>
                <div className='gallery__modal-image-carousel'>
                  <CustomCarousel images={filteredImages.slice().reverse()} />
                </div>
                <div className='gallery__modal-text-area'>
                  <p className='gallery__modal-title'>{selectedPic.title}</p>
                  <p className='gallery__modal-dim'>{selectedPic.date}</p>
                  <div className='gallery__modal-border'>
                    <p className='gallery__modal-text'>{selectedPic.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  )
}
