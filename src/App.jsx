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
import { useState } from "react"

function App() {
    const [search, setSearch] = useState("")
    return (
        <>
            <Router>
                <Navbar search={search} setSearch={setSearch}/>
                <AppRoutes search={search}/>
                <Footer/>
            </Router>
        </>
    )
}

export default App
