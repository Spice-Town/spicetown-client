import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert, Input, MultiSelect, Button } from '@mantine/core';

export default function Upload() {

  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      file,
      folder: 'gallery',
      title,
      description,
      date
    };

    try {
      // eslint-disable-next-line no-unused-vars
      await axios.post('http://localhost:3001/item', data);
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
      </div>
    </>
  );
}
