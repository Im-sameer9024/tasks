/* eslint-disable react/prop-types */
import { PiCurrencyInrBold } from "react-icons/pi";
import { CiStopwatch } from "react-icons/ci";




export default function Card({ title, image, price, services, day }) {


  return (
    <div className="  shadow-md  rounded-t-3xl shadow-slate-400 flex flex-col h-[20rem]">
      <div className="relative">
        <img src={image} alt="" className="w-full h-[200px] rounded-t-xl" />
        <p className=" flex items-center bg-[#00247D] text-white px-4  absolute bottom-5"><span><PiCurrencyInrBold /></span>{price}</p>

        {
          price > 5000 ? (<div className=" absolute top-[-5px] right-[-5px] p-2 w-[2.5rem] h-[2.5rem] bg-[#00247D] flex justify-center items-center text-white rounded-full">
            Sale
          </div>)
            :
            null
        }
      </div>
      <div className="ml-4 my-3 space-y-3">
        <h1 className="font-bold font-heading">{title}</h1>
        <p className="font-text flex space-x-2">{
          services.map((el,i)=>(
            <span key={i}>{el},</span>
          ))
          
          }</p>
        <p className=" flex items-center font-bold "><span><CiStopwatch /></span>{day} days</p>
      </div>
    </div>
  )
}
