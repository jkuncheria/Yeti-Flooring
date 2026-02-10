import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Hotel, Bed, Coffee, Users, Sparkles, Shield, ArrowRight, Phone, Clock, Star } from 'lucide-react';

const CommercialHotels: React.FC = () => {
  const hotelAreas = [
    {
      name: 'Lobby & Reception',
      description: 'Create a stunning first impression with elegant, durable flooring that welcomes guests and withstands constant foot traffic.',
      flooring: ['Luxury Vinyl Plank', 'Porcelain Tile', 'Natural Stone', 'Commercial Hardwood'],
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Guest Rooms',
      description: 'Comfortable, quiet, and easy-to-maintain flooring that enhances guest experience and simplifies housekeeping.',
      flooring: ['Luxury Vinyl Plank', 'Commercial Carpet', 'Engineered Hardwood'],
      image: '/products/carpet.png'
    },
    {
      name: 'Hallways & Corridors',
      description: 'High-traffic rated flooring designed to maintain appearance despite thousands of daily footsteps.',
      flooring: ['Commercial Carpet Tile', 'Luxury Vinyl Tile', 'Porcelain Tile'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Restaurants & Bars',
      description: 'Slip-resistant, spill-proof flooring perfect for on-site dining and entertainment areas.',
      flooring: ['Commercial Tile', 'Luxury Vinyl', 'Polished Concrete'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Conference & Event Spaces',
      description: 'Professional, acoustically-friendly flooring for meetings, conferences, and special events.',
      flooring: ['Commercial Carpet', 'Luxury Vinyl Plank', 'Modular Carpet Tile'],
      image: '/products/laminate.jpg'
    },
    {
      name: 'Pool & Spa Areas',
      description: 'Water-resistant, slip-proof flooring designed for wet environments and barefoot comfort.',
      flooring: ['Porcelain Tile', 'Rubber Flooring', 'Non-Slip Vinyl'],
      image: '/products/tile.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-blue-900" />,
      title: 'Guest Experience Focus',
      description: 'Flooring solutions designed to enhance comfort, reduce noise, and create the premium atmosphere your guests expect.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Minimal Guest Disruption',
      description: 'Phased installation and off-peak scheduling to keep your hotel operational throughout the project.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Hospitality-Grade Durability',
      description: 'Commercial-rated products designed for 24/7 operations, heavy luggage, and constant cleaning.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Low-maintenance flooring that stays beautiful with standard housekeeping procedures.'
    }
  ];

  const features = [
    'Floor-by-floor phased installation',
    'Night and weekend scheduling available',
    'Noise-reducing underlayment options',
    'Stain and spill resistant materials',
    'Fire-rated flooring options',
    'ADA-compliant transitions and surfaces',
    'Coordinated multi-property projects',
    'Extended commercial warranties'
  ];

  const propertyTypes = [
    { name: 'Luxury Hotels & Resorts', icon: <Star className="w-6 h-6" /> },
    { name: 'Boutique Hotels', icon: <Hotel className="w-6 h-6" /> },
    { name: 'Business Hotels', icon: <Users className="w-6 h-6" /> },
    { name: 'Extended Stay Properties', icon: <Bed className="w-6 h-6" /> },
    { name: 'Motels & Inns', icon: <Coffee className="w-6 h-6" /> },
    { name: 'Bed & Breakfasts', icon: <Coffee className="w-6 h-6" /> }
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
                <span className="text-gray-600 text-sm">Hotels & Hospitality</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hotel & Hospitality Flooring Installation
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Elevate your guest experience with premium commercial flooring designed for the hospitality industry. From luxury hotel lobbies to guest rooms and conference centers, we deliver elegant, durable flooring solutions that impress guests and withstand the demands of 24/7 operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Hotel Flooring Quote
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
                  <Hotel className="w-10 h-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Hospitality Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Experience with major hotel brands</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Floor-by-floor phased installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>24/7 project coordination</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Brand standard compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area hotels</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types We Serve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Properties We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {propertyTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="text-blue-900 flex justify-center mb-2">{type.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING BY AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Solutions for Every Hotel Space</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different areas of your hotel have unique requirements. We provide tailored flooring solutions for each space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelAreas.map((area, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Hospitality Advantage</h2>
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
              Hotel Flooring Services Include
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

        {/* Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">OUR PROCESS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">How We Work With Hotels</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Consultation', desc: 'We assess your property, understand your brand standards, and discuss your timeline and budget.' },
              { step: '2', title: 'Planning', desc: 'We create a detailed phased installation plan that minimizes guest disruption and maintains occupancy.' },
              { step: '3', title: 'Installation', desc: 'Our team works efficiently during off-peak hours, completing floor-by-floor with minimal noise.' },
              { step: '4', title: 'Completion', desc: 'Final inspection, cleanup, and handover with maintenance guidelines for your housekeeping team.' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Hotel's Flooring?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation. We'll assess your property, discuss your brand requirements, and provide a detailed proposal with phased installation options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Hotel Flooring Quote
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

export default CommercialHotels;
