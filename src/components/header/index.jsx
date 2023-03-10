import React, { useState } from 'react'
import { Image, NavLink } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [active, setActive] = useState(0);

  const navigate = useNavigate();

  const handleNavClick = (value) => {
    setActive(value);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (value === 'home') {
      value = '';
    }
    navigate('/' + value);
  }


  return (
    <div className='header'>
      <Image
        src='../../../spicetown.png'
        fit='contain'
        height={125}
        width={300}
        onClick={() => handleNavClick('home')}
      />
      <div className='header__link-group'>
        <NavLink
          active={'repairs' === active}
          label={'Repairs'}
          onClick={() => handleNavClick('repairs')}
          color="orange"
        />
        <NavLink
          active={'gallery' === active}
          label={'Gallery'}
          onClick={() => handleNavClick('gallery')}
          color="orange"
        />
        <NavLink
          active={'about' === active}
          label={'About'}
          onClick={() => handleNavClick('about')}
          color="orange"
        />
        <NavLink
          active={'contact' === active}
          label={'Contact'}
          onClick={() => handleNavClick('contact')}
          color="orange"
        />
      </div>
    </div>
  )
}
