import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import './App.css'
import Login from './pages/Login'
import Dashborad from './pages/Dashborad'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashborad />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App