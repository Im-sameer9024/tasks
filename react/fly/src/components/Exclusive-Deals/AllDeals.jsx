import { Routes, Route } from "react-router-dom";
import Hotdeals from './All Pages/Hotdeals'
import International from "./All Pages/International";
import Domestic from "./All Pages/Domestic";
import Holidays from "./All Pages/Holidays";
import { useState } from "react";
import { HotDeals } from '../../assets/data'
export default function AllDeals() {

  const [index, setIndex] = useState(0)

  function prev() {
    if (index - 1 < 0) {
      setIndex(HotDeals.length - 1)
    }
    else {
      setIndex(index - 1)
    }
  }

  function next() {
    if (index + 1 > HotDeals.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  return (
    <>
      <Routes>
        <Route path="/hotdeals" element={<Hotdeals index={index} prev={prev} next={next} />} />
        <Route path="/international" element={<International index={index} prev={prev} next={next} />} />
        <Route path="/domestic" element={<Domestic index={index} prev={prev} next={next} />} />
        <Route path="/holidays" element={<Holidays index={index} prev={prev} next={next} />} />
      </Routes>
    </>
  )
}
