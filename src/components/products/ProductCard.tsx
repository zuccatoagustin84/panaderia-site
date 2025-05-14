import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Info } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../contexts/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="product-card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-48 sm:h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.featured && (
          <div className="absolute top-2 left-2 bg-secondary-500 text-white text-xs px-2 py-1 rounded-md">
            Destacado
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-serif text-lg font-medium">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-2 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-medium text-primary-700">{product.price.toFixed(2)} €</span>
          <div className="flex space-x-2">
            <Link 
              to={`/products/${product.id}`}
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
              aria-label="Ver detalles"
            >
              <Info size={18} />
            </Link>
            <button
              onClick={handleAddToCart}
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
              aria-label="Añadir al carrito"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;