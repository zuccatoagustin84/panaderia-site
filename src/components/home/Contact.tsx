import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-700">Visítanos</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Estamos cerca de ti. Visita cualquiera de nuestras dos sucursales y disfruta de nuestros productos recién horneados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-primary-700 mb-6">Sucursal Pérez</h3>
            <div className="space-y-6">
              <InfoItem 
                icon={<MapPin className="h-6 w-6 text-primary-600" />}
                title="Dirección"
                content="Pérez, Santa Fe, Argentina"
              />
              
              <InfoItem 
                icon={<Clock className="h-6 w-6 text-primary-600" />}
                title="Horario"
                content={
                  <>
                    Lunes a Sábado: 7:00 - 13:00<br />
                    y 16:00 - 20:00<br />
                    Domingos: Cerrado
                  </>
                }
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-serif text-primary-700 mb-6">Sucursal Soldini</h3>
            <div className="space-y-6">
              <InfoItem 
                icon={<MapPin className="h-6 w-6 text-primary-600" />}
                title="Dirección"
                content="Soldini, Santa Fe, Argentina"
              />
              
              <InfoItem 
                icon={<Clock className="h-6 w-6 text-primary-600" />}
                title="Horario"
                content={
                  <>
                    Lunes a Sábado: 7:00 - 13:00<br />
                    y 16:00 - 20:00<br />
                    Domingos: Cerrado
                  </>
                }
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact" className="btn btn-primary">
            Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-700 mt-1">{content}</p>
      </div>
    </div>
  );
};

export default ContactSection;