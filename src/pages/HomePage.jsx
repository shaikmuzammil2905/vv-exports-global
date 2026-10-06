import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'
import { products } from '../data/products'
import InquiryForm from '../components/InquiryForm'
import SuccessModal from '../components/SuccessModal'

const faqs = [
  {
    q: 'What products does VV EXPORTS offer?',
    a: 'VV EXPORTS currently offers Moringa Leaf Powder, Dry Coconut (Copra), and Cold Press Coconut Oil. These are high-quality Indian agricultural products sourced for global markets.'
  },
  {
    q: 'Can international buyers make inquiries?',
    a: 'Yes. VV EXPORTS welcomes inquiries from buyers across international markets. You can reach us through our Export Inquiry form, WhatsApp, or email.'
  },
  {
    q: 'How can I request product information or samples?',
    a: 'You can submit an Export Inquiry through our contact form or reach us directly on WhatsApp at +91 91136 85175. Our team will respond to discuss your requirements.'
  },
  {
    q: 'Can I contact VV EXPORTS through WhatsApp?',
    a: 'Yes. Our WhatsApp number is +91 91136 85175. You can reach us for product inquiries, trade discussions, or any business questions.'
  },
  {
    q: 'Where is VV EXPORTS based?',
    a: 'VV EXPORTS is based in Whitefield, Bangalore, India. Our full address is A-109, SSVR Sai Sunshine Apartments, Immadi Halli, Nagondanahalli, Whitefield, Bangalore – 560066.'
  },
  {
    q: 'Can product requirements be customized based on buyer needs?',
    a: 'Yes. Packaging, quantities, and product specifications can be discussed based on individual buyer requirements and trade terms. We encourage buyers to share their specific needs so we can connect them with the right suppliers.'
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  useScrollReveal()
  const [openFaq, setOpenFaq] = useState(null)
  const [successOpen, setSuccessOpen] = useState(false)
  const [selectedCert, setSelectedCert] = useState(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedCert(null)
    }
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEsc)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEsc)
    }
  }, [selectedCert])

  return (
    <>
      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-bg">
          <picture>
            <source srcSet="/hero-mobile.webp" type="image/webp" media="(max-width: 768px)" />
            <source srcSet="/hero-mobile.png" media="(max-width: 768px)" />
            <img
              src="/hero-desktop.jpg"
              alt="International cargo port with ship and Indian products — moringa, coconut, coconut oil"
              fetchpriority="high"
            />
          </picture>
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-content">
          <div className="hero-label">
            Global Export &amp; Import Opportunities
          </div>
          <h1 className="hero-title">
            Connecting Quality<br />
            <span>Indian Products</span> to<br />
            Global Markets
          </h1>
          <p className="hero-desc">
            We help global buyers source high-quality Indian products and create reliable export and import business opportunities across international markets.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg" id="hero-inquiry-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
              </svg>
              Get Export Inquiry
            </Link>
            <Link to="/products" className="btn btn-outline btn-lg" id="hero-products-btn">
              View Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                </svg>
              </div>
              Global Markets
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                  <path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              Reliable Business Network
            </div>
            <div className="hero-feature">
              <div className="hero-feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              Quality Indian Products
            </div>
          </div>
        </div>
      </section>

      {/* KEY PRODUCTS */}
      <section className="products-section section" aria-labelledby="products-heading">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Our Key Products</div>
            <h2 className="section-title" id="products-heading">
              Premium Indian Products for <span>Global Markets</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              We source and connect buyers with high-quality Indian agricultural products that meet international market demands.
            </p>
          </div>

          <div className="products-grid">
            {products.map((product, i) => (
              <article
                key={product.slug}
                className={`product-card reveal delay-${(i + 1) * 100}`}
                onClick={() => navigate(`/products/${product.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate(`/products/${product.slug}`)}
                aria-label={`View details for ${product.name}`}
              >
                <div className="product-card-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width="400"
                    height="240"
                  />
                  <div className="product-card-icon" aria-hidden="true">{product.icon}</div>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.name}</h3>
                  <p className="product-card-desc">{product.description}</p>
                  <div className="product-card-footer">
                    <Link
                      to={`/products/${product.slug}`}
                      className="btn-icon"
                      aria-label={`Learn more about ${product.name}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: 48 }}>
            <Link to="/products" className="btn btn-navy btn-lg" id="view-all-products-btn">
              View All Products
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section section" aria-labelledby="industries-heading">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Wellness &amp; Personal Care Applications</div>
            <h2 className="section-title" id="industries-heading">
              Versatile Uses Across <span>Global Industries</span>
            </h2>
          </div>

          <div className="industries-grid" style={{ marginTop: 56 }}>
            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
                title: 'Dietary Supplements',
                desc: 'Capsules, Tablets, Wellness Blends',
                id: 'industry-supplements'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                title: 'Health & Wellness Products',
                desc: 'Nutrition and Wellness Formulations',
                id: 'industry-wellness'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
                title: 'Hair & Scalp Products',
                desc: 'Hair Care Formulations',
                id: 'industry-hair'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
                title: 'Skin Care & Cosmetics',
                desc: 'Personal Care and Cosmetic Formulations',
                id: 'industry-cosmetics'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 2h18M3 7h18M3 12h18M3 17h18M3 22h18"/></svg>,
                title: 'Food & Beverage',
                desc: 'Food Products and Beverage Applications',
                id: 'industry-food'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
                title: 'Industrial Applications',
                desc: 'Manufacturing and Industrial Uses',
                id: 'industry-industrial'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
                title: 'Animal Feed Industry',
                desc: 'Feed Supplements and Processing',
                id: 'industry-animal'
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
                title: 'Pharmaceutical Sector',
                desc: 'Nutraceutical and Pharma Applications',
                id: 'industry-pharma'
              },
            ].map((industry, i) => (
              <div
                key={industry.id}
                className={`industry-card reveal delay-${Math.min((i + 1) * 100, 500)}`}
                id={industry.id}
                onClick={() => navigate('/industries')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate('/industries')}
                aria-label={`Learn more about ${industry.title} applications`}
              >
                <div className="industry-icon" aria-hidden="true">
                  {industry.icon}
                </div>
                <h3 className="industry-title">{industry.title}</h3>
                <p className="industry-desc">{industry.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center reveal" style={{ marginTop: 48 }}>
            <Link to="/industries" className="btn btn-navy btn-lg" id="view-industries-btn">
              Explore All Industries
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <div className="section-label reveal">About VV Exports</div>
              <h2 className="section-title reveal" id="about-heading">
                Building Global Opportunities Through Quality <span>Indian Products</span>
              </h2>
              <p className="reveal" style={{ marginBottom: 24, fontSize: '1.02rem' }}>
                VV EXPORTS is an India-based export and import lead-generation business focused on connecting high-quality Indian products with global buyers. We work towards creating genuine business opportunities for exporters and importers across international markets, helping build long-term and reliable trade relationships.
              </p>
              <p className="reveal delay-100" style={{ marginBottom: 36 }}>
                Based in Bangalore, India, we are positioned at the heart of India's growing export ecosystem, facilitating connections between quality Indian agricultural product suppliers and international buyers.
              </p>
              <div className="reveal delay-200">
                <Link to="/about" className="btn btn-ghost" id="learn-about-btn">
                  Learn More About Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div className="reveal-right" style={{ display: 'grid', gap: 20, gridTemplateColumns: '1fr 1.2fr' }}>
              <div className="about-image reveal-right delay-100" style={{ height: 'auto' }}>
                <img
                  src="/about-logistics.jpg"
                  alt="Export professional at international cargo port"
                  loading="lazy"
                  width="400"
                  height="480"
                />
                <div className="about-image-overlay" />
              </div>
              <div className="about-badges">
                <div className="about-badge">
                  <div className="about-badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  </div>
                  <div>
                    <p className="about-badge-title">Our Mission</p>
                    <p className="about-badge-desc">To connect quality Indian products with global markets through reliable business opportunities.</p>
                  </div>
                </div>
                <div className="about-badge">
                  <div className="about-badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                  </div>
                  <div>
                    <p className="about-badge-title">Our Focus</p>
                    <p className="about-badge-desc">Export and import lead generation across international markets.</p>
                  </div>
                </div>
                <div className="about-badge">
                  <div className="about-badge-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="about-badge-title">Our Approach</p>
                    <p className="about-badge-desc">Quality products, trusted connections and long-term business relationships.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPORT PROCESS */}
      <section className="process-section section" aria-labelledby="process-heading">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label" style={{ color: 'var(--cyan-400)' }}>
              How It Works
            </div>
            <h2 className="section-title text-white" id="process-heading">
              Our Export <span>Process</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 520, margin: '0 auto', fontSize: '1.02rem' }}>
              A simple, transparent process to connect global buyers with quality Indian products.
            </p>
          </div>

          <div className="process-grid">
            {[
              { num: '01', title: 'Submit Inquiry', desc: 'Share your product requirements, quantities, and trade details through our inquiry form or contact channels.' },
              { num: '02', title: 'Discuss Requirements', desc: 'Our team will discuss your specific product requirements, specifications, and business needs in detail.' },
              { num: '03', title: 'Connect & Coordinate', desc: 'We connect you with suitable Indian suppliers and coordinate the business introduction process.' },
              { num: '04', title: 'Build Long-Term Opportunity', desc: 'We focus on facilitating long-term, reliable business relationships between buyers and suppliers.' },
            ].map((step, i) => (
              <div key={step.num} className={`process-step reveal delay-${(i + 1) * 100}`}>
                <div className="process-num">{step.num}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY SECTION */}
      <section className="inquiry-section section" id="inquiry" aria-labelledby="inquiry-heading">
        <div className="container">
          <div className="inquiry-grid">
            <div className="inquiry-info">
              <div className="section-label reveal">Get In Touch</div>
              <h2 className="section-title reveal" id="inquiry-heading">
                Request an <span>Export Inquiry</span>
              </h2>
              <p className="reveal delay-100" style={{ marginBottom: 28, fontSize: '1.02rem' }}>
                Interested in our products or looking for import/export business opportunities? Get in touch with us. We'll be happy to connect with you.
              </p>

              <div className="inquiry-contacts">
                <a href="tel:+919113685175" className="contact-item reveal delay-200" id="contact-phone">
                  <div className="contact-item-icon" style={{ background: 'rgba(0,180,216,0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.18 1.22 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-item-label">Phone</p>
                    <p className="contact-item-value">+91 91136 85175</p>
                  </div>
                </a>

                <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" className="contact-item reveal delay-300" id="contact-whatsapp">
                  <div className="contact-item-icon" style={{ background: 'rgba(37,211,102,0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-item-label">WhatsApp</p>
                    <p className="contact-item-value">+91 91136 85175</p>
                  </div>
                </a>

                <a href="mailto:Email@vvexportsglobal.co.in" className="contact-item reveal delay-400" id="contact-email">
                  <div className="contact-item-icon" style={{ background: 'rgba(0,180,216,0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-item-label">Email</p>
                    <p className="contact-item-value">Email@vvexportsglobal.co.in</p>
                  </div>
                </a>

                <div className="contact-item reveal delay-500" style={{ cursor: 'default' }}>
                  <div className="contact-item-icon" style={{ background: 'rgba(0,180,216,0.1)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="contact-item-label">Address</p>
                    <p className="contact-item-value" style={{ fontSize: '0.85rem', lineHeight: 1.5 }}>
                      A-109, SSVR Sai Sunshine Apartments,<br />
                      Immadi Halli, Nagondanahalli,<br />
                      Whitefield, Bangalore – 560066
                    </p>
                  </div>
                </div>
              </div>

              <div className="reveal" style={{ textAlign: 'center', padding: '20px', background: 'var(--navy-900)', borderRadius: 'var(--radius-xl)', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 12 }}>Let's create global business opportunities together.</p>
                <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" className="btn btn-primary" id="send-inquiry-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Inquiry
                </a>
              </div>
            </div>

            <div className="reveal-right">
              <InquiryForm onSuccess={() => setSuccessOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section" aria-labelledby="faq-heading">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Frequently Asked Questions</div>
            <h2 className="section-title" id="faq-heading">
              Common <span>Questions</span>
            </h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal delay-${Math.min((i % 4 + 1) * 100, 400)} ${openFaq === i ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  id={`faq-q-${i}`}
                >
                  {faq.q}
                  <span className="faq-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer" role="region" aria-labelledby={`faq-q-${i}`}>
                  <p className="faq-answer-content">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNMENT REGISTRATIONS & CERTIFICATES */}
      <section className="certificates-section section" aria-labelledby="certificates-heading">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Official Accreditations</div>
            <h2 className="section-title" id="certificates-heading">
              Certified &amp; Registered for <span>Global Trade</span>
            </h2>
            <p className="section-desc" style={{ margin: '0 auto', maxWidth: 680 }}>
              VV EXPORTS operates with full regulatory compliance and verified government registrations from the Directorate General of Foreign Trade (DGFT) and the Food Safety and Standards Authority of India (FSSAI).
            </p>
          </div>

          <div className="certificates-grid">
            {/* IEC Certificate Card */}
            <div className="certificate-card reveal">
              <div className="certificate-badge-top">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Government of India Verified
              </div>

              <div
                className="certificate-preview-container"
                onClick={() => setSelectedCert('/certificates/iec-certificate.png')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedCert('/certificates/iec-certificate.png')}
                aria-label="View IEC Certificate in full size"
              >
                <img
                  src="/certificates/iec-certificate.png"
                  alt="Importer-Exporter Code (IEC) Certificate issued to VV EXPORTS by DGFT, Ministry of Commerce and Industry"
                  loading="lazy"
                  className="certificate-img"
                  width="400"
                  height="570"
                />
                <div className="certificate-zoom-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>Click to View Certificate</span>
                </div>
              </div>

              <div className="certificate-info">
                <div className="certificate-meta">
                  <span className="cert-code-tag">IEC: ABCFV2208E</span>
                  <span className="cert-status-tag">Active &amp; Verified</span>
                </div>
                <h3 className="certificate-name">Importer-Exporter Code (IEC)</h3>
                <p className="certificate-authority">
                  Directorate General of Foreign Trade (DGFT)<br />
                  Ministry of Commerce and Industry, Government of India
                </p>

                <div className="certificate-details-list">
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Firm Name:</span>
                    <span className="cert-detail-val">VV EXPORTS</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">PAN Number:</span>
                    <span className="cert-detail-val">ABCFV2208E</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Issue Date:</span>
                    <span className="cert-detail-val">23/06/2026</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Authorized Signatory:</span>
                    <span className="cert-detail-val">Vamsi Krishna Reddy M</span>
                  </div>
                </div>

                <div className="certificate-actions">
                  <button
                    onClick={() => setSelectedCert('/certificates/iec-certificate.png')}
                    className="btn btn-primary"
                    id="view-iec-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    View Certificate
                  </button>
                  <a
                    href="/certificates/iec-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    id="download-iec-pdf"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>

            {/* FSSAI Certificate Card */}
            <div className="certificate-card reveal delay-100">
              <div className="certificate-badge-top" style={{ background: 'linear-gradient(135deg, #16a34a, #00b4d8)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                FSSAI Food Safety Registered
              </div>

              <div
                className="certificate-preview-container"
                onClick={() => setSelectedCert('/certificates/fssai-certificate.png')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setSelectedCert('/certificates/fssai-certificate.png')}
                aria-label="View FSSAI Certificate in full size"
              >
                <img
                  src="/certificates/fssai-certificate.png"
                  alt="FSSAI Registration Certificate issued to VV EXPORTS by Food Safety and Standards Authority of India"
                  loading="lazy"
                  className="certificate-img"
                  width="400"
                  height="570"
                />
                <div className="certificate-zoom-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    <line x1="11" y1="8" x2="11" y2="14"/>
                    <line x1="8" y1="11" x2="14" y2="11"/>
                  </svg>
                  <span>Click to View Certificate</span>
                </div>
              </div>

              <div className="certificate-info">
                <div className="certificate-meta">
                  <span className="cert-code-tag" style={{ color: '#16a34a', borderColor: 'rgba(22,163,74,0.3)', background: 'rgba(22,163,74,0.1)' }}>
                    Reg No: 21226009002303
                  </span>
                  <span className="cert-status-tag">Valid Upto 2027</span>
                </div>
                <h3 className="certificate-name">FSSAI Food Safety Registration</h3>
                <p className="certificate-authority">
                  Food Safety and Standards Authority of India<br />
                  Government of Karnataka (FSS Act, 2006)
                </p>

                <div className="certificate-details-list">
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">FBO Name:</span>
                    <span className="cert-detail-val">VV EXPORTS</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Business Kind:</span>
                    <span className="cert-detail-val">Retailer, Distributor, Wholesaler</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Registration Date:</span>
                    <span className="cert-detail-val">09/06/2026</span>
                  </div>
                  <div className="cert-detail-row">
                    <span className="cert-detail-label">Jurisdiction:</span>
                    <span className="cert-detail-val">Bangalore Urban, Karnataka</span>
                  </div>
                </div>

                <div className="certificate-actions">
                  <button
                    onClick={() => setSelectedCert('/certificates/fssai-certificate.png')}
                    className="btn btn-primary"
                    id="view-fssai-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    View Certificate
                  </button>
                  <a
                    href="/certificates/fssai-certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    id="download-fssai-pdf"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="modal-overlay open"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate view"
        >
          <div className="certificate-modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="certificate-modal-body">
              <img
                src={selectedCert}
                alt="Official Government Certificate"
                className="certificate-modal-img"
              />
            </div>
          </div>
        </div>
      )}

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </>
  )
}
