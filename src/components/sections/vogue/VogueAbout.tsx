import { motion } from 'framer-motion';

const stats = [
  { num: '500+', label: 'Clients' },
  { num: '8',    label: 'Ans' },
  { num: '4',    label: 'Expertes' },
];

export const VogueAbout = () => (
  <section className="vg-about" id="about">
    <div className="vg-about-inner">
      {/* Image */}
      <motion.div
        className="vg-about-img-wrap"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/images/nails4.jpg" alt="HadilNails" className="vg-about-img" />
        {/* Crimson corner accent */}
        <div className="vg-about-corner" />
      </motion.div>

      {/* Text */}
      <div className="vg-about-text">
        <motion.span
          className="vg-label"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Notre Histoire
        </motion.span>

        {/* Pull quote */}
        <motion.blockquote
          className="vg-pullquote"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          "L'art au bout des doigts."
        </motion.blockquote>

        <motion.p
          className="vg-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Fondé à Montréal par Hadil, notre salon est un espace dédié à la beauté précise.
          Gel, bio gel, manucure, pédicure et épilation — réalisés avec soin par des mains expertes.
        </motion.p>

        {/* Stats row */}
        <div className="vg-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              className="vg-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <span className="vg-stat-num">{s.num}</span>
              <span className="vg-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
