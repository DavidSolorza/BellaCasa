import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import ProductModal from './components/ProductModal';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import { LocationProvider } from './context/LocationContext';
import { Product } from './types/Product';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <LocationProvider>
      <CartProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <Hero />
          <FeaturedProducts onProductSelect={setSelectedProduct} />
          <Footer />
          
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </CartProvider>
    </LocationProvider>
  );
}

export default App;