import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  { num: '01', name: "Pose d'Ongles", sub: 'Full Set & Remplissage',  img: '/images/nails4.jpg' },
  { num: '02', name: 'Manucure',       sub: 'Gel & Régulier',          img: '/images/nails1.jpg' },
  { num: '03', name: 'Pédicure',       sub: 'Gel & Régulier',          img: '/images/nails9.jpg' },
  { num: '04', name: 'Épilation',      sub: 'Cire Complète',           img: '/images/nails6.jpg' },
];

export const VogueServicesTeaser = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="vg-services" id="services">
      <div className="vg-services-inner">
        {/* Header */}
        <motion.div
          className="vg-services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="vg-label">Menu</span>
          <h2 className="vg-section-title">Services</h2>
        </motion.div>

        {/* Numbered list + hover image */}
        <div className="vg-services-layout">
          <ul className="vg-service-list">
            {services.map((s, i) => (
              <motion.li
                key={s.num}
                className={`vg-service-row ${hovered === i ? 'vg-service-row-active' : ''}`}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="vg-svc-num">{s.num}</span>
                <div className="vg-svc-text">
                  <span className="vg-svc-name">{s.name}</span>
                  <span className="vg-svc-sub">{s.sub}</span>
                </div>
                <span className="vg-svc-arrow">→</span>
              </motion.li>
            ))}
          </ul>

          {/* Floating preview image on hover */}
          <div className="vg-services-preview">
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.img
                  key={services[hovered].img}
                  src={services[hovered].img}
                  alt={services[hovered].name}
                  className="vg-preview-img"
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </AnimatePresence>
            {hovered === null && (
              <div className="vg-preview-placeholder">
                <span>Survolez un service</span>
              </div>
            )}
          </div>
        </div>

        <motion.div
          className="vg-services-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/services" className="vg-btn-primary">
            Voir Tous les Prix →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
