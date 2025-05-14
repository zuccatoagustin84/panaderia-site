import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "María García",
    role: "Cliente habitual",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    content: "El mejor pan artesanal que he probado. Su corteza crujiente y miga tierna me recuerdan al pan que hacía mi abuela. ¡No puedo pasar un fin de semana sin comprar su pan de centeno!",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Chef local",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Como chef, valoro enormemente la calidad de sus productos. Uso su pan en mi restaurante y mis clientes siempre lo elogian. La consistencia en la calidad es admirable.",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Martínez",
    role: "Bloguera gastronómica",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "He visitado muchas panaderías para mi blog, y esta es sin duda una de las mejores. Sus croissants son comparables a los de las mejores pastelerías de París. ¡Impresionante!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-primary-700">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre por qué nuestros clientes vuelven una y otra vez a nuestra panadería.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex gap-2 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} className="fill-secondary-500 text-secondary-500" />
        ))}
      </div>
      
      <p className="italic text-gray-700 mb-6">"{testimonial.content}"</p>
      
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="h-12 w-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;