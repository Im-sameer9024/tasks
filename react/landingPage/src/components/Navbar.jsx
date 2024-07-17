import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";


export default function Navbar() {

    const[sidemenu,setSidemenu] = useState(false)

    function showMenu(){
  setSidemenu(true)
    }

    function closeMenu(){
       setSidemenu(false)
    }

  return (
    <div>
      {/* computer screen  */}
      <div className=" hidden bg-white rounded-3xl py-2 w-9/12 fixed  top-2 z-10 left-[50%] -translate-x-1/2  lg:flex justify-between items-center px-4 ">
        {/* Logo  */}
        <img src={logo} alt="logo" />

        {/* buttons  */}
        <div className=" flex gap-10">
          <button className=" flex items-center gap-1">
            <IoIosPhonePortrait />
            <Link className="font-text font-semibold">CALL</Link>
          </button>
          <button className=" flex items-center gap-1">
            <FaWhatsapp />
            <Link className="font-text font-semibold">WHATSAPP</Link>
          </button>
          <button className=" bg-darkBlue text-white px-4 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-gray-500 duration-300">
            BOOK YOUR TOUR
          </button>
        </div>
      </div>

      {/* mobile screen  */}

      <div className=" lg:hidden z-10 bg-white py-2 px-2 fixed top-2 w-10/12 left-[50%] -translate-x-1/2 justify-between flex">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="text-[1.3rem]">
          <button onClick={()=>showMenu()}>
            <RxHamburgerMenu />
          </button>
        </div>
      </div>

      {
        sidemenu && 
        <div className="w-9/12 bg-white z-10 fixed top-0 h-[100vh]  right-0 flex flex-col justify-between py-4">
        
        <div className=" flex flex-col justify-around items-start ml-5">
        <button onClick={()=>closeMenu()} className=" bg-darkBlue text-white rounded-full text-[1.4rem]  font-bold">
            <RxCross2/>
        </button>
        <button className=" hover:bg-darkBlue hover:text-white py-2 px-2 hover:w-full flex items-center gap-1 mt-[2rem]">
            <IoIosPhonePortrait />
            <Link className="font-text font-semibold">CALL</Link>
          </button>
          <button className=" hover:bg-darkBlue hover:text-white py-2 px-2 hover:w-full flex items-center gap-1">
            <FaWhatsapp />
            <Link className="font-text font-semibold">WHATSAPP</Link>
          </button>

        </div>
        <div className="mx-auto">
        <button className=" bg-darkBlue text-white px-4 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-gray-500 duration-300">
            BOOK YOUR TOUR
          </button>
        </div>

      </div>
      }
    </div>
  );
}
