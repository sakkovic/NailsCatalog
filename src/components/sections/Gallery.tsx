import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  '/images/nails5.webp',
  '/images/nails1.jpg',
  '/images/nails.jpg',
  '/images/nails4.jpg',
  '/images/nails2.jpg',
  '/images/nails6.jpg',
  '/images/nails7.jpg',
  '/images/nails8.jpg',
  '/images/nails9.jpg',
  '/images/nails10.jpg',
  '/images/nails11.jpg',
  '/images/nails12.jpg',
];

const GAP = 16; // px gap between items

function getItemsPerView() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 480) return 1;
  if (window.innerWidth < 768) return 2;
  return 3;
}

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [itemsPerView, setItemsPerView] = useState(getItemsPerView);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const maxIndex = Math.max(0, IMAGES.length - itemsPerView);
  const itemWidth =
    containerWidth > 0
      ? (containerWidth - GAP * (itemsPerView - 1)) / itemsPerView
      : 0;
  const trackX = -(currentIndex * (itemWidth + GAP));

  // Measure container & update itemsPerView on resize
  const measure = useCallback(() => {
    const ipv = getItemsPerView();
    setItemsPerView(ipv);
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Clamp index when itemsPerView changes (e.g. on resize)
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const goTo = (index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  };

  // Drag / pan support
  const handlePanEnd = (_: unknown, info: { offset: { x: number } }) => {
    const threshold = Math.max(40, itemWidth * 0.25);
    if (info.offset.x < -threshold) goTo(currentIndex + 1);
    else if (info.offset.x > threshold) goTo(currentIndex - 1);
    // snap back if not enough to advance
    setTimeout(() => { isDragging.current = false; }, 50);
  };

  const handlePanStart = () => { isDragging.current = true; };

  return (
    <section className="gallery" id="gallery">
      {/* Header */}
      <motion.div
        className="header-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Our Work</span>
        <h2>Follow us on Instagram</h2>
        <p>@hadilnails</p>
      </motion.div>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <div className="carousel-wrapper" ref={containerRef}>
          <motion.div
            className="carousel-track"
            animate={{ x: trackX }}
            transition={{ type: 'spring', stiffness: 320, damping: 38, mass: 0.85 }}
            onPanStart={handlePanStart}
            onPanEnd={handlePanEnd}
            style={{ touchAction: 'pan-y' }}
          >
            {IMAGES.map((src, idx) => (
              <div
                key={idx}
                className="carousel-item"
                style={itemWidth > 0 ? { width: itemWidth } : undefined}
                onClick={() => {
                  if (!isDragging.current) setSelectedImg(src);
                }}
              >
                <img src={src} alt={`Gallery photo ${idx + 1}`} />
                <div className="carousel-item-overlay">
                  <span>+</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Arrows + dots */}
        <div className="carousel-nav">
          <button
            className="carousel-btn"
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            ←
          </button>

          <div className="carousel-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="carousel-btn"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex >= maxIndex}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </motion.div>

      <motion.p
        className="gallery-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        See more on Instagram →
      </motion.p>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="modal-content-wrapper"
              initial={{ scale: 0.5, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImg} alt="Enlarged gallery view" className="modal-image" />
              <button className="modal-close" onClick={() => setSelectedImg(null)}>
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
