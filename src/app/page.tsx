import React from 'react';
import HeroSection from 'components/HeroSection/HeroSection';
import Languages from 'components/Languages/Lang';
import Project from 'components/Project/project';
import Contact from 'components/Contact/contact';
import Services from 'components/Services/services'

export default function HomePage(){
    return(
        <main>
          <HeroSection />  
          <Languages />
          <Project />
          <Services/>
          <Contact/>
        </main>
    )
}