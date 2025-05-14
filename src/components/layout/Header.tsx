import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.jpg" 
            alt="Canela Logo" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="font-serif text-2xl font-bold text-primary-600">Canela Panadería Artesanalnela</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Inicio" />
          <NavLink to="/products" label="Productos" />
          <NavLink to="/about" label="Nosotros" />
          <NavLink to="/contact" label="Contacto" />
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-6 w-6 text-primary-600" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingBag className="h-6 w-6 text-primary-600" />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          <button onClick={toggleMenu} className="text-primary-600">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 flex flex-col space-y-4">
          <NavLink to="/" label="Inicio" />
          <NavLink to="/products" label="Productos" />
          <NavLink to="/about" label="Nosotros" />
          <NavLink to="/contact" label="Contacto" />
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to || 
                   (to !== '/' && location.pathname.startsWith(to));

  return (
    <Link 
      to={to} 
      className={`font-medium text-sm transition-colors ${
        isActive 
          ? 'text-primary-600 border-b-2 border-primary-600' 
          : 'text-gray-700 hover:text-primary-600'
      }`}
    >
      {label}
    </Link>
  );
};

export default Header;