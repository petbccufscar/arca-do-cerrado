import { useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"

import { register } from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Navbar from "./components/layout/navbar"
import Footer from "./components/layout/footer"

register()

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
