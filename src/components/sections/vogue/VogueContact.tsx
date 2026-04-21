import { motion } from 'framer-motion';

const details = [
  { label: 'Adresse',   value: '5999 Av de Monkland\nMontréal, QC H4A 1H1' },
  { label: 'Téléphone', value: '(514) 000-0000' },
  { label: 'Email',     value: 'hadilnails@gmail.com' },
  { label: 'Horaires',  value: 'Lun–Sam : 9h – 19h · Dim : 10h – 17h' },
];

export const VogueContact = () => (
  <section className="vg-contact" id="contact">
    <div className="vg-contact-inner">
      {/* Left: text */}
      <div className="vg-contact-text">
        <motion.span
          className="vg-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nous Trouver
        </motion.span>
        <motion.h2
          className="vg-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Contact
        </motion.h2>

        <div className="vg-contact-details">
          {details.map((d, i) => (
            <motion.div
              key={d.label}
              className="vg-contact-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            >
              <span className="vg-contact-label">{d.label}</span>
              <p className="vg-contact-value">{d.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: map */}
      <motion.div
        className="vg-contact-map"
        initial={{ opacity: 0, x: 50 }}
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
