import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductGrid from '../components/products/ProductGrid';
import CategoryFilter from '../components/products/CategoryFilter';
import { products, getProductsByCategory } from '../data/products';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category') || '';
  
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [filteredProducts, setFilteredProducts] = useState(
    categoryParam ? getProductsByCategory(categoryParam) : products
  );

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(getProductsByCategory(selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="pt-16 pb-16">
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif text-white">Nuestros Productos</h1>
          <p className="text-primary-100 mt-2">
            Descubre nuestra selección de panes, bollería y pasteles elaborados artesanalmente
          </p>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside>
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onSelectCategory={handleSelectCategory} 
            />
          </aside>
          
          <div>
            {filteredProducts.length > 0 ? (
              <ProductGrid products={filteredProducts} />
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No se encontraron productos en esta categoría.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;