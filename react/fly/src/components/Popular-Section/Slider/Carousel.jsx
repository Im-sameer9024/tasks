/* eslint-disable react/prop-types */
// import { Sliderdata } from "../../../assets/Sliderdata"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import { useContext, useState } from "react";
import Card from "./Card";
import { StoreContext } from "../../../Context-API/StoreContext";

const Carousel = () => {

  const {Sliderdata} = useContext(StoreContext)

  const[id,setId] = useState(1)


  function rightShift(){
    if(id + 1 > Sliderdata.length -1 ){
      setId(0)
    }else {
      setId(id + 1)
    }
  }

  function leftShift(){
    if(id - 1 < 0){
      setId(Sliderdata.length - 1)
    }else{
      setId(id - 1)
    }
  }

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowLeft onClick={() => leftShift()} className="arrows" style={{ color: "blue" }} />
      </div>
    )
  }


  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} >
        <AiOutlineArrowRight onClick={() => rightShift()} className="arrows" style={{ color: "blue" }} />
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: "slides",
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  
  return (
    <div className=" flex w-full justify-between items-center">

      {/* left section  */}
      <div className=" w-3/12 space-y-4">
        <h3 className=" font-bold  flex items-center gap-2"><span>{Sliderdata[id].title}</span> <hr className=" border-black w-7 border-[1px] " /> </h3>
        <h1 className=" font-heading font-bold  text-[2rem]">{Sliderdata[id].title}</h1>
        <div>
          <p>{Sliderdata[id].description}</p>
        </div>
      </div>


      {/* Slider  */}
      <div className="w-8/12 h-fit p-4" >
        <Slider {...settings}>
          {
            Sliderdata.map((item) => (
              <Card key={item.id} title={item.title} description={item.description} image={item.image} id={item.id} />
            ))
          }
        </Slider>
      </div>

    </div>
  )
}

export default Carousel
