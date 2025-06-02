import React from 'react';
import styles from '../../styles/project.module.css';

export default function Projects() {
    return (
            <main>
      <h1 className={styles.title}>Projects</h1>

                <div id='projects' className={styles.projects}>
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

                     <div className={styles.project_card}>
                       <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                       <img src="/project/wifi.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                       </a>
                        <h3>Wifi Payment System</h3>
                              <p>A responsive Next Js site with PHP .</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>

                     <div className={styles.project_card}>
                       <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                       <img src="/project/chat.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                       </a>
                        <h3>Online Chart/Discussion Room</h3>
                              <p>A chart Room that allows multiple users to join with an admin who can add/ remove / or even flag messages.</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>

                     <div className={styles.project_card}>
                       <a href="https://yourprojecturl.com" target="_blank" rel="noopener noreferrer">
                       <img src="/project/betting.jpg" alt="Project 1 Screenshot" className={styles.project_image} />
                       </a>
                        <h3>Betika Clone</h3>
                              <p>A Betting Site that allows one to place a bet on matches and even follow up.</p>
                                  <div className={styles.links}>
                                 <a href="https://yourprojecturl.com" target="_blank">Live</a>
                                <a href="https://github.com/yourrepo" target="_blank">GitHub</a>
                                 </div>
                     </div>
                  </div>

              </main>
       
    )
}