
export default function Header() {
  return (
    <div className=" bg-header flex flex-col justify-center items-center overflow-x-hidden w-[100vw] lg:h-[100vh] md:h-[50vh]">
      
      <div className=" space-y-2 text-white text-center w-11/12">
        <h1 className="text-[1.7rem] font-heading font-bold">DISCOVER YOUR NEXT ADVENTURE</h1>
        <p className="capitalize font-text font-semibold">UNFORGETTABLE TOURS, UNBEATABLE EXPERIENCE</p>
        <button className=" bg-darkBlue text-white px-10 py-2 rounded-3xl font-text font-semibold hover:text-black hover:bg-gray-500 duration-300">
          ENQUIRE
        </button>
      </div>
     
    </div>
  );
}
