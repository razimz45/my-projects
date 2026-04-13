import React from 'react'

const Qrpage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-blue-100'>
            <div className='p-4 justify-center bg-white rounded-2xl  shadow-md w-2xs text-center' >
                <img src="/qrimage.png" 
                className='w-full rounded-xl mb-4' alt="" />
                <h1 className='font-bold text-slate-800 mb-2'>improve ur frontend skills by building projects </h1>
                <p className='text-slate-500'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
                

            </div>
        

    </div>
  )
}

export default Qrpage