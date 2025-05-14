import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Award, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-primary-700 mb-4">
              La tradición del buen pan desde 1985
            </h2>
            <p className="text-gray-700 mb-6">
              En Panadería Artesanal nos dedicamos a rescatar las recetas y métodos tradicionales de elaboración. Utilizamos masa madre natural, largas fermentaciones y horneamos en horno de piedra para conseguir el auténtico sabor del pan de siempre.
            </p>
            <p className="text-gray-700 mb-8">
              Nuestro equipo de maestros panaderos y pasteleros trabaja con pasión cada día para ofrecerte productos de la máxima calidad, elaborados con ingredientes cuidadosamente seleccionados y sin aditivos artificiales.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <FeatureCard 
                icon={<Clock className="h-8 w-8 text-primary-600" />}
                title="Tradición"
                description="Métodos artesanales y recetas transmitidas de generación en generación."
              />
              <FeatureCard 
                icon={<Award className="h-8 w-8 text-primary-600" />}
                title="Calidad"
                description="Ingredientes seleccionados y procesos cuidados al detalle."
              />
              <FeatureCard 
                icon={<Heart className="h-8 w-8 text-primary-600" />}
                title="Pasión"
                description="Dedicación y amor por el oficio en cada elaboración."
              />
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Conoce nuestra historia
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/6605206/pexels-photo-6605206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Panadero trabajando" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-8 -left-8 h-48 w-48 bg-secondary-500 rounded-lg hidden lg:block" style={{ zIndex: -1 }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="mb-3">{icon}</div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default About;