// inital data - dynamic data strutre works
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"

import tour1 from './tour1.jpg'
import tour2 from './tour2.jpg'
import tour3 from './tour3.jpg'
import tour4 from './tour4.jpg'
import tour5 from './tour5.jpg'
import tour6 from './tour6.jpg'
import tour7 from './tour7.jpg'
import tour8 from './tour8.jpg'
import tour9 from './tour9.jpg'
import tour10 from './tour10.jpg'







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

export const HotDeals = [
  {
  data:[{ id: 0, title: "Himachal Pradesh", image: tour1, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 1, title: "Himachal Pradesh", image: tour1, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
  { id: 2, title: "Himachal Pradesh", image: tour1, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
},

{
  data:[{ id: 3, title: "Himachal Pradesh", image: tour2, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 4, title: "Himachal Pradesh", image: tour2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
  { id: 5, title: "Himachal Pradesh", image: tour2, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
},

{
  data:[{ id: 6, title: "Himachal Pradesh", image: tour3, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 7, title: "Himachal Pradesh", image: tour3, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
  { id: 8, title: "Himachal Pradesh", image: tour3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
},  

]

export const InternationDeals =[
  {
    data:[{ id: 0, title: "Himachal Pradesh", image: tour4, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 1, title: "Himachal Pradesh", image: tour4, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 2, title: "Himachal Pradesh", image: tour4, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 3, title: "Himachal Pradesh", image: tour5, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 4, title: "Himachal Pradesh", image: tour5, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 5, title: "Himachal Pradesh", image: tour5, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 6, title: "Himachal Pradesh", image: tour6, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 7, title: "Himachal Pradesh", image: tour6, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 8, title: "Himachal Pradesh", image: tour6, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  }, 

]

export const DomesticDeals = [
  {
    data:[{ id: 0, title: "Himachal Pradesh", image: tour7, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 1, title: "Himachal Pradesh", image: tour7, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 2, title: "Himachal Pradesh", image: tour7, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 3, title: "Himachal Pradesh", image: tour8, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 4, title: "Himachal Pradesh", image: tour8, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 5, title: "Himachal Pradesh", image: tour8, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 6, title: "Himachal Pradesh", image: tour9, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 7, title: "Himachal Pradesh", image: tour9, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 8, title: "Himachal Pradesh", image: tour9, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  }, 
]

export const holidays =[
  {
    data:[{ id: 0, title: "Himachal Pradesh", image: tour10, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 1, title: "Himachal Pradesh", image: tour10, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 2, title: "Himachal Pradesh", image: tour10, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 3, title: "Himachal Pradesh", image: tour2, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 4, title: "Himachal Pradesh", image: tour2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 5, title: "Himachal Pradesh", image: tour2, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  },
  
  {
    data:[{ id: 6, title: "Himachal Pradesh", image: tour3, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
    { id: 7, title: "Himachal Pradesh", image: tour3, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
    { id: 8, title: "Himachal Pradesh", image: tour3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 }]
  }, 
]





export const toursData = [
  { id: 0, title: "Himachal Pradesh", image: tour1, price: 5000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 1, title: "Himachal Pradesh", image: tour2, price: 6000, services: ["Mountaing", "Trek", "Campning"], day: 18 },
  { id: 2, title: "Himachal Pradesh", image: tour3, price: 9000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 3, title: "Himachal Pradesh", image: tour1, price: 10000, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 4, title: "Himachal Pradesh", image: tour2, price: 4900, services: ["Mountaing", "Trek", "Campning"], day: 8 },
  { id: 5, title: "Himachal Pradesh", image: tour3, price: 4900, services: ["Mountaing", "Trek", "Campning"], day: 8 },
]


