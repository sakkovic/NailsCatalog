import { motion } from 'framer-motion';

export const VogueHero = () => (
  <header className="vg-hero" id="home">
    {/* Background image — right panel */}
    <div className="vg-hero-img-panel">
      <img src="/images/nails5.webp" alt="HadilNails" className="vg-hero-img" />
      <div className="vg-hero-img-overlay" />
    </div>

    {/* Left editorial panel */}
    <div className="vg-hero-left">
      {/* Issue label */}
      <motion.div
        className="vg-hero-issue"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="vg-rule" />
        <span>Montréal · Premium</span>
      </motion.div>

      {/* Giant title */}
      <div className="vg-hero-title-wrap">
        {['HADIL', 'NAILS'].map((word, i) => (
          <motion.span
            key={word}
            className="vg-hero-word"
            initial={{ opacity: 0, y: 60, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            transition={{ duration: 0.85, delay: 0.25 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Crimson divider + tagline */}
      <motion.div
        className="vg-hero-sub"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <div className="vg-hero-crimson-bar" />
        <p className="vg-hero-tagline">Where every nail tells your story.</p>
      </motion.div>

      {/* CTAs */}
      <motion.div
        className="vg-hero-ctas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <motion.button
          className="vg-btn-primary"
          data-cal-namespace="hadil-nails"
          data-cal-link="hadil-nails"
          data-cal-config='{"layout":"month_view"}'
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Book Now
        </motion.button>
        <motion.a
          href="#services"
          className="vg-btn-ghost"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View Services
        </motion.a>
      </motion.div>
    </div>

    {/* Edition number — decorative */}
    <motion.div
      className="vg-hero-edition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
    >
      №01
    </motion.div>
  </header>
);
