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

        {/* BOX 1 - SET UP + ELECTRONIC REPAIRS */}
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>SET UP</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__title'>ELECTRIC/ACOUSTIC/BASS</p>
            <p className='repairs__price'>$80</p>
          </div>
          <p className='repairs__text'>Includes any necessary truss rod adjustment, string height adjustment, fretboard cleaning, tightening of hardware, pickup height adjustment, intonation, polishing, and other general maintenance practices.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>FLOYD ROSE/12-STRING/ARCHTOP/MANDOLIN/BANJO/OTHER</p>
            <p className='repairs__price'>$100</p>
          </div>
          <p className='repairs__text'>Performing a set up on a member of this list of instrument styles requires additional care to ensure proper functionality for various reasons.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>RESTRING</p>
            <p className='repairs__price'>$40</p>
          </div>
          <p className='repairs__text'>Includes basic restringing, tightening of hardware, polishing of fretboard, and general cleaning of the instrument.</p>
          <div className='repairs__header-box'>
            <p className='repairs__header'>ELECTRONIC REPAIRS</p>
          </div>
          <p className='repairs__text'>Pickup Replacement — $30 per pickup</p>
          <p className='repairs__text'>Replacement/troubleshoot other electronic components, resoldering, circuit building etc. — $40 for first hour, $30/hr thereafter</p>
          <p className='repairs__disclaim'>*Repair rates do not include price of materials.</p>
        </div>

        {/* BOX 2 - SADDLES, NUTS & FRETWORK */}
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>SADDLES</p>
            <p className='repairs__price'>$160</p>
          </div>
          <div className='repairs__header-box'>
            <p className='repairs__header'>NUTS</p>
            <p className='repairs__price'>$180</p>
          </div>
          <p className='repairs__text'>Custom fit bone nut and saddle will improve tonality and playability. Made from unbleached or bleached cow bone. Includes set up.</p>
          <div className='repairs__header-box'>
            <p className='repairs__header'>FRETWORK</p>
            <p className='repairs__price'>$360</p>
          </div>
          <p className='repairs__text'>Removal of frets, fretboard planing and installation of new frets, with level, crown, and fret polishing. Includes set up.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>REFRET WITH BOUND, MAPLE, or EBONY BOARD</p>
            <p className='repairs__price'>$440</p>
          </div>
          <p className='repairs__text'>Greater care must be taken to preserve the cosmetics of these fretboards.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>FRET LEVEL AND CROWN</p>
            <p className='repairs__price'>$160</p>
          </div>
          <p className='repairs__text'>Minimize fret wear and optimize clarity. Includes set up.</p>
          <p className='repairs__disclaim'>*Repair rates do not include price of materials.</p>
        </div>

        {/* BOX 3 - STRUCTURAL REPAIRS */}
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>STRUCTURAL REPAIRS</p>
          </div>
          <p className='repairs__text'>Repairs of this nature are necessary to restore structural integrity to an instrument, and are diagnosed on a case by case basis. Feel free to include pictures in an email or text and we can discuss specifics. Here are a few general services I offer. Touch up is outsourced and available upon request.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>BRIDGE REMOVAL AND REGLUE</p>
            <p className='repairs__price'>$260</p>
          </div>
          <p className='repairs__text'>Necessary when the bridge of an acoustic guitar is lifting. Often helps to minimize a belly on the top. Includes set up.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>HEAD STOCK REGLUE</p>
            <p className='repairs__price'>$260</p>
          </div>
          <p className='repairs__text'>Usually unable to feel the seam. Varying amounts of war wounds depending on the severity of the break and type of finish. Includes set up.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>NECK RESET</p>
            <p className='repairs__price'>$460</p>
          </div>
          <p className='repairs__text'>Necessary if the neck angle is improper relative to the top and bridge, or if the neck joint comes loose. Allows for more proper string height. Includes set up.</p>
          <p className='repairs__disclaim'>*Repair rates do not include price of materials.</p>
        </div>

        {/* BOX 4 - OTHER + COMMISSIONS */}
        <div className='repairs__text-box'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>OTHER</p>
          </div>
          <p className='repairs__text'>Crack and bracing repairs, hardware installation, custom hardware, odd jobs etc. $40 for first hour, $30/hr thereafter</p>
          <p className='repairs__text'>Repairs of this nature fall outside of the scope of my general services. Restoration projects and partscasters are often billed under this category. Set ups are usually billed separately from the cost of these services.</p>
          <div className='repairs__title-box'>
            <p className='repairs__title'>Rush Fee</p>
            <p className='repairs__price'>$20–$50/repair</p>
          </div>
          <p className='repairs__text'>Payment is expected upfront in this case. Price varies depending on the timeline and complexity of the repair.</p>
          <div className='repairs__header-box'>
            <p className='repairs__header'>Commissions</p>
          </div>
          <div className='repairs__title-box'>
            <p className='repairs__title'>CUSTOM BUILT GUITAR</p>
            <p className='repairs__price'>$1,250+</p>
          </div>
          <p className='repairs__text'>Designed and built by hand from scratch. Electric or acoustic, big or small, loud or quiet, short or tall. Let's dream big. This is an opportunity for me to work with you as a musician directly to design something unique to you and your playing style only. Custom one offs, never to be made again. $500 deposit expected upon approval of design. Final payment expected upon pick up or delivery. Price varies depending on cost of materials and complexity of build. 4–8 months timeline.</p>
          <p className='repairs__disclaim'>*Repair rates do not include price of materials.</p>
        </div>

        {/* BOX 5 - NOTES (full width) */}
        <div className='repairs__text-box repairs__text-box--full'>
          <div className='repairs__header-box'>
            <p className='repairs__header'>NOTES</p>
          </div>
          <p className='repairs__text'>Repair rates do not include the cost of materials.</p>
          <p className='repairs__text'>Repair work is appointment based. Text Shane at 708-205-8113 or fill out the contact form on this website to schedule.</p>
          <p className='repairs__text'>Timeline on set ups and minor repair work is usually 1–2 weeks (often less).</p>
          <p className='repairs__text'>Timelines on any other repair can vary from 2 weeks to 2 months or more for intense structural repairs or complicated custom work.</p>
          <p className='repairs__text'><strong>PAYMENT IS EXPECTED UPON PICKUP UNLESS OTHERWISE DISCUSSED!</strong></p>
          <p className='repairs__text'>Feel free to contact me with any other questions or concerns.</p>
        </div>

      </div>
    </div>
  );
}