import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Card, Image, Input, Modal, ScrollArea } from '@mantine/core';
import { fetchPhotos, deletePhoto, updatePhoto } from '../../store/reducers/photosSlice';
import { createModalImage, fetchAllModalImages, deleteModalImage } from '../../store/reducers/modalImageSlice';

export default function Upload() {

  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [alertText, setAlertText] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [add, setAdd] = useState('');
  const [newFile, setNewFile] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false); // to toggle the pop-up
  const [deletingPhoto, setDeletingPhoto] = useState(null); // to track the photo being deleted


  const { photos } = useSelector((state) => state.photosSlice);
  const { modalImages } = useSelector((state) => state.modalImageSlice);

  const dispatch = useDispatch();

  const isMobile = window.matchMedia('(max-width: 924px)').matches;

  let height = 700;
  let width = 600;

  if (isMobile) {
    height = 600;
    width = 300;
  }

  useEffect(() => {
    setNewFile(selectedPic.url);
    setNewTitle(selectedPic.title);
    setNewDescription(selectedPic.description);
    setNewDate(selectedPic.date);
  }, [selectedPic]);

  useEffect(() => {
    dispatch(fetchPhotos());
    dispatch(fetchAllModalImages());
  }, []);

  useEffect(() => {
    const images = modalImages.filter((img) => img.post_id === selectedPic._id);
    setFilteredImages(images);
  }, [opened, showAlert]);

  const handleDelete = async (photo) => {
    try {
      await dispatch(deletePhoto(photo._id));
      dispatch(fetchPhotos());
      setAlertText('Post Deleted Successfully');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const updates = {
      file: newFile,
      folder: 'gallery',
      title: newTitle,
      description: newDescription,
      date: newDate,
    }
    try {
      await dispatch(updatePhoto(selectedPic._id, updates));
      dispatch(fetchPhotos());
      setAlertText('Post Updated Successfully');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      file,
      folder: 'gallery',
      title,
      description,
      date
    };

    // `${import.meta.env.VITE_SERVER}/item` deployed use

    // 'http://localhost:3001/item' local use

    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post(`${import.meta.env.VITE_SERVER}/item`, data);
      setFile('');
      setTitle('');
      setDescription('');
      setDate('');
      dispatch(fetchPhotos());
      setAlertText('Post Uploaded Successfully');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handleAdd = async (event) => {
    event.preventDefault();
    const imageData = {
      file: add,
      post_id: selectedPic._id,
      folder: 'modal'
    }
    try {
      await dispatch(createModalImage(imageData));
      dispatch(fetchAllModalImages());
      setAlertText('Image Added to Post Successfully');
      setShowAlert(true);
      setAdd('')
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteModalImage = async (photo) => {
    try {
      await dispatch(deleteModalImage(photo._id));
      dispatch(fetchAllModalImages());
      setAlertText('Image Deleted from Post Successfully');
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOpenDelete = async (photo) => {
    setDeletingPhoto(photo);
    setShowConfirmation(true);
  };

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  return (
    <>
      <div className='upload'>
        {showAlert && (
          <div className='upload__alert'>
            <Alert
              title={alertText}
              color="teal"
              radius="lg"
              variant="filled"
              className={`upload_alert ${showAlert ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        )}
        <Modal
          size="auto"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className='upload__modal-container'>
            <Image
              fit='contain'
              height={height}
              width={width}
              radius='md'
              src={selectedPic.url}
              alt={selectedPic._id}
            />
            <div className='upload__modal-input-area'>
              <div className='upload__modal-border'>
                <p>Update Post</p>
                <form className='upload__modal-form' onSubmit={handleUpdate}>

                  <Input.Wrapper
                    id="input-link"
                    label="Update Main Image Link"
                  >
                    <Input
                      id="input-link"
                      value={newFile}
                      onChange={(event) => setNewFile(event.target.value)}
                    />
                  </Input.Wrapper>
                  <Input.Wrapper
                    id="input-title"
                    label="Update Title of Post"
                  >
                    <Input
                      id="input-title"
                      value={newTitle}
                      onChange={(event) => setNewTitle(event.target.value)}
                    />
                  </Input.Wrapper>
                  <Input.Wrapper
                    id="input-details"
                    label="Update Description"
                  >
                    <Input
                      id="input-details"
                      value={newDescription}
                      onChange={(event) => setNewDescription(event.target.value)}
                    />
                  </Input.Wrapper>
                  <Input.Wrapper
                    id="input-range"
                    label="Update Date Range"
                  >
                    <Input
                      id="input-text"
                      value={newDate}
                      onChange={(event) => setNewDate(event.target.value)}
                    />
                  </Input.Wrapper>
                  <Button
                    color='orange'
                    className='upload__button'
                    type="submit">Update
                  </Button>
                </form>
              </div>
              <div className='upload__modal-border'>
                <p>Add Photos to Post</p>
                <form className='upload__modal-form' onSubmit={handleAdd}>
                  <Input.Wrapper
                    id="input-link-add"
                    label="Insert Image Link"
                  >
                    <Input
                      id="input-link-add"
                      placeholder="Link to Image"
                      value={add}
                      onChange={(event) => setAdd(event.target.value)}
                    />
                  </Input.Wrapper>
                  <Button
                    color="green"
                    compact
                    type="submit"
                  >
                    Add to Post
                  </Button>
                </form>
              </div>
            </div>
            <div className='upload__add-area'>
              {filteredImages.map((photo, index) => (
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      height={200}
                      width={200}
                      src={photo.url}
                      alt={photo._id}
                    />
                  </Card.Section>
                  <Button color="red" compact
                    onClick={() => handleDeleteModalImage(photo)}
                    className='upload__modal-delete'
                  >
                    Delete
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </Modal>
        <form className='upload__container' onSubmit={handleSubmit}>
          <h2>Create Post</h2>
          <Input.Wrapper
            id="input-link"
            withAsterisk
            label="Insert Image Link"
          >
            <Input
              id="input-link"
              placeholder="Link to Image"
              value={file}
              onChange={(event) => setFile(event.target.value)}
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="input-title"
            withAsterisk
            label="Title of Post"
          >
            <Input
              id="input-title"
              placeholder="Cool Guitar"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="input-details"
            withAsterisk
            label="Description"
          >
            <Input
              id="input-details"
              placeholder="Really Cool Thing I Did"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Input.Wrapper>
          <Input.Wrapper
            id="input-range"
            label="Date Range"
          >
            <Input
              id="input-text"
              placeholder="03/11/22"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Input.Wrapper>
          <Button
            color='orange'
            className='upload__button'
            type="submit">Submit

          </Button>
        </form>
        <div className='upload__scroll'>
          <ScrollArea h={450} offsetScrollbars>
            <div className='upload__add-area'>
              {photos.slice().reverse().map((photo, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      height={300}
                      radius='md'
                      src={photo.url}
                      alt={photo._id}
                    />
                  </Card.Section>
                  <p>
                    {photo.title}
                  </p>
                  <Button color="yellow" compact
                    onClick={() => {
                      dispatch(fetchAllModalImages());
                      setSelectedPic(photo);
                      setOpened(true);
                    }}
                    className='upload__card-button'
                  >
                    Edit
                  </Button>
                  <Button color="red" compact
                    onClick={() => handleOpenDelete(photo)}
                    className='upload__card-button'
                  >
                    Delete
                  </Button>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
        <Modal
          size="auto"
          opened={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          title="Confirm Deletion"
        >
          {deletingPhoto && (
            <div>
              <p>Are you sure you want to delete the photo "{deletingPhoto.title}"?</p>
              <Button
                color="red" compact
                className='upload__card-button'
                onClick={() => {
                  setShowConfirmation(false);
                  handleDelete(deletingPhoto);
                }}>Yes, delete</Button>
              <Button
                color="green" compact
                className='upload__card-button'
                onClick={() => setShowConfirmation(false)}>Cancel</Button>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
