import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from '../../pages/Home'
import Profil from '../../pages/Profil';
import Trending from '../../pages/Trending';
import NavBar from'../../components/NavBar';

const index = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/trending" element={<Trending />} />
        </Routes>
    </BrowserRouter>
  )
}

export default index;