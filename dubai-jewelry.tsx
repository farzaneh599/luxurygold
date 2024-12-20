import React from 'react';
import { Crown, Diamond, Star, Award, MapPin, Phone } from 'lucide-react';

const DubaiJewelry = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-800 to-amber-900 text-amber-50 py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">Dubai Gold & Diamond Gallery</h1>
        <p className="text-xl mb-8">Luxury Jewelry Since 1985</p>
        <div className="flex justify-center gap-4">
          <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
            View Collection
          </button>
          <button className="border-2 border-amber-600 text-amber-50 px-8 py-3 rounded-full hover:bg-amber-800 transition">
            Book Appointment
          </button>
        </div>
      </header>

      {/* Features */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <Crown className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p>Certified 18K & 24K Gold Jewelry</p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <Diamond className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">Certified Diamonds</h3>
            <p>GIA Certified Diamonds</p>
          </div>

          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <Star className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
            <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
            <p>Bespoke Jewelry Design Service</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                <img src="/api/placeholder/300/300" alt="Gold Necklace" className="rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diamond Necklace</h3>
              <p className="mb-4">18K Gold with VVS Diamonds</p>
              <span className="text-amber-800 font-semibold">AED 25,000</span>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                <img src="/api/placeholder/300/300" alt="Diamond Ring" className="rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engagement Ring</h3>
              <p className="mb-4">2ct Diamond Solitaire</p>
              <span className="text-amber-800 font-semibold">AED 45,000</span>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg text-center">
              <div className="w-full h-64 bg-amber-100 rounded-lg mb-4 flex items-center justify-center">
                <img src="/api/placeholder/300/300" alt="Gold Bracelet" className="rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diamond Bracelet</h3>
              <p className="mb-4">Tennis Bracelet 5ct</p>
              <span className="text-amber-800 font-semibold">AED 35,000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-amber-900 text-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Visit Our Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 mb-4" />
              <p>Gold Souk, Al Dhagaya<br />Dubai, UAE</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 mb-4" />
              <p>+971 4 123 4567<br />info@dubaigoldgallery.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <Award className="w-16 h-16 text-yellow-600" />
            <Award className="w-16 h-16 text-yellow-600" />
            <Award className="w-16 h-16 text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DubaiJewelry;
