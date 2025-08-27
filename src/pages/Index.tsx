import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ProductFilters } from '../components/ProductFilters';
import { ProductGrid } from '../components/ProductGrid';
import { Footer } from '../components/Footer';
import { CartProvider } from '../contexts/CartContext';
import { products } from '../data/products';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sortBy, setSortBy] = useState('name');

  console.log('Rendering Index page with', products.length, 'products');
  console.log('Selected category:', selectedCategory);
  console.log('Sort by:', sortBy);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;
    
    // Filtrar por categoría
    if (selectedCategory !== 'Todos') {
      filtered = products.filter(product => product.category === selectedCategory);
    }
    
    // Ordenar
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    console.log('Filtered and sorted products:', sorted.length);
    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        
        <main className="container mx-auto px-4 py-8">
          <ProductFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          
          <ProductGrid products={filteredAndSortedProducts} />
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;