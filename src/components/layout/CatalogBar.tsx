import { motion } from 'framer-motion';
import { useDesign, type DesignId } from '../../context/DesignContext';

const CATALOGS: { id: DesignId; label: string; sub: string; dot: string }[] = [
  { id: 'rose',   label: 'Rose',         sub: 'Élégant & Féminin',  dot: '#e8a0ad' },
  { id: 'luxe',   label: 'Luxe Édition', sub: 'Editorial & Sombre', dot: '#c9a96e' },
  { id: 'vogue',  label: 'Vogue',         sub: 'Magazine & Bold',    dot: '#c41e3a' },
  { id: 'aurora', label: 'Aurora',        sub: 'Dreamy & Glass',     dot: '#a78bfa' },
];

export const CatalogBar = () => {
  const { design, setDesign } = useDesign();

  return (
    <div className="catalog-bar">
      <span className="catalog-bar-title">Style Catalog</span>
      <div className="catalog-options">
        {CATALOGS.map((c) => (
          <button
            key={c.id}
            className={`catalog-option ${design === c.id ? 'catalog-option-active' : ''}`}
            onClick={() => setDesign(c.id)}
          >
            <span className="catalog-dot" style={{ background: c.dot }} />
            <span className="catalog-option-label">{c.label}</span>
            {design === c.id && (
              <motion.span
                className="catalog-active-bar"
                layoutId="catalog-bar-indicator"
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
