import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Film, Music, Mic2, Theater, Popcorn, ArrowRight, Phone, Clock, Shield, Sparkles, Volume2 } from 'lucide-react';

const CommercialTheaters: React.FC = () => {
  const theaterAreas = [
    {
      name: 'Auditoriums & Screening Rooms',
      description: 'Acoustically-optimized, comfortable flooring that enhances the viewing experience and reduces noise.',
      flooring: ['Commercial Carpet', 'Acoustic Underlayment', 'Carpet Tile'],
      image: '/products/carpet.png'
    },
    {
      name: 'Lobby & Concession Areas',
      description: 'Durable, easy-to-clean flooring that handles spills, high traffic, and creates a welcoming atmosphere.',
      flooring: ['Luxury Vinyl Tile', 'Polished Concrete', 'Commercial Tile'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Aisles & Walkways',
      description: 'Low-profile, slip-resistant flooring with integrated lighting compatibility for safe navigation.',
      flooring: ['Commercial Carpet', 'Rubber Flooring', 'Low-Pile Carpet Tile'],
      image: '/products/carpet.png'
    },
    {
      name: 'Stage & Performance Areas',
      description: 'Professional-grade flooring designed for performers, with proper cushioning and acoustic properties.',
      flooring: ['Sprung Wood Flooring', 'Marley Flooring', 'Stage Vinyl'],
      image: '/products/hardwood.jpg'
    },
    {
      name: 'VIP & Premium Seating',
      description: 'Upscale flooring that creates a premium experience for your most valued guests.',
      flooring: ['Luxury Carpet', 'Hardwood', 'Premium Vinyl Plank'],
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Restrooms & Common Areas',
      description: 'Water-resistant, easy-to-maintain flooring that handles high traffic and frequent cleaning.',
      flooring: ['Porcelain Tile', 'Commercial Vinyl', 'Epoxy Flooring'],
      image: '/products/tile.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Volume2 className="w-8 h-8 text-blue-900" />,
      title: 'Acoustic Performance',
      description: 'Flooring solutions that enhance sound quality and reduce unwanted noise transmission between spaces.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Minimal Show Disruption',
      description: 'We work around your show schedule, completing installation during dark days and off-hours.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Entertainment-Grade Durability',
      description: 'Commercial-rated products designed for high traffic, spills, and the demands of entertainment venues.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Easy Maintenance',
      description: 'Stain-resistant flooring that handles popcorn, drinks, and candy while maintaining appearance.'
    }
  ];

  const features = [
    'Acoustic underlayment options',
    'Dark day and off-hours installation',
    'Aisle lighting compatibility',
    'Stain and spill resistant materials',
    'Fire-rated flooring options',
    'ADA-compliant transitions and surfaces',
    'Section-by-section phased installation',
    'Extended commercial warranties'
  ];

  const venueTypes = [
    { name: 'Movie Theaters', icon: <Film className="w-6 h-6" /> },
    { name: 'Performing Arts Centers', icon: <Theater className="w-6 h-6" /> },
    { name: 'Concert Venues', icon: <Music className="w-6 h-6" /> },
    { name: 'Comedy Clubs', icon: <Mic2 className="w-6 h-6" /> },
    { name: 'Dinner Theaters', icon: <Popcorn className="w-6 h-6" /> },
    { name: 'Event Spaces', icon: <Theater className="w-6 h-6" /> }
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
                <span className="text-gray-600 text-sm">Theaters & Entertainment</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Theater & Entertainment Venue Flooring
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Set the stage for unforgettable experiences with commercial flooring designed for theaters and entertainment venues. From movie theaters to performing arts centers, we deliver acoustically-optimized, durable flooring that enhances the guest experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Theater Flooring Quote
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
                  <Film className="w-10 h-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Entertainment Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Experience with major theater chains</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Acoustic flooring solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Dark day installation scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Spill and stain resistant options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area venues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Types We Serve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Entertainment Venues We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {venueTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="text-blue-900 flex justify-center mb-2">{type.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Theater Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING BY AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Solutions for Every Venue Space</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different areas of your venue have unique requirements. We provide tailored flooring solutions for each space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theaterAreas.map((area, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Entertainment Advantage</h2>
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
              Theater Flooring Services Include
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
            Ready to Upgrade Your Entertainment Venue?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation. We'll assess your venue, discuss acoustic requirements, and provide a detailed proposal with show-friendly installation scheduling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Theater Flooring Quote
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

export default CommercialTheaters;
