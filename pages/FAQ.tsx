import React from 'react';
import SEOHead from '../components/SEOHead';
import FAQComponent from '../components/FAQ';

const FAQ: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Flooring FAQ | Common Questions About Flooring Installation"
        description="Find answers to frequently asked questions about flooring installation, products, pricing, warranties & maintenance. Yeti Flooring serves San Jose & the Bay Area."
        keywords="flooring FAQ, flooring installation questions, flooring warranty, flooring maintenance, flooring cost San Jose"
      />
      <FAQComponent />
    </>
  );
};

export default FAQ;

