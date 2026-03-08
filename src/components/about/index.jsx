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
        <h2 className='about__text-title'>ABOUT SPICETOWN GUITARS</h2>
        <div className='about__text-area'>
          <p className='about__text'>
            Shane Colin Morris is a Chicago based luthier that specializes in general maintenance and structural repair of stringed instruments. He is currently working independently as a repair technician while pursuing acoustic and electric guitar making as a craft. In addition to running his shop, Shane works as a freelance carpenter and a touring guitar technician for the band American Football.
            <br /><br />
            He began his journey in 2016 working at A Sound Education in Brookfield doing minor repair work. As his interest grew, he moved on to the Chicago School of Guitar Making in 2020 where he studied and worked for two years. In 2022, Shane started working with his own clients while also expanding his skill set working in fabrication shops like Jason Lewis Furniture, Lyon & Healy Harps, and ERDEN's metal shop.
            <br /><br />
            Shane graduated from Columbia College Chicago in 2020 with a Bachelor of Arts in Music focusing in instrumental performance and jazz studies. When he is not working on instruments, Shane writes and performs in various Chicago based bands including Seasons, Chaepter, Stumble, Wild Trout, and Doc Mino. His affinity for playing guitar transfers into his building and repair work, making sure your instrument is catered to your needs as a player and is always at its highest level of performance.
          </p>
        </div>
      </div>
    </div>
  );
}