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
          Contact SpiceTown!
        </Button>
      </div>
      <div className='repairs__text-area'>
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>SET UP</p>
            <p className='repairs__price'>$75</p>
          </div>
          <p className='repairs__text'>Includes any necessary neck adjustment, string height adjustment, fretboard cleaning, tightening of hardware, pickup height adjustment, intonation, polishing, and any other general maintenance</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>FLOYD ROSE/12-STRING/ARCHTOP</p>
            <p className='repairs__price'>$90</p>
          </div>
          <p className='repairs__text'>Set ups on these instruments require additional care to insure proper functionality of hardware</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>ELECTRONIC REPAIRS</p>
            <p className='repairs__price'>$30/hr</p>
          </div>
          <p className='repairs__text'>Replacement/Repair of electronic components, pickup installation, resoldering etc.</p>
          <p className='repairs__disclaim'>*repair rates do not include price of materials</p>
        </div>
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>SADDLES</p>
            <p className='repairs__price'>$150</p>
          </div>
          <div className='repairs__header-box'>
            <p className='repairs__header'>NUTS</p>
            <p className='repairs__price'>$175</p>
          </div>
          <p className='repairs__text'>Custom fit bone nut and saddle will improve tonality and playability. Made from unbleached or bleached cow bone.</p>
          <p className='repairs__text'>*includes set up</p>
          <p className='repairs__disclaim'>*repair rates do not include price of materials</p>
        </div>
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>STRUCTURAL REPAIRS</p>
          </div>
          <p className='repairs__text'>Repairs of this nature are necessary to restore structural integrity of instrument, diagnosed on a case by case basis</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>BASIC BRIDGE REMOVAL AND REGLUE</p>
            <p className='repairs__price'>$250</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__text'>With touch up</p>
            <p className='repairs__price-small'>$300</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__title'>BASIC NECK RESET</p>
            <p className='repairs__price'>$450</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__text'>With touch up</p>
            <p className='repairs__price-small'>$500</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__title'>BASIC HEAD STOCK REGLUE</p>
            <p className='repairs__price'>$200</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__text'>With touch up</p>
            <p className='repairs__price-small'>$300</p>
          </div>
          <p className='repairs__disclaim'>*repair rates do not include price of materials</p>
        </div>
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>FRETWORK</p>
            <p className='repairs__price'>$350</p>
          </div>
          <p className='repairs__text'>Removal of frets, fretboard planing and installation of new frets, with level, crown, and fret polishing. Includes set up</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>REFRET WITH BOUND, MAPLE, or EBONY BOARD</p>
            <p className='repairs__price'>$425</p>
          </div>
          <p className='repairs__text'>Greater care must be taken to preserve the cosmetics of these fretboards</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>FRET LEVEL AND CROWN</p>
            <p className='repairs__price'>$150</p>
          </div>
          <p className='repairs__text'>Minimize fret wear and optimize clarity. Includes set up</p>
          <div className='repairs__header-box'>
            <p className='repairs__header'>OTHER</p>
            <p className='repairs__price-long'>$50 for 1st hr, $30 every hour after</p>
          </div>
          <p className='repairs__text'>Crack and bracing repairs, hardware installation, custom hardware, etc.</p>
          <p className='repairs__text'>*$30 diagnosis deposit, will go towards final cost</p>
          <p className='repairs__disclaim'>*repair rates do not include price of materials</p>
        </div>
      </div>
    </div>
  )
}
