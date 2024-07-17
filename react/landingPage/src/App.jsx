import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


export default function App() {
  return (
    <div className="overflow-x-hidden">
    <Navbar/>
     <Header/>
     <Services/>
     <Contact/>
     <Faq/>
     <Footer/>
    </div>
  )
}
