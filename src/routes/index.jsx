import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Blog from '../pages/blog/Blog'
import Noticias from '../pages/blog/noticias/Noticias'
import InfoExtras from '../pages/blog/infoExtras/InfoExtras'
import Map from '../pages/map/Map'
import Contribute from '../pages/contribute/Contribute'
import Agenda from '../pages/agenda/Agenda'
import Specie from '../pages/species/specie/Specie'
import Species from '../pages/species/Species'


export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/noticias" element={<Noticias />}/>
            <Route path="/blog/info-extras" element={<InfoExtras />}/>
            <Route path="/map" element={<Map />}/>
            <Route path="/contribute" element={<Contribute />}/>
            <Route path="/agenda" element={<Agenda />}/>
            <Route path="/species" element={<Species />}/>
            <Route path="/species/:id" element={<Specie />}/>
            
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}