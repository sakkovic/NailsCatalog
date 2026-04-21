import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const anchorLinks = [
  { href: '#about',   label: 'About'   },
  { href: '#team',    label: 'Team'    },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const location = useLocation();
  const navigate = useNavigate();
  const isHome   = location.pathname === '/';
  const isServices = location.pathname === '/services';

  /* Glass morphism when scrolled */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section highlight (home page only) */
  useEffect(() => {
    if (!isHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  /* Clicking an anchor link: scroll on home, or navigate home+scroll from other pages */
  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    setMenuOpen(false);
    if (!isHome) {
      e.preventDefault();
      navigate('/');
      /* After navigation, give the DOM time to mount then scroll */
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
      >
        <div className="navbar-container">
          {/* Logo */}
          <motion.div className="nav-logo" whileHover={{ scale: 1.04 }}>
            <Link to="/" className="nav-logo-text">
              HadilNails
            </Link>
          </motion.div>

          {/* Desktop links */}
          <div className="nav-links">
            {/* Anchor-based links (home sections) */}
            {anchorLinks.map((link, i) => {
              const id       = link.href.slice(1);
              const isActive = isHome && activeSection === id;
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.3 }}
                  onClick={(e) => handleAnchor(e, id)}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      className="nav-active-dot"
                      layoutId="nav-dot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}

            {/* Services — route link */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62 }}
            >
              <Link
                to="/services"
                className={`nav-link ${isServices ? 'active' : ''}`}
              >
                Services
                {isServices && (
                  <motion.span
                    className="nav-active-dot"
                    layoutId="nav-dot"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>

            {/* Book Now CTA — opens Cal.com popup directly */}
            <motion.button
              className="btn btn-sm"
              data-cal-namespace="hadil-nails"
              data-cal-link="hadil-nails"
              data-cal-config='{"layout":"month_view"}'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </div>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={isHome && activeSection === link.href.slice(1) ? 'active' : ''}
                onClick={(e) => handleAnchor(e, link.href.slice(1))}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/services"
              className={isServices ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <button
              className="btn"
              data-cal-namespace="hadil-nails"
              data-cal-link="hadil-nails"
              data-cal-config='{"layout":"month_view"}'
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
