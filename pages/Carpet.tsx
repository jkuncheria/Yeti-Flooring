import React from 'react';
import SEOHead from '../components/SEOHead';
import CarpetComponent from '../components/Carpet';

const Carpet: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Carpet Installation San Jose | Professional Carpet Flooring"
        description="Expert carpet installation in San Jose, CA. Wide selection of plush, berber, frieze & patterned carpets. Professional installation, free estimates. Serving Santa Clara, Sunnyvale & the Bay Area."
        keywords="carpet installation San Jose, carpet flooring, plush carpet, berber carpet, carpet installer, residential carpet, Bay Area carpet installation"
      />
      <CarpetComponent />
    </>
  );
};

export default Carpet;

