import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/forms/ContactForm';
import OrderForm from '../components/forms/OrderForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif text-white">Contacto</h1>
          <p className="text-primary-100 mt-2">
            Estamos aquí para atenderte. Contáctanos o realiza un pedido especial.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif text-primary-700 mb-6">Información de contacto</h2>
            
            <div className="space-y-6 mb-8">
              <ContactInfo 
                icon={<Phone className="h-6 w-6 text-primary-600" />}
                title="Teléfono"
                content="+34 912 345 678"
              />
              
              <ContactInfo 
                icon={<Mail className="h-6 w-6 text-primary-600" />}
                title="Email"
                content="info@panaderiaartesanal.com"
              />
              
              <ContactInfo 
                icon={<MapPin className="h-6 w-6 text-primary-600" />}
                title="Dirección"
                content="Calle Panaderos 123, Madrid, España"
              />
              
              <ContactInfo 
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
            
            <div className="rounded-lg overflow-hidden h-[300px] shadow-md">
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
          </div>
          
          <div>
            <h2 className="text-2xl font-serif text-primary-700 mb-6">Envíanos un mensaje</h2>
            <ContactForm />
            
            <div className="mt-12">
              <h2 className="text-2xl font-serif text-primary-700 mb-6">Pedidos especiales</h2>
              <p className="text-gray-600 mb-6">
                ¿Necesitas un pedido personalizado? Rellena el siguiente formulario y nos pondremos en contacto contigo para confirmar los detalles.
              </p>
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-700 mt-1">{content}</p>
      </div>
    </div>
  );
};

export default ContactPage;