import React, { useState, useEffect } from 'react';
import { products } from './data/products';
import { categories } from './data/categories';
import { CartProvider, useCart } from './contexts/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import ProductCard from './components/ProductCard';
import FeaturedProducts from './components/FeaturedProducts';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { Product } from './types';

const AppContent: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, searchQuery]);

  const filterProducts = () => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(product => product.category === selectedCategory);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleProductDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        onCartClick={() => setIsCartOpen(true)} 
        onSearchChange={handleSearch}
      />
      
      <main className="flex-grow">
        <Hero onSearch={handleSearch} />
        
        <FeaturedProducts 
          products={products} 
          onAddToCart={addToCart}
          onViewDetails={handleProductDetails}
        />
        
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nuestros Productos</h2>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/4 mb-6 lg:mb-0 lg:pr-6">
                <CategoryFilter 
                  categories={categories} 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={handleCategorySelect}
                />
              </div>
              
              <div className="lg:w-3/4">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No se encontraron productos</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Intenta ajustar tu búsqueda o filtro para encontrar lo que estás buscando.
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          setSelectedCategory('all');
                          setSearchQuery('');
                        }}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Limpiar filtros
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        onAddToCart={addToCart}
                        onViewDetails={handleProductDetails}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;