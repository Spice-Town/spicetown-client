import React, { useState } from 'react';
import { Image, NavLink, Burger, Drawer } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { setActive } from '../../store/reducers/activeSlice';
import { useNavigate } from 'react-router-dom';

export default function Header({ loggedIn }) {
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
        <div className='header__logo'>
          <Image
            src='../../../spicetown.png'
            fit='contain'
            height={height}
            width={width}
            onClick={() => handleNavClick('home')}
          />
        </div>
        <div className='header__link-group'>
          {loggedIn && (
            <NavLink
              active={'upload' === active}
              label={'UPLOAD'}
              onClick={() => handleNavClick('upload')}
              color='orange'
            />
          )}
          <NavLink
            active={'repairs' === active}
            label={'REPAIRS'}
            onClick={() => handleNavClick('repairs')}
            color='orange'
          />
          <NavLink
            active={'gallery' === active}
            label={'GALLERY'}
            onClick={() => handleNavClick('gallery')}
            color='orange'
          />
          <NavLink
            active={'about' === active}
            label={'ABOUT'}
            onClick={() => handleNavClick('about')}
            color='orange'
          />
          <NavLink
            active={'contact' === active}
            label={'CONTACT'}
            onClick={() => handleNavClick('contact')}
            color='orange'
          />
        </div>
        <Burger
          opened={opened}
          onClick={() => setOpened(true)}
          size="xl"
          className="header__burger"
        />
        <Drawer
          opened={opened}
          onClose={() => setOpened(false)}
          title="SPICETOWN"
          padding="xl"
          size="sm"
          position="right"
        >
          <div>
          {loggedIn && (
            <NavLink
              active={'upload' === active}
              label={'UPLOAD'}
              onClick={() => {
                setOpened(false);
                handleNavClick('upload');
              }}
              color='orange'
            />
          )}
            <NavLink
              active={'repairs' === active}
              label={'REPAIRS'}
              onClick={() => {
                handleNavClick('repairs');
                setOpened(false);
              }}
              color='orange'
            />
            <NavLink
              active={'gallery' === active}
              label={'GALLERY'}
              onClick={() => {
                handleNavClick('gallery');
                setOpened(false)
              }}
              color='orange'
            />
            <NavLink
              active={'about' === active}
              label={'ABOUT'}
              onClick={() => {
                handleNavClick('about')
                setOpened(false)
              }}
              color='orange'
            />
            <NavLink
              active={'contact' === active}
              label={'CONTACT'}
              onClick={() => {
                handleNavClick('contact');
                setOpened(false)
              }}
              color='orange'
            />
          </div>
        </Drawer>
      </>
    </div>
  );
}
