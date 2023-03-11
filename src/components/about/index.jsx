import React from 'react';
import { Image } from '@mantine/core';

export default function About() {
  return (
    <div className='about'>
      <div className='about__image-column'>
        <Image
          width={600}
          height={600}
          src={null}
          alt="Owner_Image"
          withPlaceholder
        />
      </div>
      <div className='about__text-column'>
        <h2>About the Owner</h2>
        <div className='about__text-area'>
          <p className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}
