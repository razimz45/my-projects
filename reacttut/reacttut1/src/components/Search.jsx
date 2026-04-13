import React from 'react'
import searchlogo from "../assets/search.svg"

const Search = ({searchTerm ,setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src={searchlogo} alt="" />

            <input 
            type="text"
            placeholder='hello'
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)} />
            

        </div>
        <h1 className='text-white'>{searchTerm}</h1>

    </div>
  )
}

export default Search