import { useState } from "react";
// import { MdPlayArrow } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function Holiday() {

  const [isOpen, setIsOpen] = useState(false);







  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('Upto 1 Day');
  const [price, setPrice] = useState(15000);

  const durations = [
    'Upto 1 Day',
    '2 to 3 days',
    '3 to 5 days',
    '5 to 7 days',
    '7+ Days',
  ];



  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=" w-[100vw] h-auto">

      <div className="w-10/12 mx-auto flex justify-between my-[3rem]">
        <h2 className=" font-heading">3 To 5 Days Goa Tour Packages Under INR 70,000 (23 Results)</h2>
        {/* dropdown list */}
        <div className=" w-56">
          <div className=" w-full p-4 flex justify-center items-center  ">
            <button
              onClick={toggleDropdown}
              className=" text-center flex w-full  justify-center items-center"
            >
              Sort By Date
              <span className="ml-2">{isOpen ? <MdOutlineArrowDropDown /> : <MdOutlineArrowRight />}</span>
            </button>
          </div>


          {
            isOpen &&
            <div className=" absolute mt-2 w-56 rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Price - High to Low
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Price - Low to High
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Duration Short to Long
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Duration Long to Short
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-white hover:bg-blue-700"
                >
                  Recommended
                </a>
              </div>
            </div>
          }

        </div>

      </div>

      <div className=" w-11/12 mx-auto flex my-[3rem] justify-between">

        {/* Left Side section  */}
        <div className="bg-white border border-slate-400 px-3 py-3 w-3/12 rounded-lg shadow-lg mx-auto">
          {/* Search Input */}
          <div className="mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for destinations.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-full focus:outline-none"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M12.9 14.32a7 7 0 111.41-1.41l4.78 4.78a1 1 0 01-1.42 1.42l-4.78-4.78zm-6.4-6.4a5 5 0 100 10 5 5 0 000-10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">Goa ✕</div>
          </div>

          {/* Trip Duration */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Trip Duration</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {durations.map((duration) => (
                <button
                  key={duration}
                  onClick={() => setSelectedDuration(duration)}
                  className={`px-4 py-2 text-sm rounded-full border ${selectedDuration === duration
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 bg-gray-200'
                    }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900">Price Range</h3>
            <div className="flex items-center">
              <input
                type="range"
                min="0"
                max="15000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
              <span className="ml-3 text-sm text-gray-700">INR {price}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-gray-600">
              <div>
                <span>Min</span> INR 0
              </div>
              <div>
                <span>Max</span> INR 15,000
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full py-2 mt-4 text-white bg-blue-900 rounded-full hover:bg-blue-800">
            Search
          </button>
        </div>

        {/* Right Side section  */}
        <div className="w-8/12">
          <div className="  flex bg-white border border-slate-400 gap-6  py-3 rounded-lg shadow-lg">

            {/* left side slide  */}
            <div className="w-5/12 bg-red-300">

            </div>
            {/* right side text  */}
            <div className="w-full flex justify-between">
              
                <div className=" w-7/12">
                  <h2 className="text-2xl font-bold">Goa Escape</h2>
                  <div className="flex items-center text-gray-600">
                    <span className="text-blue-500 font-semibold text-sm mr-2">4.5</span>
                    <span className="text-sm">(25)</span>
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

                </div>
                <div className=" w-4/12 text-right pr-4">
                  <h1>Starting Price Per Adult</h1>
                  <p className="text-gray-600 text-sm line-through">₹11,000</p>
                  <h2 className="text-[#00247D] font-bold text-lg">₹10,000</h2>
                  <button className="bg-[#00247D] text-white font-bold py-2 px-4 rounded">
                    View Details
                  </button>

                </div>
             

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
