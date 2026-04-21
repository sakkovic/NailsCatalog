import { motion } from 'framer-motion';

export const AuroraBooking = () => (
  <section className="ar-booking" id="booking">
    <div className="ar-orb ar-booking-orb-1" />
    <div className="ar-orb ar-booking-orb-2" />

    <motion.div
      className="ar-booking-card"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ar-hero-glow-bar" />

      <motion.span
        className="ar-eyebrow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        ✦ Réservation en Ligne
      </motion.span>

      <motion.h2
        className="ar-booking-title"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        Prenez Soin de Vous
      </motion.h2>

      <motion.p
        className="ar-body ar-booking-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        Choisissez votre créneau en quelques secondes.<br />
        Annulation gratuite jusqu'à 24h avant.
      </motion.p>

      <motion.button
        className="ar-btn-primary ar-btn-large"
        data-cal-namespace="hadil-nails"
        data-cal-link="hadil-nails"
        data-cal-config='{"layout":"month_view"}'
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.96 }}
      >
        ✦ Réserver Maintenant
      </motion.button>
    </motion.div>
  </section>
);
