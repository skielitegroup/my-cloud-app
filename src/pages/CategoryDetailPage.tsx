import { useParams, Link, Navigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories } from '../data/categories';
import { products } from '../data/products';
import './CategoryDetailPage.css';

export default function CategoryDetailPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find((c) => c.id === categoryId);

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  const categoryProducts = products.filter((p) => p.categoryId === categoryId);

  return (
    <main className="cat-detail">
      <section className="cat-detail-hero" style={{ background: category.gradient }}>
        <div className="cat-detail-hero-inner">
          <Link to="/categories" className="breadcrumb">← All Categories</Link>
          <div className="cat-detail-icon">{category.icon}</div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
      </section>

      <section className="products-section">
        <div className="products-inner">
          <div className="products-header">
            <h2>Available Products</h2>
            <span className="products-count">{categoryProducts.length} products</span>
          </div>
          <div className="products-grid">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="products-cta">
            <p>Can't find what you need? We source custom products on request.</p>
            <Link to="/contact" className="btn btn--indigo">Contact Our Trade Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
