export const Footer = () => {
  return (
    <footer style={{ textAlign: 'left', padding: '5rem 1.5rem', backgroundColor: 'var(--text-main)', color: 'white' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>

        {/* Brand Info */}
        <div>
          <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem' }}>HadilNails</h2>
          <p style={{ color: 'var(--text-lighter)', marginBottom: '2rem', lineHeight: '1.7', fontSize: '0.95rem', maxWidth: '300px' }}>
            Providing premium nail care and beauty services with top-tier hygiene, expert hands, and a warm welcoming atmosphere.
          </p>
          <div className="social-icons" style={{ justifyContent: 'flex-start', marginTop: 0 }}>
            <a href="https://instagram.com/hadilnails" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://facebook.com/hadilnails" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: 'var(--primary)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem 1.5rem' }}>
            <li><a href="#home"         className="footer-link">Home</a></li>
            <li><a href="#about"        className="footer-link">About</a></li>
            <li><a href="#services"     className="footer-link">Services</a></li>
            <li><a href="#team"         className="footer-link">Team</a></li>
            <li><a href="#gallery"      className="footer-link">Gallery</a></li>
            <li><a href="#contact"      className="footer-link">Contact</a></li>
            <li><a href="#booking-link" className="footer-link">Book Now</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ color: 'var(--primary)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', fontWeight: 700 }}>
            Contact
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-lighter)', fontSize: '0.95rem', lineHeight: '1.6' }}>
            <li>5999 Av de Monkland<br />Montréal, QC H4A 1H1</li>
            <li>(514) 555-0192</li>
            <li>contact@hadilnails.com</li>
            <li>Lun – Ven : 9h – 17h<br />Sam : 9h – 13h</li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div style={{ maxWidth: '1000px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-lighter)', fontSize: '0.9rem' }}>
        <p>&copy; 2025 HadilNails. All rights reserved.</p>
      </div>
    </footer>
  );
};
