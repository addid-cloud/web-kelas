import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Gallery from './galeri';
import Murid from './anggota';

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
