import React from 'react';
import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { setActive } from '../../store/reducers/activeSlice';
import { useNavigate } from 'react-router-dom';

export default function Repairs() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavClick = (value) => {
    dispatch(setActive(value));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/' + value);
  };

  return (
    <div className='repairs'>
  <div className='repairs__button'>
    <Button
      color='orange'
      size='xl'
      uppercase
      onClick={() => handleNavClick('contact')}
    >
      Contact Spice Town!
    </Button>
  </div>
  <div className='repairs__text-area'>
    <div className='repairs__text-box'>
      <div className='repairs__header-box'>
        <p className='repairs__header'>Setup</p>
        <p className='repairs__price'>$75</p>
      </div>
      <p className='repairs__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
      <div className='repairs__title-box'>
        <p className='repairs__title'>Floyd Rose</p>
        <p className='repairs__price'>+$15</p>
      </div>
      <p className='repairs__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className='repairs__disclaim'>*repair rates do not include price of materials</p>
    </div>
    <div className='repairs__text-box'></div>
    <div className='repairs__text-box'></div>
    <div className='repairs__text-box'></div>
  </div>
</div>

  )
}
