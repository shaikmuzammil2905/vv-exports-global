import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  useEffect(() => {
    document.title = 'Privacy Policy | VV EXPORTS'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Privacy Policy</span>
          </div>
          <h1>Privacy Policy</h1>
          <p>Last Updated: October 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <p>
          VV EXPORTS ("we," "us," or "our") operates the website vvexportsglobal.in. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of our website.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We collect information you voluntarily provide when you submit an export inquiry or contact us. This may include:
        </p>
        <ul>
          <li>Full name and company name</li>
          <li>Email address</li>
          <li>Phone number or WhatsApp number</li>
          <li>Country of residence or business</li>
          <li>Product interests and requirements</li>
          <li>Any other information you choose to share in your message</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To respond to your export inquiries and business requests</li>
          <li>To communicate with you about products and business opportunities</li>
          <li>To connect you with suitable Indian product suppliers</li>
          <li>To improve our website and services</li>
          <li>To maintain records of business communications</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except where necessary to facilitate business connections as part of our lead-generation service. When we connect you with an Indian product supplier, we may share relevant inquiry details with that supplier to facilitate the business introduction.
        </p>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal information but cannot guarantee absolute security.
        </p>

        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience. You can set your browser to refuse cookies, though this may affect some functionality of our website.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites including WhatsApp and Google Maps. We are not responsible for the privacy practices of these third-party sites and encourage you to review their privacy policies.
        </p>

        <h2>7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Withdraw consent for future communications</li>
        </ul>

        <h2>8. Contact Us About Privacy</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your information, please contact us:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:Email@vvexportsglobal.co.in">Email@vvexportsglobal.co.in</a></li>
          <li><strong>Phone/WhatsApp:</strong> <a href="tel:+919113685175">+91 91136 85175</a></li>
          <li><strong>Address:</strong> A-109, SSVR Sai Sunshine Apartments, Immadi Halli, Nagondanahalli, Whitefield, Bangalore – 560066</li>
        </ul>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date. We encourage you to review this page periodically.
        </p>

        <div style={{ marginTop: 48, padding: '24px', background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>Return to our website or contact us with questions.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-navy">Go to Home</Link>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
