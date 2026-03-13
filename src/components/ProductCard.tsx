import type { Product } from '../data/products';
import './ProductCard.css';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-card__header">
        <span className={`product-card__badge${product.inStock ? '' : ' product-card__badge--out'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__desc">{product.description}</p>
      <div className="product-card__unit">Unit: {product.unit}</div>
      <div className="product-card__tags">
        {product.tags.map((tag) => (
          <span key={tag} className="product-card__tag">
            {tag}
          </span>
        ))}
      </div>
      <button className="product-card__btn">Request Quote</button>
    </div>
  );
}
