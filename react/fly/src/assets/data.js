// inital data - dynamic data strutre works
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"

import tour1 from './tour1.jpg'
import tour2 from './tour2.jpg'
import tour3 from './tour3.jpg'





export const Sliderdata = [
  { id: 0, title: "India", image: img1, description: "India is a land of various cultures and a rich heritage. It is the seventh-largest country by area and the second-most populous country globally " },
  { id: 1, title: "usa", image: img2, description: "The United States of America is the world's third largest country in size and nearly the third largest in terms of population" },
  { id: 2, title: "uae", image: img3, description: "The United Arab Emirates (UAE) is situated in the Southeast of the Arabian Peninsula, bordering Oman and Saudi Arabia" },
  { id: 3, title: "america", image: img4, description: "The United States of America is the world's third largest country in size and nearly the third largest in terms of population" },
  { id: 4, title: "Londan", image: img5, description: "London became known for its typical  also known as Pea Soupers. London was sometimes referred to as The Smoke" },
];

export const dealsType = [
  {
    id:0, name:"HOT DEALS"
  },
  {
    id:1, name:"INTERNATIONAL HOLIDAY"
  },
  {
    id:2, name:"DOMESTIC HOLIDAY"
  },
  {
    id:3, name:"TOP HOLIDAY"
  },
]

export const Exclusivedeals = 
  {
    "HOT DEALS": [
    { id: 0, title: "Himachal Pradesh", image: tour1, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 1, title: "Himachal Pradesh", image: tour1, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 2, title: "Himachal Pradesh", image: tour1, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }],

    "INTERNATIONAL HOLIDAY":[
      { id: 0, title: "Himachal Pradesh", image: tour2, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
      { id: 1, title: "Himachal Pradesh", image: tour2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
      { id: 2, title: "Himachal Pradesh", image: tour2, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }],

      "DOMESTIC HOLIDAY":[
      { id: 0, title: "Himachal Pradesh", image: tour3, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
      { id: 1, title: "Himachal Pradesh", image: tour3, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
      { id: 2, title: "Himachal Pradesh", image: tour3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }],

      "TOP HOLIDAY":[
      { id: 0, title: "Himachal Pradesh", image: img1, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
      { id: 1, title: "Himachal Pradesh", image: img2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
      { id: 2, title: "Himachal Pradesh", image: img3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }],
  }





export const toursData = [
  { id: 0, title: "Himachal Pradesh", image: tour1, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 1, title: "Himachal Pradesh", image: tour2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
  { id: 2, title: "Himachal Pradesh", image: tour3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 3, title: "Himachal Pradesh", image: tour1, price: 10000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 4, title: "Himachal Pradesh", image: tour2, price: 4900, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 5, title: "Himachal Pradesh", image: tour3, price: 4900, services: ["Mountaing", "Trek", "Campning"], day: 8 },
]


