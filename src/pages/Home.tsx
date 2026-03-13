import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import './Home.css';

const stats = [
  { value: '500+', label: 'Products' },
  { value: '4', label: 'Product Categories' },
  { value: '20+', label: 'Countries Served' },
  { value: '10k+', label: 'Happy Clients' },
];

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">🌍 Global Trading Partner</div>
            <h1 className="hero-title">
              Your One-Stop Solution for <span className="hero-highlight">All Trading Business</span>
            </h1>
            <p className="hero-sub">
              From nutraceuticals and surgical equipment to borderline products and general use
              items — Skielite brings quality, reliability, and scale to every trade.
            </p>
            <div className="hero-actions">
              <Link to="/categories" className="btn btn--primary">
                Explore Categories
              </Link>
              <Link to="/contact" className="btn btn--outline">
                Request a Quote
              </Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card--1">💊 Nutraceuticals</div>
            <div className="hero-card hero-card--2">🩺 Surgical Equipment</div>
            <div className="hero-card hero-card--3">🔬 Borderline Products</div>
            <div className="hero-card hero-card--4">📦 General Use Items</div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-band">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>What We Trade</h2>
            <p>Explore our four core product categories — all under one roof.</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Skielite */}
      <section className="why-section">
        <div className="section-inner">
          <div className="section-header">
            <h2>Why Choose Skielite?</h2>
            <p>We make global trade simple, reliable, and transparent.</p>
          </div>
          <div className="why-grid">
            {[
              { icon: '✅', title: 'Quality Assured', desc: 'Every product is verified against international standards before it reaches your door.' },
              { icon: '🚚', title: 'Reliable Supply Chain', desc: 'Partnerships with certified manufacturers across 20+ countries ensure consistent availability.' },
              { icon: '📋', title: 'Regulatory Compliant', desc: 'Full documentation support — COA, MSDS, import/export clearances, and more.' },
              { icon: '💬', title: 'Dedicated Support', desc: 'Our experienced trade specialists guide you from enquiry to delivery, every step of the way.' },
            ].map((item) => (
              <div key={item.title} className="why-card">
                <span className="why-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-inner">
          <h2>Ready to start trading smarter?</h2>
          <p>Contact our team today and get a personalised quote for your business.</p>
          <Link to="/contact" className="btn btn--white">
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
