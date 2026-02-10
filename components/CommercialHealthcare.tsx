import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Stethoscope, Heart, Activity, Pill, Baby, Brain, ArrowRight, Phone, Clock, Shield, Sparkles, ShieldCheck } from 'lucide-react';

const CommercialHealthcare: React.FC = () => {
  const healthcareAreas = [
    {
      name: 'Patient Rooms',
      description: 'Comfortable, hygienic flooring that supports patient recovery and simplifies infection control protocols.',
      flooring: ['Sheet Vinyl', 'Rubber Flooring', 'Luxury Vinyl Tile'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Operating Rooms & Surgical Suites',
      description: 'Seamless, antimicrobial flooring that meets strict sterile environment requirements.',
      flooring: ['Seamless Epoxy', 'Sheet Vinyl', 'Conductive Flooring'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Waiting Rooms & Reception',
      description: 'Welcoming, durable flooring that creates a calming atmosphere while handling high traffic.',
      flooring: ['Luxury Vinyl Plank', 'Commercial Carpet Tile', 'Porcelain Tile'],
      image: '/products/carpet.png'
    },
    {
      name: 'Hallways & Corridors',
      description: 'Durable flooring designed for gurney traffic, wheelchairs, and constant foot traffic.',
      flooring: ['Sheet Vinyl', 'Rubber Flooring', 'Luxury Vinyl Tile'],
      image: '/products/vinyl.png'
    },
    {
      name: 'Labs & Diagnostic Areas',
      description: 'Chemical-resistant, easy-to-clean flooring for laboratories and diagnostic imaging rooms.',
      flooring: ['Epoxy Flooring', 'Sheet Vinyl', 'Chemical-Resistant Tile'],
      image: '/products/tile.jpg'
    },
    {
      name: 'Pharmacy & Clean Rooms',
      description: 'Seamless, particle-free flooring that meets pharmaceutical compounding requirements.',
      flooring: ['Seamless Epoxy', 'Sheet Vinyl', 'Static-Dissipative Flooring'],
      image: '/products/laminate.jpg'
    }
  ];

  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-900" />,
      title: 'Infection Control',
      description: 'Antimicrobial, seamless flooring options that support your infection prevention protocols.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Phased Installation',
      description: 'We work around patient care schedules, completing installation in phases to maintain operations.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Healthcare Compliance',
      description: 'Products that meet healthcare facility requirements including fire codes and ADA standards.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-blue-900" />,
      title: 'Easy Sanitation',
      description: 'Flooring designed for frequent cleaning and disinfection with healthcare-grade chemicals.'
    }
  ];

  const features = [
    'Antimicrobial and antibacterial options',
    'Seamless installation for infection control',
    'Chemical and stain resistant surfaces',
    'Slip-resistant for patient safety',
    'Wheelchair and gurney friendly',
    'Static-dissipative options available',
    'HIPAA-compliant project management',
    'Extended healthcare warranties'
  ];

  const facilityTypes = [
    { name: 'Hospitals', icon: <Activity className="w-6 h-6" /> },
    { name: 'Medical Clinics', icon: <Stethoscope className="w-6 h-6" /> },
    { name: 'Dental Offices', icon: <Heart className="w-6 h-6" /> },
    { name: 'Pharmacies', icon: <Pill className="w-6 h-6" /> },
    { name: 'Pediatric Centers', icon: <Baby className="w-6 h-6" /> },
    { name: 'Mental Health', icon: <Brain className="w-6 h-6" /> }
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
                <span className="text-gray-600 text-sm">Healthcare Facilities</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Healthcare Facility Flooring Installation
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create healing environments with commercial flooring designed for healthcare facilities. From hospitals to dental offices, we deliver hygienic, durable flooring that supports infection control, patient safety, and the demanding requirements of medical environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Get a Healthcare Flooring Quote
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
                  <Stethoscope className="w-10 h-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Healthcare Expertise</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Experience with medical facilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Antimicrobial flooring options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Infection control compliant</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Minimal patient disruption</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area healthcare</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Facility Types We Serve */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthcare Facilities We Serve</h2>
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

        {/* Healthcare Areas Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">FLOORING BY AREA</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Solutions for Every Healthcare Space</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different areas of your facility have unique requirements. We provide tailored flooring solutions for each space.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareAreas.map((area, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Healthcare Advantage</h2>
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
              Healthcare Flooring Services Include
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
            Ready to Upgrade Your Healthcare Facility?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation. We'll assess your facility, discuss infection control requirements, and provide a detailed proposal with phased installation options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Healthcare Flooring Quote
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

export default CommercialHealthcare;
