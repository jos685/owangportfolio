'use client'
import React from 'react';
import { FaTwitter, FaYoutube, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import styles from './HeroSection.module.css'
import { BsTwitterX } from 'react-icons/bs';


export default function HeroSection(){
 
  return( 
    <div id='about' className={styles.HeroSection}>

    <div className={styles.hero_Icons}>
  
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <BsTwitterX/>
      </a>
      <a href="https://www.linkedin.com/in/joseph-owang254" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/jos685" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.youtube.com/@josephowang7639" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>

      <a href="https://www.youtube.com/@josephowang7639" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
    
    <div className={styles.Welcome}>
      <h1>
        Hello, I'm Oduor Joseph Owang
      </h1>
    
        <p>A Full Stack Developer skilled in Frontend technologies like Javascript Framework; React, Next Js with Typescript.<br/>
           On the backend, I utilize Django, Laravel And Node Js.
        
       </p>

       <a className={styles.btn} href="#projects">VIEW WORK</a>

    </div>
    </div>
    )
}
