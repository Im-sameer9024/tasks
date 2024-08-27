import { IoLocationSharp } from "react-icons/io5";
import gridImg from "../../assets/grid.png"
import day1 from "../../assets/day1.jpeg"
import day2 from "../../assets/Fimg1.jpeg"
import day3 from "../../assets/day3.jpeg"
import day4 from "../../assets/Fimg2.jpeg"

import { IoRestaurantOutline } from "react-icons/io5";
import { MdRoomPreferences } from "react-icons/md";
import { IoWifiOutline } from "react-icons/io5";
import { GrSwim } from "react-icons/gr";
import { useState } from "react";
// import { useState } from "react";


export default function Hoteldetails() {

  const [idx, setIdx] = useState(0)

  const data = [
    { id: 0, img: gridImg },
    { id: 1, img: day1 },
    { id: 2, img: day2 },
    { id: 3, img: gridImg },
    { id: 4, img: day3 },
    { id: 5, img: gridImg },
    { id: 6, img: day4 },
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

        {/* grid section  */}

        <div className="w-11/12 mx-auto my-6">
          {/* grid-1  */}
          <div className=" grid grid-cols-3 grid-rows-2 gap-6 mb-6">
              <img src={data[0].img} alt="" onClick={() => setIdx(data[0].id)} />
              <img src={data[idx].img} id="fade" alt="" className=" col-span-2 row-span-2 h-full w-full" />
              <img src={data[1].img} alt="" onClick={() =>setIdx(data[1].id)} />
          </div>
          {/* grid-2  */}
          <div className="grid grid-rows-1 grid-cols-5 gap-4">
            <div>
              <img src={data[2].img} alt="" onClick={() => setIdx(data[2].id)} />
            </div>
            <div>
              <img src={data[3].img} alt=""  onClick={() => setIdx(data[3].id)}/>
            </div>
            <div>
              <img src={data[4].img} alt="" onClick={() => setIdx(data[4].id)} />
            </div>
            <div>
              <img src={data[5].img} alt="" onClick={() => setIdx(data[5].id)} />
            </div>
            <div>
              <img src={data[6].img} alt="" onClick={() => setIdx(data[6].id)} />
            </div>

          </div>
        </div>


        {/* text-section  */}
        <div className=" w-11/12 mx-auto">
          <p className=" py-8  font-text">Situated in Colva, 300 metres from Colva Beach, Beleza By The Beach features accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden. Featuring a restaurant, the property also has a bar, as well as a hot tub. The accommodation provides a 24-hour front desk, airport transfers, room service and free WiFi throughout the property.
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
        <div className=" space-y-3 mx-auto w-11/12 pb-6">
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
