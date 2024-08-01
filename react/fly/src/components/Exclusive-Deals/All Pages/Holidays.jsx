/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Deal from './Deal'
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { holidays } from '../../../assets/data'
import Slider from "react-slick";

export default function Holidays({index}) {

  


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    
  };
  return (
    <div >

    {/* <div className=' absolute right-[4%] gap-4 flex top-[16%]'>
    <button onClick={() => prev()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'> <IoIosArrowBack/></button>
    <button onClick={() =>next()} className='bg-slate-400 transition-all duration-200 rounded-full p-1 hover:bg-[#00247D] text-white'><IoIosArrowForward/></button>
    </div> */}

      <div className="bg-white">
      <button type="button" data-role="none" className="slick-arrow slick-prev bg-red-400" style={{"display": "block"}}> Previous</button>
      <Slider {...settings}>
      {
        holidays[index].data.map((el) => (
          <Deal key={el.id} title={el.title} image={el.image} price={el.price} services={el.services} day={el.day} />
        ))
      }
      </Slider>
      </div>
    </div>
  )
}
