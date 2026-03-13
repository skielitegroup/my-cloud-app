import './AboutPage.css';

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>About Skielite</h1>
          <p>
            A trusted trading partner across nutraceuticals, surgical equipment, borderline
            products, and general use items.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-inner">
          <div className="about-story">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Skielite was founded with a simple but powerful vision: to make global product
                trading accessible, transparent, and reliable for businesses of all sizes. We saw
                companies struggling with fragmented supply chains, inconsistent quality, and lack
                of regulatory support — so we built a solution.
              </p>
              <p>
                Today, Skielite serves as a one-stop trading platform, connecting buyers and
                suppliers across four essential verticals: nutraceuticals, surgical and medical
                equipment, borderline medical-cosmetic products, and general use items. Our
                extensive network of certified manufacturers spans 20+ countries, enabling us to
                fulfil orders at scale without compromising on quality.
              </p>
            </div>
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🌍</span>
                <div>
                  <strong>20+ Countries</strong>
                  <span>Global supplier network</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">📋</span>
                <div>
                  <strong>Full Documentation</strong>
                  <span>COA, MSDS, regulatory clearances</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🏆</span>
                <div>
                  <strong>ISO-Certified Partners</strong>
                  <span>Verified manufacturing quality</span>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">⚡</span>
                <div>
                  <strong>Fast Turnaround</strong>
                  <span>Efficient sourcing and fulfilment</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mission-vision">
            <div className="mv-card mv-card--mission">
              <h3>🎯 Our Mission</h3>
              <p>
                To simplify international product trade by providing a reliable, quality-assured,
                and fully-supported sourcing experience across healthcare, nutrition, and general
                commerce sectors.
              </p>
            </div>
            <div className="mv-card mv-card--vision">
              <h3>🔭 Our Vision</h3>
              <p>
                To become the world's most trusted one-stop trading platform, empowering businesses
                globally to access the products they need — when they need them.
              </p>
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              {[
                { icon: '🤝', title: 'Integrity', desc: 'We operate with full transparency in pricing, sourcing, and documentation.' },
                { icon: '🔬', title: 'Quality First', desc: 'Every product is sourced from vetted, certified suppliers and tested to standards.' },
                { icon: '🌱', title: 'Responsibility', desc: 'We are committed to ethical sourcing and sustainable trading practices.' },
                { icon: '🚀', title: 'Innovation', desc: 'We continuously improve our supply chain processes to deliver more value.' },
              ].map((v) => (
                <div key={v.title} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
