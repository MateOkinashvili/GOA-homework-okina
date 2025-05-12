import React from 'react';
import ProfileCard from './ProfileCard';

export default function App() {
  const products = [
    { id: 1, name: 'Pen', price: 1.5, inStock: true },
    { id: 2, name: 'Notebook', price: 3.0, inStock: false },
  ];

  return (
    <div className="p-4 space-y-6">
      <ProfileCard />
      <ProductList items={products} />
    </div>
  );
}
