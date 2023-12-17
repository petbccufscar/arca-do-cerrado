import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home'

export const AppRoutes = ( ) => {

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}