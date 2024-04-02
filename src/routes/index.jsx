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
import Member from '../pages/team/member/Member'
import Search from '../pages/search/Search'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Page from '../pages/blog/blogPage/Page'

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
                <Route path="/agenda" element={<Agenda />}/>
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