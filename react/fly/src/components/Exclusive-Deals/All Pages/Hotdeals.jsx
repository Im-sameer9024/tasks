/* eslint-disable react/prop-types */
import { HotDeals } from '../../../assets/data'
import Deal from './Deal'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

export default function Hotdeals({index,next,prev}) {
  return (
    <div >

    <div className=' absolute right-[4%] gap-4 flex top-[16%]'>
    <button onClick={() => prev()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'> <IoIosArrowBack/></button>
    <button onClick={() =>next()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'><IoIosArrowForward/></button>
    </div>

      <div className='flex flex-wrap'>
      {
        HotDeals[index].data.map((el) => (
          <Deal key={el.id} title={el.title} image={el.image} price={el.price} services={el.services} day={el.day} />
        ))
      }
      </div>
    </div>
  )
}
