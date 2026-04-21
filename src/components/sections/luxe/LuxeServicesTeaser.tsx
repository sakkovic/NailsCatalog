import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const panels = [
  { img: '/images/nails4.jpg',  name: "Pose d'Ongles",  desc: 'Full Set & Remplissage',  num: '01' },
  { img: '/images/nails1.jpg',  name: 'Manucure',        desc: 'Gel & Régulier',           num: '02' },
  { img: '/images/nails9.jpg',  name: 'Pédicure',        desc: 'Gel & Régulier',           num: '03' },
  { img: '/images/nails6.jpg',  name: 'Épilation',       desc: 'Cire Complète',            num: '04' },
];

export const LuxeServicesTeaser = () => (
  <section className="lx-services" id="services">
    {/* Section header */}
    <motion.div
      className="lx-services-header"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="lx-eyebrow">Ce Que Nous Offrons</span>
      <h2 className="lx-section-title">Nos Services</h2>
    </motion.div>

    {/* 2×2 panel grid */}
    <div className="lx-panels">
      {panels.map((p, i) => (
        <motion.div
          key={p.num}
          className="lx-panel"
          initial={{ opacity: 0, scale: 0.96, clipPath: 'inset(8% 8% 8% 8%)' }}
          whileInView={{ opacity: 1, scale: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.85, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
        >
          <motion.img
            src={p.img}
            alt={p.name}
            className="lx-panel-img"
            variants={{ hover: { scale: 1.07 } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="lx-panel-overlay" />
          <div className="lx-panel-content">
            <span className="lx-panel-num">{p.num}</span>
            <h3 className="lx-panel-name">{p.name}</h3>
            <span className="lx-panel-desc">{p.desc}</span>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      className="lx-services-cta"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
    >
      <Link to="/services" className="lx-btn-primary">
        Voir Tous les Prix →
      </Link>
    </motion.div>
  </section>
);
