'use client'
import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus ] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    if (form.current){
      emailjs.sendForm(
        'service_xq5c65a',  // service id
        'template_rzryxxh',// template id
        form.current,
        'ZevJhQLmgRc0W-eel' //public_key
      ).then (() => {
        setStatus('sent');
        form.current?.reset();
      }, (error) => {
        console.error(error.text);
        setStatus('error');
      });
    }
  };

  return (
    <div  id= 'contact' className={styles.contactContainer}>
      <h1 className={styles.h1}>Contact Me</h1>
      <p className={styles.p}>If you'd like to work together or have any questions, feel free to reach out!</p>

      <form
        ref={form}
        onSubmit={sendEmail}
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

        <button type="submit" className={styles.submitButton} disabled={status==='sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          
        {status === 'sent' && <p className={styles.successMessage}>✅ Message sent successfully!</p>}
        {status === 'error' && <p className={styles.errorMessage}>❌ Failed to send. Try again later.</p>}
      </form>

      <div className={styles.socials}>
        <p>Or connect with me:</p>
        <a href="https://github.com/jos685" target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
        <a href="https://www.linkedin.com/in/joseph-owang254" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
        <a href="mailto:odourjosephowang@gmail.com">Email</a>
      </div>
    </div>
  );
};

export default Contact;
