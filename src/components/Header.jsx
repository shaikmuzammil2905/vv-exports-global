import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LogoIcon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="1.5" />
    <path d="M4 16 C8 10, 24 10, 28 16 C24 22, 8 22, 4 16Z" stroke="#00b4d8" strokeWidth="1.5" fill="none" />
    <line x1="16" y1="4" x2="16" y2="28" stroke="white" strokeWidth="1.5" />
    <path d="M10 8 L22 8 M8 16 L24 16 M10 24 L22 24" stroke="#00b4d8" strokeWidth="1" />
    <path d="M22 10 L26 16 L22 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <Link to="/" className="header-logo" onClick={closeDrawer} aria-label="VV EXPORTS Home">
          <div className="header-logo-icon">
            <LogoIcon />
          </div>
          <div className="header-logo-text">
            <span className="header-logo-name">VV EXPORTS</span>
            <span className="header-logo-sub">SINCE 2026</span>
          </div>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="header-nav">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/industries">Industries</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <Link to="/contact" className="btn btn-primary" id="header-cta">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
          </svg>
          Get Export Inquiry
        </Link>

        <button
          className={`hamburger ${drawerOpen ? 'open' : ''}`}
          aria-label="Toggle mobile menu"
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <nav
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <NavLink to="/" end onClick={closeDrawer}>Home</NavLink>
        <NavLink to="/about" onClick={closeDrawer}>About</NavLink>
        <NavLink to="/products" onClick={closeDrawer}>Products</NavLink>
        <NavLink to="/industries" onClick={closeDrawer}>Industries</NavLink>
        <NavLink to="/contact" onClick={closeDrawer}>Contact</NavLink>
        <NavLink to="/privacy-policy" onClick={closeDrawer}>Privacy Policy</NavLink>
        <NavLink to="/terms-conditions" onClick={closeDrawer}>Terms & Conditions</NavLink>
        <Link to="/contact" className="btn btn-primary" onClick={closeDrawer}>
          Get Export Inquiry
        </Link>
      </nav>
    </>
  )
}
