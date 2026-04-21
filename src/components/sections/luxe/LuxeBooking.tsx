import { motion } from 'framer-motion';

export const LuxeBooking = () => (
  <section className="lx-booking" id="booking">
    <div className="lx-booking-inner">
      {/* Background image */}
      <div className="lx-booking-bg">
        <img src="/images/nails8.jpg" alt="" />
        <div className="lx-booking-bg-overlay" />
      </div>

      {/* Content */}
      <div className="lx-booking-content">
        <motion.span
          className="lx-eyebrow lx-eyebrow-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Réservation en Ligne
        </motion.span>

        <motion.h2
          className="lx-booking-title"
          initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Prenez Soin<br />de Vous
        </motion.h2>

        <motion.div
          className="lx-booking-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        />

        <motion.p
          className="lx-booking-sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Choisissez votre créneau en quelques secondes.
        </motion.p>

        <motion.button
          className="lx-btn-primary lx-btn-large"
          data-cal-namespace="hadil-nails"
          data-cal-link="hadil-nails"
          data-cal-config='{"layout":"month_view"}'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          Réserver Maintenant
        </motion.button>
      </div>
    </div>
  </section>
);
