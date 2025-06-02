'use client'
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';


export default function HeroSection(){
 
  return( 
    <div id='about' className='HeroSection'>

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
        Hello, I'm Oduor Joseph Owang
      </h1>
    
        <p>A Full Stack Developer skilled in Frontend technologies like Javascript Framework; React, Next Js with Typescript.<br/>
           On the backend, I utilize Django, Laravel And Node Js.
        
       </p>

       <a className='btn' href="#projects">VIEW WORK</a>

    </div>
    </div>
    )
}
