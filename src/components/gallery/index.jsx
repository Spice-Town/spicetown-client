import { Group, Image, Indicator, Modal } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export default function Gallery({ loggedIn }) {
  const [photos, setPhotos] = useState([]);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(false);

  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  console.log(isMobile)

  // `${import.meta.env.VITE_SERVER}/item`

  // http://localhost:3001/item 

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/item`);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPhotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (photo) => {
    fetch(`${import.meta.env.VITE_SERVER}/item/${photo._id}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetch(`${import.meta.env.VITE_SERVER}/item`)
          .then(res => res.json())
          .then(data => {
            setPhotos(data);
            setLoading(false);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

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
                  height={1000}
                  width={700}
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
            {loggedIn && (
              <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
            )}
          </div>
        ))}
      </div>
      <div className='gallery__modal'>
        <Modal
          size="auto"
          overlayColor='white'
          overlayOpacity={0.55}
          overlayBlur={4}
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className='gallery__modal-content'>
            {selectedPic && (
              <>
                <div className='gallery__modal-image'>
                  <Image
                    height={700}
                    width={600}
                    src={selectedPic.url}
                    alt={selectedPic._id}
                  />
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
