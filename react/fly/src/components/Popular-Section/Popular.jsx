import Carousel from "./Slider/Carousel"



const Popular = () => {
  return (
    <div className=" w-[100vw] h-[100vh]">
      <div className=" w-10/12 mx-auto flex flex-col">
        <h1 className=" font-heading font-bold text-[2rem] mx-auto">Popular Destinations</h1>
        <Carousel />
      </div>

    </div>
  )
}

export default Popular
