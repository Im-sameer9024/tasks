import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Services from "./components/Services";


export default function App() {
  return (
    <div className="overflow-x-hidden">
     <Header/>
     <Services/>
     <Contact/>
     <Faq/>
     <Footer/>
    </div>
  )
}
