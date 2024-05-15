import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import axios from 'axios';

import Home from '../pages/home'
import About from '../pages/about'
import Blog from '../pages/blog'
import Map from '../pages/map'
import Contribute from '../pages/contribute'
import Specie from '../pages/species/specie'
import Species from '../pages/species'
import Team from '../pages/team'
import Subscribe from '../pages/subscribe'    
import Member from '../pages/team/member'
import Search from '../pages/search'
import Page from '../pages/blog/blogPage/Page'
import Schedule from '../pages/schedule'

export const AppRoutes = ({search}) => {
    const [mostrarAgenda, setMostrarAgenda] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/Configuracao/4')
            .then((response) => {
                setMostrarAgenda(response.data.mostrar_agenda);
            })
            .catch((error) => {
                console.error('Erro ao buscar configuração:', error);
            });
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:id" element={<Page />}/>
            <Route path="/mapa" element={<Map />}/>
            <Route path="/mapa/:id" element={<Map />}/>
            <Route path="/facaparte" element={<Contribute />}/>
            {mostrarAgenda && (
                <Route path="/agenda" element={<Schedule />}/>
            )}
            <Route path="/especies" element={<Species />}/>
            <Route path="/especies/:id" element={<Specie />}/>
            <Route path="/equipe" element={<Team />}/>
            <Route path="/equipe/:id" element={<Member />}/>
            <Route path = "/inscrever" element = {<Subscribe/>}/>
            <Route path = "/search" element={<Search search={search} />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}