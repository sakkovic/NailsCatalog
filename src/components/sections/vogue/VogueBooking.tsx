import { motion } from 'framer-motion';

export const VogueBooking = () => (
  <section className="vg-booking" id="booking">
    {/* Full-black block */}
    <div className="vg-booking-inner">
      <motion.span
        className="vg-label vg-label-light"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Réservation
      </motion.span>

      <motion.h2
        className="vg-booking-title"
        initial={{ opacity: 0, y: 40, clipPath: 'inset(0 0 100% 0)' }}
        whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        Prenez<br />Rendez-Vous
      </motion.h2>

      <motion.div
        className="vg-booking-rule"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <motion.p
        className="vg-booking-sub"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45 }}
      >
        En quelques secondes. Annulation gratuite.
      </motion.p>

      <motion.button
        className="vg-btn-primary vg-btn-inverted"
        data-cal-namespace="hadil-nails"
        data-cal-link="hadil-nails"
        data-cal-config='{"layout":"month_view"}'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.55 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        Réserver Maintenant
      </motion.button>
    </div>

    {/* Side image panel */}
    <div className="vg-booking-img">
      <img src="/images/nails8.jpg" alt="" />
    </div>
  </section>
);
