import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

export default function AboutPage() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'About Us | VV EXPORTS – Indian Products for Global Markets'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>About Us</span>
          </div>
          <div className="section-label" style={{ marginBottom: 16 }}>About VV EXPORTS</div>
          <h1>Building Global Trade Opportunities Through Quality Indian Products</h1>
          <p>Learn about VV EXPORTS — our mission, focus, and approach to connecting Indian products with global markets.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-label reveal">Who We Are</div>
              <h2 className="section-title reveal">An India-Based <span>Export & Import</span> Lead Generation Business</h2>
              <p className="reveal delay-100" style={{ marginBottom: 20, fontSize: '1.02rem' }}>
                VV EXPORTS is an India-based export and import lead-generation business focused on connecting high-quality Indian products with global buyers. Established in May 2026 and based in Whitefield, Bangalore, we operate at the intersection of India's thriving agricultural sector and international trade demand.
              </p>
              <p className="reveal delay-200" style={{ marginBottom: 20 }}>
                Our business model centers on facilitating meaningful connections between Indian product suppliers and international buyers, creating genuine business opportunities that benefit all parties involved.
              </p>
              <p className="reveal delay-300">
                We focus on a curated range of Indian agricultural products that have established and growing international demand — including Moringa Leaf Powder, Dry Coconut (Copra), and Cold Press Coconut Oil.
              </p>
            </div>
            <div className="about-image reveal-right">
              <img
                src="/about-logistics.jpg"
                alt="Export professional at international cargo port representing VV EXPORTS global trade operations"
                loading="lazy"
                width="600"
                height="480"
              />
              <div className="about-image-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our <span>Role</span> in Global Trade</h2>
          </div>
          <div className="about-roles-grid" style={{ marginTop: 56 }}>
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
                title: 'Global Buyer Connections',
                desc: 'We connect international buyers from various markets with verified Indian product suppliers, facilitating productive business introductions.'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
                title: 'Indian Product Sourcing',
                desc: 'We specialize in sourcing quality Indian agricultural products that meet international market requirements and buyer specifications.'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
                title: 'Export & Import Lead Generation',
                desc: 'Our core focus is generating genuine export and import leads that create real business opportunities for both buyers and suppliers.'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                title: 'Trade Relationship Facilitation',
                desc: 'We aim to help build long-term, stable business relationships between international buyers and Indian suppliers.'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
                title: 'Market Information Support',
                desc: 'We provide relevant product information and market context to help buyers make informed sourcing decisions.'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
                title: 'Inquiry & Communication Support',
                desc: 'We handle buyer inquiries professionally and facilitate clear communication between all parties throughout the business process.'
              },
            ].map((item, i) => (
              <div key={i} className={`value-card reveal delay-${Math.min((i % 3 + 1) * 100, 300)}`}>
                <div className="value-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Our Foundation</div>
            <h2 className="section-title">Mission, Vision & <span>Approach</span></h2>
          </div>
          <div className="about-values-grid">
            {[
              {
                color: 'var(--cyan-500)',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                title: 'Our Mission',
                body: 'To connect quality Indian products with global markets through reliable business opportunities. We aim to become a trusted bridge between Indian agricultural product suppliers and international buyers across various markets.'
              },
              {
                color: 'var(--navy-600)',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
                title: 'Our Vision',
                body: 'To establish VV EXPORTS as a recognized and dependable name in Indian agricultural product exports, known for facilitating genuine, long-term international business relationships that create value for all stakeholders.'
              },
              {
                color: 'var(--green-600)',
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: 'Our Approach',
                body: 'We believe in quality products, trusted connections, and long-term business relationships. Our approach focuses on understanding buyer requirements thoroughly and connecting them with the most suitable Indian suppliers for their specific needs.'
              },
            ].map((item, i) => (
              <div key={i} className={`value-card reveal delay-${(i + 1) * 100}`} style={{ borderTopColor: item.color }}>
                <div className="value-icon" style={{ background: `${item.color}15` }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2" style={{ width: 28, height: 28 }}>
                    {item.icon.props.children}
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="section" style={{ background: 'var(--navy-900)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label" style={{ color: 'var(--cyan-400)' }}>Why Choose Us</div>
            <h2 className="section-title text-white">Why Work With <span>VV EXPORTS</span>?</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto', fontSize: '1.02rem' }}>
              Here's what makes VV EXPORTS a reliable partner for international buyers seeking quality Indian products.
            </p>
          </div>
          <div className="about-commitments-grid" style={{ marginTop: 56 }}>
            {[
              { title: 'India-Based Business', desc: 'Operating from the heart of India\'s export ecosystem in Bangalore, we have direct access to Indian product suppliers and market knowledge.' },
              { title: 'Quality Focus', desc: 'We focus on connecting buyers with quality products and take product quality seriously in our sourcing and supplier connections.' },
              { title: 'Transparent Communication', desc: 'We believe in honest, transparent communication with all buyers and suppliers throughout the business process.' },
              { title: 'Buyer-Centric Approach', desc: 'We prioritize understanding buyer requirements and tailoring our sourcing efforts to meet specific buyer needs.' },
              { title: 'Long-Term Partnership', desc: 'Our goal is to facilitate long-term business relationships, not just one-time transactions.' },
              { title: 'Direct Access', desc: 'Direct access to our team via WhatsApp, phone, and email ensures quick responses and easy communication for all buyers.' },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${Math.min((i % 3 + 1) * 100, 300)}`} style={{ padding: '28px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan-500)', marginBottom: 16 }} />
                <h4 style={{ color: 'var(--white)', marginBottom: 10, fontSize: '1rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Ready to Explore Business Opportunities?</h2>
            <p>Connect with VV EXPORTS today to discuss your product requirements and explore how we can create business opportunities together.</p>
            <div className="cta-banner-btns">
              <Link to="/contact" className="btn btn-primary btn-lg" id="about-cta-inquiry">
                Get Export Inquiry
              </Link>
              <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" id="about-cta-whatsapp">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
