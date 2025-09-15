import React from 'react'
import Home from './components/Home'
import Register from './components/Register'
import { Routes, Route } from 'react-router-dom'
import Validate from './components/Validate'
const App = () => {
  return (
    <div className='bg-[#18181B] ' >
      <Routes className=''>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/validate/:rollno" element={<Validate />} />

      </Routes>
    </div>

  )
}

export default App