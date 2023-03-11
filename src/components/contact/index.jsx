import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Input, Textarea } from '@mantine/core';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const data = { name, phone, issue };
    try {
      await axios.post('http://localhost:3001/mail', data);      
      setName('');
      setPhone('');
      setIssue('');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="contact">
        <Alert 
          title="Success!"
          color="teal"
          radius="md"
          variant="filled"
          className={`contact__alert ${showAlert ? 'visible' : ''}`}
        >
          Your request has been sent, you will here back from us soon.
        </Alert>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className='contact__form'>
        <Input.Wrapper label="Your Name" required className="contact__input">
          <Input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
        </Input.Wrapper>
        <Input.Wrapper
          label="Your Phone Number"
          required
          className="contact__input"
        >
          <Input
            placeholder="(000)-000-0000"
            mask="(000) 000-0000"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Input.Wrapper>
        <Textarea
          placeholder="Setup needed, replace tuners and strings."
          label="Description of Issue"
          description="In as much detail as possible describe the problem with your instrument"
          radius="md"
          withAsterisk
          className="contact__input"
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
        />
        <Button color="orange" size="lg" uppercase type="submit" className="contact__button">
          Submit
        </Button>
      </form>
    </div>
  );
}