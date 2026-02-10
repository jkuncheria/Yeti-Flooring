import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Building2, Store, UtensilsCrossed, Stethoscope, Warehouse, Hotel, ArrowRight, Phone, Clock, Shield, Users } from 'lucide-react';

const Commercial: React.FC = () => {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-900" />,
      name: 'Office Buildings',
      description: 'Durable, professional flooring solutions for corporate offices, coworking spaces, and business centers.',
      flooring: ['Luxury Vinyl Plank', 'Commercial Carpet Tile', 'Polished Concrete']
    },
    {
      icon: <Store className="w-8 h-8 text-blue-900" />,
      name: 'Retail Stores',
      description: 'Eye-catching, high-traffic flooring for retail spaces, showrooms, and shopping centers.',
      flooring: ['Luxury Vinyl Tile', 'Polished Concrete', 'Commercial Hardwood'],
      link: '/commercial/retail'
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-blue-900" />,
      name: 'Restaurants & Bars',
      description: 'Slip-resistant, easy-to-clean flooring designed for food service environments.',
      flooring: ['Commercial Tile', 'Slip-Resistant Vinyl', 'Epoxy Flooring']
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-900" />,
      name: 'Healthcare Facilities',
      description: 'Hygienic, antimicrobial flooring for hospitals, clinics, dental offices, and medical centers.',
      flooring: ['Sheet Vinyl', 'Rubber Flooring', 'Antimicrobial Tile'],
      link: '/commercial/healthcare'
    },
    {
      icon: <Warehouse className="w-8 h-8 text-blue-900" />,
      name: 'Warehouses & Industrial',
      description: 'Heavy-duty flooring solutions built to withstand forklifts, heavy equipment, and high traffic.',
      flooring: ['Epoxy Flooring', 'Polished Concrete', 'Industrial Tile']
    },
    {
      icon: <Hotel className="w-8 h-8 text-blue-900" />,
      name: 'Hotels & Hospitality',
      description: 'Elegant, durable flooring for lobbies, guest rooms, conference centers, and common areas.',
      flooring: ['Luxury Vinyl Plank', 'Commercial Carpet', 'Hardwood'],
      link: '/commercial/hotels'
    }
  ];

  const additionalIndustries = [
    {
      icon: <Users className="w-6 h-6 text-blue-900" />,
      name: 'Gyms & Fitness',
      description: 'Shock-absorbing flooring for weight rooms, cardio areas, and fitness studios.',
      link: '/commercial/gyms'
    },
    {
      icon: <Shield className="w-6 h-6 text-blue-900" />,
      name: 'Theaters & Entertainment',
      description: 'Acoustic flooring for movie theaters, performing arts centers, and event venues.',
      link: '/commercial/theaters'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-blue-900" />,
      title: 'Minimal Downtime',
      description: 'We work around your business schedule with after-hours and weekend installation options to minimize disruption to your operations.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-900" />,
      title: 'Commercial-Grade Materials',
      description: 'We source only commercial-rated flooring products designed to withstand heavy foot traffic and meet industry standards.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-900" />,
      title: 'Dedicated Project Management',
      description: 'Every commercial project gets a dedicated project manager to ensure on-time completion and clear communication.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-900" />,
      title: 'Licensed & Insured',
      description: 'Fully licensed, bonded, and insured for commercial work. We meet all building codes and safety requirements.'
    }
  ];

  const features = [
    'Free on-site consultations and estimates',
    'Bulk pricing for large projects',
    'Phased installation options',
    'After-hours and weekend scheduling',
    'ADA-compliant flooring solutions',
    'Extended commercial warranties',
    'Multi-location project coordination',
    'Detailed project timelines and milestones'
  ];

  const testimonials = [
    {
      name: 'David Chen',
      company: 'TechStart Inc.',
      text: 'Yeti Flooring transformed our 15,000 sq ft office space over a single weekend. Zero disruption to our Monday operations. Highly professional team.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      company: 'Bay Area Medical Group',
      text: 'They understood our strict healthcare requirements and delivered antimicrobial flooring that meets all our compliance standards. Excellent work.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Wilson Restaurant Group',
      text: 'We\'ve used Yeti for three restaurant locations now. Their slip-resistant flooring has been perfect for our kitchen and dining areas.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">COMMERCIAL FLOORING</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Professional Commercial Flooring Installation
              </h1>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                San Jose's trusted commercial flooring contractor. From office buildings to retail stores, restaurants to healthcare facilities — we deliver durable, professional flooring solutions that minimize downtime and maximize your business image.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
                  Request Commercial Quote
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
                <h3 className="text-2xl font-bold mb-6">Why Businesses Choose Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>500+ commercial projects completed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Serving San Jose & Bay Area businesses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>After-hours installation available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Competitive bulk pricing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Licensed, bonded & insured</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">INDUSTRIES WE SERVE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Commercial Flooring Solutions by Industry</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We understand that different industries have unique flooring requirements. Our team has experience with a wide range of commercial environments.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => {
              const CardContent = (
                <>
                  <div className="bg-blue-50 p-4 rounded-xl inline-flex mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Popular Options:</p>
                    <div className="flex flex-wrap gap-2">
                      {industry.flooring.map((floor, i) => (
                        <span key={i} className="text-xs bg-blue-50 text-blue-900 px-3 py-1 rounded-full">
                          {floor}
                        </span>
                      ))}
                    </div>
                  </div>
                  {industry.link && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <span className="text-blue-900 font-semibold text-sm flex items-center gap-1 group-hover:underline">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  )}
                </>
              );

              if (industry.link) {
                return (
                  <Link
                    key={idx}
                    to={industry.link}
                    className="group bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-900 transition-all duration-300 hover:shadow-xl block"
                  >
                    {CardContent}
                  </Link>
                );
              }

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-blue-900 transition-all duration-300 hover:shadow-xl"
                >
                  {CardContent}
                </div>
              );
            })}
          </div>

          {/* Additional Industries */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalIndustries.map((industry, idx) => (
              <Link
                key={idx}
                to={industry.link}
                className="group bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-blue-900 transition-all duration-300 hover:shadow-lg flex items-start gap-4"
              >
                <div className="bg-blue-50 p-3 rounded-lg flex-shrink-0">
                  {industry.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{industry.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{industry.description}</p>
                  <span className="text-blue-900 font-semibold text-sm flex items-center gap-1 group-hover:underline">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">WHY CHOOSE US</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">The Yeti Flooring Commercial Advantage</h2>
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
              Commercial Services Include
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

        {/* Commercial Testimonials */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">CLIENT SUCCESS STORIES</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">Trusted by Bay Area Businesses</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-blue-900">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 md:p-16 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Upgrade Your Business Space?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free on-site consultation and estimate. We'll assess your space, discuss your requirements, and provide a detailed proposal tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 group">
              Get a Commercial Quote
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

export default Commercial;
