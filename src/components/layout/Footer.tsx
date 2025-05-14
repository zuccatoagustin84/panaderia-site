import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Panadería Artesanal</h3>
            <p className="text-primary-100 mb-4">
              Artesanos de la panadería desde 1985. Elaboramos productos de la más alta calidad con ingredientes naturales.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={20} />} href="https://twitter.com" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Navegación</h4>
            <ul className="space-y-2">
              <FooterLink to="/" label="Inicio" />
              <FooterLink to="/products" label="Productos" />
              <FooterLink to="/about" label="Nosotros" />
              <FooterLink to="/contact" label="Contacto" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Categorías</h4>
            <ul className="space-y-2">
              <FooterLink to="/products?category=panes" label="Panes" />
              <FooterLink to="/products?category=bollería" label="Bollería" />
              <FooterLink to="/products?category=pasteles" label="Pasteles y Tartas" />
              <FooterLink to="/products?category=dulces" label="Dulces" />
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary-400" />
                <span>Calle Panaderos 123, Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary-400" />
                <span>+34 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary-400" />
                <span>info@panaderiaartesanal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-200">
              © {new Date().getFullYear()} Panadería Artesanal. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-sm text-primary-200 hover:text-white">
                Términos y Condiciones
              </Link>
              <Link to="/privacy" className="text-sm text-primary-200 hover:text-white">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  to: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, label }) => (
  <li>
    <Link to={to} className="text-primary-100 hover:text-white transition-colors">
      {label}
    </Link>
  </li>
);

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="h-8 w-8 rounded-full bg-primary-500 flex items-center justify-center hover:bg-secondary-500 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;