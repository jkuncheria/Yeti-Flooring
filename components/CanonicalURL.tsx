import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const CanonicalURL: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Remove existing canonical link if any
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }
    
    // Create new canonical link
    const canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `https://yetiflooring.com${location.pathname}`);
    document.head.appendChild(canonical);
    
    return () => {
      // Cleanup on unmount
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove) {
        canonicalToRemove.remove();
      }
    };
  }, [location.pathname]);
  
  return null;
};

export default CanonicalURL;

