import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Store, ShoppingBag, Shirt, Coffee, Gem, ShoppingCart, ArrowRight, Phone, Clock, Shield, Sparkles, Eye } from 'lucide-react';

const CommercialRetail: React.FC = () => {
  const retailAreas = [
    {
      name: 'Sales Floor',
      description: 'Eye-catching, durable flooring that enhances product displays and guides customer flow through your store.',
      flooring: ['Luxury Vinyl Plank', 'Polished Concrete', 'Commercial Tile'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Entrance & Vestibule',
      description: 'Heavy-duty, slip-resistant flooring that handles weather, dirt, and the highest foot traffic in your store.',
      flooring: ['Commercial Tile', 'Rubber Matting', 'Polished Concrete'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Fitting Rooms',
      description: 'Comfortable, easy-to-clean flooring that creates a pleasant try-on experience for customers.',
      flooring: ['Luxury Vinyl', 'Commercial Carpet', 'Laminate'],
      image: '/products/carpet.png'
    },
    {
      name: 'Checkout Area',
      description: 'Durable flooring that withstands constant foot traffic and shopping cart wheels while maintaining appearance.',
      flooring: ['Luxury Vinyl Tile', 'Commercial Tile', 'Polished Concrete'],
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Stockroom & Back of House',
      description: 'Functional, easy-to-maintain flooring built for heavy loads, pallet jacks, and frequent cleaning.',
      flooring: ['Epoxy Flooring', 'Polished Concrete', 'Commercial Vinyl'],
      image: '/products/laminate.jpg'
    },
    {
      name: 'Window Displays',
      description: 'Premium flooring that complements your merchandise and creates stunning visual presentations.',
      flooring: ['Hardwood', 'Luxury Vinyl Plank', 'Custom Tile'],
      image: '/products/hardwood.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-blue-900" />,
      title: 'Brand Enhancement',
      description: 'Flooring that reinforces your brand identity and creates the shopping atmosphere your customers expect.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'After-Hours Installation',
      description: 'We work nights and weekends to complete your project without losing a single day of sales.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'High-Traffic Durability',
      description: 'Commercial-rated products designed to maintain appearance despite thousands of daily customers.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Low-maintenance flooring that stays beautiful with standard retail cleaning procedures.'
    }
  ];

  const features = [
    'Overnight and weekend installation',
    'Section-by-section phased approach',
    'Shopping cart and pallet jack resistant',
    'Slip-resistant options for entrances',
    'Stain and spill resistant materials',
    'ADA-compliant transitions',
    'Multi-location rollout coordination',
    'Extended commercial warranties'
  ];

  const storeTypes = [
    { name: 'Fashion & Apparel', icon: <Shirt className="w-6 h-6" /> },
    { name: 'Grocery & Supermarkets', icon: <ShoppingCart className="w-6 h-6" /> },
    { name: 'Jewelry & Luxury', icon: <Gem className="w-6 h-6" /> },
    { name: 'Cafes & Quick Service', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Big Box Retail', icon: <Store className="w-6 h-6" /> },
    { name: 'Boutiques & Specialty', icon: <ShoppingBag className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Link to="/commercial" className="text-blue-900 hover:underline text-sm font-semibold">Commercial</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600 text-sm">Retail Stores</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Retail Store Flooring Installation
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create the perfect shopping environment with commercial flooring designed for retail. From boutiques to big box stores, we deliver durable, attractive flooring that enhances your brand, guides customer flow, and withstands the demands of high-traffic retail environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Retail Flooring Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+14082396550" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  (408) 239-6550
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <Store className="w-10 h-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Retail Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Experience with major retail brands</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Zero lost sales days</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Overnight installation available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Multi-store rollout coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area retailers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Store Types We Serve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Retail Stores We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {storeTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="text-blue-900 flex justify-center mb-2">{type.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retail Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING BY AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Solutions for Every Retail Space</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different areas of your store have unique requirements. We provide tailored flooring solutions for each space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-blue-900 transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={`${area.name} flooring`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">{area.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Recommended:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.flooring.map((floor, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-900 px-3 py-1 rounded-full">
                          {floor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Retail Advantage</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-blue-50 transition-colors duration-300"
              >
                <div className="bg-white p-4 rounded-full inline-flex mb-6 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Retail Flooring Services Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-yellow-400 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Retail Space?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation. We'll assess your store, discuss your brand requirements, and provide a detailed proposal with after-hours installation options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Retail Flooring Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+14082396550" className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call (408) 239-6550
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommercialRetail;
