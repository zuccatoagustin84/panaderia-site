import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1070946/pexels-photo-1070946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Pan recién horneado" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight">
            El auténtico sabor de la panadería artesanal
          </h1>
          <p className="mt-4 md:mt-6 text-xl text-gray-100">
            Pan recién horneado cada día, elaborado con ingredientes naturales y pasión por nuestro oficio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="btn btn-primary px-6 py-3"
            >
              Ver productos
            </Link>
            <Link 
              to="/about" 
              className="btn px-6 py-3 bg-white text-primary-600 hover:bg-gray-100"
            >
              Nuestra historia
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;