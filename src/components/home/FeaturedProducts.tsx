import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from '../products/ProductGrid';
import { getFeaturedProducts } from '../../data/products';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-700">Nuestros productos destacados</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de productos más populares, elaborados con ingredientes de primera calidad y mucho amor.
          </p>
        </div>
        
        <ProductGrid products={featuredProducts} />
        
        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="btn btn-outline"
          >
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;