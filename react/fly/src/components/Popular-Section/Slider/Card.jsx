/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function Card({ id, title, image }) {
  return (
    <div>
      <div key={id}  >
        <div className=" relative w-[12.5rem] h-[25rem] cursor-pointer">
          <img src={image} alt="img" className=" w-[12.5rem] h-[25rem]" /> 
          {/* hover section  */}
          <div className=" hover:bg-slate-400 opacity-45 text-white text-[30px]  top-0 absolute w-full h-full ">
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}
