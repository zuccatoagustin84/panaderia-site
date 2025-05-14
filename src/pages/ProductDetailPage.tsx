import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, Info } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProductById(parseInt(id || '0'));
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
        <button 
          onClick={() => navigate('/products')}
          className="btn btn-primary"
        >
          Volver a productos
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="pt-16 pb-16">
      <div className="container-custom py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-primary-600 mb-6 hover:underline"
        >
          <ChevronLeft size={20} />
          <span>Volver</span>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          <div>
            <span className="text-gray-600 capitalize">{product.category}</span>
            <h1 className="text-3xl font-serif font-medium mt-2 mb-4">{product.name}</h1>
            <p className="text-2xl font-medium text-primary-700 mb-6">{product.price.toFixed(2)} €</p>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p>{product.description}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="font-medium mb-3">Ingredientes:</h3>
              <ul className="space-y-1">
                {product.ingredients?.map((ingredient, index) => (
                  <li key={index} className="text-gray-700 flex items-center">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            
            {product.allergens && product.allergens.length > 0 && (
              <div className="mb-8">
                <h3 className="font-medium mb-2">Alérgenos:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.allergens.map((allergen, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-red-50 text-red-700 text-sm px-3 py-1 rounded-full"
                    >
                      {allergen}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {product.nutritionalInfo && (
              <div className="mb-8">
                <h3 className="font-medium mb-2">Información Nutricional:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-600">Calorías</span>
                    <span className="font-medium">{product.nutritionalInfo.calories} kcal</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-600">Proteínas</span>
                    <span className="font-medium">{product.nutritionalInfo.protein} g</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-600">Carbohidratos</span>
                    <span className="font-medium">{product.nutritionalInfo.carbs} g</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <span className="block text-sm text-gray-600">Grasas</span>
                    <span className="font-medium">{product.nutritionalInfo.fat} g</span>
                  </div>
                </div>
              </div>
            )}
            
            <button
              onClick={handleAddToCart}
              className="btn btn-primary w-full md:w-auto flex items-center justify-center gap-2"
            >
              <ShoppingBag size={18} />
              <span>Añadir al carrito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;