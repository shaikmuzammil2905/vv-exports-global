import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'
import InquiryForm from '../components/InquiryForm'
import SuccessModal from '../components/SuccessModal'

export default function ContactPage() {
  useScrollReveal()
  const [successOpen, setSuccessOpen] = useState(false)

  useEffect(() => {
    document.title = 'Contact | VV EXPORTS – Get Export Inquiry'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Contact</span>
          </div>
          <div className="section-label" style={{ marginBottom: 16 }}>Get In Touch</div>
          <h1>Request an Export Inquiry</h1>
          <p>Interested in our products or looking for import/export business opportunities? Connect with our team today.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="contact-cards-grid">
            <div className="contact-card reveal">
              <div className="contact-card-icon" style={{ background: 'rgba(0,180,216,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
                </svg>
              </div>
              <h3>Call Us</h3>
              <p>Speak directly with our team for quick inquiries.</p>
              <a href="tel:+919113685175" id="contact-call-btn">+91 91136 85175</a>
            </div>

            <div className="contact-card reveal delay-100">
              <div className="contact-card-icon" style={{ background: 'rgba(37,211,102,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                </svg>
              </div>
              <h3>WhatsApp</h3>
              <p>Chat with us on WhatsApp for quick responses.</p>
              <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" id="contact-wa-btn">+91 91136 85175</a>
            </div>

            <div className="contact-card reveal delay-200">
              <div className="contact-card-icon" style={{ background: 'rgba(0,180,216,0.1)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h3>Email</h3>
              <p>Send us your detailed requirements by email.</p>
              <a href="mailto:Email@vvexportsglobal.co.in" id="contact-email-btn">Email@vvexportsglobal.co.in</a>
            </div>
          </div>

          {/* Address Card */}
          <div className="reveal" style={{ background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '32px 40px', boxShadow: 'var(--shadow-md)', marginBottom: 60, border: '1px solid var(--gray-200)', display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', flex: 1 }}>
              <div style={{ width: 48, height: 48, borderRadius: 'var(--radius-md)', background: 'rgba(0,180,216,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 style={{ color: 'var(--navy-900)', marginBottom: 8 }}>Our Address</h3>
                <p style={{ color: 'var(--gray-600)', lineHeight: 1.7 }}>
                  A-109, SSVR Sai Sunshine Apartments,<br />
                  Immadi Halli, Nagondanahalli,<br />
                  Whitefield, Bangalore – 560066<br />
                  Karnataka, India
                </p>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ color: 'var(--navy-900)', marginBottom: 12 }}>Get Directions</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginBottom: 16 }}>
                Located in Whitefield, Bangalore — one of India's key technology and business districts.
              </p>
              <a
                href="https://maps.google.com/?q=Whitefield,Bangalore,Karnataka,India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                id="contact-maps-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="inquiry-section section">
        <div className="container">
          <div className="inquiry-grid">
            <div>
              <div className="section-label reveal">Export Inquiry</div>
              <h2 className="section-title reveal">Fill Out the <span>Inquiry Form</span></h2>
              <p className="reveal delay-100" style={{ marginBottom: 28, fontSize: '1.02rem' }}>
                Share your requirements with us and our team will get back to you to discuss business opportunities.
              </p>
              <div className="reveal delay-200" style={{ padding: '24px', background: 'var(--navy-900)', borderRadius: 'var(--radius-xl)', marginBottom: 24 }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: 16 }}>Prefer to reach us directly?</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <a href="tel:+919113685175" style={{ color: 'var(--cyan-400)', fontSize: '0.92rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/></svg>
                    +91 91136 85175
                  </a>
                  <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" style={{ color: '#25d366', fontSize: '0.92rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
                    WhatsApp Us
                  </a>
                  <a href="mailto:Email@vvexportsglobal.co.in" style={{ color: 'var(--cyan-400)', fontSize: '0.92rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    Email@vvexportsglobal.co.in
                  </a>
                </div>
              </div>
            </div>
            <div className="reveal-right">
              <InquiryForm onSuccess={() => setSuccessOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </>
  )
}
