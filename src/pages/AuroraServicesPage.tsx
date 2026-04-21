import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/services';
import { Footer } from '../components/layout/Footer';

export const AuroraServicesPage = () => (
  <>
    {/* Hero */}
    <div className="arsp-hero">
      <div className="arsp-orb arsp-orb-1" />
      <div className="arsp-orb arsp-orb-2" />
      <div className="arsp-orb arsp-orb-3" />

      <motion.div
        className="arsp-hero-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="arsp-glow-bar" />
        <Link to="/" className="arsp-back">← Retour</Link>
        <span className="arsp-eyebrow">✦ Notre Menu</span>
        <h1 className="arsp-title">Services &amp; Tarifs</h1>
        <p className="arsp-subtitle">Tous nos soins, réalisés avec soin.</p>
      </motion.div>
    </div>

    {/* Categories — glass cards */}
    <div className="arsp-categories">
      <div className="arsp-orb arsp-body-orb-1" />
      <div className="arsp-orb arsp-body-orb-2" />

      {serviceCategories.map((cat, i) => (
        <motion.div
          key={cat.num}
          className="arsp-card"
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Card image header */}
          <div className="arsp-card-img">
            <img src={cat.image} alt={cat.title} />
            <div className="arsp-card-img-overlay" />
            <div className="arsp-card-img-content">
              <span className="arsp-card-num">{cat.num}</span>
              <h2 className="arsp-card-title">{cat.emoji} {cat.title}</h2>
            </div>
          </div>

          {/* Price rows */}
          <div className="arsp-card-body">
            {cat.items.map((item, j) => (
              <motion.div
                key={item.name}
                className="arsp-item"
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: j * 0.05 }}
              >
                <span className="arsp-item-name">{item.name}</span>
                <div className="arsp-item-dots" />
                <span className="arsp-item-price">{item.price}</span>
              </motion.div>
            ))}
          </div>

          {/* Glow border */}
          <div className="arsp-card-glow" />
        </motion.div>
      ))}
    </div>

    <motion.p
      className="arsp-note"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      ✦ Les prix peuvent varier. Contactez-nous pour un devis personnalisé.
    </motion.p>

    <Footer />
  </>
);
