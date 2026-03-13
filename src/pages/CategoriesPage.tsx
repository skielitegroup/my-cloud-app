import { Link } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/categories';
import './CategoriesPage.css';

export default function CategoriesPage() {
  return (
    <main className="categories-page">
      <section className="page-hero">
        <div className="page-hero-inner">
          <Link to="/" className="breadcrumb">← Back to Home</Link>
          <h1>Product Categories</h1>
          <p>
            Skielite covers four specialised trading categories. Select a category below to
            explore products and request a quote.
          </p>
        </div>
      </section>

      <section className="cat-list-section">
        <div className="cat-list-inner">
          <div className="cat-list-grid">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
