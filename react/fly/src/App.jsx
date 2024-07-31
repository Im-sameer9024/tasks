import Exclusive from './components/Exclusive-Deals/Exclusive'
import Besttours from "./components/Best-Tours/Besttours";
import Popular from "./components/Popular-Section/Popular";

export default function App() {
  return (
   <div className="w-[100vw] overflow-x-hidden h-auto">
   
   <Popular/>
   <Exclusive/>
  <Besttours/>
   </div>
  )
}
