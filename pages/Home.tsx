import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Visualizer from '../components/Visualizer';
import Difference from '../components/Difference';
import AboutHome from '../components/AboutHome';
import Inspiration from '../components/Inspiration';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Yeti Flooring | Professional Flooring Installation San Jose, CA"
        description="San Jose's trusted flooring installation experts. Professional hardwood, carpet, tile, luxury vinyl & laminate installation. Serving San Jose, Santa Clara, Sunnyvale, Campbell & Cupertino. Free estimates!"
        keywords="flooring installation San Jose, hardwood flooring San Jose, carpet installation, tile flooring, luxury vinyl flooring, laminate flooring, flooring contractor San Jose, Santa Clara flooring, Sunnyvale flooring, Campbell flooring, Cupertino flooring"
      />
      <Hero />
      <Contact simplified={true} />
      <Categories />
      <AboutHome />
      <Visualizer />
      <Difference />
      {/* <Inspiration /> */}
      <Testimonials />
    </>
  );
};

export default Home;

