import { Routes, Route } from "react-router-dom";
import Hotdeals from './All Pages/Hotdeals'
import International from "./All Pages/International";
import Domestic from "./All Pages/Domestic";
import Holidays from "./All Pages/Holidays";

export default function AllDeals() {
  return (
    <>
      <Routes>
        <Route path="/hotdeals" element={<Hotdeals />} />
        <Route path="/international" element={<International />} />
        <Route path="/domestic" element={<Domestic />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </>
  )
}
