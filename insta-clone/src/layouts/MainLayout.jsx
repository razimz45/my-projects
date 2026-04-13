import React from 'react'
import SideBar from '../components/SideBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex min-h-screen bg-black text-white pl-64'>
      <SideBar/>
      <div className='main-content '>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout