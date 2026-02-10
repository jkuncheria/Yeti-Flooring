import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Dumbbell, Heart, Users, Timer, ArrowRight, Phone, Clock, Shield, Sparkles, Zap } from 'lucide-react';

const CommercialGyms: React.FC = () => {
  const gymAreas = [
    {
      name: 'Weight Room & Free Weights',
      description: 'Heavy-duty, impact-absorbing flooring designed to handle dropped weights and heavy equipment.',
      flooring: ['Rubber Flooring', 'Interlocking Rubber Tiles', 'Rolled Rubber'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Cardio Area',
      description: 'Shock-absorbing flooring that reduces joint stress and handles treadmills, ellipticals, and bikes.',
      flooring: ['Rubber Flooring', 'Commercial Carpet Tile', 'Vinyl Sports Flooring'],
      image: '/products/carpet.png'
    },
    {
      name: 'Group Fitness Studios',
      description: 'Versatile flooring for aerobics, dance, yoga, and HIIT classes with proper cushioning and grip.',
      flooring: ['Sprung Wood Flooring', 'Rubber Flooring', 'Vinyl Sports Flooring'],
      image: '/products/hardwood.jpg'
    },
    {
      name: 'Locker Rooms & Showers',
      description: 'Water-resistant, slip-proof, antimicrobial flooring for wet areas and barefoot traffic.',
      flooring: ['Porcelain Tile', 'Rubber Flooring', 'Non-Slip Vinyl'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Reception & Lobby',
      description: 'Professional, welcoming flooring that creates a great first impression and handles high traffic.',
      flooring: ['Luxury Vinyl Plank', 'Commercial Tile', 'Polished Concrete'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Turf & Functional Training',
      description: 'Synthetic turf and specialized flooring for sled pushes, battle ropes, and functional fitness.',
      flooring: ['Artificial Turf', 'Rubber Flooring', 'Interlocking Tiles'],
      image: '/products/laminate.jpg'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-blue-900" />,
      title: 'Impact Absorption',
      description: 'Flooring engineered to absorb shock from dropped weights, jumping, and high-intensity workouts.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Off-Peak Installation',
      description: 'We work during your slowest hours or overnight to minimize disruption to your members.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Extreme Durability',
      description: 'Commercial-grade products designed for 24/7 gym operations and heavy equipment.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Easy to Clean',
      description: 'Antimicrobial, sweat-resistant flooring that maintains hygiene with standard cleaning.'
    }
  ];

  const features = [
    'Noise and vibration reduction',
    'Antimicrobial and odor-resistant options',
    'Custom logo and color inlays available',
    'Seamless installation for easy cleaning',
    'Slip-resistant surfaces throughout',
    'Subfloor protection from heavy equipment',
    'Zone-by-zone phased installation',
    'Extended commercial warranties'
  ];

  const facilityTypes = [
    { name: 'Commercial Gyms', icon: <Dumbbell className="w-6 h-6" /> },
    { name: 'CrossFit Boxes', icon: <Zap className="w-6 h-6" /> },
    { name: 'Yoga & Pilates Studios', icon: <Heart className="w-6 h-6" /> },
    { name: 'Personal Training', icon: <Users className="w-6 h-6" /> },
    { name: 'Sports Facilities', icon: <Timer className="w-6 h-6" /> },
    { name: 'Recreation Centers', icon: <Users className="w-6 h-6" /> }
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
                <span className="text-gray-600 text-sm">Gyms & Fitness</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Gym & Fitness Center Flooring Installation
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Build the foundation for fitness success with commercial flooring designed for gyms and fitness centers. From weight rooms to yoga studios, we deliver durable, shock-absorbing flooring that protects your equipment, your subfloor, and your members.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Gym Flooring Quote
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
                  <Dumbbell className="w-10 h-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Fitness Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Experience with major gym chains</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Heavy equipment rated flooring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Dropped weight protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Custom logo inlays available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area gyms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Types We Serve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fitness Facilities We Serve</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilityTypes.map((type, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 text-center hover:bg-blue-50 transition-colors">
                <div className="text-blue-900 flex justify-center mb-2">{type.icon}</div>
                <p className="text-sm font-semibold text-gray-900">{type.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gym Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING BY AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Solutions for Every Fitness Space</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different areas of your gym have unique requirements. We provide tailored flooring solutions for each zone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gymAreas.map((area, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Fitness Advantage</h2>
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
              Gym Flooring Services Include
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
            Ready to Upgrade Your Fitness Facility?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation. We'll assess your facility, discuss your equipment needs, and provide a detailed proposal with zone-by-zone installation options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Gym Flooring Quote
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

export default CommercialGyms;
