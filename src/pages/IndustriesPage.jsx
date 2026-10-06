import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useReveal'

const industries = [
  {
    id: 'dietary-supplements',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>,
    title: 'Dietary Supplements',
    subtitle: 'Capsules, Tablets, Wellness Blends',
    desc: 'Indian natural products like Moringa Leaf Powder are widely used in the global dietary supplement industry for capsule, tablet, and powder formulations targeting health-conscious consumers.',
    products: ['Moringa Leaf Powder'],
    uses: ['Capsule formulations', 'Tablet pressing', 'Powder blends', 'Nutrient concentrates', 'Superfood supplements'],
  },
  {
    id: 'health-wellness',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    title: 'Health & Wellness Products',
    subtitle: 'Nutrition and Wellness Formulations',
    desc: 'The global health and wellness market has growing demand for natural Indian ingredients including Moringa and Coconut Oil for various nutritional and wellness product formulations.',
    products: ['Moringa Leaf Powder', 'Cold Press Coconut Oil'],
    uses: ['Wellness powders', 'Health drinks', 'Nutritional supplements', 'Functional foods', 'Wellness blends'],
  },
  {
    id: 'hair-care',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    title: 'Hair & Scalp Products',
    subtitle: 'Hair Care Formulations',
    desc: 'Coconut Oil and Moringa extracts are popular ingredients in international hair care product formulations, used in shampoos, conditioners, hair oils, and scalp treatments.',
    products: ['Cold Press Coconut Oil', 'Moringa Leaf Powder'],
    uses: ['Hair oil formulations', 'Shampoo & conditioner', 'Scalp treatments', 'Hair masks', 'Leave-in treatments'],
  },
  {
    id: 'skin-cosmetics',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
    title: 'Skin Care & Cosmetics',
    subtitle: 'Personal Care and Cosmetic Formulations',
    desc: 'Cold Press Coconut Oil is a versatile ingredient in the global cosmetics and skincare industry, used in various personal care product formulations due to its natural characteristics.',
    products: ['Cold Press Coconut Oil', 'Moringa Leaf Powder'],
    uses: ['Moisturizers & creams', 'Lip care products', 'Body oils & lotions', 'Soap manufacturing', 'Cosmetic bases'],
  },
  {
    id: 'food-beverage',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 010 8h-1"/><path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
    title: 'Food & Beverage',
    subtitle: 'Food Products and Beverage Applications',
    desc: 'Indian agricultural products including Coconut Oil, Dry Coconut (Copra), and Moringa Powder are used across food and beverage manufacturing applications globally.',
    products: ['Cold Press Coconut Oil', 'Dry Coconut (Copra)', 'Moringa Leaf Powder'],
    uses: ['Cooking oils', 'Food manufacturing', 'Specialty food products', 'Health beverages', 'Bakery & confectionery'],
  },
  {
    id: 'oil-extraction',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/></svg>,
    title: 'Oil Extraction Industry',
    subtitle: 'Copra Milling and Oil Processing',
    desc: 'Dry Coconut (Copra) is the primary raw material used in coconut oil extraction mills globally, making it a key traded commodity in international agricultural trade.',
    products: ['Dry Coconut (Copra)'],
    uses: ['Coconut oil extraction', 'Oil refining', 'Industrial processing', 'By-product production'],
  },
  {
    id: 'animal-feed',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Animal Feed Industry',
    subtitle: 'Feed Supplements and Processing',
    desc: 'Both Moringa products and Copra meal (a by-product of coconut oil extraction) are used in the animal feed industry across various international markets.',
    products: ['Moringa Leaf Powder', 'Dry Coconut (Copra)'],
    uses: ['Livestock feed supplements', 'Poultry feed additions', 'Aquaculture feed', 'Feed formulations'],
  },
  {
    id: 'pharmaceutical',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
    title: 'Pharmaceutical & Nutraceutical',
    subtitle: 'Pharma-Grade Applications',
    desc: 'Indian natural ingredients are increasingly used in the pharmaceutical and nutraceutical industries globally, with growing demand for plant-based ingredients in various product formulations.',
    products: ['Moringa Leaf Powder', 'Cold Press Coconut Oil'],
    uses: ['Nutraceutical formulations', 'Pharmaceutical excipients', 'Softgel capsule oil bases', 'Natural medicine formulations'],
  },
]

export default function IndustriesPage() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Industries & Applications | VV EXPORTS – Indian Products for Global Industries'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Industries</span>
          </div>
          <div className="section-label" style={{ marginBottom: 16 }}>Wellness & Personal Care Applications</div>
          <h1>Versatile Uses Across Global Industries</h1>
          <p>Discover the wide range of industries and applications where VV EXPORTS products are used internationally.</p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label">Applications</div>
            <h2 className="section-title">Where Our Products Are <span>Used</span></h2>
          </div>

          <div className="industries-detail-list">
            {industries.map((industry, i) => (
              <article
                key={industry.id}
                id={industry.id}
                className={`industry-detail-card reveal ${i % 2 === 0 ? '' : 'delay-100'}`}
              >
                <div className="industry-detail-left">
                  <div className="industry-detail-icon">
                    {industry.icon}
                  </div>
                  <h2 className="industry-detail-title">{industry.title}</h2>
                  <p className="industry-detail-subtitle">{industry.subtitle}</p>
                  <div className="industry-detail-badges">
                    {industry.products.map(p => (
                      <span key={p} className="industry-product-pill">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="industry-detail-right">
                  <p className="industry-detail-desc">{industry.desc}</p>
                  <div className="industry-detail-uses-grid">
                    {industry.uses.map((use, ui) => (
                      <div key={ui} className="industry-detail-use-item">
                        <span className="industry-use-dot" />
                        <span>{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="cta-banner reveal">
            <h2>Need Products for Your Industry?</h2>
            <p>Contact us to discuss your industry-specific requirements and how VV EXPORTS can connect you with the right Indian suppliers.</p>
            <div className="cta-banner-btns">
              <Link to="/contact" className="btn btn-primary btn-lg" id="industries-cta-btn">Get Export Inquiry</Link>
              <Link to="/products" className="btn btn-outline btn-lg" id="industries-products-btn">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
