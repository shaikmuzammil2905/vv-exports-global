import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'
import { products } from '../data/products'

export default function ProductsPage() {
  const navigate = useNavigate()
  useScrollReveal()

  useEffect(() => {
    document.title = 'Products | VV EXPORTS – Moringa, Coconut & Coconut Oil Exporters'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Products</span>
          </div>
          <div className="section-label" style={{ marginBottom: 16 }}>Our Key Products</div>
          <h1>Premium Indian Agricultural Products for Global Markets</h1>
          <p>We source and connect buyers with high-quality Indian agricultural products for international trade.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Product Range</div>
            <h2 className="section-title">Our <span>Products</span></h2>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              Click on any product to view complete details, applications, benefits, and how to place an inquiry.
            </p>
          </div>

          <div className="products-grid" style={{ marginTop: 56 }}>
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
                  <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--cyan-500)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                    Indian Agricultural Product
                  </p>
                  <h2 className="product-card-title">{product.name}</h2>
                  <p className="product-card-desc">{product.description}</p>
                  <div className="product-card-footer">
                    <Link
                      to={`/products/${product.slug}`}
                      className="btn btn-primary"
                      style={{ fontSize: '0.88rem', padding: '10px 20px' }}
                      onClick={e => e.stopPropagation()}
                    >
                      View Details
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Info */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">How We Source</div>
            <h2 className="section-title">Our <span>Sourcing Approach</span></h2>
          </div>
          <div className="product-sourcing-grid" style={{ marginTop: 56 }}>
            {[
              { icon: '🌱', title: 'Indian Agricultural Origin', desc: 'All products are sourced from India\'s established agricultural regions with appropriate growing conditions for each crop.' },
              { icon: '🔗', title: 'Supplier Connections', desc: 'We connect buyers with Indian suppliers who can meet buyer specifications for quality and quantity.' },
              { icon: '📋', title: 'Specification Flexibility', desc: 'Product specifications including quality parameters can be discussed and agreed based on buyer requirements.' },
              { icon: '🚢', title: 'Export Ready', desc: 'Products are prepared for international export with appropriate packaging and documentation as required.' },
            ].map((item, i) => (
              <div key={i} className={`why-card reveal delay-${(i + 1) * 100}`} style={{ textAlign: 'center', padding: '36px 28px' }}>
                <div style={{ fontSize: '2rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Interested in Our Products?</h2>
            <p>Submit an export inquiry or contact us directly to discuss product specifications, quantities, and trade requirements.</p>
            <div className="cta-banner-btns">
              <Link to="/contact" className="btn btn-primary btn-lg" id="products-cta-btn">Get Export Inquiry</Link>
              <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" id="products-whatsapp-btn">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
