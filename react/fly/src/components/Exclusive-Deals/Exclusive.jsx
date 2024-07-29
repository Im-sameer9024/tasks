import { useContext, useState } from "react"
import { StoreContext } from "../../Context-API/StoreContext"
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AllDeals from './AllDeals'


export default function Exclusive() {

  const { Exclusivedeals, dealsType } = useContext(StoreContext)

  const [category, setCategory] = useState(dealsType[0].name)



  return (
    <div className=" w-10/12 mx-auto space-y-6 mb-[8rem]">
      {/* section-1  */}
      <div className="mx-auto w-full gap-3 flex flex-col item-center ">
        <div className=" mx-auto">
          <h1 className=" font-heading font-bold text-[2rem] mx-auto">Exclusive Deals</h1>
        </div>

        {/* deals types and Arrows  */}
        <div className="  flex mx-auto relative w-full">
          <ul className="mx-auto">
            {
              dealsType.map((deal) => (
                <Link className={`mx-3 font-text font-bold
            ${category === deal.name ?
                    "text-[#00247D] border-b-2 border-[#00247D] duration-200 ease-in-out " :
                    ""}
            `} onClick={() => setCategory(deal.name)} key={deal.id}>{deal.name}</Link>
              ))
            }
          </ul>
          {/* Aerrow key  */}
          <div className=" absolute right-0 space-x-5 ">
            <button  className=" bg-slate-400 text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"><AiOutlineArrowLeft /></button>
            <button className=" bg-slate-400 text-white p-1 rounded-full duration-200 hover:bg-[#00247D]"><AiOutlineArrowRight /></button>
          </div>
        </div>

      </div>

      {/* deals slider  */}
      <div>
        <AllDeals Exclusivedeals={Exclusivedeals} category={category} />
      </div>

    </div>
  )
}
