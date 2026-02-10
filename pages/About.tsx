import React from 'react';
import SEOHead from '../components/SEOHead';
import AboutComponent from '../components/About';

const About: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="About Yeti Flooring | San Jose's Trusted Flooring Experts"
        description="Learn about Yeti Flooring - San Jose's premier flooring installation company. Years of experience, certified installers, and quality craftsmanship. Serving the Bay Area."
        keywords="about Yeti Flooring, San Jose flooring company, flooring experts, certified flooring installers, Bay Area flooring contractor"
      />
      <AboutComponent />
    </>
  );
};

export default About;

