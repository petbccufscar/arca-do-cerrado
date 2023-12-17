import { BrowserRouter as Router } from "react-router-dom"
import { AppRoutes } from "./routes"
import Navbar from "./components/layout/navbar/Navbar"
import Footer from "./components/layout/footer/Footer"

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
