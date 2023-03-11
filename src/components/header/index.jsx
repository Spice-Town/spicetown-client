import React, { useState } from 'react';
import { Image, NavLink, Burger, Drawer} from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../store/reducers/activeSlice';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [opened, setOpened] = useState(false);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.activeSlice.active);
  const navigate = useNavigate();

  const isMobile = window.matchMedia('(max-width: 952px)').matches;

  let height = 125;
  let width = 300;

  if (isMobile) {
    height = 80;
    width = 240;
  }


  const handleNavClick = (value) => {
    dispatch(setActive(value));

    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (value === 'home') {
      value = '';
    }
    navigate('/' + value);
  };

  return (
    <div className='header'>
      <>
      <Image
        src='../../../spicetown.png'
        fit='contain'
        height={height}
        width={width}
        onClick={() => handleNavClick('home')}
      />
      <div className='header__link-group'>
        <NavLink
          active={'repairs' === active}
          label={'Repairs'}
          onClick={() => handleNavClick('repairs')}
          color='orange'
        />
        <NavLink
          active={'gallery' === active}
          label={'Gallery'}
          onClick={() => handleNavClick('gallery')}
          color='orange'
        />
        <NavLink
          active={'about' === active}
          label={'About'}
          onClick={() => handleNavClick('about')}
          color='orange'
        />
        <NavLink
          active={'contact' === active}
          label={'Contact'}
          onClick={() => handleNavClick('contact')}
          color='orange'
        />
      </div>
      <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="xl"
            className="header__burger"
          />
                    <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title="Spice Town"
            padding="xl"
            size="sm"
            position="right"
            overlayOpacity={0.55}
            overlayBlur={3}
          >
                  <div>
        <NavLink
          active={'repairs' === active}
          label={'Repairs'}
          onClick={() => handleNavClick('repairs')}
          color='orange'
        />
        <NavLink
          active={'gallery' === active}
          label={'Gallery'}
          onClick={() => handleNavClick('gallery')}
          color='orange'
        />
        <NavLink
          active={'about' === active}
          label={'About'}
          onClick={() => handleNavClick('about')}
          color='orange'
        />
        <NavLink
          active={'contact' === active}
          label={'Contact'}
          onClick={() => handleNavClick('contact')}
          color='orange'
        />
      </div>
          </Drawer>
      </>
    </div>
  );
}
