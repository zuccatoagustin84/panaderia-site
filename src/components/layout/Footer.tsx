import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">Canela Panadería Artesanal</h3>
            <p className="text-primary-100 mb-4">
              Elaboramos productos de la más alta calidad con ingredientes naturales y el sabor de siempre.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                icon={<Facebook size={20} />} 
                href="https://www.facebook.com/p/Canela-Panader%C3%ADa-artesanal-100054347807917/" 
              />
              <SocialIcon 
                icon={<Instagram size={20} />} 
                href="https://www.instagram.com/canela_panaderia_soldini/" 
              />
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
            <h4 className="text-lg font-serif font-medium mb-4">Sucursales</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary-400" />
                <span>Pérez, Santa Fe</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-secondary-400" />
                <span>Soldini, Santa Fe</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-medium mb-4">Horarios</h4>
            <p className="text-primary-100">
              Lunes a Sábado:<br />
              7:00 - 13:00<br />
              16:00 - 20:00<br />
              Domingos: Cerrado
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-500">
          <p className="text-sm text-primary-200 text-center">
            © {new Date().getFullYear()} Canela Panadería Artesanal. Todos los derechos reservados.
          </p>
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