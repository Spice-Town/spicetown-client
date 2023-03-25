import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Card, Image, Input, Modal } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { fetchPhotos, deletePhoto, updatePhoto } from '../../store/reducers/photosSlice';

export default function Upload() {

  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [opened, setOpened] = useState(false);
  const [selectedPic, setSelectedPic] = useState('');
  const [add, setAdd] = useState('');
  const [newFile, setNewFile] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newDate, setNewDate] = useState('');

  const { photos, loading, error } = useSelector((state) => state.photosSlice);

  const dispatch = useDispatch();



  useEffect(() => {
    setNewFile(selectedPic.url);
    setNewTitle(selectedPic.title);
    setNewDescription(selectedPic.description);
    setNewDate(selectedPic.date);
  }, [selectedPic]);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const handleDelete = async (photo) => {
    await dispatch(deletePhoto(photo._id));
    dispatch(fetchPhotos());
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
    console.log(updates);
    console.log(selectedPic);
    await dispatch(updatePhoto(selectedPic._id, updates));
    dispatch(fetchPhotos());
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
      setShowAlert(true);
    } catch (error) {
      console.error(error);
    }
  }

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
          <Alert
            title="Image Successfully Uploaded!"
            color="teal"
            radius="lg"
            variant="filled"
            className={`alert-transition ${showAlert ? 'opacity-100' : 'opacity-0'}`}
          />
        )}
        <Modal
          size="auto"
          overlayColor='white'
          opened={opened}
          onClose={() => setOpened(false)}
          centered
        >
          <Image
            height={300}
            radius='xs'
            src={selectedPic.url}
            alt={selectedPic._id}
          />
          <p>Update Post</p>
          <form className='upload__container' onSubmit={handleUpdate}>

            <Input.Wrapper
              id="input-link"
              withAsterisk
              label="Insert Image Link"
            >
              <Input
                id="input-link"
                placeholder="Link to Image"
                value={newFile}
                onChange={(event) => setNewFile(event.target.value)}
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
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
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
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}
              />
            </Input.Wrapper>
            <Input.Wrapper
              id="input-range"
              label="Date Range"
            >
              <Input
                id="input-text"
                placeholder="03/11/22"
                value={newDate}
                onChange={(event) => setNewDate(event.target.value)}
              />
            </Input.Wrapper>
            <Button
              color='orange'
              className='upload__button'
              type="submit">Submit

            </Button>
          </form>
          <p>Add Photos</p>
          <form>
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
            <Button color="green" compact>
              Add to Post
            </Button>
          </form>
        </Modal>
        <form className='upload__container' onSubmit={handleSubmit}>

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
        <div className='upload__add-area'>
          <Carousel
            withIndicators
            height={400}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={3}
          >
            {photos.slice().reverse().map((photo, index) => (
              <Carousel.Slide key={index}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      height={300}
                      radius='xs'
                      src={photo.url}
                      alt={photo._id}
                    />
                  </Card.Section>
                  <p>
                    {photo.title}
                  </p>
                  <Button color="yellow" compact
                    onClick={() => {
                      setSelectedPic(photo);
                      setOpened(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button color="red" compact
                    onClick={() => handleDelete(photo)}
                  >
                    Delete
                  </Button>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}
