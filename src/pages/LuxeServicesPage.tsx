import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/services';
import { Footer } from '../components/layout/Footer';

export const LuxeServicesPage = () => (
  <>
    {/* Banner */}
    <div className="lxsp-hero">
      <motion.div
        className="lxsp-hero-inner"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link to="/" className="lxsp-back">← Retour</Link>
        <span className="lxsp-eyebrow">Notre Menu</span>
        <div className="lxsp-hero-line" />
        <h1 className="lxsp-title">Services &amp; Tarifs</h1>
        <p className="lxsp-subtitle">Tous nos soins, réalisés avec excellence.</p>
      </motion.div>
    </div>

    {/* Categories */}
    <div className="lxsp-categories">
      {serviceCategories.map((cat, i) => {
        const isEven = i % 2 === 1;
        return (
          <motion.div
            key={cat.num}
            className={`lxsp-category ${isEven ? 'lxsp-category-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Image panel */}
            <div className="lxsp-img-panel">
              <img src={cat.image} alt={cat.title} className="lxsp-img" />
              <div className="lxsp-img-overlay" />
              <div className="lxsp-img-num">{cat.num}</div>
            </div>

            {/* Price panel */}
            <div className="lxsp-price-panel">
              <span className="lxsp-cat-eyebrow">{cat.emoji} {cat.titleUpper}</span>
              <div className="lxsp-cat-rule" />
              <div className="lxsp-items">
                {cat.items.map((item, j) => (
                  <motion.div
                    key={item.name}
                    className="lxsp-item"
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: j * 0.06 }}
                  >
                    <span className="lxsp-item-name">{item.name}</span>
                    <div className="lxsp-item-dots" />
                    <span className="lxsp-item-price">{item.price}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>

    <motion.p
      className="lxsp-note"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      * Les prix peuvent varier. Contactez-nous pour un devis personnalisé.
    </motion.p>

    <Footer />
  </>
);
