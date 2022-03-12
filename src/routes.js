import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Batman from './components/moviePage';

const AppRoutes = () => {

    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

            <Routes>
                <Route path="/batman" element={<Batman />} />
            </Routes>

        </BrowserRouter>

    )

}

export default AppRoutes;