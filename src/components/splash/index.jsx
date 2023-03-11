import React from 'react';
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setActive } from '../../store/reducers/activeSlice';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavClick = (value) => {
    dispatch(setActive(value));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/' + value);
  };

  return (
    <div className='splash'>
      <div className='splash__image'>
          <Button
            className='splash__button'
            color='orange'
            size='xl'
            uppercase
            onClick={() => handleNavClick('repairs')}
          >
            Get Fixed Up Now!
          </Button>
      </div>
    </div>
  );
}