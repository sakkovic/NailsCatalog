import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const THEMES = [
  { id: 'rose',    label: 'Rose',    swatch: '#e8a0ad', bg: '#fce8ec' },
  { id: 'noir',    label: 'Noir',    swatch: '#c9a96e', bg: '#1a1710' },
  { id: 'jade',    label: 'Jade',    swatch: '#7aab8a', bg: '#eaf4ee' },
  { id: 'lavande', label: 'Lavande', swatch: '#b07cba', bg: '#f5eaf8' },
  { id: 'nude',    label: 'Nude',    swatch: '#c4956a', bg: '#faf2eb' },
] as const;

type ThemeId = typeof THEMES[number]['id'];

function applyTheme(id: ThemeId) {
  if (id === 'rose') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', id);
  }
}

export const ThemeSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<ThemeId>('rose');

  /* Restore saved theme on mount */
  useEffect(() => {
    const saved = (localStorage.getItem('hadil-theme') ?? 'rose') as ThemeId;
    setActive(saved);
    applyTheme(saved);
  }, []);

  const select = (id: ThemeId) => {
    setActive(id);
    applyTheme(id);
    localStorage.setItem('hadil-theme', id);
    setOpen(false);
  };

  const current = THEMES.find((t) => t.id === active)!;

  return (
    <div className="theme-switcher">
      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="theme-panel-label">Choose Theme</p>
            <div className="theme-options">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  className={`theme-option ${active === t.id ? 'theme-option-active' : ''}`}
                  onClick={() => select(t.id)}
                  title={t.label}
                  style={{ '--swatch': t.swatch, '--swatch-bg': t.bg } as React.CSSProperties}
                >
                  <span className="theme-swatch" />
                  <span className="theme-option-name">{t.label}</span>
                  {active === t.id && (
                    <motion.span
                      className="theme-check"
                      layoutId="theme-check"
                      transition={{ duration: 0.2 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        className="theme-toggle"
        onClick={() => setOpen((o) => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        title="Switch theme"
        style={{ '--swatch': current.swatch } as React.CSSProperties}
      >
        <span className="theme-toggle-dot" />
        <span className="theme-toggle-label">{current.label}</span>
      </motion.button>
    </div>
  );
};
