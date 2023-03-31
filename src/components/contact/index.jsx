import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Checkbox, Input, Textarea, Select } from '@mantine/core';
import { useId } from '@mantine/hooks';
import { IMaskInput } from 'react-imask';

export default function Contact() {
  const [name, setName] = useState('');
  const [contactMethod, setContactMethod] = useState('phone');
  const [input, setInput] = useState('');
  const [issue, setIssue] = useState('');
  const [setupMaintenance, setSetupMaintenance] = useState(false);
  const [nutSaddle, setNutSaddle] = useState(false);
  const [fretwork, setFretwork] = useState(false);
  const [structuralRepair, setStructuralRepair] = useState(false);
  const [generalDiagnosis, setGeneralDiagnosis] = useState(false);
  const [other, setOther] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [inputError, setInputError] = useState('');
  const [disabled, setDisabled] = useState(false);

  const id = useId();

  const validateName = () => {
    if (name.trim().length === 0) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateInput = () => {
    if (contactMethod === 'phone') {
      if (!/^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(input)) {
        setInputError('Please enter a valid phone number in the format +1 (xxx) xxx-xxxx');
      } else {
        setInputError('');
      }
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(input)) {
        setInputError('Please enter a valid email address');
      } else {
        setInputError('');
      }
    }
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateName();
    validateInput();
    if (nameError !== '' || inputError !== '') {
      return;
    }


    // `${import.meta.env.VITE_SERVER}/mail`   ---- Deployed

    // http://localhost:3001/mail' ---- local

    const data = {
      name,
      input,
      issue,
      contactMethod,
      checks: {
        setupMaintenance,
        nutSaddle,
        fretwork,
        structuralRepair,
        generalDiagnosis,
        other
      }
    };

    setDisabled(true)
;
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/mail`, data);
      setName('');
      setInput('');
      setIssue('');
      setShowAlert(true);
      setShowError(false);
      setTimeout(() => {
        setShowAlert(false);
        setDisabled(false);
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
        {`Your repair request has been sent, you will receive a ${contactMethod} from us soon.`}
      </Alert>
      <h2>CONTACT FORM</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <h3>Your Name *</h3>
        <Input.Wrapper
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
        <h3>Contact Method *</h3>
        <Select
          className="contact__input"
          data={[
            { value: 'phone', label: 'Phone' },
            { value: 'email', label: 'Email' },
          ]}
          value={contactMethod}
          onChange={(value) => setContactMethod(value)}
        />
<h3>{contactMethod === 'phone' ? 'Your Phone Number *' : 'Your Email *'}</h3>
<Input.Wrapper
  required
  className="contact__input"
  id={id}
>
  {contactMethod === 'phone' ? (
    <Input
      placeholder="+1 (000)-000-0000"
      component={IMaskInput}
      mask="+1 (000) 000-0000"
      id={id}
      value={input}
      onChange={(event) => setInput(event.target.value)}
      onBlur={validateInput}
    />
  ) : (
    <Input
      type="email"
      placeholder="email@example.com"
      value={input}
      onChange={(event) => setInput(event.target.value)}
      onBlur={validateInput}
    />
  )}
  {inputError && <div className="contact__error">{inputError}</div>}
</Input.Wrapper>

        <h3>Description of Issue</h3>
        <Textarea
          placeholder="Setup needed, replace tuners and strings."
          description="To the best of your ability describe the problem with your instrument"
          radius="md"
          className="contact__input"
          value={issue}
          onChange={(event) => setIssue(event.target.value)}
        />
        <h3>Which of the following apply to your issue? Check all that apply:</h3>
        <div className='contact__check-area'>
          <div className='contact__check-group'>
            <Checkbox
              className='contact__check-box'
              label="Setup/Maintenance"
              color="orange"
              size="lg"
              onChange={() => setSetupMaintenance(!setupMaintenance)}
            />
            <Checkbox
              className='contact__check-box'
              label="Nut/Saddle"
              color="orange"
              size="lg"
              onChange={() => setNutSaddle(!nutSaddle)}
            />
            <Checkbox
              className='contact__check-box'
              label="Fretwork"
              color="orange"
              size="lg"
              onChange={() => setFretwork(!fretwork)}
            />
          </div>
          <div className='contact__check-group'>
            <Checkbox
              className='contact__check-box'
              label="Structural Repair"
              color="orange"
              size="lg"
              onChange={() => setStructuralRepair(!structuralRepair)}
            />
            <Checkbox
              className='contact__check-box'
              label="General Diagnosis"
              color="orange"
              size="lg"
              onChange={() => setGeneralDiagnosis(!generalDiagnosis)}
            />
            <Checkbox
              className='contact__check-box'
              label="Other"
              color="orange"
              size="lg"
              onChange={() => setOther(!other)}
            />
          </div>
        </div>
        <Button disabled={disabled} color="orange" size="lg" uppercase type="submit" className="contact__button">
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
