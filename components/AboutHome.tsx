import React from 'react';
import { Heart, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutHome: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xl w-full">
              <img 
                src="/flooringteamexample.webp" 
                alt="Yeti Flooring Company - San Jose, California" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">ABOUT US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              About Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Yeti Flooring is San Jose's trusted flooring installation experts. With years of experience serving the San Jose area, we specialize in professional installation of hardwood, carpet, tile, luxury vinyl, and laminate flooring. Our certified installers bring quality craftsmanship and attention to detail to every project. We're committed to providing exceptional service and treating every customer like family.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Heart className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Serving San Jose & Surrounding Areas</h3>
                  <p className="text-gray-600">We proudly serve San Jose and the greater Bay Area with professional flooring installation services. Our team brings quality materials and expert installation directly to your home.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Contact Information</h3>
                  <p className="text-gray-600">Serving San Jose, CA<br />Phone: (408) 239-6550<br />Hours: Mon-Fri 7am - 6pm, Sat 7am - 5pm, Sun Closed</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Free In-Home Consultations</h3>
                  <p className="text-gray-600">Schedule a free in-home consultation and our installation experts will visit your San Jose home with samples, take measurements, and provide expert advice. No showroom visit needed - we bring everything to you.</p>
                </div>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about"
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg text-center"
              >
                Learn More About Us
              </Link>
              <Link 
                to="/contact"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold py-4 px-8 rounded-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;

