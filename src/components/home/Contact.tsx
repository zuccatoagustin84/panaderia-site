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
            Estamos cerca de ti. Ven a probar nuestros productos recién hechos o contáctanos para hacer un pedido especial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden h-[400px] shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8464388537346!2d-3.7033591238124437!3d40.41678935495521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422883ba1eac65%3A0xd5d59cf18b6e4aed!2sC.%20Mayor%2C%20Madrid!5e0!3m2!1ses!2ses!4v1696869332413!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la panadería"
            ></iframe>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif text-primary-700 mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <InfoItem 
                  icon={<MapPin className="h-6 w-6 text-primary-600" />}
                  title="Dirección"
                  content="Calle Panaderos 123, Madrid, España"
                />
                
                <InfoItem 
                  icon={<Phone className="h-6 w-6 text-primary-600" />}
                  title="Teléfono"
                  content="+34 912 345 678"
                />
                
                <InfoItem 
                  icon={<Clock className="h-6 w-6 text-primary-600" />}
                  title="Horario"
                  content={
                    <>
                      Lunes a Viernes: 7:00 - 20:00<br />
                      Sábados: 8:00 - 14:00<br />
                      Domingos: 9:00 - 13:00
                    </>
                  }
                />
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/contact" className="btn btn-primary w-full">
                Contáctanos
              </Link>
            </div>
          </div>
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