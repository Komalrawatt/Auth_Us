import React from 'react'
import Home from './components/Home'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import Validate from './components/Validate'
import NotFound from './components/NotFound'
const App = () => {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />} />
      <Route path="/validate/:rollno" element={<Validate />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  )
}

export default App