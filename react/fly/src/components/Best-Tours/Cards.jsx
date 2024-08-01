
import Card from "./Card"
import { toursData } from "../../assets/data"


export default function Cards() {



  return (
    <div className="w-10/12  mx-auto flex flex-col my-[6rem] ">
      <div className=" flex flex-col item-center mb-[3rem] justify-center">
        <h1 className=" font-heading font-bold text-[2rem] mx-auto">Best Value Tours</h1>
        <p className="mx-auto text-slate-400">Best offers trips from us</p>
      </div>
      <div className=" lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6 grid grid-rows-2">
       {
        toursData.map((tour) => (
          
            <Card key={tour.id} day={tour.day} title={tour.title} image={tour.image} services={tour.services} price={tour.price} />
         
        ))
       }

      </div>
    </div>
  )
}
