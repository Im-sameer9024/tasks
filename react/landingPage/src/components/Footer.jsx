import logo from "../assets/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
    <div className="w-full bg-slate py-[2rem]">
      <div className="  w-10/12 mx-auto flex justify-between">
        {/* first grp  */}
        <div className="w-3/12 space-y-4">
          <img src={logo} alt="logo" />
          <p className="font-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur doloribus soluta nobis tempora eius, est quibusdam
            veritatis excepturi facere voluptatum aut cumque dolorem ad numquam
            ut nisi! Modi, saepe perferendis?
          </p>
        </div>

        {/* second grp  */}
        <div className="w-3/12 font-text space-y-3">
          <h1 className=" font-heading font-bold">Contact Info</h1>
          <div className=" flex items-center gap-3" >
            <span>
              <IoIosPhonePortrait />
            </span>
            +91433543343
          </div>
          <div className=" flex items-center gap-3">
            <span>
              <CiLocationOn />
            </span>
            +91433543343
          </div>
          <div className=" flex items-center gap-3">
            <span>
              <CiStopwatch />
            </span>
            +91433543343
          </div>
        </div>

        {/* third grp  */}
        <div className="w-3/12 font-text space-y-3">
          <h1  className=" font-heading font-bold">Socials</h1>

          <div className=" flex items-center gap-3">
            <span>
              <FaFacebookF />
            </span>
            Facebook
          </div>
          <div className=" flex items-center gap-3">
            <span>
              <FaXTwitter />
            </span>
            x
          </div>

          <div className=" flex items-center gap-3">
            <span>
              <FaInstagram />
            </span>
            Instagram
          </div>

          <div className=" flex items-center gap-3">
            <span>
              <FaWhatsapp />
            </span>
            Whatsapp
          </div>
        </div>
      </div>
      <hr className="border-black w-10/12 mx-auto my-[2rem]" />
      <p className="flex justify-center items-center font-text">
        <span>
          <MdCopyright />
        </span>
        2024 Fly Elite All Rights Reserved
      </p>
    </div>
  );
}
