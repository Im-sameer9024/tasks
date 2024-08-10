import  { useState } from 'react';

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://your-image-source.com/image1.jpg', // Replace with actual image URLs
    'https://your-image-source.com/image2.jpg', 
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg flex overflow-hidden">
      {/* Left Side - Image Slider */}
      <div className="w-1/2 relative">
        <img
          className="object-cover w-full h-full"
          src={images[currentImage]}
          alt="Goa Beach"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2"
        >
          ›
        </button>
      </div>

      {/* Right Side - Text Details */}
      <div className="w-1/2 p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-2xl font-bold">Goa Escape</h2>
            <div className="flex items-center text-gray-600">
              <span className="text-blue-500 font-semibold text-sm mr-2">4.5</span>
              <span className="text-sm">(25)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-gray-600 text-sm line-through">₹11,000</div>
            <div className="text-blue-500 font-bold text-lg">₹10,000</div>
          </div>
        </div>

        <div className="text-gray-600 mb-2">3 Nights & 4 Days</div>
        <div className="text-gray-600 mb-4">Goa (3N)</div>

        <div className="flex mb-4">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Beach</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Resort</span>
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Monsoon Special</span>
        </div>

        <div className="text-gray-600 mb-4">Customized Holidays</div>

        <div className="flex flex-wrap mb-4 text-sm text-gray-600">
          <div className="mr-4 flex items-center">
            <i className="fas fa-hotel mr-2"></i> Hotel
          </div>
          <div className="mr-4 flex items-center">
            <i className="fas fa-utensils mr-2"></i> Meals
          </div>
          <div className="mr-4 flex items-center">
            <i className="fas fa-binoculars mr-2"></i> Sightseeing
          </div>
          <div className="flex items-center">
            <i className="fas fa-car mr-2"></i> Transfer
          </div>
        </div>

        <div className="flex mb-4 text-sm text-gray-600">
          <div className="mr-4 flex items-center">
            <i className="fas fa-plane mr-2"></i> Flights (optional)
          </div>
          <div className="flex items-center">
            <i className="fas fa-passport mr-2"></i> Visa Assistance
          </div>
        </div>

        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Main;
