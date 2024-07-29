/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function Card({ id, title, image }) {
  return (
     
        <div className=" hover:w-[14rem] transition-all duration-500  rounded-xl  relative w-[10rem]  h-[25rem] cursor-pointer mx-auto ">
          <img src={image} alt="img" className=" object-cover w-full h-full rounded-xl hover-grow" /> 
          {/* hover section  */}
          <div className="  text-black font-bold text-[30px] rounded-xl top-0 absolute w-full h-full ">
            {title}
          </div>
        </div>
       
  )
}
