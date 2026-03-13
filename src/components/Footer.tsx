import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">⚡</span>
            <span className="footer-logo-text">Skielite</span>
          </div>
          <p className="footer-desc">
            Your one-stop solution for nutraceuticals, surgical equipment, borderline products, and
            general use items. Quality you can trust, supply you can count on.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Categories</h4>
            <Link to="/categories/nutraceuticals">Nutraceuticals</Link>
            <Link to="/categories/surgical-equipment">Surgical Equipment</Link>
            <Link to="/categories/borderline-products">Borderline Products</Link>
            <Link to="/categories/general-use">General Use Items</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">Request a Quote</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Skielite Trading Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
