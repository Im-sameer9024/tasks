import { Link } from "react-router-dom";
import AllDeals from './AllDeals'

export default function Exclusive() {
  return (
    <div className=" w-full mx-auto h-auto overflow-x-hidden">
      <div className="w-10/12 flex flex-col mx-auto items-center my-[3rem]">
      {/* Heading  */}
          <h1 className=" font-heading font-bold text-[1.5rem] mx-auto">Exclusive Deals</h1>
       

        {/* Links for All Deals */}
        <div className=" my-5">
          <ul className=" space-x-4">
            <Link to="/hotdeals">HOT DEAL</Link>
            <Link to="/international">INTERNATIONAL</Link>
            <Link to="/domestic">DOMESTIC DEALS</Link>
            <Link to="/holidays">DOMESTIC HOLIDAYS</Link>
          </ul>
        </div>
        <div className="w-full  h-full my-[3rem]">
          <AllDeals />
        </div>
      </div>
    </div>
  )
}
