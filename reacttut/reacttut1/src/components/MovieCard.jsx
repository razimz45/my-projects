import React from 'react'
import starlogo from '../assets/star.svg'

const MovieCard = ({movie:{title,poster_path,vote_average,original_language,release_date }}) => {
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`: '../assets/no-movie.png'} alt={title}/>


        <div className='mt-4'> 
            <h3 className='text-white'>{title}</h3>
        <div className='content'>
            <div className="rating">
                <img src={starlogo} alt="star" />
                <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
            </div>
            <span>•</span>

            <div className='lang'>
                <p>{original_language}</p>
            </div>
             <span>•</span>
            <div className="year">
                <p>{release_date ? release_date.split('-')[0]:'N/A'}</p>
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default MovieCard