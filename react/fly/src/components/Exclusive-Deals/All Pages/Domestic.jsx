/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import { Exclusivedeals } from "../../../assets/data";

// import Deal from "../Deal";

import Deal from './Deal'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import{DomesticDeals} from '../../../assets/data'

export default function Domestic({index,next,prev}) {

  

  return (
    <div >

    <div className=' absolute right-[4%] gap-4 flex top-[16%]'>
    <button onClick={() => prev()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'> <IoIosArrowBack/></button>
    <button onClick={() =>next()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'><IoIosArrowForward/></button>
    </div>

      <div className='flex flex-wrap'>
      {
        DomesticDeals[index].data.map((el) => (
          <Deal key={el.id} title={el.title} image={el.image} price={el.price} services={el.services} day={el.day} />
        ))
      }
      </div>
    </div>
  )
}
