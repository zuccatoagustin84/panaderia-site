import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
          <h1 className="text-2xl font-serif mb-4">Tu carrito está vacío</h1>
          <p className="text-gray-600 mb-8">Parece que aún no has añadido ningún producto a tu carrito de compra.</p>
          <Link to="/products" className="btn btn-primary">
            Explorar productos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-16">
      <h1 className="text-3xl font-serif mb-8">Tu Carrito</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <div>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-[3fr_1fr_1fr_auto] px-6 py-3 bg-gray-50">
              <span className="font-medium">Producto</span>
              <span className="font-medium text-center">Precio</span>
              <span className="font-medium text-center">Cantidad</span>
              <span></span>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.product.id} className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr_auto] gap-4 items-center">
                  <div className="flex items-center">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name} 
                      className="h-20 w-20 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-sm text-gray-600 md:hidden">
                        {item.product.price.toFixed(2)} € / unidad
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center hidden md:block">
                    {item.product.price.toFixed(2)} €
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="flex items-center border border-gray-300 rounded-md">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        aria-label="Reducir cantidad"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      onClick={() => removeFromCart(item.product.id)}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between">
            <button 
              onClick={clearCart}
              className="text-gray-600 hover:text-gray-800 text-sm underline"
            >
              Vaciar carrito
            </button>
            
            <Link to="/products" className="text-primary-600 hover:text-primary-700 text-sm underline">
              Seguir comprando
            </Link>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-medium mb-4">Resumen del pedido</h2>
            
            <div className="space-y-3 mb-6">
              {cart.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm">
                  <span>
                    {item.product.name} x {item.quantity}
                  </span>
                  <span className="font-medium">
                    {(item.product.price * item.quantity).toFixed(2)} €
                  </span>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-medium">{getTotalPrice().toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>IVA (10%)</span>
                <span>{(getTotalPrice() * 0.1).toFixed(2)} €</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total</span>
                <span>{(getTotalPrice() * 1.1).toFixed(2)} €</span>
              </div>
            </div>
            
            <button className="btn btn-primary w-full">
              Proceder al pago
            </button>
            
            <p className="text-xs text-gray-600 text-center mt-4">
              Los impuestos y gastos de envío se calcularán en la página de pago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;