import Movierow from "../components/Movierow";
import DashboardNavbar from "../components/DashboardNavbar";
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function NewandPopular()
{
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

 const [trending, setTrending] = useState([]);
 const [newmovies, setnewmovies] = useState([]);
  const [comingsoon, setcomingsoon] = useState([]);
    const [popularmovies, setPopularmovies] = useState([]);
const [populartvshows, setPopulartvshows] = useState([]);

    const [toprated, setToprated] = useState([]);

    
        useEffect(() => {fetchMovies() }, []);
        const fetchMovies = async()=>{
            try{
               const [
  trending,
  newmovies,
  comingsoon,
  popularmovies,
  populartvshows,
  toprated
] = await Promise.all([

  // Trending movies + TV
  axios.get(`${BASE_URL}/trending/all/week?api_key=${API_KEY}`),

  // Now playing movies
  axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`),

  // Upcoming movies
  axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`),

  // Popular movies
  axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),

  // Popular TV shows
  axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}`),

  // Top rated movies
  axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`),

]);
     setTrending(trending.data.results);
setnewmovies(newmovies.data.results);
setcomingsoon(comingsoon.data.results);
setPopularmovies(popularmovies.data.results);
setPopulartvshows(populartvshows.data.results);
setToprated(toprated.data.results);
            }
        catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
       
return(
<div className="bg-black min-h-screen">
 <DashboardNavbar />
 <Movierow title="Trending  Now" movies={trending} />
 <Movierow title="New Movies" movies={newmovies} />
 <Movierow title="Coming soon" movies={comingsoon} />
             <Movierow title="Popular Movies" movies={popularmovies} />
             
                         <Movierow title="Popular Tvshows" movies={populartvshows} />
                         
                                     <Movierow title="Top rated" movies={toprated} />
</div>
)

}