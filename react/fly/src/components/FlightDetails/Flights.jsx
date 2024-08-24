import { GoDotFill } from "react-icons/go";
import { FaPlane } from "react-icons/fa";


export default function Flights() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <h2 className=" font-heading font-bold text-[1rem] text-center lg:text-start  md:text-[2rem] ">Flight From Delhi to Surat on 26 July</h2>

      {/* details  */}
      <div className="md:w-10/12 w-11/12 lg:w-7/12 mx-auto lg:mx-0 rounded-md bg-white shadow-md mt-3 ">
      {/* flight name  */}
        <div className=" bg-[#313132] text-white rounded-t-md">
          <p className=" flex md:gap-4 gap-2 items-center py-4 px-[2rem] md:px-[3rem]">
            <span className="font-semibold font-text">IndiGo</span>
            <span>•</span>
            <span className="ml-2 text-sm font-text">Economy</span>
            <span>•</span>
            <span className="ml-2 text-sm font-text">6E2241 (Airbus)</span>
          </p>
        </div>

        {/* flight time & date */}
        <div className=" w-11/12 mx-auto py-[3rem] flex flex-col items-center text-center gap-4 md:flex-row ">
          {/* left side section */}
          <div>
            <h3 className=" text-base font-text font-semibold text-[#616060]">DEPART</h3>
            <div className=" mt-4 font-text">
              <div className="text-gray-400 text-[1rem]">Sun, 26 july</div>
              <div className="text-[1.5rem] font-bold text-[#222222]">DEL 22:05</div>
              <div className="text-[1rem] text-gray-400">Delhi Airport</div>
            </div>
          </div>


          {/* middle section  */}
          <div className="flex items-center ">
            <div className=" flex items-center">
              <span><GoDotFill /></span>
              <hr className=" border-blue-950 border-2 w-[4rem] border-dashed " />
            </div>
            <div className=" mt-6 text-center">
              <p className=" bg-[#C4D1F0] px-4 py-1 rounded-2xl ">01h 40m</p>
              <p className="text-gray-400 text-[1rem]">No Stop</p>
            </div>
            <div className=" flex items-center">
              <hr className=" border-blue-950 border-2 w-[4rem] border-dashed " />
              <span><GoDotFill /></span>
            </div>
            <div className=" hidden md:block">
              <FaPlane className=" text-[1.4rem] text-slate-400" />
            </div>
          </div>

          {/* Right section  */}
          <div className=" mt-4">
            <h3 className=" text-base font-text font-semibold text-[#616060]">ARRIVE</h3>
            <div className=" mt-4 font-text">
              <div className="text-gray-400 text-[1rem]">Sun, 26 july</div>
              <div className="text-[1.5rem] font-bold text-[#222222]">STV 23:45</div>
              <div className="text-[1rem] text-gray-400">Surat Airport</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
