import React from 'react';
import { Heart, Handshake, MapPin, Phone, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mt-4 mb-6">
            About Us
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          
          {/* Main Content */}
          <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-left">
              <div className="bg-blue-900 rounded-full p-6 shadow-xl inline-flex mb-6">
                <Heart className="w-12 h-12 text-yellow-400" />
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Yeti Flooring is San Jose's trusted flooring installation experts. With years of experience serving the San Jose area, we specialize in professional installation of hardwood, carpet, tile, luxury vinyl, and laminate flooring. Our certified installers bring quality craftsmanship and attention to detail to every project, whether it's a single room or an entire home. We're committed to providing exceptional service and treating every customer like family.
              </p>
            </div>
          </div>

          {/* Excellent Relationships with Suppliers */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <Handshake className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Excellent Relationships with Suppliers
              </h2>
            </div>

            <div className="text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Yeti Flooring maintains excellent relationships with leading flooring manufacturers and suppliers throughout the San Jose area. This allows us to source premium quality materials for your installation project at competitive prices. We work with trusted brands to ensure you get the best products, all installed with professional craftsmanship and precision.
              </p>
            </div>
          </div>

          {/* Office Information */}
          <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 max-w-4xl mx-auto border-2 border-blue-200 shadow-lg">
            <div className="text-center mb-8">
              <div className="bg-blue-900 rounded-full p-4 shadow-xl inline-flex mb-4">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Office Information
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="flex items-start mb-4">
                  <Phone className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <a href="tel:+14082396550" className="text-gray-700 hover:text-blue-900">
                      (408) 239-6550
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      <a href="tel:+14082396550" className="text-blue-900 hover:underline">
                        Call us →
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-blue-900 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-700">
                      Mon-Fri: 7am - 6pm<br />
                      Sat: 7am - 5pm<br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Link 
                  to="/contact"
                  className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center w-full"
                >
                  Request a Free Estimate
                </Link>
              </div>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="max-w-7xl mx-auto">
            <div 
              className="elfsight-app-e1124398-0fc6-4b56-953c-a9baffba2df7" 
              data-elfsight-app-lazy
            ></div>
          </div>
        </div>

          {/* Tagline */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-12 md:p-16 text-white mb-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                ELEVATE YOUR SPACE WITH YETI FLOORING
          </h2>
            </div>
          </div>

      </div>
    </section>
  );
};

export default About;


