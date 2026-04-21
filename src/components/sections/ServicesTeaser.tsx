import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const highlights = [
  {
    img:   '/images/nails5.webp',
    name:  "Pose d'Ongles",
    label: 'Full Set & Refills',
  },
  {
    img:   '/images/nails1.jpg',
    name:  'Manucure',
    label: 'Gel & Régulier',
  },
  {
    img:   '/images/nails.jpg',
    name:  'Pédicure',
    label: 'Gel & Régulier',
  },
  {
    img:   '/images/nails9.jpg',
    name:  'Épilation',
    label: 'Cire Complète',
  },
];

export const ServicesTeaser = () => {
  return (
    <section className="services" id="services">
      <motion.div
        className="header-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="section-label">What We Offer</span>
        <h2>Our Services</h2>
        <p>From nail art to waxing, we have everything you need.</p>
      </motion.div>

      {/* Circle cards */}
      <div className="services-grid">
        {highlights.map((s, i) => (
          <motion.div
            key={s.name}
            className="service-circle-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              duration: 0.55,
              delay: i * 0.1,
              type: 'spring',
              stiffness: 90,
            }}
          >
            <div className="service-circle-img">
              <img src={s.img} alt={s.name} />
            </div>
            <span className="service-circle-name">{s.name}</span>
            <span className="service-circle-label">{s.label}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA to full services page */}
      <motion.div
        className="services-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link to="/services" className="btn">
          View Full Menu &amp; Prices →
        </Link>
      </motion.div>
    </section>
  );
};
