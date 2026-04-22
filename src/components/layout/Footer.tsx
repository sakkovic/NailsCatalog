export const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">

      {/* Brand */}
      <div className="footer-col footer-brand">
        <h2 className="footer-logo">HadilNails</h2>
        <p className="footer-tagline">
          Soins des ongles et services beauté de qualité supérieure — hygiène irréprochable, mains expertes et atmosphère chaleureuse.
        </p>
        <div className="footer-socials">
          <a href="https://instagram.com/hadilnails" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          <a href="https://facebook.com/hadilnails" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@hadilnails" className="footer-social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="footer-col">
        <h3 className="footer-heading">Navigation</h3>
        <ul className="footer-links">
          <li><a href="#home"     className="footer-link">Accueil</a></li>
          <li><a href="#about"    className="footer-link">À propos</a></li>
          <li><a href="#services" className="footer-link">Services</a></li>
          <li><a href="#team"     className="footer-link">Équipe</a></li>
          <li><a href="#gallery"  className="footer-link">Galerie</a></li>
          <li><a href="#contact"  className="footer-link">Contact</a></li>
        </ul>
      </div>

      {/* Services */}
      <div className="footer-col">
        <h3 className="footer-heading">Services</h3>
        <ul className="footer-links">
          <li><a href="#services" className="footer-link">Pose gel & Bio gel</a></li>
          <li><a href="#services" className="footer-link">Remplissage</a></li>
          <li><a href="#services" className="footer-link">Manucure</a></li>
          <li><a href="#services" className="footer-link">Pédicure</a></li>
          <li><a href="#services" className="footer-link">Épilation</a></li>
          <li><a href="#services" className="footer-link">Nail Art</a></li>
        </ul>
      </div>

      {/* Contact */}
      <div className="footer-col">
        <h3 className="footer-heading">Contact</h3>
        <ul className="footer-contact-list">
          <li>
            <span className="footer-contact-icon">📍</span>
            <span>5999 Av de Monkland<br />Montréal, QC H4A 1H1</span>
          </li>
          <li>
            <span className="footer-contact-icon">📞</span>
            <span>(514) 000-0000</span>
          </li>
          <li>
            <span className="footer-contact-icon">✉️</span>
            <span>hadilnails@gmail.com</span>
          </li>
          <li>
            <span className="footer-contact-icon">🕐</span>
            <span>Lun – Sam : 9h – 19h<br />Dim : 10h – 17h</span>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="footer-bottom">
      <p className="footer-copy">© 2025 HadilNails. Tous droits réservés.</p>
      <p className="footer-made">Fait avec 💅 à Montréal</p>
    </div>
  </footer>
);
