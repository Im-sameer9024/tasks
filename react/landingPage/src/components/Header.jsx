
export default function Header() {
  return (
    <div className=" flex flex-col justify-center items-center overflow-x-hidden w-[100vw] bg-cover h-[100vh]">
      <div className=" space-y-2 text-white text-center w-11/12">
        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.3rem] font-heading font-bold">DISCOVER YOUR NEXT ADVENTURE</h1>
        <p className="capitalize font-text font-semibold">UNFORGETTABLE TOURS, UNBEATABLE EXPERIENCE</p>
        <button className=" bg-darkBlue text-white px-10 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-gray-500 duration-300">
          ENQUIRE
        </button>
      </div>
     
    </div>
  );
}
