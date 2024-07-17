import logo1 from "../assets/Counter.png";
import logo2 from "../assets/Destinations.png";
import logo3 from "../assets/Tips.png";
import logo4 from "../assets/hotel.png";

export default function Contact() {
  return (
    <div className="w-full flex flex-col">
      {/* Cards  */}
      <div className=" w-10/12 flex justify-between mx-auto mt-[3rem]">
        {/* card-1  */}
        <div className="w-3/12 flex flex-col item-center justify-center text-center">
          <img src={logo1} alt="logo" className=" size-[60px] mx-auto" />
          <h1 className=" font-heading font-bold text-[2rem]">100,000+</h1>
          <p className=" font-text text-gray-400">Counter One</p>
        </div>

        {/* card-2  */}
        <div className="w-3/12 flex flex-col item-center justify-center text-center">
          <img src={logo2} alt="logo" className=" size-[60px] mx-auto" />
          <h1 className=" font-heading font-bold text-[2rem]">5,000+</h1>
          <p className=" font-text text-gray-400">Counter One</p>
        </div>

        {/* card-3  */}
        <div className="w-3/12 flex flex-col item-center justify-center text-center">
          <img src={logo3} alt="logo" className=" size-[60px] mx-auto" />
          <h1 className=" font-heading font-bold text-[2rem]">10,000+</h1>
          <p className=" font-text text-gray-400">Counter One</p>
        </div>

        {/* card-4  */}
        <div className="w-3/12 flex flex-col item-center justify-center text-center">
          <img src={logo4} alt="logo" className=" size-[60px] mx-auto" />
          <h1 className=" font-heading font-bold text-[2rem]">2,000+</h1>
          <p className=" font-text text-gray-400">Counter One</p>
        </div>
      </div>


      {/* contact Us  */}
      <div className="w-10/12 flex flex-col mx-auto gap-4 items-center my-[6rem]">
        <h3 className=" font-text font-semibold">DISCOVER YOUR NEXT ADVENTURE WITH US</h3>
        <h1 className=" font-heading text-[3rem] font-bold">Contact Us</h1>
        <form action="" className=" space-y-4">
        {/* Name  */}
            <div className=" w-[784px] flex flex-col gap-2">
                <label htmlFor="">Your name <sup>*</sup></label>
                <input type="text" className="border border-black outline-none rounded-2xl py-1 px-3" placeholder="Enter Your name here" />
            </div>

            {/* Email  */}
            <div className=" w-[784px] flex flex-col gap-2">
                <label htmlFor="">Email address <sup>*</sup></label>
                <input type="email" className="border border-black outline-none rounded-2xl py-1 px-3" placeholder="Enter Your name here" />
            </div>

            {/* Phone  */}
            <div className=" w-[784px] flex flex-col gap-2">
                <label htmlFor="">Phone number <sup>*</sup></label>
                <input type="number" className="border border-black outline-none rounded-2xl py-1 px-3" placeholder="Enter Your name here" />
            </div>

            {/* Destination  */}
            <div className=" w-[784px] flex flex-col gap-2">
            <label htmlFor="">Destination <sup>*</sup></label>
            <select className="border border-black outline-none rounded-2xl py-1 px-3">
                <option value="Himachal">Himachal</option>
                <option value="Himachal">Himachal</option><option value="Himachal">Himachal</option><option value="Himachal">Himachal</option>
            </select>
            </div>

            {/* trip plane  */}
            <div className=" w-[784px] flex flex-col gap-2">
            <label htmlFor="">Let us know about your trip plan! (optional)</label>
                <textarea rows="5" placeholder="Let us know about your trip plan..." name="" id="" className="border border-black outline-none rounded-2xl py-1 px-3"></textarea>
            </div>
            
        </form>
      </div>
    </div>
  );
}
