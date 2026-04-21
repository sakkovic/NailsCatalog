import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/images/nails5.webp', '/images/nails2.jpg', '/images/nails4.jpg',
  '/images/nails7.jpg',  '/images/nails1.jpg', '/images/nails8.jpg',
  '/images/nails10.jpg', '/images/nails6.jpg', '/images/nails11.jpg',
  '/images/nails.jpg',   '/images/nails12.jpg','/images/nails9.jpg',
];

export const VogueGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="vg-gallery" id="gallery">
      <motion.div
        className="vg-gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="vg-label">Portfolio</span>
        <h2 className="vg-section-title">Galerie</h2>
      </motion.div>

      {/* Tight editorial grid */}
      <div className="vg-gallery-grid">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="vg-gallery-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
            onClick={() => setSelected(src)}
          >
            <img src={src} alt={`Nail art ${i + 1}`} className="vg-gallery-img" loading="lazy" />
            <div className="vg-gallery-item-overlay">
              <span className="vg-gallery-num">0{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="vg-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Nail art"
              className="vg-lightbox-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="vg-lightbox-close" onClick={() => setSelected(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
