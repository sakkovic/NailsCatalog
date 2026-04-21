import React from 'react';
import { motion } from 'framer-motion';

const contactItems = [
  { label: 'Address', icon: '📍', value: '5999 Av de Monkland, Montréal, QC H4A 1H1' },
  { label: 'Phone',   icon: '📞', value: '(514) 555-0192'                             },
  { label: 'Email',   icon: '✉️',  value: 'contact@hadilnails.com'                     },
  { label: 'Hours',   icon: '🕐', value: 'Lun – Ven : 9h – 17h  |  Sam : 9h – 13h'   },
];

export const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="header-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Find Us</span>
        <h2>Visit or Contact Us</h2>
      </motion.div>

      <div className="contact-wrapper">
        <div className="contact-info">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              className="contact-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="contact-icon">{item.icon}</div>
              <div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="map-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe
            title="HadilNails location"
            src="https://maps.google.com/maps?q=5999+Av+de+Monkland,+Montréal,+QC+H4A+1H1&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};
