import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Input } from '@mantine/core';

export default function SignIn({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (password === import.meta.env.VITE_PASSWORD) {
      onLogin(true);
      navigate('/upload');
    } else {
      setError('Incorrect password');
    }
  };
  
  return (
    <div className='signIn'>
      <h2 className='signIn__title'>Enter Password</h2>
      <Input type="password" className='signIn__input' value={password} onChange={handlePasswordChange} />
      <Button className='signIn__button' onClick={handleLogin}>Log In</Button>
      {error && <div>{error}</div>}
    </div>
  );
}
