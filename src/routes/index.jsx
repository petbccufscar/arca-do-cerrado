import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Blog from '../pages/blog/Blog'
import Map from '../pages/map/Map'
import Contribute from '../pages/contribute/Contribute'
import Agenda from '../pages/agenda/Agenda'
import Specie from '../pages/species/specie/Specie'
import Species from '../pages/species/Species'
import Team from '../pages/team/Team'
import Subscribe from '../pages/subscribe/Subscribe'    


export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/mapa" element={<Map />}/>
            <Route path="/facaparte" element={<Contribute />}/>
            <Route path="/agenda" element={<Agenda />}/>
            <Route path="/especies" element={<Species />}/>
            <Route path="/especies/:id" element={<Specie />}/>
            <Route path="/equipe" element={<Team />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
            <Route path = "/inscrever" element = {<Subscribe/>}/>
        </Routes>
    )
}