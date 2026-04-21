import { motion } from 'framer-motion';

export const AuroraHero = () => (
  <header className="ar-hero" id="home">
    {/* Animated gradient orbs */}
    <div className="ar-orb ar-orb-1" />
    <div className="ar-orb ar-orb-2" />
    <div className="ar-orb ar-orb-3" />
    <div className="ar-orb ar-orb-4" />

    {/* Glass card */}
    <motion.div
      className="ar-hero-card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Glowing top bar */}
      <div className="ar-hero-glow-bar" />

      <motion.span
        className="ar-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        ✦ Premium Nail Salon — Montréal ✦
      </motion.span>

      <motion.h1
        className="ar-hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Hadil<span className="ar-title-shimmer">Nails</span>
      </motion.h1>

      <motion.p
        className="ar-hero-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.7 }}
      >
        Where every nail tells your story.
      </motion.p>

      <motion.div
        className="ar-hero-ctas"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <motion.button
          className="ar-btn-primary"
          data-cal-namespace="hadil-nails"
          data-cal-link="hadil-nails"
          data-cal-config='{"layout":"month_view"}'
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          ✦ Réserver
        </motion.button>
        <motion.a
          href="#services"
          className="ar-btn-ghost"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          Nos Services
        </motion.a>
      </motion.div>
    </motion.div>

    {/* Floating sparkles */}
    {[...Array(6)].map((_, i) => (
      <div key={i} className={`ar-sparkle ar-sparkle-${i + 1}`} />
    ))}
  </header>
);
