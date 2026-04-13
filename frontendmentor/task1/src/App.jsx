import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Qrpage from './pages/Qrpage'
import Homepage from './pages/homepage'

function App() {
 

  return (
    
    <Routes>
      <Route path='/' element={<Qrpage/>}/>
       <Route path='/home' element={<Homepage/>}/>
    </Routes>
  
    
  )
}

export default App
