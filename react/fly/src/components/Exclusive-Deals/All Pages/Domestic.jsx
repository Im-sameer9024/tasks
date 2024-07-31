/* eslint-disable react/prop-types */
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { Exclusivedeals } from "../../../assets/data";
import Deal from "../Deal";
import './Slider.css'


export default function Domestic() {

  console.log(Exclusivedeals["DOMESTIC HOLIDAY"])

  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    
  };

  

  return (
    <div className="slider-container">
      <Slider className="main-slider" {...settings}>
          {
            Exclusivedeals["DOMESTIC HOLIDAY"].map((item) => (
              <Deal key={item.id} title={item.title} day={item.day} price={item.price} services={item.services} image={item.image} id={item.id} />
            ))
          }
        </Slider>
    </div>
  )
}
