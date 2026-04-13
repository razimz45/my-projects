import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
   <div className='mx-auto max-w-screen bg-black text-green-400 px-6 py-4 border-b border-green-300'>
    <div className='flex items-center justify-between'>
       <h1 className='text-3xl font-bold p-4 mx-4 font-mono tracking-tighter'>Thinkboard</h1>
        <div className='flex items-center'>
            <Link className='flex items-center gap-4 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800' to={'/note'}>
            <PlusIcon className='size-5 text-white'/>
            <span>New Note</span>
            </Link>
        </div>
       
    </div>
   </div>
  )
}

export default Navbar