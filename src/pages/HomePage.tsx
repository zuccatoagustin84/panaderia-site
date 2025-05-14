import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import About from '../components/home/About';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;