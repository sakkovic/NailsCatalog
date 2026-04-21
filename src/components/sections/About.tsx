import { motion } from 'framer-motion';

const stats = [
  { value: '500+', label: 'Happy Clients'      },
  { value: '5+',   label: 'Years Experience'   },
  { value: '50+',  label: 'Services Offered'   },
];

export const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="header-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <span className="section-label">About Us</span>
        <h2>About HadilNails</h2>
        <p>
          At HadilNails, we believe every detail matters. Located in the heart of Montréal,
          we offer a warm, luxurious experience — from classic manicures to intricate nail art
          and full waxing services, all delivered with precision, care, and premium products.
        </p>
      </motion.div>

      <div className="stats-grid">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
          >
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
