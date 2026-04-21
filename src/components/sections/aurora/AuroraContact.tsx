import { motion } from 'framer-motion';

const details = [
  { icon: '📍', label: 'Adresse',   value: '5999 Av de Monkland\nMontréal, QC H4A 1H1' },
  { icon: '📞', label: 'Téléphone', value: '(514) 000-0000' },
  { icon: '✉️', label: 'Email',     value: 'hadilnails@gmail.com' },
  { icon: '🕐', label: 'Horaires',  value: 'Lun–Sam : 9h – 19h\nDim : 10h – 17h' },
];

export const AuroraContact = () => (
  <section className="ar-contact" id="contact">
    <div className="ar-section-orb ar-section-orb-left" />

    <motion.div
      className="ar-contact-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="ar-eyebrow">✦ Nous Trouver</span>
      <h2 className="ar-section-title">Contact</h2>
    </motion.div>

    <div className="ar-contact-inner">
      {/* Glass info cards */}
      <div className="ar-contact-cards">
        {details.map((d, i) => (
          <motion.div
            key={d.label}
            className="ar-contact-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <span className="ar-contact-icon">{d.icon}</span>
            <span className="ar-contact-label">{d.label}</span>
            <p className="ar-contact-value">{d.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Map with glass overlay */}
      <motion.div
        className="ar-map-wrap"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ar-map-glass">
          <iframe
            title="HadilNails location"
            src="https://maps.google.com/maps?q=5999+Av+de+Monkland,+Montr%C3%A9al,+QC+H4A+1H1&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </motion.div>
    </div>
  </section>
);
