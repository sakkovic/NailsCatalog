import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/images/nails5.webp', '/images/nails2.jpg', '/images/nails4.jpg',
  '/images/nails7.jpg',  '/images/nails1.jpg', '/images/nails8.jpg',
  '/images/nails10.jpg', '/images/nails6.jpg', '/images/nails9.jpg',
];

// Slight random rotations for polaroid effect
const ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.4, -2.0, 1.6, -1.5];

export const AuroraGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="ar-gallery" id="gallery">
      <div className="ar-section-orb ar-section-orb-right" />

      <motion.div
        className="ar-gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="ar-eyebrow">✦ Nos Réalisations</span>
        <h2 className="ar-section-title">Galerie</h2>
      </motion.div>

      {/* Polaroid grid */}
      <div className="ar-polaroid-grid">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="ar-polaroid"
            style={{ '--rotation': `${ROTATIONS[i]}deg` } as React.CSSProperties}
            initial={{ opacity: 0, y: 50, rotate: ROTATIONS[i] * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: ROTATIONS[i] }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.65, delay: (i % 3) * 0.12, type: 'spring', stiffness: 80 }}
            whileHover={{ rotate: 0, scale: 1.06, y: -10, zIndex: 10 }}
            onClick={() => setSelected(src)}
          >
            <div className="ar-polaroid-img">
              <img src={src} alt={`Nail art ${i + 1}`} loading="lazy" />
            </div>
            <div className="ar-polaroid-caption">✦</div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="ar-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Nail art"
              className="ar-lightbox-img"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="ar-lightbox-close" onClick={() => setSelected(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
