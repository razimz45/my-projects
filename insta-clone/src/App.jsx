import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'
import { Routes,Router, Route} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Profile/>}/>
      </Route>
    </Routes>
   
   
  )
}

export default App
