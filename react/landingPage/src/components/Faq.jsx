import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


export default function Faq() {

  const[faq1,setFaq1] = useState(false)
  const[faq2,setFaq2] = useState(false)
  const[faq3,setFaq3] = useState(false)
  const[faq4,setFaq4] = useState(false)
  const[faq5,setFaq5] = useState(false)
  const[faq6,setFaq6] = useState(false)
  const[faq7,setFaq7] = useState(false)
  const[faq8,setFaq8] = useState(false)
  const[faq9,setFaq9] = useState(false)


  return (
    <div className="w-full my-[6rem]">
      <div className="w-10/12 lg:item-center lg:flex lg:flex-row lg:justify-between flex flex-col mx-auto">
        {/* left side  */}
        <div className="lg:w-3/12">
          <p className=" font-text font-semibold text-center">STILL HAVE QUESTION?</p>
          <h1 className=" text-center font-heading font-bold text-[3rem]">FAQ</h1>
        </div>

        {/* Right side  */}
        <div className=" space-y-8  lg:w-7/12">
        {/* first Faq  */}
          <div className=" w-full flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">What are the top attractions included in your tours?</h1>
            {
              faq1 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq1(!faq1)}>
              {
           faq1 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Second Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">Do I need to make a reservation?</h1>
            {
              faq2 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq2(!faq2)}>
              {
           faq2 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Third Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">Are children allowed on the tour?</h1>
            {
              faq3 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq3(!faq3)}>
              {
           faq3 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Fourth Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">What safety measures are in place for tours?</h1>
            {
              faq4 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq4(!faq4)}>
              {
           faq4 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Fifth Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">Do you offer group or private tours?</h1>
            {
              faq5 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq5(!faq5)}>
              {
           faq5 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Sixth Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">What is your cancellation and refund policy?</h1>
            {
              faq6 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq6(!faq6)}>
              {
           faq6 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Seventh Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">Do you offer customized or private tours?</h1>
            {
              faq7 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq7(!faq7)}>
              {
           faq7 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

          {/* Eight Faq  */}
          <div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">What are the payment options available?</h1>
            {
              faq8 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq8(!faq8)}>
              {
           faq8 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>

{/* Seventh Faq  */}
<div className=" flex justify-between">
          {/* infomation  */}
          <div>
            <h1 className=" font-heading font-semibold">How do I contact customer support?</h1>
            {
              faq9 && <p className=" font-text mt-3">Providing a detailed list of popular attractions covered in your tours can attract search queries related to those destinations, Explain the booking process clearly, including steps and any necessary information, to capture search queries about booking procedures</p>
            }
          </div>

          {/* button  */}
          <div>
            <button onClick={()=>setFaq9(!faq9)}>
              {
           faq9 ? <FaMinus/> : <FaPlus/>
              }
            </button>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
