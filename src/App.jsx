import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import Navbar from "./components/layout/navbar/Navbar"
import Footer from "./components/layout/footer/Footer"
import { register } from 'swiper/element/bundle'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function App() {

    return (
        <>
            <Router>
                <Navbar/>
                <AppRoutes/>
                <Footer/>
            </Router>
        </>
    )
}

export default App
