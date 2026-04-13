import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import NoteDetail from './pages/NoteDetail'

import MainLayout from './layouts/MainLayout'
import AddNote from './pages/AddNote'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/note' element={<NoteDetail/>}/>
      <Route path='/add-note' element={<AddNote />}/>

      </Route>
    </Routes>
  )
}

export default App