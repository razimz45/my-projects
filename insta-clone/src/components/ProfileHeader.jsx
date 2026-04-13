import React from 'react'
import profileimage from "../assets/profileimg.jpg"

const ProfileHeader = () => {
  return (
    <div className='flex items-start gap-10 p-12 '>
        <img className='w-36 h-36 rounded-full' 
        src={profileimage} alt="profile picture" />
    <div className='flex flex-col ml-12 gap-3'> 
        <div className='flex items-center text-white gap-4 '>
            <h2 className='text-xl font-light'>username</h2>
            <button className='px-4 py-1 bg-neutral-800 rounded'>Edit profile</button>
            <button className='px-4 py-1 bg-neutral-800 rounded'>View archive</button>
            <span>⚙️</span>

        </div>
        <div className='flex gap-6 mt-3'>
            <span><span className='font-medium text-lg'>2</span> posts</span>
            <span><span className='font-medium text-lg'>393</span> followers</span>
            <span><span className='font-medium  text-lg'>400</span> following</span>
        </div>
        <div>
            <span className='text-sm font-medium'>Muhammed Zaeem Razi</span>
            <span className='text-sm font-light text-neutral-400 ml-4'> he/him</span>
        </div>
    </div>
    </div>
  )
}

export default ProfileHeader