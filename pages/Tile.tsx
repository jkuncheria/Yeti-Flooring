import React from 'react';
import SEOHead from '../components/SEOHead';
import TileComponent from '../components/Tile';

const Tile: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Tile Flooring Installation San Jose | Ceramic, Porcelain & Stone"
        description="Professional tile flooring installation in San Jose, CA. Ceramic, porcelain, natural stone & mosaic tiles. Expert installation for kitchens, bathrooms & more. Free estimates!"
        keywords="tile flooring San Jose, tile installation, ceramic tile, porcelain tile, bathroom tile, kitchen tile, stone flooring, Bay Area tile installer"
      />
      <TileComponent />
    </>
  );
};

export default Tile;

