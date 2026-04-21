import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <header className="hero" id="home">

      {/* ── Left column ── */}
      <div className="hero-left">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div key={n} className={`sparkle sparkle-${n}`} />
        ))}

        <div className="hero-content">
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="hero-badge-dot" />
            Premium Nail Salon — Montréal
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, type: 'spring', stiffness: 70 }}
          >
            HadilNails
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Where every nail tells your story.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="btn"
              data-cal-namespace="hadil-nails"
              data-cal-link="hadil-nails"
              data-cal-config='{"layout":"month_view"}'
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
            <motion.a
              href="#services"
              className="btn btn-ghost"
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="scroll-arrow" />
        </motion.div>
      </div>

      {/* ── Right column ── */}
      <div className="hero-right">
        <img
          className="hero-img"
          src="/images/nails5.webp"
          alt="HadilNails salon"
        />

        <div className="hero-features">
          <motion.div
            className="hero-feature"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className="hero-feature-num">01</span>
            <p>Gel, bio gel, manucure, pédicure et épilation — tous réalisés par des mains expertes.</p>
          </motion.div>
          <motion.div
            className="hero-feature"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <span className="hero-feature-num">02</span>
            <p>Réservez en ligne en quelques secondes et laissez-nous prendre soin de vous.</p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
