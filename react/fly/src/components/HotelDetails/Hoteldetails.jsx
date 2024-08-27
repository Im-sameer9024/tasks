import { IoLocationSharp } from "react-icons/io5";
import gridImg from "../../assets/grid.png"
// import day1 from "../../assets/day1.jpeg"
// import day2 from "../../assets/Fimg1.jpeg"
// import day3 from "../../assets/day3.jpeg"
// import day4 from "../../assets/Fimg2.jpeg"

import { IoRestaurantOutline } from "react-icons/io5";
import { MdRoomPreferences } from "react-icons/md";
import { IoWifiOutline } from "react-icons/io5";
import { GrSwim } from "react-icons/gr";
// import { useState } from "react";


export default function Hoteldetails() {

  // const [idx, setIdx] = useState(0)

  const data = [
    { id: 1, img: gridImg },
    { id: 2, img: gridImg },
    { id: 3, img: gridImg },
    { id: 4, img: gridImg },
    { id: 5, img: gridImg },
  ]

  const data2 =[
    { id: 6, img: gridImg },
    { id: 7, img: gridImg },
  ]

  return (
    <div className=" w-[100vw] h-[100vh]">
      <h2 className=" font-heading font-bold text-[1rem] text-center lg:text-start  md:text-[2rem] ">The Golden Beach Hotel</h2>

      {/* details  */}
      <div className="md:w-10/12 w-11/12 lg:w-7/12 mx-auto lg:mx-0 rounded-md bg-white shadow-md mt-3 ">
        {/* flight name  */}
        <div className=" bg-[#313132] text-white rounded-t-md px-[2rem]">
          <p className=" flex font-text md:gap-4 gap-2 items-center py-4">
            <span><IoLocationSharp /></span>
            <span className="font-semibold font-text">Near Vaga Beach</span>
            <span>•</span>
            <span className="ml-2 text-[1rem] font-text">Show map</span>
          </p>
        </div>

        {/* grid section 1 */}
        <div className="p-6 mx-auto">
          <div className=" flex gap-6">
            {/* left section  */}
            <div className=" w-4/12 flex flex-col gap-6"> 
            {
              data2.map((item,index) =>{
                return(
                  <div key={index}>
                <img src={item.img} alt="img" />
              </div>
                )
              })
            }
            </div>
            {/* right section  */}
            <div className="w-8/12 h-full flex ">
              <img src={data[0].img} alt="img" loading="lazy" className=" w-full h-full object-cover" />
            </div>

          </div>
        </div>

        {/* grid section 2  */}
        <div className=" px-6 overflow-x-auto">
          <div className=" flex gap-4">
            {
              data.map((item, index) => {
                return (
                  <div key={index} className="  bg-red-400">
                    <img src={item.img} alt="img" className="w-full h-full object-fit " />
                  </div>
                )
              })
            }
            {/* <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div>
            <div>
              <img src={gridImg} alt="img" />
            </div> */}


          </div>
        </div>

        {/* text-section  */}
        <div>
          <p className=" py-8 px-6 font-text">Situated in Colva, 300 metres from Colva Beach, Beleza By The Beach features accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden. Featuring a restaurant, the property also has a bar, as well as a hot tub. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.
            <br />
            <br />
            At the resort rooms have air conditioning, a seating area, a flat-screen TV with cable channels, a safety deposit box and a private bathroom with a shower, free toiletries and a hairdryer. Rooms come with a kettle, while certain rooms come with a terrace and others also boast pool views. The rooms have a wardrobe.
            <br />
            <br />

            A buffet, continental or Full English/Irish breakfast is available each morning at the property.
            <br />
            <br />

            Beleza By The Beach offers a children&#39;s playground. You can play billiards at this 4-star resort, and bike hire and car hire are available.
            <br />
            <br />

            Margao Railway Station is 9.2 km from the accommodation, while Basilica Of Bom Jesus is 31 km from the property. The nearest airport is Dabolim Airport, 24 km from Beleza By The Beach.</p>
        </div>

        {/* facilities  */}
        <div className=" space-y-3 px-6 pb-6">
          <h2 className=" font-bold text-[1rem]">Most popular facilities</h2>
          <div className=" text-[#555555] flex flex-wrap gap-6 text-[1.2rem]">
            <p className=" flex items-center gap-2"><span><IoRestaurantOutline /></span>Restaurant</p>
            <p className=" flex items-center gap-2"><span><MdRoomPreferences /></span>Room service</p>
            <p className=" flex items-center gap-2"><span><IoWifiOutline /></span>Free WIFI</p>
            <p className=" flex items-center gap-2"><span><GrSwim /></span>Swimming Pool</p>

          </div>
        </div>


      </div>
    </div>
  )
}
