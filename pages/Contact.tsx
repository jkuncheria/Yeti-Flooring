import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Contact Yeti Flooring | Free Estimates San Jose, CA"
        description="Contact Yeti Flooring for free flooring estimates in San Jose, Santa Clara, Sunnyvale, Campbell & Cupertino. Call (408) 239-6550 or request a quote online. Fast response!"
        keywords="contact flooring company San Jose, free flooring estimate, flooring quote San Jose, flooring consultation, Bay Area flooring contractor"
      />
      <ContactComponent />
    </>
  );
};

export default Contact;

