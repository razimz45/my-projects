import React from 'react'
import Navbar from '../components/Navbar'
import NoteCard from '../components/NoteCard'
import { useEffect,useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"


const Home = () => {
    const [Notes, setNotes] = useState([])

    useEffect( () => {
     const fetchNotes=async ()=>{
        try {
            const res= await axios.get("http://localhost:5001/api/notes")
        console.log(res.data.data)
        setNotes(res.data.data)
        
        } catch (error) {
            console.error(error)
            toast('something went wrong')
        }
     }
      fetchNotes()
    }, [])
    




  return (
   
    <div className='grid grid-cols-1 md:grid-cols-3 m-4 gap-10'> 

    
       {Notes.map(note =>(
        <div>
            <NoteCard key={note._id} note={note}/>
        </div>

       ))}
        
    </div>
  )
}

export default Home