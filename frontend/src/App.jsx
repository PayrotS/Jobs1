import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Kontak from './pages/Kontak'
import Login from './pages/Login'
import Tentang from './pages/Tentang'

const App = () => {
  return (
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/Kontak" element={<Kontak />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Tentang" element={<Tentang />}/>
      </Routes>
  )
}

export default App