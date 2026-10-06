import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsPage() {
  useEffect(() => {
    document.title = 'Terms & Conditions | VV EXPORTS'
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>Terms & Conditions</span>
          </div>
          <h1>Terms &amp; Conditions</h1>
          <p>Last Updated: October 2026</p>
        </div>
      </section>

      <div className="legal-content">
        <p>
          Please read these Terms and Conditions carefully before using the vvexportsglobal.in website operated by VV EXPORTS. By accessing or using our website, you agree to be bound by these Terms.
        </p>

        <h2>1. About VV EXPORTS</h2>
        <p>
          VV EXPORTS is an India-based export and import lead-generation business. We facilitate connections between international buyers and Indian product suppliers. We do not manufacture products ourselves but act as a business facilitator and lead-generation service.
        </p>

        <h2>2. Website Use</h2>
        <p>By using this website, you agree to:</p>
        <ul>
          <li>Provide accurate and truthful information in any inquiry or contact form</li>
          <li>Use the website only for lawful purposes</li>
          <li>Not attempt to gain unauthorized access to any part of the website</li>
          <li>Not use the website to transmit harmful or malicious content</li>
        </ul>

        <h2>3. Inquiry and Lead Generation Services</h2>
        <p>
          VV EXPORTS provides an export inquiry and lead-generation service. When you submit an inquiry:
        </p>
        <ul>
          <li>We will review your requirements and attempt to connect you with suitable Indian suppliers</li>
          <li>We do not guarantee any specific business outcome, successful transaction, or contract</li>
          <li>Any business agreement is solely between the buyer and the supplier</li>
          <li>VV EXPORTS is not responsible for the quality, delivery, or any aspect of products traded between buyers and suppliers</li>
        </ul>

        <h2>4. Product Information</h2>
        <p>
          The product information provided on our website is for general informational purposes only. Specific product specifications, quality parameters, quantities, and pricing are subject to discussion and agreement between buyers and suppliers. VV EXPORTS does not guarantee any specific product attributes unless confirmed in writing.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, logos, and design elements, is the property of VV EXPORTS or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use this content without our express written permission.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          This website and its content are provided "as is" without any warranties, express or implied. VV EXPORTS makes no warranties regarding:
        </p>
        <ul>
          <li>The accuracy or completeness of website content</li>
          <li>The availability or continuity of the website</li>
          <li>The suitability of products for any particular purpose</li>
          <li>Any business outcomes resulting from inquiries submitted through our website</li>
        </ul>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, VV EXPORTS shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or our services, including but not limited to loss of profits, data, or business opportunities.
        </p>

        <h2>8. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. These links are provided for convenience only. VV EXPORTS has no control over third-party websites and accepts no responsibility for their content, privacy practices, or services.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our website shall be subject to the jurisdiction of courts in Bangalore, Karnataka, India.
        </p>

        <h2>10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of the website after any changes constitutes acceptance of the new Terms.
        </p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:Email@vvexportsglobal.co.in">Email@vvexportsglobal.co.in</a></li>
          <li><strong>Phone/WhatsApp:</strong> <a href="tel:+919113685175">+91 91136 85175</a></li>
          <li><strong>Address:</strong> A-109, SSVR Sai Sunshine Apartments, Immadi Halli, Nagondanahalli, Whitefield, Bangalore – 560066</li>
        </ul>

        <div style={{ marginTop: 48, padding: '24px', background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)', textAlign: 'center' }}>
          <p style={{ marginBottom: 16 }}>Return to our website or view our Privacy Policy.</p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-navy">Go to Home</Link>
            <Link to="/privacy-policy" className="btn btn-ghost" style={{ color: 'var(--navy-900)' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </>
  )
}
