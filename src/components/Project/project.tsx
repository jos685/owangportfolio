import React from 'react';
import Link from 'next/link';
import styles from '../../styles/project.module.css';

export default function Projects() {
    return (
        
            <main>
      <h1 className={styles.title}>Projects</h1>

                <div className={styles.projects}>
                   <div className={styles.project_card}>
                      <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                     <img src="/project/Ecommerce.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                      </a>
                        <h3>E-commerce Website</h3>
                              <p>A responsive Next Js site with Python Django .</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>

                     <div className={styles.project_card}>
                      <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                     <img src="/project/Healthcare.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                      </a>
                        <h3>Healthcare Service</h3>
                              <p>A Business Healthcare service utilising React Js</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>

                     <div className={styles.project_card}>
                      <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                     <img src="/project/smart.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                      </a>
                        <h3>Smart Farming Website</h3>
                              <p>A responsive Next Js site with PHP .</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>
                  </div>

              </main>
       
    )
}