import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import MainLayout from '../layouts/MainLayout'
import Highlight from '../components/Highlight'

const Profile = () => {
  return (
    <div>
        <ProfileHeader/>
        <Highlight image="/public/vite.svg" label="highlight"/>

    </div>

  )
}

export default Profile