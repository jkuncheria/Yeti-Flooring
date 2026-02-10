import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const COMMERCIAL_SUBMENU = [
  { label: 'All Commercial', href: '/commercial' },
  { label: 'Hotels & Hospitality', href: '/commercial/hotels' },
  { label: 'Retail Stores', href: '/commercial/retail' },
  { label: 'Gyms & Fitness', href: '/commercial/gyms' },
  { label: 'Theaters & Entertainment', href: '/commercial/theaters' },
  { label: 'Healthcare Facilities', href: '/commercial/healthcare' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCommercialOpen, setIsCommercialOpen] = useState(false);
  const [isMobileCommercialOpen, setIsMobileCommercialOpen] = useState(false);
  const commercialRef = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commercialRef.current && !commercialRef.current.contains(event.target as Node)) {
        setIsCommercialOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full flex flex-col font-sans z-50 relative">
      {/* Top Bar */}
      <div className="bg-gray-100 text-xs py-2 px-4 flex justify-center items-center border-b border-gray-200">
        <div className="text-center text-blue-900 font-semibold">
          <span className="mr-2">🏠 FREE ESTIMATES & PROFESSIONAL INSTALLATION!</span>
          <Link to="/contact" onClick={scrollToTop} className="underline hover:text-blue-700">Get Quote</Link>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="bg-white py-4 px-4 md:px-8 lg:px-16 shadow-sm">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-4 relative">
          
          {/* Mobile Menu Toggle (Left side - Contact/Phone icons) */}
          <div className="w-full md:w-auto flex justify-start items-center md:hidden md:col-span-1">
            <div className="flex items-center gap-2">
              <Link 
                to="/contact"
                onClick={scrollToTop}
                className="p-2 border-2 border-blue-900 text-blue-900 rounded-lg"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <a 
                href="tel:+14082396550"
                className="p-2 bg-blue-900 text-white rounded-lg"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Menu (Right side on mobile) */}
          <div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2">
            <button 
              className="p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none md:col-start-2 md:col-end-3 md:flex md:justify-center">
            <Link to="/" onClick={scrollToTop} className="flex items-center justify-center group">
              <img 
                src="/yetilogo-optimized.webp" 
                alt="Yeti Flooring" 
                className="h-12 md:h-24 lg:h-28 w-auto object-contain"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </div>

          {/* Call & Contact Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3 md:col-start-3 md:col-end-4 md:justify-end">
            <Link 
              to="/contact"
              onClick={scrollToTop}
              className="flex items-center border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Link>
            <a 
              href="tel:+14082396550"
              className="flex items-center bg-blue-900 hover:bg-blue-800 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all transform hover:scale-105 shadow-md"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
          </div>

          {/* Search & Store Locator (Desktop) - COMMENTED OUT */}
          {/* <div className="hidden md:flex flex-1 max-w-2xl mx-8 items-center space-x-4">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search for floors, inspiration, and more..." 
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            <button className="flex items-center text-blue-900 font-semibold text-sm whitespace-nowrap hover:underline">
              <MapPin className="w-4 h-4 mr-1" />
              Find a Store
            </button>
          </div> */}

        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-blue-900 text-white ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto px-4 md:px-16">
          <ul className="flex flex-col md:flex-row md:justify-center md:space-x-8 lg:space-x-12 text-sm font-extrabold py-4 md:py-0">
            {NAV_ITEMS.map((item) => {
              // Special handling for Commercial dropdown
              if (item.label === 'Commercial') {
                return (
                  <li 
                    key={item.label} 
                    ref={commercialRef}
                    className="border-b border-blue-800 md:border-none relative"
                  >
                    {/* Desktop Dropdown */}
                    <button
                      className="hidden md:flex items-center gap-1 py-4 hover:text-yellow-400 transition-colors"
                      onClick={() => setIsCommercialOpen(!isCommercialOpen)}
                      onMouseEnter={() => setIsCommercialOpen(true)}
                    >
                      {item.label.toUpperCase()}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isCommercialOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Desktop Dropdown Menu */}
                    {isCommercialOpen && (
                      <div 
                        className="hidden md:block absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 min-w-[220px] z-50"
                        onMouseLeave={() => setIsCommercialOpen(false)}
                      >
                        {COMMERCIAL_SUBMENU.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-4 py-2.5 text-gray-800 hover:bg-blue-50 hover:text-blue-900 font-semibold text-sm transition-colors"
                            onClick={() => {
                              setIsCommercialOpen(false);
                              scrollToTop();
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Accordion */}
                    <button
                      className="md:hidden w-full flex items-center justify-between py-3 hover:text-yellow-400 transition-colors"
                      onClick={() => setIsMobileCommercialOpen(!isMobileCommercialOpen)}
                    >
                      {item.label.toUpperCase()}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileCommercialOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Submenu */}
                    {isMobileCommercialOpen && (
                      <div className="md:hidden bg-blue-800 rounded-lg mb-2">
                        {COMMERCIAL_SUBMENU.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block px-4 py-2.5 text-white hover:text-yellow-400 font-semibold text-sm transition-colors"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobileCommercialOpen(false);
                              scrollToTop();
                            }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li 
                  key={item.label} 
                  className="border-b border-blue-800 md:border-none last:border-none"
                >
                  {item.href.startsWith('#') ? (
                  <a 
                    href={item.href} 
                    className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                  >
                    {item.label.toUpperCase()}
                  </a>
                  ) : item.href.startsWith('http://') || item.href.startsWith('https://') ? (
                    <a 
                      href={item.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.label.toUpperCase()}
                    </a>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="block py-3 md:py-4 hover:text-yellow-400 transition-colors"
                      onClick={() => {
                        setIsMenuOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.label.toUpperCase()}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;