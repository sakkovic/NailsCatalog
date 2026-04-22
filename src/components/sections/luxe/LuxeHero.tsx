import { motion } from 'framer-motion';

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 28, clipPath: 'inset(0 0 100% 0)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.8, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
} as any;

export const LuxeHero = () => {
  return (
    <header className="lx-hero" id="home">
      {/* Background image with dark overlay */}
      <div className="lx-hero-bg">
        <img src="/images/nails5.webp" alt="" className="lx-hero-img" />
        <div className="lx-hero-overlay" />
      </div>

      {/* Centered editorial content */}
      <div className="lx-hero-content">
        {/* Top thin label */}
        <motion.span
          className="lx-hero-eyebrow"
          custom={0}
          variants={LINE_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          Premium Nail Salon — Montréal
        </motion.span>

        {/* Gold separator line */}
        <motion.div
          className="lx-hero-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Main title */}
        <motion.h1
          className="lx-hero-title"
          custom={1}
          variants={LINE_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          Hadil<span className="lx-hero-title-accent">Nails</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="lx-hero-tagline"
          custom={2}
          variants={LINE_VARIANTS}
          initial="hidden"
          animate="visible"
        >
          Where every nail tells your story.
        </motion.p>

        {/* Gold separator line */}
        <motion.div
          className="lx-hero-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* CTAs */}
        <motion.div
          className="lx-hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <motion.button
            className="lx-btn-primary"
            data-cal-namespace="hadil-nails"
            data-cal-link="hadil-nails"
            data-cal-config='{"layout":"month_view"}'
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Réserver
          </motion.button>
          <motion.a
            href="#services"
            className="lx-btn-ghost"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Nos Services
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="lx-scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="lx-scroll-line" />
        <span>Défiler</span>
      </motion.div>
    </header>
  );
};
