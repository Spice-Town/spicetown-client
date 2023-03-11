import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Input, Textarea } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [issueError, setIssueError] = useState('');

  const id = useId();

  const validateName = () => {
    if (name.trim().length === 0) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validatePhone = () => {
    if (!/^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(phone)) {
      setPhoneError('Please enter a valid phone number in the format +1 (xxx) xxx-xxxx');
    } else {
      setPhoneError('');
    }
  };
  

  const validateIssue = () => {
    if (issue.trim().length < 5) {
      setIssueError('Description must be at least 5 characters long');
    } else {
      setIssueError('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    validateName();
    validatePhone();
    validateIssue();

    if (nameError !== '' || phoneError !== '' || issueError !== '') {
      return;
    }

    const data = { name, phone, issue };
    try {
      await axios.post('http://localhost:3001/mail', data);
      setName('');
      setPhone('');
      setIssue('');
      setShowAlert(true);
      setShowError(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setError(error);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 7000);
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
      <form onSubmit={handleSubmit} className="contact__form">
        <Input.Wrapper
          label="Your Name"
          required
          className="contact__input">
          <Input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={validateName}
          />
          {nameError && <div className="contact__error">{nameError}</div>}
        </Input.Wrapper>
        <Input.Wrapper
          label="Your Phone Number"
          required
          className="contact__input"
          id={id}
        >
          <Input
            placeholder="+1 (000)-000-0000"
            component={IMaskInput}
            mask="+1 (000) 000-0000"
            id={id}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            onBlur={validatePhone}
          />
          {phoneError && <div className="contact__error">{phoneError}</div>}
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
          onBlur={validateIssue}
        />
        {issueError && <div className="contact__error">{issueError}</div>}
        <Button color="orange" size="lg" uppercase type="submit" className="contact__button">
          Submit
        </Button>
      </form>
      <Alert
        title="Error"
        color="red"
        radius="md"
        variant="filled"
        className={`contact__alert ${showError ? 'visible' : ''}`}
      >
        {error.message}
      </Alert>
    </div>
  );
}
