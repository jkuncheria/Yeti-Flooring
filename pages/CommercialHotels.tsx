import React from 'react';
import SEOHead from '../components/SEOHead';
import CommercialHotelsComponent from '../components/CommercialHotels';

const CommercialHotels: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Hotel Flooring Installation San Jose | Hospitality Flooring Contractor"
        description="Professional hotel flooring installation in San Jose & Bay Area. Lobby, guest room, conference center & restaurant flooring. Phased installation, minimal guest disruption. Free estimates!"
        keywords="hotel flooring San Jose, hospitality flooring contractor, hotel lobby flooring, guest room flooring, resort flooring installation, commercial hotel flooring Bay Area, luxury hotel flooring"
      />
      <CommercialHotelsComponent />
    </>
  );
};

export default CommercialHotels;
