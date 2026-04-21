import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { img: '/images/nails4.jpg',  name: "Pose d'Ongles", sub: 'Full Set & Remplissage', icon: '💅', color: 'rgba(200, 80, 192, 0.25)' },
  { img: '/images/nails1.jpg',  name: 'Manucure',       sub: 'Gel & Régulier',         icon: '✨', color: 'rgba(100, 80, 220, 0.25)' },
  { img: '/images/nails9.jpg',  name: 'Pédicure',       sub: 'Gel & Régulier',         icon: '🌸', color: 'rgba(60, 120, 220, 0.25)' },
  { img: '/images/nails6.jpg',  name: 'Épilation',      sub: 'Cire Complète',          icon: '💎', color: 'rgba(180, 60, 180, 0.25)' },
];

export const AuroraServicesTeaser = () => (
  <section className="ar-services" id="services">
    <div className="ar-section-orb ar-section-orb-right" />

    <motion.div
      className="ar-services-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="ar-eyebrow">✦ Ce Que Nous Offrons</span>
      <h2 className="ar-section-title">Nos Services</h2>
    </motion.div>

    <div className="ar-services-grid">
      {services.map((s, i) => (
        <motion.div
          key={s.name}
          className="ar-service-card"
          style={{ '--ar-card-glow': s.color } as React.CSSProperties}
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8, scale: 1.02 }}
        >
          {/* Top image */}
          <div className="ar-card-img-wrap">
            <img src={s.img} alt={s.name} className="ar-card-img" loading="lazy" />
            <div className="ar-card-img-overlay" />
            <span className="ar-card-icon">{s.icon}</span>
          </div>
          {/* Text */}
          <div className="ar-card-body">
            <h3 className="ar-card-name">{s.name}</h3>
            <span className="ar-card-sub">{s.sub}</span>
          </div>
          {/* Glow border */}
          <div className="ar-card-glow-border" />
        </motion.div>
      ))}
    </div>

    <motion.div
      className="ar-services-cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
    >
      <Link to="/services" className="ar-btn-primary">
        ✦ Voir Tous les Prix
      </Link>
    </motion.div>
  </section>
);
