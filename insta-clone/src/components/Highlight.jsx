import React from 'react'

const Highlight = ({image,label}) => {
  return (
    <div className='flex flex-col gap-1'>
        <div className='w-18 h-18 flex items-center justify-center rounded-full border  border-gray-300'>

            <img src={image}
            className='w-6 h-6 rounded-full'
             alt="image" />

        </div>
        <span>{label}</span>

    </div>
  )
}

export default Highlight