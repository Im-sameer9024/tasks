/* eslint-disable react/prop-types */
import { createContext } from "react";
import {Sliderdata,Exclusivedeals,toursData,dealsType} from '../assets/data'



export const StoreContext = createContext([]);


const Dataproveder = ({ children }) => {

  const data = {
    Sliderdata,
    Exclusivedeals,
    toursData,
    dealsType
  };

  return (
    <StoreContext.Provider value={data}>
      {children}
    </StoreContext.Provider>
  )

}

export default Dataproveder;