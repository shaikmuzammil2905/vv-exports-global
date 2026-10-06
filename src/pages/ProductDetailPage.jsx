import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'
import { getProductBySlug, products } from '../data/products'
import InquiryForm from '../components/InquiryForm'
import SuccessModal from '../components/SuccessModal'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const [openFaq, setOpenFaq] = useState(null)
  const [successOpen, setSuccessOpen] = useState(false)
  useScrollReveal()

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | VV EXPORTS – Indian Agricultural Product Exporter`
    }
  }, [product])

  if (!product) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, padding: '120px 20px' }}>
        <h1 style={{ color: 'var(--navy-900)' }}>Product Not Found</h1>
        <p style={{ color: 'var(--gray-500)' }}>The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn btn-primary">View All Products</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Page Hero */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy-900), var(--navy-700))', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='2' fill='%2300b4d8' fill-opacity='0.05'/%3E%3C/svg%3E")`, pointerEvents: 'none' }} />
        <div className="container">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{product.name}</span>
          </div>
          <div className="product-detail-hero" style={{ paddingLeft: 0, paddingRight: 0, marginTop: 32 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 16 }}>Indian Agricultural Product</div>
              <h1 style={{ color: 'var(--white)', marginBottom: 16 }}>{product.name}</h1>
              <p style={{ color: 'var(--cyan-400)', fontSize: '1.05rem', marginBottom: 20, fontWeight: 500 }}>{product.tagline}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.75, marginBottom: 36 }}>{product.overview}</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary btn-lg" id={`product-inquiry-${slug}`}>
                  Get Product Inquiry
                </Link>
                <a href="https://wa.me/919113685175" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg" id={`product-whatsapp-${slug}`}>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="product-detail-image">
              <img
                src={product.image}
                alt={`${product.name} — premium quality Indian agricultural product for export`}
                width="600"
                height="480"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div className="section-label reveal">Applications</div>
              <h2 className="section-title reveal">Where <span>{product.name}</span> is Used</h2>
              <p className="reveal delay-100" style={{ marginBottom: 28 }}>
                {product.name} serves diverse industries and applications in international markets. Here are the primary uses:
              </p>
              <div className="applications-list reveal delay-200">
                {product.applications.map((app, i) => (
                  <div key={i} className="application-tag">{app}</div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-label reveal">Key Benefits</div>
              <h2 className="section-title reveal">Why Buyers <span>Choose This Product</span></h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 28 }}>
                {product.benefits.map((benefit, i) => (
                  <div key={i} className={`reveal delay-${Math.min((i + 1) * 100, 400)}`} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 20px', background: 'var(--white)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--gray-200)' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(0,180,216,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: 'var(--navy-900)', marginBottom: 4, fontSize: '0.92rem' }}>{benefit.title}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--gray-500)', lineHeight: 1.6, margin: 0 }}>{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Export Info */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {[
              { title: 'Packaging Information', content: product.packaging, icon: '📦' },
              { title: 'Export & Sourcing', content: product.exportInfo, icon: '🚢' },
              { title: 'Quality & Specifications', content: product.qualityInfo, icon: '✅' },
            ].map((item, i) => (
              <div key={i} className={`reveal delay-${(i + 1) * 100}`} style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', padding: '32px 28px', border: '1px solid var(--gray-200)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ color: 'var(--navy-900)', marginBottom: 12, fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--gray-500)', lineHeight: 1.7 }}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <div className="text-center reveal" style={{ marginBottom: 40 }}>
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Inquire About <span>{product.name}</span></h2>
              <p className="section-desc" style={{ margin: '0 auto' }}>
                Fill out the form below to discuss your requirements, specifications, or any questions about this product.
              </p>
            </div>
            <div className="reveal">
              <InquiryForm onSuccess={() => setSuccessOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section">
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Product FAQ</div>
            <h2 className="section-title">Common Questions About <span>{product.name}</span></h2>
          </div>
          <div className="faq-grid" style={{ marginTop: 48 }}>
            {product.faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item reveal delay-${Math.min((i % 4 + 1) * 100, 400)} ${openFaq === i ? 'open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className="faq-toggle" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-content">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Related Products</div>
            <h2 className="section-title">Also Available from <span>VV EXPORTS</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48 }}>
            {relatedProducts.map((p, i) => (
              <article
                key={p.slug}
                className={`product-card reveal delay-${(i + 1) * 100}`}
                onClick={() => navigate(`/products/${p.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate(`/products/${p.slug}`)}
                aria-label={`View ${p.name}`}
              >
                <div className="product-card-image" style={{ height: 200 }}>
                  <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="product-card-icon" aria-hidden="true">{p.icon}</div>
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{p.name}</h3>
                  <p className="product-card-desc">{p.description}</p>
                  <div className="product-card-footer">
                    <Link to={`/products/${p.slug}`} className="btn-icon" onClick={e => e.stopPropagation()} aria-label={`View ${p.name}`}>
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
        </div>
      </section>

      <SuccessModal open={successOpen} onClose={() => setSuccessOpen(false)} />
    </>
  )
}
