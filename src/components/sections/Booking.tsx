import React from 'react';
import { motion } from 'framer-motion';

export const Booking: React.FC = () => {
  return (
    <section className="booking-section" id="booking-link">
      <motion.div
        className="booking"
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.75, type: 'spring', stiffness: 70 }}
      >
        <div className="booking-decoration booking-dec-1" />
        <div className="booking-decoration booking-dec-2" />

        <div className="booking-inner">
          <span className="section-label light">Ready to Glow?</span>
          <h2>Book Your Appointment</h2>
          <p>Choose your service, pick a time that works for you, and let us take care of the rest.</p>
          <motion.button
            className="btn btn-white"
            data-cal-namespace="hadil-nails"
            data-cal-link="hadil-nails"
            data-cal-config='{"layout":"month_view"}'
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Online Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};
