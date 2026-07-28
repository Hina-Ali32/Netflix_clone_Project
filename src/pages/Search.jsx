import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import Moviecard from "../components/Moviecard";
import DashboardNavbar from "../components/DashboardNavbar";


export default function Search(){

const {query}=useParams();

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const [results,setResults]=useState([]);


useEffect(()=>{

fetchSearch();

},[query]);



const fetchSearch=async()=>{

try{

const res = await axios.get(
`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`
);


setResults(res.data.results);


}

catch(error){

console.log(error);

}

};



return(

<div className="bg-black min-h-screen">

<DashboardNavbar/>


<h1 className="text-red-500 text-sm font-bold px-10 pt-10">
Search results for: {query}
</h1>


<div className="grid grid-cols-2 md:grid-cols-5 gap-5 p-10">

{
results.map((movie)=>(
<Moviecard
  key={movie.id}
  title={movie.title || movie.name}
  image={movie.poster_path}
  overview={movie.overview}
  rating={movie.vote_average}
  year={
    (movie.release_date || movie.first_air_date)
      ?.split("-")[0]
  }
  video={movie.video}
/>

))
}


</div>


</div>

)

}