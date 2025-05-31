import React from 'react';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.h1}>Contact Me</h1>
      <p className={styles.p}>If you'd like to work together or have any questions, feel free to reach out!</p>

      <form
        action="mailto:odourjosephowang@gmail.com"
        method="POST"
        encType="text/plain"
        className={styles.contactForm}
      >
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name:</label>
          <input className={styles.input} type="text" id="name" name="name" required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input className={styles.input} type="email" id="email" name="email" required />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message:</label>
          <textarea className={styles.textarea} id="message" name="message" rows={5} required />
        </div>

        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>

      <div className={styles.socials}>
        <p>Or connect with me:</p>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </div>
  );
};

export default Contact;
