import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import Gallery from './pages/galeri';
import Murid from './pages/anggota';

import './index.css';

const App = () => {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galeri" element={<Gallery/>} />
                <Route path="/anggota" element={<Murid/>} />
            </Routes>
        </Router>
    );
}

export default App;
