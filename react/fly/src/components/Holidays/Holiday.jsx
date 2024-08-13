import { useState } from "react";
// import { MdPlayArrow } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import slide from '../../assets/day1.jpeg'
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md"


export default function Holiday() {

  const [isOpen, setIsOpen] = useState(false);


  // Pagenation of tours 

  const totalItem =[
    {id:1,title:"Goa Escape",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:2,title:"Hellow Gin",stayTime:"2 Nights & 4 Days",destination:"Goa (3N)"},
    {id:3,title:"Scout Escape",stayTime:"1 Nights & 4 Days",destination:"Goa (3N)"},
    {id:4,title:"Beach Hills",stayTime:"5 Nights & 4 Days",destination:"Goa (3N)"},
    {id:5,title:"Rosado",stayTime:"7 Nights & 4 Days",destination:"Goa (3N)"},
    {id:6,title:"Hello Escape",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:7,title:"hyderabad",stayTime:"2 Nights & 4 Days",destination:"Goa (3N)"},
    {id:8,title:"Goa Escape",stayTime:"8 Nights & 4 Days",destination:"Goa (3N)"},
    {id:9,title:"Mumbai Escape",stayTime:"6 Nights & 4 Days",destination:"Goa (3N)"},
    {id:10,title:"Goa Escape",stayTime:"9 Nights & 4 Days",destination:"Goa (3N)"},
    {id:11,title:"Hyd jaipur",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:12,title:"Goa Escape",stayTime:"2 Nights & 4 Days",destination:"Goa (3N)"},
    {id:13,title:"Pink Perls",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:14,title:"Goa sfkjhsiu",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:15,title:"Goa Escape",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:16,title:"Gsflksjna",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:17,title:"sjfkhsikjf",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:18,title:"Deeporion",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:19,title:"cafe down",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
    {id:20,title:"hills",stayTime:"3 Nights & 4 Days",destination:"Goa (3N)"},
  ]

  const[currentPage,setCurrentPage] = useState(1)
  // const[pageColor,setPageColor] = useState(false)

  // const totalItem = [totalItem.length]
  const perPageItem = 5

  function itemsPerPage(){
    const startingIndex = (currentPage-1) * perPageItem;
    const endingIndex = startingIndex + perPageItem;
    return totalItem.slice(startingIndex,endingIndex)
  }

  function pageButtons(){
    let totalPages = []
    let pageNumbers = Math.ceil(totalItem.length/perPageItem)

    for(let i=1;i<=pageNumbers;i++){
      totalPages.push(i)
    }
    return totalPages

  }






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
        <h2 className=" font-heading font-bold">3 To 5 Days Goa Tour Packages Under INR 70,000 (23 Results)</h2>
        {/* dropdown list */}
        <div className=" w-56 hidden">
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
        <div className="bg-white lg:w-3/12 lg:block hidden border border-slate-400 px-3 py-3 w-3/12 rounded-lg shadow-lg mx-auto h-[450px]">
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
        <div className="  w-full lg:w-8/12 mx-auto flex flex-col gap-6">
        {
          itemsPerPage().map((item,index) => (
            <div key={index} className="w-full ">
          <div className="  flex px-3 bg-white flex-col border border-slate-400 gap-6 md:flex md:flex-row py-3 rounded-lg shadow-lg">

            {/* left side slide  */}
            <div className="w-11/12 h-11/12">
              <img src={slide} alt="" className=" w-full h-full lg:w-11/12" />
            </div>
            {/* right side text  */}
            <div className="w-full flex justify-between">

              <div className=" w-full">
                <div className=" flex gap-8 items-baseline">
                  <h2 className="text-2xl font-bold lg:text-[1.3rem]">{item.title}</h2>
                  <div className="flex items-center text-gray-600">
                    <p className="text-blue-900 flex items-center gap-1 font-semibold text-sm mr-2"> <span><FaStar/></span> 4.5 (25)</p>
                  </div>
                </div>
                <div className="text-gray-600 mb-2">3 Nights & 4 Days</div>
                <div className="text-gray-600 mb-4 flex items-center gap-1"><MdLocationPin/> Goa (3N)</div>

                <div className="flex mb-4">
                  <span className=" border-gray-700 border  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 lg:px-1 lg:py-1 xl:px-3 xl:py-1 ">Beach</span>
                  <span className="border-gray-700 border rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 lg:px-1 lg:py-1 xl:px-3 xl:py-1">Resort</span>
                  <span className="border-gray-700 border rounded-full px-3 py-1 text-sm font-semibold text-gray-700 lg:px-1 lg:py-1 xl:px-3 xl:py-1">Monsoon Special</span>
                </div>
                <div className="text-gray-600 mb-4">Customized Holidays</div>

                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
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
                  <div className="mr-4 flex items-center">
                    <i className="fas fa-plane mr-2"></i> Flights (optional)
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-passport mr-2"></i> Visa Assistance
                  </div>
                </div>

                

              </div>

              {/* Price section  */}
              <div className=" gap-3 w-6/12 text-right pr-4 lg:block hidden">
                <h1 className=" lg:text-[0.7rem]">Starting Price Per Adult</h1>
                <p className="text-gray-600 text-sm line-through">₹11,000</p>
                <h2 className="text-[#00247D] font-bold text-lg">₹10,000</h2>
                <button className="bg-[#00247D] my-2 text-white font-bold py-2 px-4 rounded text-[0.7rem]">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
          ))
        }
        <div className=" mx-auto flex">
          {
            pageButtons().map((page) =>(
              <button className={`${currentPage === page ? "bg-[#00247D] text-white":"null"} border px-2 border-black`} key={page} onClick={() => setCurrentPage(page)}>{page}</button>
            ))
          }
        </div>
        </div>
      </div>

    </div>
  )
}
