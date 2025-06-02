import React from 'react';
import styles from './services.module.css';

const services = [
  {
    title: 'Web Design',
    description: 'Responsive and modern UI designs tailored for user engagement and performance.',
  },
  {
    title: 'Frontend Development',
    description: 'Interactive and performant websites using React, Next.js, and TypeScript.',
  },
  {
    title: 'Backend Integration',
    description: 'Robust backend logic using Django, Node.js, and secure API development.',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Custom online store setups with cart, checkout, and admin dashboards.',
  },
  {
    title: 'Mobile Apps Design',
    description: 'Developing Mobiles Apps using Flutter and React native.',
  },
  {
    title: 'Payment Intergration into Apps And Websites',
    description: 'Intergrating Payment Methods into Websites and Apps; Mpesa, Paypal, Airtel Money.',
  },
  {
    title: 'Google Map & Business Setup',
    description: 'Setting up Google Business Account showcasing your Business Location.',
  },
  {
    title: 'UI/UX Consultation',
    description: 'Audit and improve product design for better usability and conversion.',
  },
];

const Services = () => {
  return (
    <section className={styles.servicesSection} id="services">
      <h2 className={styles.title}>What I Do</h2>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.service_title}>{service.title}</h3>
            <p className={styles.service_des}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
