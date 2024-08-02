

/* eslint-disable react/no-unescaped-entities */
import { TfiTime } from "react-icons/tfi";
import { TfiIdBadge } from "react-icons/tfi";
import { TfiCalendar } from "react-icons/tfi";
import { TfiUser } from "react-icons/tfi";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import img6 from '../../../assets/img6.jpeg'
import img7 from '../../../assets/img7.jpeg'
import review from '../../../assets/review.jpeg'
import day1 from '../../../assets/day1.jpeg'
import day3 from '../../../assets/day3.jpeg'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { useState } from "react";
import { similarTours } from '../../../assets/data'
import Card from "../../Best-Tours/Card.jsx"

export default function Grandgoa() {


  const position = [40.7127753, -74.0059728];
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
  })

  const colors = {
    blue: "#00247D",
    grey: "#D2D2D2"
  }



  const stars = Array(5).fill(0)

  const [rating, setRating] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const handlerMouseOverStar = value => {
    setHoverValue(value)
  }

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined)
  }

  const handleClickStar = value => {
    setRating(value)
  }

  return (
    <div className="w-full h-auto py-[2rem] bg-[#f6f9f9]">
      <div className=" w-10/12 item-center xl:justify-between mx-auto xl:flex xl:flex-row  flex flex-col">

        {/* Left section  */}

        <div className=" xl:w-7/12 w-full">

          {/* Heading  */}
          <div className="  flex">
            <h1 className=" font-heading font-bold mx-auto text-[2rem]">Grand Goa</h1>
          </div>


          <div className=" my-[2rem]">
            <hr className=" border-dashed border-slate-300" />
            <div className=" flex justify-between my-4">
              {/* first  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem] ">
                  <TfiTime />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">6 days</p>
              </div>

              {/* second  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiIdBadge />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">Age 12+</p>
              </div>

              {/* Third  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiCalendar />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">May, Jun, Jul</p>
              </div>

              {/* Fourth  */}
              <div className=" flex flex-col items-center">
                <div className=" text-[1.3rem] md:text-[2rem]">
                  <TfiUser />
                </div>
                <p className=" font-text text-[0.7rem] md:text-[1rem]">Availability 50</p>
              </div>
            </div>
            <hr className=" border-dashed border-slate-300" />
          </div>

          {/* Day-1  */}
          <div>
            <div>
              <h1 className=" font-heading font-bold text-[1.4rem]">Day 1</h1>
              <p className=" text-[0.9rem] font-text my-[1rem]">Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo
                booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep
                v chillwave. Seitan High Life reprehenderit consectetur cupidatat kogi. Et leggings fanny pack, elit bespoke vinyl
                art party Pitchfork selfies master cleanse.</p>
            </div>
            <div className=" my-[2rem]">
              <img src={day1} alt="" className=" rounded-t-2xl" />
              <p className=" text-center my-4 text-[0.5rem] md:text-[1rem] font-text text-[#777777]">The road to success and the road to failure are almost exactly the same</p>
            </div>
          </div>

          {/* Day-2  */}
          <div>
            <h1 className=" font-heading font-bold text-[1.4rem]">Day 2</h1>
            <p className=" font-text text-[0.9rem] my-[1rem]">Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip
              veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter, drinking
              vinegar jean vinegar stumptown yr pop-up artisan sunt. Craft beer elit seitan exercitation, photo booth,</p>
          </div>

          {/* Day-3  */}
          <div>
            <div>
              <h1 className=" font-heading font-bold text-[1.4rem]">Day 3</h1>
              <p className=" text-[0.9rem] font-text my-[1rem]">Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black
                knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral.</p>
            </div>
            <div className=" my-[2rem]">
              <img src={day3} alt="" className=" rounded-md" />
              <p className=" text-center my-4 text-[0.5rem] font-text text-[#777777] md:text-[1rem]">The road to success and the road to failure are almost exactly the same</p>
            </div>
          </div>

          {/* Day 4  */}
          <div>
            <div>
              <h1 className=" font-heading font-bold text-[1.4rem]">Day 4</h1>
            </div>
            <p className=" text-[0.9rem] font-text my-[2rem]" >Leather detail shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-
              up tweaks patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless
              comfortable full leather lining eye-catching unique detail to the toe low</p>
            <p className=" text-[0.9rem] font-text my-[2rem]">Foam padding in the insoles leather finest quality staple flat slip-on design pointed toe off-duty shoe. Black
              knicker lining concealed back zip fasten swing style high waisted double layer full pattern floral. Polished finish
              elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
            <p className=" text-[0.9rem] font-text my-[2rem]">See-through delicate embroidered organza blue lining luxury acetate-mix stretch pleat detailing. Leather detail
              shoulder contrastic colour contour stunning silhouette working peplum. Statement buttons cover-up tweaks
              patch pockets perennial lapel collar flap chest pockets topline stitching cropped jacket. Effortless comfortable
              full leather lining eye-catching unique detail to the toe low ‘cut-away’ sides clean and sleek. Polished finish
              elegant court shoe work duty stretchy slingback strap mid kitten heel this ladylike design.</p>
          </div>

          {/* Included  */}
          <div className=" xl:w-full w-full md:w-11/12 mx-auto flex justify-between my-[1rem]">
            <div className=" w-4/12 md:w-3/12">
              <h1 className=" font-bold">Included</h1>
            </div>
            <div className="w-7/12 md:w-4/12">
              <p>✓  Airfare</p>
              <p>✓ 5 Star Accomodation</p>
              <p className="md:hidden">✓ Local transportation </p>
              <p className="md:hidden">✓ Professional Guide</p>
            </div>
            <div className=" hidden md:block  w-4/12">
              <p>✓ Local transportation </p>
              <p>✓ Professional Guide</p>

            </div>
          </div>

          <hr />

          {/* Not Included  */}
          <div className="  w-full flex justify-between my-[1rem]">
            <div className=" w-4/12 md:w-3/12 ">
              <h1 className=" font-bold">Not Included</h1>
            </div>
            <div className="w-7/12 md:w-4/12">
              <p>✕ Departure Taxes</p>
              <p>✕ Entry Fees</p>

            </div>
            <div className="w-4/12 hidden md:block">
              <p>✕ Entry Fees</p>

            </div>
          </div>

          <hr />

          {/* Map section  */}

          <div className=" xl:w-full xl:flex  xl:gap-4 flex md:flex md:flex-row md:justify-between md:w-10/12 md:mx-auto flex-col gap-4 my-[2rem]">
            <div>
              <h1 className=" font-bold">Maps</h1>
            </div>

            {/* Map  */}
            <div className=" w-[30rem] h-[18rem] ">

              <MapContainer center={position} zoom={13} className="h-full w-[100%]">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>


            </div>
          </div>

          {/* 4 - Reviews  */}

          <div className=" mt-[2rem]">
            <h1 className=" font-heading font-bold ">4 Reviews</h1>
            <hr  />

            {/* Ratings  */}
            <div className=" xl:grid-cols-2 xl:m-0 xl:mt-6 xl-w-full grid md:w-10/12 mx-auto  grid-flow-cols grid-cols-1 gap-[2rem] mt-[2rem] ">

              {/* Grid -1  */}

              <div className=" flex items-baseline justify-between">
                <p className=" font-bold font-text">Accomodation</p>
                <div className="flex">
                  {
                    stars.map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        values={rating}
                        onChange={(e) => setRating(e.target.value)}
                        color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                        onMouseOver={() => handlerMouseOverStar(index + 1)}
                        onMouseLeave={() => handleMouseLeaveStar()}
                        onClick={() => handleClickStar(index + 1)}

                      />
                    ))
                  }
                </div>
              </div>

              {/* Grid-2  */}
              <div className="  flex items-baseline justify-between">
                <p className=" font-bold font-text">Services</p>
                <div className="flex">
                  {
                    stars.map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        values={rating}
                        onChange={(e) => setRating(e.target.value)}
                        color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                        onMouseOver={() => handlerMouseOverStar(index + 1)}
                        onMouseLeave={() => handleMouseLeaveStar()}
                        onClick={() => handleClickStar(index + 1)}

                      />
                    ))
                  }
                </div>
              </div>

              {/* Grid-3  */}
              <div className=" flex items-baseline justify-between">
                <p className=" font-bold font-text">Meals</p>
                <div className="flex">
                  {
                    stars.map((_, index) => (
                      <FaStar
                        key={index}
                        size={15}
                        values={rating}
                        onChange={(e) => setRating(e.target.value)}
                        color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                        onMouseOver={() => handlerMouseOverStar(index + 1)}
                        onMouseLeave={() => handleMouseLeaveStar()}
                        onClick={() => handleClickStar(index + 1)}

                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

          {/* Reviews  */}

          {/* Review -1  */}
          <div className=" xl:w-full xl:text-start xl:flex xl:flex-row xl:justify-between flex md:w-10/12 mx-auto flex-col  text-center xl:mt-4 gap-4 my-[2rem]">


            <div className="xl:w-3/12">
              <img src={review} alt="review" className=" w-14 h-14 rounded-full" />
            </div>


            <div className=" xl:w-9/12 ">
              <div>
                <h1 className=" font-heading font-bold ">Jack Dawson</h1>
                <p>December 15,2016 at 4:38 pm</p>
                <p className=" mt-3 font-text">Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan
                  retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.
                  Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch
                  freegan sed.</p>
              </div>
              <div className=" grid  grid-flow-cols grid-cols-1 gap-[2rem] mt-[2rem] ">

                {/* Grid -1  */}

                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Accomodation</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>

                {/* Grid-2  */}
                <div className="  flex items-baseline justify-between">
                  <p className=" font-bold font-text">Services</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>

                {/* Grid-3  */}
                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Meals</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr className=" border-dashed border-slate-300" />


          {/* Review -2  */}
          <div className=" xl:w-full xl:text-start xl:flex xl:flex-row xl:justify-between flex md:w-10/12 mx-auto flex-col  text-center xl:mt-4 gap-4 my-[2rem]">


            <div className=" xl:w-3/12">
              <img src={review} alt="review" className=" w-14 h-14 rounded-full" />
            </div>


            <div className=" xl:w-9/12">
              <div>
                <h1 className=" font-heading font-bold ">Jack Dawson</h1>
                <p>December 15,2016 at 4:38 pm</p>
                <p className=" mt-3 font-text">Et leggings fanny pack, elit bespoke vinyl art party Pitchfork selfies master cleanse Kickstarter seitan
                  retro. Drinking vinegar stumptown yr pop-up artisan sunt. Deep v cliche lomo biodiesel Neutra selfies.
                  Shorts fixie consequat flexitarian four loko tempor duis single-origin coffee. Banksy, elit small batch
                  freegan sed.</p>
              </div>
              <div className=" grid  grid-flow-cols grid-cols-1 gap-[2rem] mt-[2rem] ">

                {/* Grid -1  */}

                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Accomodation</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>

                {/* Grid-2  */}
                <div className="  flex items-baseline justify-between">
                  <p className=" font-bold font-text">Services</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>

                {/* Grid-3  */}
                <div className=" flex items-baseline justify-between">
                  <p className=" font-bold font-text">Meals</p>
                  <div className="flex">
                    {
                      stars.map((_, index) => (
                        <FaStar
                          key={index}
                          size={15}
                          values={rating}
                          onChange={(e) => setRating(e.target.value)}
                          color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                          onMouseOver={() => handlerMouseOverStar(index + 1)}
                          onMouseLeave={() => handleMouseLeaveStar()}
                          onClick={() => handleClickStar(index + 1)}

                        />
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
          <hr className=" border-dashed border-slate-300" />

          <hr className=" border-dashed border-slate-300" />
          {/* Write A Review  */}
          <hr className=" border-dashed border-slate-300" />

          <div className=" my-[2rem]">
            <label htmlFor="comment">Comment<sup>*</sup></label>
            <textarea name="comment" id="comment" rows={10} className="mt-3 bg-white w-full border rounded-lg outline-none p-2 "></textarea>
          </div>


          
          {/* Ratings  */}
          <div className=" grid mx-auto w-full md:w-10/12  grid-flow-cols grid-cols-1 gap-[2rem] mt-[2rem] ">

            {/* Grid -1  */}

            <div className=" flex items-baseline justify-between">
              <p className=" font-bold font-text">Accomodation</p>
              <div className="flex">
                {
                  stars.map((_, index) => (
                    <FaStar
                      key={index}
                      size={15}
                      values={rating}
                      onChange={(e) => setRating(e.target.value)}
                      color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                      onMouseOver={() => handlerMouseOverStar(index + 1)}
                      onMouseLeave={() => handleMouseLeaveStar()}
                      onClick={() => handleClickStar(index + 1)}

                    />
                  ))
                }
              </div>
            </div>

            {/* Grid-2  */}
            <div className="  flex items-baseline justify-between">
              <p className=" font-bold font-text">Services</p>
              <div className="flex">
                {
                  stars.map((_, index) => (
                    <FaStar
                      key={index}
                      size={15}
                      values={rating}
                      onChange={(e) => setRating(e.target.value)}
                      color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                      onMouseOver={() => handlerMouseOverStar(index + 1)}
                      onMouseLeave={() => handleMouseLeaveStar()}
                      onClick={() => handleClickStar(index + 1)}

                    />
                  ))
                }
              </div>
            </div>

            {/* Grid-3  */}
            <div className=" flex items-baseline justify-between">
              <p className=" font-bold font-text">Meals</p>
              <div className="flex">
                {
                  stars.map((_, index) => (
                    <FaStar
                      key={index}
                      size={15}
                      values={rating}
                      onChange={(e) => setRating(e.target.value)}
                      color={(hoverValue || rating) > index ? colors.blue : colors.grey}
                      onMouseOver={() => handlerMouseOverStar(index + 1)}
                      onMouseLeave={() => handleMouseLeaveStar()}
                      onClick={() => handleClickStar(index + 1)}

                    />
                  ))
                }
              </div>
            </div>
          </div>

          <div className=" flex">
          <button className=" bg-[#00247D] text-white font-heading  px-[1.5rem] my-[2rem] py-2 mx-auto">Post Comment</button>
          </div>
        </div>

        {/* Right section  */}
        <div className=" xl:w-4/12 w-full ">

          {/* Booking section  */}
          <div className=" xl:block hidden border h-[20rem] rounded-lg">
            <div className=" bg-[#272424] text-white rounded-t-lg">
              <h1 className="flex  items-baseline py-1 rounded-lg justify-between px-2 text-[1.5rem] font-bold">₹6,000<span className=" font-normal font-text text-[1rem]">Per Person</span></h1>
            </div>

            <div className=" flex my-[2rem] px-4 justify-between items-baseline">
              <label htmlFor="person text-[0.9rem]">Person</label>
              <input type="number" name="person" id="person" placeholder="0" className=" w-10 h-10 text-center border border-slate-300 outline-none " />
              <p>x</p>
              <p className=" flex items-baseline font-text">₹ 6,000.00</p>
            </div>

            <div className=" mx-5 text-white">
              <button className=" bg-[#00247D]  py-2 w-full text-center mx-auto font-text text-[0.9rem] ">Book This Tour</button>
            </div>

            <div className=" mx-5 flex flex-col gap-6 ">
              <hr className=" border-dashed border-slate-300 mt-8" />
              <p className=" font-text text-[0.9rem] flex justify-between">
                This tour's been viewed 544 times in
                the past week
                <span> <TfiTime /></span>
              </p>
            </div>

          </div>

          {/* Share this tour  */}

          <div className=" xl:block hidden font-text my-[2rem] ">
            <button className=" border flex items-center justify-center py-2 w-full text-center gap-3  "> <span> <MdOutlineForwardToInbox /></span> Share this tour</button>
          </div>

          {/* Informations  */}
          <div className="xl:block hidden border h-[8rem] rounded-lg px-4 flex flex-col justify-center gap-4">
            <h1 className=" font-heading font-bold">For More Informations</h1>
            <hr />
            <div className=" gap-2 flex flex-col">
              <p className=" text-[#555555] flex items-center gap-3 "> <CiMobile1 /> +91 ***** ***** </p>

              <p className=" text-[#555555] flex items-center gap-3  "> <TfiTime /> Mon - Sat 8:00 AM - 5:00 PM </p>
            </div>
          </div>

          <hr className=" my-[2rem]" />
          {/* img6  */}
          <div className=" xl:block hidden mb-[2rem] rounded-lg w-full relative">
            <img src={img6} alt="" className=" rounded-lg " />
            <p className=" absolute bottom-[40%] z-10 bg-[#00247D] inline-block text-white font-bold py-1 px-2">₹6,000</p>
            <div className=" absolute bottom-[20%] left-[5%]">
              <h1 className=" font-bold text-heading text-white text-[1.2rem]">Grand Himachal</h1>
            </div>
          </div>

          {/* img7  */}
          <div className=" xl:block hidden rounded-lg w-full relative">
            <img src={img7} alt="" className=" rounded-lg " />
            <p className="absolute bottom-[40%] z-10 bg-[#00247D] font-bold py-1 px-2 inline-block text-white">₹6,000</p>
            <div className=" absolute bottom-[20%] left-[5%]">
              <h1 className=" font-bold text-heading text-white text-[1.2rem]">Seoul Your Soul</h1>
            </div>
          </div>
        </div>

      </div>

      {/* Similar Tours  */}
      <div className=" hidden w-10/12 mx-auto">
        <h1 className=" font-bold font-heading my-[1rem]">Similar Tours</h1>
        <hr className=" border-dashed border-slate-300" />
        <div className=" flex justify-between items-center my-[2rem] flex-wrap gap-4">
          {
            similarTours.map((tour) => (
              <Card key={tour.id} day={tour.day} title={tour.title} image={tour.image} services={tour.services} price={tour.price} />
            ))
          }
        </div>

      </div>

      {/* for Mobile screen  */}
      <div className="w-10/12 mx-auto">
        <h1 className=" font-bold text-center text-[1.5rem] font-heading my-[1rem]">Similar Tours</h1>
        <hr className=" border-dashed border-slate-300" />
        <div className=" flex justify-between items-center my-[2rem] flex-wrap gap-4">
          {
            similarTours.map((tour) => (
              <Card key={tour.id} day={tour.day} title={tour.title} image={tour.image} services={tour.services} price={tour.price} />
            ))
          }
        </div>

      </div>

    </div>
  )
}
