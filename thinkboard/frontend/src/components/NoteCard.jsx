import { DeleteIcon, PenSquareIcon, Trash2Icon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const NoteCard = ({ note }) => {
  return (
   <Link className='card '>
    

<div className="w-80 max-w-xl bg-gray-800 border-t-4 border-green-300 rounded-lg shadow-sm ">
    <div className="flex flex-col items-center pb-10">
        <h1 className='text-2xl text-white m-4'>{note.title}</h1>
        <p>{note.content}</p>

        <div className='flex w-full justify-between items-center text-sm font-light px-6 pt-6'>
            <p>date</p>

            <div className='flex items-center gap-2'>


                <PenSquareIcon className='size-4'/>
                <Trash2Icon className='size-4'/>
            </div>

        </div>
        
       
       
    </div>
</div> 
   </Link>
  )
}

export default NoteCard