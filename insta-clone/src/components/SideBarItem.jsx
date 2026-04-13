import React from 'react'

const SideBarItem = ({icon,label}) => {
  return (
    <div className='flex items-center hover:bg-[rgb(255_255_255_/_10%)] gap-4 p-2 cursor-pointer rounded-lg'>
        <span className='text-2xl'>{icon}</span>
        <span className='text-lg font-light'>{label}</span>

    </div>
  )
}

export default SideBarItem