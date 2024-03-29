import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClockLoader from "react-spinners/ClockLoader";
import { fetchPhotos } from '../../store/reducers/photosSlice';
import { fetchAllModalImages, setCurrentIndex } from '../../store/reducers/modalImageSlice';
import CustomCarousel from '../customCarousel/CustomCarousel';
import CustomModal from '../customModal/CustomModal';
import Lightbox from '../lightbox/Lightbox';

export default function Gallery() {

  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const { photos, loading, error } = useSelector((state) => state.photosSlice);
  const { modalImages, currentIndex } = useSelector((state) => state.modalImageSlice);

  const dispatch = useDispatch();

  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchAllModalImages());
  }, []);

  useEffect(() => {
    if (!opened) {
      dispatch(setCurrentIndex(0));
    }
  }, [opened]);

  useEffect(() => {
    if (selectedPic) {
      const images = modalImages.filter((img) => img.post_id === selectedPic._id);
      setFilteredImages([selectedPic, ...images]);
    }
  }, [selectedPic, modalImages]);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className='gallery'>
      {loading && (
        <div className='gallery__loading'>
          <p>Loading...</p>
          <ClockLoader
            color="#000000"
            loading={loading}
            size={50}
          />
        </div>
      )}
      {error && (
        <div className='gallery__error'>
          <p>Error: {error}</p>
        </div>
      )}
              {!isMobile && (
          <p className='gallery__note'>Click an Image to get more details</p>
          )}
      <div className='gallery__container'>
        {isMobile && (
          <p className='gallery__note'>Tap an Image to get more details</p>
        )}
        {lightboxOpen && (
          <Lightbox
            images={filteredImages}
            closeLightbox={closeLightbox}
          />
        )}
        {!loading && !error && photos.slice().reverse().map(photo => (
          <div className='gallery__image-container' key={photo._id}>
                <img
                className='gallery__image'
                  onClick={() => {
                    setSelectedPic(photo);
                    setOpened(true);
                  }}
                  src={photo.url}
                  alt={photo._id}
                />
            <p className='gallery__title'>
              {photo.title}</p>
          </div>
        ))}
      </div>
      <div className='gallery__modal'>
        <CustomModal
isOpen={opened}
 onClose={() => setOpened(false)}
        >
          <div className='gallery__modal-content'>
            {selectedPic && (
              <>
                <div className='gallery__modal-image-carousel'>
                  <CustomCarousel openLightbox={openLightbox} images={filteredImages} isMobile={isMobile} />
                </div>
                <div className='gallery__modal-text-area'>
                  <p className='gallery__modal-title'>{selectedPic.title}</p>
                  <p className='gallery__modal-dim'>{selectedPic.date}</p>
                  <div className='gallery__modal-border'>
                    <p className='gallery__modal-text'>{selectedPic.description}</p>
                  </div>
                  <div className='gallery__modal-image-box'>
                    {filteredImages.map((image, index) =>
                      <div className={`gallery__modal-image ${index === currentIndex ? 'gallery__modal-image--selected' : 'gallery__modal-image--deselected'}`}>
                        <img
                          src={image.url}
                          key={index}
                          onClick={() => {
                            dispatch(setCurrentIndex(index));
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </CustomModal>
      </div>
    </div>
  )
}
