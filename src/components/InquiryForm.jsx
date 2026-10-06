import { useState } from 'react'

export default function InquiryForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    country: '', product: '', quantity: '', message: ''
  })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate form submission (no real backend)
    setTimeout(() => {
      setSubmitting(false)
      setForm({ name: '', company: '', email: '', phone: '', country: '', product: '', quantity: '', message: '' })
      if (onSuccess) onSuccess()
    }, 1200)
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            className="form-control"
            placeholder="Your company"
            value={form.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            placeholder="email@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-control"
            placeholder="+1 234 567 8900"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="country">Country *</label>
          <input
            type="text"
            id="country"
            name="country"
            className="form-control"
            placeholder="Your country"
            value={form.country}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="product">Product Interested In *</label>
          <select
            id="product"
            name="product"
            className="form-control"
            value={form.product}
            onChange={handleChange}
            required
          >
            <option value="">Select a product</option>
            <option value="moringa-leaf-powder">Moringa Leaf Powder</option>
            <option value="dry-coconut-copra">Dry Coconut (Copra)</option>
            <option value="cold-press-coconut-oil">Cold Press Coconut Oil</option>
            <option value="multiple">Multiple Products</option>
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>
        <div className="form-group full">
          <label className="form-label" htmlFor="quantity">Quantity / Requirement</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="form-control"
            placeholder="e.g. 500 kg per month, 1 ton trial order"
            value={form.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group full">
          <label className="form-label" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder="Tell us about your requirements, specifications, or any questions..."
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
        disabled={submitting}
        id="submit-inquiry-btn"
      >
        {submitting ? (
          <>
            <svg style={{ animation: 'spin 1s linear infinite' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeOpacity="0.2"/>
              <path d="M12 3a9 9 0 019 9" strokeLinecap="round"/>
            </svg>
            Sending Inquiry...
          </>
        ) : (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Send Export Inquiry
          </>
        )}
      </button>
    </form>
  )
}
