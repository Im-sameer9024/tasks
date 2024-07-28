/* eslint-disable react/prop-types */
import Deal from "./Deal";


export default function AllDeals({category,Exclusivedeals}) {



  return (
    <div className=" flex justify-between ">
      {
        Exclusivedeals[category].map((deal) =>(
          <Deal key={deal.id} title={deal.title} image={deal.image} price={deal.price} services={deal.services} day={deal.day} />
        ))
      }
    </div>
  )
}
