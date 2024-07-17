import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";
export default function Header() {
  return (
    <div className=" bg-header overflow-x-hidden w-[100vw] h-[100vh]">
      {/* Navigation-Bar  */}
      <div className=" w-9/12 mt-[2rem] absolute -translate-x-1/2 left-1/2 flex justify-between items-center px-4 ">
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
          <button className=" bg-darkBlue text-white px-4 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-white duration-300">
            BOOK YOUR TOUR
          </button>
        </div>
      </div>

      {/* Middle Text  */}

      <div className=" space-y-2 text-white absolute left-1/2 top-1/2 -translate-x-1/2 text-center">
        <h1 className="text-[2rem] font-heading font-bold">DISCOVER YOUR NEXT ADVENTURE</h1>
        <p className="capitalize font-text font-semibold">UNFORGETTABLE TOURS, UNBEATABLE EXPERIENCE</p>
        <button className=" bg-darkBlue text-white px-10 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-white duration-300">
          ENQUIRE
        </button>
      </div>
    </div>
  );
}
