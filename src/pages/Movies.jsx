import Movierow from "../components/Movierow";
import DashboardNavbar from "../components/DashboardNavbar";
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function Movies()
{
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

 const [trending, setTrending] = useState([]);
  const [toprated, setToprated] = useState([]);
    const [popular, setPopular] = useState([]);

    const [action, setaction] = useState([]);
 const [comedy, setComedy] = useState([]);
    const [horror, setHorror] = useState([]);

    
        useEffect(() => {fetchMovies() }, []);
        const fetchMovies = async()=>{
            try{
                const[
trending,
toprated,
popular,
action,
comedy,
horror, ]=await Promise.all([
        axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`),
        axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`),
        axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`),
        axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`),
        axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`),
        axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`),
        
      ]);
       setTrending(trending.data.results);
       setToprated(toprated.data.results);
            setPopular(popular.data.results);
             
            setaction(action.data.results);
             setComedy(comedy.data.results);
              setHorror(horror.data.results);

            }
        catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
       
return(
<div className="bg-black min-h-screen">
 <DashboardNavbar />
 <Movierow title="Trending Now" movies={trending} />
 <Movierow title="Top Rated Movies" movies={toprated} />
             <Movierow title="Popular on Netflix" movies={popular} />
             
                         <Movierow title="Action Movies" movies={action} />
                         <Movierow title="Comedy Movies" movies={comedy} />
                                     <Movierow title="Horror Movies" movies={horror} />
</div>
)

}
