import middleimg from "../../assets/banner.jpg"
import Cards from "./Cards"

export default function Besttours() {
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-full">
        <img src={middleimg} alt="img" />
      </div>
      <div>
         <Cards/>
      </div>
    </div>
  )
}
