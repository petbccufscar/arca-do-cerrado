import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/Sobre'
import Blog from '../pages/blog/Blog'
import Noticias from '../pages/blog/noticias/Noticias'
import InfoExtras from '../pages/blog/infoExtras/InfoExtras'
import Mapa from '../pages/mapa/Mapa'
import FacaParte from '../pages/facaParte/FacaParte'
import Agenda from '../pages/agenda/Agenda'
import Especies from '../pages/especies/Especies'


export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<Sobre />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/noticias" element={<Noticias />}/>
            <Route path="/blog/info-extras" element={<InfoExtras />}/>
            <Route path="/map" element={<Mapa />}/>
            <Route path="/faca-parte" element={<FacaParte />}/>
            <Route path="/agenda" element={<Agenda />}/>
            <Route path="/especies" element={<Especies />}/>

            
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}