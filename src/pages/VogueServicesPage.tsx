import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceCategories } from '../data/services';
import { Footer } from '../components/layout/Footer';

export const VogueServicesPage = () => (
  <>
    {/* Banner — split black/cream */}
    <div className="vgsp-hero">
      <div className="vgsp-hero-black">
        <motion.div
          initial={{ opacity: 0, y: 30, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/" className="vgsp-back">← Retour</Link>
          <p className="vgsp-edition">Notre Menu — Tarifs</p>
          <h1 className="vgsp-title">
            <span className="vgsp-title-line1">Services</span>
            <span className="vgsp-title-line2">&amp; Prix</span>
          </h1>
        </motion.div>
      </div>
      <div className="vgsp-hero-img">
        <img src="/images/nails4.jpg" alt="" />
        <div className="vgsp-hero-img-overlay" />
      </div>
    </div>

    {/* Categories — typographic numbered sections */}
    <div className="vgsp-body">
      {serviceCategories.map((cat) => (
        <motion.div
          key={cat.num}
          className="vgsp-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section header */}
          <div className="vgsp-section-header">
            <span className="vgsp-section-num">{cat.num}</span>
            <div className="vgsp-section-title-wrap">
              <h2 className="vgsp-section-title">{cat.title}</h2>
              <span className="vgsp-section-emoji">{cat.emoji}</span>
            </div>
            <div className="vgsp-section-img-thumb">
              <img src={cat.image} alt={cat.title} />
            </div>
          </div>

          <div className="vgsp-section-rule" />

          {/* Price rows — clean typographic list */}
          <div className="vgsp-items">
            {cat.items.map((item, j) => (
              <motion.div
                key={item.name}
                className="vgsp-item"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: j * 0.05 }}
              >
                <span className="vgsp-item-idx">— {String(j + 1).padStart(2, '0')}</span>
                <span className="vgsp-item-name">{item.name}</span>
                <span className="vgsp-item-price">{item.price}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.p
        className="vgsp-note"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        * Les prix peuvent varier selon les prestations.
      </motion.p>
    </div>

    <Footer />
  </>
);
