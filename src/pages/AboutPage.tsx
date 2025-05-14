import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Heart, User } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="bg-primary-600 py-12">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-serif text-white">Nuestra Historia</h1>
          <p className="text-primary-100 mt-2">
            Conoce más sobre nuestra panadería artesanal y nuestra pasión por el buen pan
          </p>
        </div>
      </div>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif text-primary-700 mb-6">
                Desde 1810, horneando tradición
              </h2>
              <div className="prose prose-slate max-w-none">
                <p>
                  Fundada en 1985 por Antonio Rodríguez, Panadería Artesanal surgió de un sueño: recuperar el auténtico sabor del pan tradicional en una época en la que la industrialización empezaba a cambiar el sector.
                </p>
                <p>
                  Empezamos como un pequeño obrador familiar en el centro de Madrid, donde Antonio elaboraba pan siguiendo las recetas que había aprendido de su abuelo, utilizando masa madre natural y respetando los tiempos de fermentación.
                </p>
                <p>
                  Con el paso de los años, nuestro compromiso con la calidad y la tradición nos ha permitido crecer, pero siempre manteniendo la esencia de lo que somos: artesanos del pan que elaboran cada pieza con dedicación y amor por el oficio.
                </p>
                <p>
                  Hoy, la segunda generación de la familia continúa con la misma pasión, incorporando nuevas técnicas e ideas, pero sin perder de vista nuestros valores fundamentales: calidad, tradición e innovación responsable.
                </p>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity:.1, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/1855214/pexels-photo-1855214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Panadería en 1985" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 h-48 w-48 bg-secondary-500 rounded-lg hidden lg:block" style={{ zIndex: -1 }} />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-primary-700">Nuestros Valores</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Estos son los principios que guían nuestro trabajo diario y que nos definen como panadería artesanal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueCard 
              icon={<Clock className="h-10 w-10 text-primary-600" />}
              title="Tradición"
              description="Respetamos los métodos tradicionales y los tiempos de elaboración para conseguir productos de calidad superior."
            />
            <ValueCard 
              icon={<Award className="h-10 w-10 text-primary-600" />}
              title="Calidad"
              description="Seleccionamos cuidadosamente cada ingrediente y controlamos cada fase del proceso para garantizar la excelencia."
            />
            <ValueCard 
              icon={<Heart className="h-10 w-10 text-primary-600" />}
              title="Pasión"
              description="Amamos lo que hacemos y eso se refleja en cada uno de nuestros productos. El pan es nuestra vida."
            />
            <ValueCard 
              icon={<User className="h-10 w-10 text-primary-600" />}
              title="Cercanía"
              description="Mantenemos una relación estrecha con nuestros clientes, escuchando sus necesidades y adaptándonos a ellas."
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/8108063/pexels-photo-8108063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Nuestro proceso artesanal" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </motion.div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-serif text-primary-700 mb-6">
                Nuestro proceso artesanal
              </h2>
              <div className="space-y-6">
                <ProcessStep 
                  number="01"
                  title="Selección de ingredientes"
                  description="Elegimos harinas de molinos locales, agua de calidad, sal marina y masa madre cultivada en nuestro obrador."
                />
                <ProcessStep 
                  number="02"
                  title="Fermentación lenta"
                  description="Dejamos que las masas fermenten entre 24 y 48 horas para desarrollar todo su sabor y aroma."
                />
                <ProcessStep 
                  number="03"
                  title="Formado manual"
                  description="Cada pieza es formada a mano, respetando la delicada estructura de la masa."
                />
                <ProcessStep 
                  number="04"
                  title="Horneado tradicional"
                  description="Utilizamos un horno de solera de piedra que confiere a nuestros panes una corteza crujiente y una miga perfecta."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-serif mb-6">¿Quieres probar nuestros productos?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Te invitamos a visitar nuestra panadería y descubrir el auténtico sabor del pan artesanal. También puedes realizar tu pedido online y recibirlo en casa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Ver productos
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description }) => {
  return (
    <div className="flex">
      <div className="mr-4">
        <span className="inline-block bg-primary-100 text-primary-600 font-bold w-12 h-12 rounded-full flex items-center justify-center">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AboutPage;