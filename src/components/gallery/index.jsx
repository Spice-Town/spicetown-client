import { Image, Indicator } from '@mantine/core';
import React, { useState, useEffect } from 'react';

export default function Gallery({ loggedIn }) {
  const [photos, setPhotos] = useState([]);
  // const [opened, setOpened] = useState(false);
  // const [selectedPic, setSelectedPic] = useState('');
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);

  // `${import.meta.env.VITE_SERVER}/item`

  // http://localhost:3001/item 

  const fetchPhotos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/item`);
      const data = await response.json();
      setPhotos(data);
      // setLoading(false);
      const images = document.querySelectorAll('.image-fade-in');
      images.forEach((img) => {
        img.classList.remove('image-fade-in');
      });
    } catch (error) {
      console.error(error);
      // setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
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
            // setLoading(false);
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  console.log(photos)

  return (
    <div className='gallery'>
      <div className='gallery__container'>
        {photos.filter((index) => index % 2 === 0).map(photo => (
          <div className='gallery__image-container' key={photo._id}>
            <div className='gallery__image'>
              <Image
                radius="xs"
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                src={photo.url}
                alt={photo._id}
                className='image-fade-in'
              />
            </div>
            <p>{photo.title}</p>
            {loggedIn && (
              <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
            )}
          </div>
        ))}
        {photos.filter((index) => index % 2 !== 0).map(photo => (
          <div  className='gallery__image-container' key={photo._id}>
            <div className='gallery__image' >
              <Image
              radius="xs"
                onClick={() => {
                  setSelectedPic(photo);
                  setOpened(true);
                }}
                src={photo.url}
                alt={photo._id}
                className='image-fade-in'
              />
            </div>
            <p>{photo.title}</p>
            {loggedIn && (
              <Indicator color="red" label="X" size={25} onClick={() => handleDelete(photo)}></Indicator>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
