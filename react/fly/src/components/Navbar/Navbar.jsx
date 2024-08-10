import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa6";
import { useState } from 'react';


export default function Navbar() {

  const [showNav, setShowNav] = useState(false)

 
  return (
    <div className=' w-[100vw] h-[100vh]'>
      <div className=' text-[0.9rem] flex items-center justify-between w-10/12 mx-auto font-text pt-[30px] bg-transparent'>
        <div>
          <img src={logo} alt="logo" width={110} height={57} />
        </div>
        <ul className=' hidden lg:flex gap-[3rem] lg:gap-[2rem] ' >
          <li>VISA</li>
          <li>FLIGHTS</li>
          <li>HOLIDAYS</li>
          <li>CRUISE</li>
          <li>HOTEL</li>
        </ul>
        <div className='text-white lg:flex  hidden space-x-6 '>
          <button className=' hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-lg bg-[#00247D]'>ENQUIRE</button>
          <button className='px-6 py-2 hover:bg-[#01174f] transition-colors duration-200 rounded-lg bg-[#00247D]'>LOGIN/REGISTER</button>
        </div>



        <div className=' lg:hidden'>
          <button onClick={() => setShowNav(!showNav)}>
            <RxHamburgerMenu className=' text-[1.5rem] ' />
          </button>
        </div>

      </div>

      {/* for mobile screen  */}

      <div id='Navbar' className={` w-[75%] h-[100vh] bg-slate-200 absolute top-0 ${showNav ? "block" : "hidden"} flex flex-col justify-between `}>

        {/* Navbar in side section  */}

        <div>
          {/* section-1  */}
          <div className=' pl-[2rem]  gap-4 flex py-[2rem]'>
            <div className=' flex justify-center items-center w-[50px] h-[50px] bg-[#00247D] rounded-full'>
              <span className=''>
                <FaUser className=' text-white text-[1.2rem]' />
              </span>
            </div>
            <div>
              <p className=' font-text'>Hello,</p>
              <p className=' font-bold font-text'>Guest</p>
            </div>
          </div>

          {/* section-2  */}
          <div className=' text-[1.2rem] flex flex-col space-y-[1rem]'>
            <hr className=' border-black border ' />
            <h1 className=' pl-[2rem]'>Visa</h1>
            <hr className=' border-black border' />
            <h1 className=' pl-[2rem]'>Flights</h1>
            <hr className=' border-black border' />
            <h1 className=' pl-[2rem]'>Holidays</h1>
            <hr className=' border-black border' />
            <h1 className=' pl-[2rem]'>Cruise</h1>
            <hr className=' border-black border' />
            <h1 className=' pl-[2rem]'>Hotel</h1>
          </div>
        </div>

        {/* buttons  */}

        <div className=' text-[0.8rem]  mb-[2rem] mx-auto flex flex-col  text-white  space-y-4 '>
          <button className=' hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-3xl bg-[#00247D]'>LOGIN / REGISTER</button>
          <button className=' hover:bg-[#01174f] transition-colors duration-200 px-6 py-2 rounded-3xl bg-[#00247D]'>ENQUIRE</button>
        </div>



      </div>

    </div>
  )
}
