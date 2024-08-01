import { Link, NavLink } from "react-router-dom";
import AllDeals from './AllDeals'

export default function Exclusive() {
  return (
    <div className=" w-full mx-auto h-auto overflow-x-hidden">
      <div className="w-10/12 flex flex-col mx-auto items-center my-[3rem] relative">
      {/* Heading  */}
          <h1 className=" font-heading font-bold text-[2.5rem] mx-auto">Exclusive Deals</h1>
       

        {/* Links for All Deals */}
        <div id="allDeals" className=" my-5">
          <ul className=" space-x-6 font-bold">
            <NavLink to="/hotdeals">HOT DEAL</NavLink>
            <NavLink to="/international">INTERNATIONAL</NavLink>
            <NavLink to="/domestic">DOMESTIC DEALS</NavLink>
            <NavLink to="/holidays">DOMESTIC HOLIDAYS</NavLink>
          </ul>
        </div>
        <div className="w-full  h-full my-[3rem]">
          <AllDeals />
        </div>
      </div>
    </div>
  )
}
