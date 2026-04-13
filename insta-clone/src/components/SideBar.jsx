import React from 'react'
import instalogo from "../assets/instalogo.png"
import SideBarItem from './SideBarItem'
import { GrHomeRounded } from "react-icons/gr";
import { LuSearch } from "react-icons/lu";
import { MdExplore } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { RiTelegram2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const SideBar = () => {
  return (
    <div className='w-64 fixed border-r h-full left-0 top-0 px-4 py-8'>
        <div className='mb-12 h-10 w-30'>
            <img src={instalogo} alt="" className='invert'/>
        </div>
        <div className='flex flex-col space-y-4'>
            <SideBarItem icon={<GrHomeRounded/>} label="Home"/>
            <SideBarItem icon={<LuSearch/>} label="Search"/>
            <SideBarItem icon={<MdExplore/>} label="Explore"/>
            <SideBarItem icon={<AiOutlinePlaySquare/>} label="Reels"/>
            <SideBarItem icon={<RiTelegram2Line/>} label="Messages"/>
            <SideBarItem icon={<FaRegHeart/>} label="Notifications"/>
            <SideBarItem icon={<IoAdd/>} label="Create"/>
            <SideBarItem icon={<CgProfile/>} label="Profile"/>
            



        </div>

    </div>
  )
}

export default SideBar