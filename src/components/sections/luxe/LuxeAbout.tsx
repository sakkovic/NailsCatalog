import { motion } from 'framer-motion';

const stats = [
  { num: '500+', label: 'Clients satisfaites' },
  { num: '8+',   label: "Années d'expérience" },
  { num: '4',    label: 'Spécialistes certifiées' },
];

const WIPE = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  visible: (i: number) => ({
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.85, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
} as any;

export const LuxeAbout = () => (
  <section className="lx-about" id="about">
    <div className="lx-about-inner">
      {/* Image side */}
      <motion.div
        className="lx-about-img-wrap"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src="/images/nails1.jpg" alt="HadilNails salon" className="lx-about-img" />
        <div className="lx-about-img-border" />
      </motion.div>

      {/* Text side */}
      <div className="lx-about-text">
        <motion.span
          className="lx-eyebrow"
          custom={0}
          variants={WIPE}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Notre Histoire
        </motion.span>

        <motion.h2
          className="lx-section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          L'art au bout<br />des doigts
        </motion.h2>

        <motion.p
          className="lx-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
        >
          Fondé à Montréal par Hadil, notre salon est un espace dédié à la beauté précise et à l'élégance naturelle.
          Chaque prestation est réalisée avec soin, en utilisant des produits premium pour des résultats durables.
        </motion.p>

        <motion.p
          className="lx-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.32 }}
        >
          Gel, bio gel, manucure, pédicure et épilation — tous réalisés par des mains expertes dans une ambiance chaleureuse et confidentielle.
        </motion.p>

        {/* Stats */}
        <div className="lx-stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.num}
              className="lx-stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            >
              <span className="lx-stat-num">{s.num}</span>
              <span className="lx-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
