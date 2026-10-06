import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="header-logo" style={{ marginBottom: '4px', display: 'inline-flex' }}>
              <div className="header-logo-icon">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 26, height: 26 }}>
                  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" />
                  <path d="M4 16 C8 10, 24 10, 28 16 C24 22, 8 22, 4 16Z" stroke="#00b4d8" strokeWidth="1.5" fill="none" />
                  <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="1.5" />
                  <path d="M10 8 L22 8 M8 16 L24 16 M10 24 L22 24" stroke="#00b4d8" strokeWidth="1" />
                  <path d="M22 10 L26 16 L22 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="header-logo-text">
                <span className="header-logo-name">VV EXPORTS</span>
                <span className="header-logo-sub">SINCE 2026</span>
              </div>
            </Link>
            <p>
              Connecting quality Indian products with global markets through reliable business opportunities and long-term trade relationships.
            </p>
            <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', margin: 0 }}>
              "Connecting Quality Indian Products to Global Markets"
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-col-title">Navigation</p>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="footer-col-title">Products</p>
            <ul className="footer-links">
              <li><Link to="/products/moringa-leaf-powder">Moringa Leaf Powder</Link></li>
              <li><Link to="/products/dry-coconut-copra">Dry Coconut (Copra)</Link></li>
              <li><Link to="/products/cold-press-coconut-oil">Cold Press Coconut Oil</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-title">Contact</p>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
              </svg>
              <a href="tel:+919113685175">+91 91136 85175</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
              <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <a href="mailto:Email@vvexportsglobal.co.in">Email@vvexportsglobal.co.in</a>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>A-109, SSVR Sai Sunshine Apartments, Immadi Halli, Nagondanahalli, Whitefield, Bangalore – 560066</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 VV EXPORTS. All rights reserved. | Established: May 2026</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          </div>
          <p className="footer-tagline">vvexportsglobal.in</p>
        </div>
      </div>
    </footer>
  )
}
