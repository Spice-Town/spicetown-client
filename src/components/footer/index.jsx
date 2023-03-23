import React from 'react'
import img from '../../../public/logo.png';



export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__svg'>
        <a href="https://www.instagram.com/spicetownguitars/" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" /></svg>
        </a>
      </div>
      <div className='footer__svg'>
        <a href="https://www.facebook.com/spicetownguitars" target="_blank" rel="noopener noreferrer">
          <svg clipRule="evenodd" fillRule="evenodd" height="50" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 7600 7600" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M6175 0H1425C638 0 0 638 0 1425v4750c0 787 638 1425 1425 1425h4750c787 0 1425-638 1425-1425V1425C7600 638 6962 0 6175 0zm-193 4093h-711v2632H4083V4093h-461v-887h461v-565c0-740 308-1180 1180-1180h884v883h-514c-340 0-362 127-362 363l-1 498h808l-97 887z" /></svg>
        </a>
      </div>
      <div className='footer__text'>
        <p>
          ©2023 Copyright Spice Town
        </p>
        <p>All rights reserved.</p>
      </div>
      <div className='footer__logo'>
      <img src={img} alt="Example" style={{height: "60px", width: "60px"}} />
      </div>
      <div className='footer__button'>
      </div>
    </div>
  )
}
