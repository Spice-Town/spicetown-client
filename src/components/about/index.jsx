import React from 'react';
import { Image } from '@mantine/core';

export default function About() {

  const isMobile = window.matchMedia('(max-width: 952px)').matches;

  let height;

  if (isMobile) {
    height = 400;
  } else {
    height = 900;
  }

  return (
    <div className='about'>
      <div className='about__image-column'>
        <div className='about__image'>
        <Image
          height={height}
          src='https://res.cloudinary.com/dpzpnyfv2/image/upload/v1691268782/assets/new-shane-pic_ooobki.jpg'
          alt="Owner_Image"
          fit='contain'
          withPlaceholder
        />
        </div>
      </div>
      <div className='about__text-column'>
        <h2 className='about__text-title' >ABOUT SPICETOWN GUITARS</h2>
        <div className='about__text-area'>
          <p className='about__text'>Shane Colin Morris is a Chicago based luthier that specializes in structural repair and maintenance of stringed instruments. He is         currently working independently as a repair technician while pursuing acoustic and electric guitar making as a craft. His passion for instruments lies within the art of the creative process both visually and sonically.<br />
            <br />
            He began his journey in 2016 working at A Sound Education in Brookfield doing minor repair work. As his interest grew, he moved on to the Chicago School of Guitar Making in 2020 where he studied for two years. He then spent a year working as a harp repair technician at Lyon and Healy Harps. <br />
            <br />
            Shane graduated from Columbia College Chicago in 2020 with a Bachelor of Arts in Music focusing in instrumental performance and jazz studies. When he is not working on instruments, Shane writes and performs in local Chicago band, LLO LLO. His affinity for music transfers into his guitar building and repair work, making sure your instrument is at its highest level of performance.</p>
        </div>
      </div>
    </div>
  );
}
