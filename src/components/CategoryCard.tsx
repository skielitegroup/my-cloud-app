import { Link } from 'react-router-dom';
import type { Category } from '../data/categories';
import './CategoryCard.css';

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link to={`/categories/${category.id}`} className="category-card" style={{ '--card-gradient': category.gradient } as React.CSSProperties}>
      <div className="category-card__icon">{category.icon}</div>
      <h3 className="category-card__name">{category.name}</h3>
      <p className="category-card__desc">{category.description}</p>
      <span className="category-card__cta">Browse Products →</span>
    </Link>
  );
}
