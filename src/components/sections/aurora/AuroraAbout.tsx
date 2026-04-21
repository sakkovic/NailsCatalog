import { motion } from 'framer-motion';

const stats = [
  { num: '500+', label: 'Clients satisfaites', icon: '💅' },
  { num: '8+',   label: "Années d'expérience", icon: '✨' },
  { num: '4',    label: 'Spécialistes',         icon: '🌸' },
];

export const AuroraAbout = () => (
  <section className="ar-about" id="about">
    {/* Orb decoration */}
    <div className="ar-section-orb ar-section-orb-left" />

    <div className="ar-about-inner">
      {/* Image in glass frame */}
      <motion.div
        className="ar-about-img-wrap"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="ar-img-frame">
          <img src="/images/nails1.jpg" alt="HadilNails" className="ar-about-img" />
          <div className="ar-img-glow" />
        </div>
      </motion.div>

      {/* Text */}
      <div className="ar-about-text">
        <motion.span
          className="ar-eyebrow"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ✦ Notre Histoire
        </motion.span>

        <motion.h2
          className="ar-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          L'art au bout<br />des doigts
        </motion.h2>

        <motion.p
          className="ar-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fondé à Montréal par Hadil, notre salon est un espace dédié à la beauté précise et à l'élégance naturelle.
          Chaque prestation est réalisée avec soin, en utilisant des produits premium pour des résultats durables.
        </motion.p>

        {/* Glass stat cards */}
        <div className="ar-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              className="ar-stat-card"
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <span className="ar-stat-icon">{s.icon}</span>
              <span className="ar-stat-num">{s.num}</span>
              <span className="ar-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
