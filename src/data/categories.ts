export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

export const categories: Category[] = [
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    description:
      'Premium vitamins, dietary supplements, herbal extracts, protein powders, and wellness products sourced from trusted manufacturers worldwide.',
    icon: '💊',
    color: '#2e7d32',
    gradient: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
  },
  {
    id: 'surgical-equipment',
    name: 'Surgical Equipment',
    description:
      'High-precision surgical instruments, sterile disposables, operating room equipment, and medical devices meeting international quality standards.',
    icon: '🩺',
    color: '#1565c0',
    gradient: 'linear-gradient(135deg, #1565c0 0%, #42a5f5 100%)',
  },
  {
    id: 'borderline-products',
    name: 'Borderline Products',
    description:
      'Specialised borderline medical-cosmetic products including barrier creams, wound care items, and products bridging healthcare and cosmetics.',
    icon: '🔬',
    color: '#6a1b9a',
    gradient: 'linear-gradient(135deg, #6a1b9a 0%, #ab47bc 100%)',
  },
  {
    id: 'general-use',
    name: 'General Use Items',
    description:
      'Everyday essentials, office supplies, safety gear, cleaning products, and miscellaneous trade goods for businesses of all sizes.',
    icon: '📦',
    color: '#e65100',
    gradient: 'linear-gradient(135deg, #e65100 0%, #ffa726 100%)',
  },
];
