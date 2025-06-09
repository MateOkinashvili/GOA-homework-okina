import React from 'react';
import PartsList from './components/PartsList';

const parts = [
  { id: 1, name: "Intel Core i7-12700K", description: "12-core high-performance CPU, perfect for gaming.", price: 1249, inStock: true },
  { id: 2, name: "NVIDIA GeForce RTX 4070", description: "High-end graphics card with ray tracing and AI features.", price: 2899, inStock: true },
  { id: 3, name: "Corsair Vengeance 16GB RAM", description: "2x8GB DDR4 3200MHz memory kit for fast multitasking.", price: 399, inStock: true },
  { id: 4, name: "Samsung 980 Pro 1TB SSD", description: "Ultra-fast NVMe SSD for quick boot and load times.", price: 599, inStock: true },
  { id: 5, name: "ASUS ROG Strix Z690 Motherboard", description: "Powerful motherboard with DDR5 and PCIe 5.0 support.", price: 899, inStock: true },
  { id: 6, name: "Cooler Master 750W PSU", description: "Modular power supply with 80+ Gold certification.", price: 299, inStock: true },
  { id: 7, name: "NZXT H510 Case", description: "Minimalist case with excellent airflow and cable management.", price: 249, inStock: true },
];

function App() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Stylish PC Parts</h1>
          <p className="text-gray-700">Upgrade your rig with premium components.</p>
        </header>
        <PartsList parts={parts} />
      </div>
    </div>
  );
}

export default App;