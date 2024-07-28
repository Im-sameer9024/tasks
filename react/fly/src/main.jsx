
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import Dataproveder from './Context-API/StoreContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Dataproveder>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Dataproveder>





)
