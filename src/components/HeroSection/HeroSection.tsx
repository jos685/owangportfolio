'use client'
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection(){
 
  return( 
    <div className='HeroSection'>

    <div className='hero-Icons'>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
    </div>
    
    <div className='Welcome'>
      <h1>
        Hello, Am Joseph Oduor Owang
      </h1>
    
        <p>A Full Stack Developer with skills in Frontend Using Javascript Framework; React, Next Js with Typescript.<br/>
           On the BAckend, I utilise Django, Laravel And Node Js. I love building problem solving applications and websites.
        
       </p>
          <button className='btn'>
            VIEW WORK
          </button>
    </div>
    </div>
    )
}
