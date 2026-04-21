import { motion } from 'framer-motion';

const details = [
  { icon: '📍', label: 'Adresse',     value: '5999 Av de Monkland\nMontréal, QC H4A 1H1' },
  { icon: '📞', label: 'Téléphone',   value: '(514) 000-0000' },
  { icon: '✉️', label: 'Email',       value: 'hadilnails@gmail.com' },
  { icon: '🕐', label: 'Horaires',    value: 'Lun–Sam : 9h – 19h\nDim : 10h – 17h' },
];

export const LuxeContact = () => (
  <section className="lx-contact" id="contact">
    <motion.div
      className="lx-contact-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="lx-eyebrow">Nous Trouver</span>
      <h2 className="lx-section-title">Contact</h2>
    </motion.div>

    <div className="lx-contact-inner">
      {/* Info cards */}
      <div className="lx-contact-details">
        {details.map((d, i) => (
          <motion.div
            key={d.label}
            className="lx-contact-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <span className="lx-contact-icon">{d.icon}</span>
            <div>
              <span className="lx-contact-label">{d.label}</span>
              <p className="lx-contact-value">{d.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Map */}
      <motion.div
        className="lx-map"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
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
      </motion.div>
    </div>
  </section>
);
