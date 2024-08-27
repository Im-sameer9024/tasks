import gridImg from "../../assets/grid.png"


export default function Cruise() {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className="md:w-7/12 w-full mx-auto p-4 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="bg-[#00247D] text-white p-3 rounded-t-lg  font-semibold flex justify-between">
          <span>5 DAY | NAME OF CRUISES | DETAILS(DATE)</span>
        </div>

        {/* Image and Details */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <div className="md:w-1/3 w-full relative">
            <img
              src={gridImg}
              alt="Cruise Map"
              className="w-full h-auto rounded-md"
            />
            <div className=" absolute bottom-0 bg-black rounded-b-lg bg-opacity-60 w-full text-center mt-2 py-3 text-white">5 DAY CRUISE_NAME</div>
          </div>
          <div className="md:w-2/3 w-full pl-4  flex  justify-between">
            {/* left section  */}
            <div className=" space-y-3">
              <div className="flex items-center">
                <i className="fas fa-ship mr-2"></i>
                <span>CRUISES</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>CRUISES_LOCATION</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-calendar-day mr-2"></i>
                <span>CRUISES_DAY</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-anchor mr-2"></i>
                <span>CRUISES_STOPS</span>
              </div>
            </div>
            <div className=" text-end pt-6">
              <p>From</p>
              <p className=" font-bold text-[1.4rem]">INR ₹ 5,000</p>
              <p className=" text-[0.8rem]">Includes taxes</p>
            </div>
          </div>
        </div>
        <hr className=" my-8 border-[0.2] border-black" />

        {/* Pricing Table */}
        <div className=" bg-[#eae9e9] rounded-md">
          <table className="w-full text-center text-[0.6rem] md:text-[0.9rem]">
            <thead className=" border-b border-black">
              <tr >
                <th className="p-2">DATE</th>
                <th className="p-2 bg-[#D9D9D9]">INTERIOR</th>
                <th className="p-2">OCEANVIEW</th>
                <th className="p-2 bg-[#D9D9D9]">BALCONY</th>
                <th className="p-2">SUITE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">XX,SEP,2024</td>
                <td className="p-2">₹$$$$</td>
                <td className="p-2 font-bold">SOLD OUT</td>
                <td className="p-2">₹$$$$$</td>
                <td className="p-2">₹$$$$$</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className=" bg-[#D9D9D9] my-6 py-3 space-y-4 px-4 rounded-md flex justify-between flex-col md:flex-row">
          <div className=" grid grid-cols-1  gap-x-8 gap-y-3">
            <div className="flex items-center">
              <i className="fas fa-ban mr-2"></i>
              <span>Non Refundable Deposit</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-glass-cheers mr-2"></i>
              <span>Drink Specials</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tag mr-2"></i>
              <span>Special Promotions</span>
            </div>

          </div>
         <div>
         <button className="bg-[#00247D] inline-block text-white px-[4rem]  rounded-lg py-1">
            Enquire
          </button>
          <p className=" text-[0.8rem] md:text-center">Includes taxes and fees</p>
         </div>
        </div>

        {/* Footer */}
        <div className=" bg-[#D9D9D9] rounded-md p-4 flex justify-between items-center">
          <p className="text-sm text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo sunt esse neque impedit deleniti commodi ab suscipit rem dolores nostrum molestiae aut magnam aliquam, facilis culpa dolorum, aspernatur modi sed!
          </p>

        </div>
      </div>

    </div>
  )
}
