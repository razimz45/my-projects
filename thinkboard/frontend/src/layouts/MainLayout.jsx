import React from 'react'

import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div> <Navbar/>
    <div className='flex min-h-screen bg-black text-white pl-64'>
      <div className='main-content '>
        <Outlet/>
      </div>
    </div></div>
   
  )
}

export default MainLayout