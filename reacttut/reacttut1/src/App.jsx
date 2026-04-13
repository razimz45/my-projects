import { useState,useEffect } from 'react'
import bgimg from './assets/hero.png'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'

const API_BASE_URL="https://api.themoviedb.org/3"
const API_KEY=import.meta.env.VITE_MDB_API_KEY

const API_OPTIONS={
  method:'GET',
  headers:{
    accept:'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage,setErrorMessage]=useState('');
  const [MovieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  

  const fetchMovies=async (query='') =>{
    setisLoading(true);
    setErrorMessage('');
    try {
      const endpoint= query ?
      `${API_BASE_URL}/search/movie?query=${query}`:
      `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response=await fetch(endpoint,API_OPTIONS);
      if(!response.ok){
        throw new Error("failed to fetch");
        
      }

      const data= await response.json()
      if (data.response=='False') {
        setErrorMessage(data.Error || 'failed to fetch ')
        setMovieList([]);
        return;
        
      }
      console.log(data.results);
      
      setMovieList(data.results || []);
      
    } catch (error) {
      console.error("error fetching")
      setErrorMessage("error fetching")
      
    }finally{
      setisLoading(false);
    }
  }

  useEffect(()=>{
    fetchMovies(searchTerm);

  },[searchTerm]);

  return (
    <main>
      <div className="pattern"/>
  <div className="wrapper">
    <header>
    <img src={bgimg} alt="" />
    <h1>find your favourite <span className='text-gradient'>movies</span> without hassle!!</h1>
     <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    </header>
    <section className="all-movies">
      <h2 className="mt-[40px]">ALL MOVIES</h2>

    {isLoading ? (
   <Spinner />
    ) : errorMessage ? (
      <p className='text-red-500'>{errorMessage}</p>

    ):(<ul>
      {MovieList.map((movie) =>(
      
        <MovieCard key={movie.id} movie={movie}/>  
        
             
       
      ))}
    </ul>)
    
  }

    </section>
   
     
  </div>
  </main>
  )
}

export default App
