import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/images/nails5.webp',
  '/images/nails2.jpg',
  '/images/nails4.jpg',
  '/images/nails7.jpg',
  '/images/nails1.jpg',
  '/images/nails8.jpg',
  '/images/nails10.jpg',
  '/images/nails6.jpg',
  '/images/nails11.jpg',
  '/images/nails.jpg',
  '/images/nails12.jpg',
  '/images/nails9.jpg',
];

export const LuxeGallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="lx-gallery" id="gallery">
      <motion.div
        className="lx-gallery-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="lx-eyebrow">Nos Réalisations</span>
        <h2 className="lx-section-title">Galerie</h2>
      </motion.div>

      {/* Masonry grid */}
      <div className="lx-masonry">
        {IMAGES.map((src, i) => (
          <motion.div
            key={src}
            className="lx-masonry-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelected(src)}
            whileHover={{ scale: 1.02 }}
          >
            <img src={src} alt={`Nail art ${i + 1}`} className="lx-masonry-img" loading="lazy" />
            <div className="lx-masonry-overlay">
              <span className="lx-masonry-icon">+</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="lx-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Nail art"
              className="lx-lightbox-img"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className="lx-lightbox-close" onClick={() => setSelected(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
