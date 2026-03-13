import { useState, type FormEvent } from 'react';
import './ContactPage.css';

interface FormState {
  name: string;
  email: string;
  company: string;
  category: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  category: '',
  message: '',
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // In production this would POST to an API endpoint
    setSubmitted(true);
    setForm(initialState);
  }

  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Contact Us</h1>
          <p>
            Have a trading enquiry or want to request a quote? Fill in the form below and our team
            will get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Whether you have a question about our products, need documentation support, or
              want to explore a partnership — we'd love to hear from you.
            </p>

            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-card__icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <span>info@skielite.com</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <span>+44 (0) 20 0000 0000</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon">🕐</span>
                <div>
                  <strong>Business Hours</strong>
                  <span>Mon–Fri, 9 AM – 6 PM GMT</span>
                </div>
              </div>
              <div className="contact-card">
                <span className="contact-card__icon">🌍</span>
                <div>
                  <strong>Global Enquiries</strong>
                  <span>We operate across 20+ countries</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="success-message">
                <span className="success-icon">✅</span>
                <h3>Thank you!</h3>
                <p>Your enquiry has been received. We'll be in touch within one business day.</p>
                <button className="btn-reset" onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h2>Send an Enquiry</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Ltd."
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Product Category</label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                    >
                      <option value="">Select a category…</option>
                      <option value="nutraceuticals">Nutraceuticals</option>
                      <option value="surgical-equipment">Surgical Equipment</option>
                      <option value="borderline-products">Borderline Products</option>
                      <option value="general-use">General Use Items</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, quantities, or any questions you have…"
                    required
                  />
                </div>

                <button type="submit" className="form-submit">
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
