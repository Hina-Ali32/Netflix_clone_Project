import Movierow from "../components/Movierow";
import DashboardNavbar from "../components/DashboardNavbar";
import { useState, useEffect} from 'react'
import axios from 'axios'

export default function Animation()
{
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

 const [trending, setTrending] = useState([]);
 const [newanimation, setnewanimation] = useState([]);
  const [comingsoon, setcomingsoon] = useState([]);
    const [animatedseries, setanimatedseries] = useState([]);


    const [topratedanimation, setTopratedanimation] = useState([]);

    
        useEffect(() => {fetchAnimation() }, []);
        const fetchAnimation= async()=>{
            try{
              const [
  trending,
  newanimation,
  comingsoon,
  animatedseries,
  topratedanimation

] = await Promise.all([

  axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`
  ),

  axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=release_date.desc`
  ),

  axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&primary_release_date.gte=2025-01-01`
  ),

  axios.get(
    `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`
  ),

  axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=vote_average.desc`
  )

]);
     setTrending(trending.data.results);
setnewanimation(newanimation.data.results);
setcomingsoon(comingsoon.data.results);
setanimatedseries(animatedseries.data.results);
setTopratedanimation(topratedanimation.data.results);
            }
        catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
       
return(
<div className="bg-black min-h-screen">
 <DashboardNavbar />
 <Movierow title="Trending  Now" movies={trending} />
 <Movierow title="New Animation" movies={newanimation} />
 <Movierow title="Coming soon" movies={comingsoon} />
             <Movierow title="Animated series" movies={animatedseries} />
             
                         
                         
                                     <Movierow title="Top rated Animation" movies={topratedanimation} />
</div>
)

}