import { NavLink, useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from "axios";
import { getRecommendedMovies } from "../services/tmdb";
import { motion , AnimatePresence} from 'motion/react';
import { useSelector } from "react-redux";
export default function DashboardNavbar() {

  const [search, setSearch] = useState("");
  const [showMenu, setshowMenu] = useState(false);
const [suggestions , setSuggestions] = useState([]);
const [showNotifications , setShowNotifications] = useState(false);
const [recommended , setRecommended] = useState([]);
  const navigate = useNavigate();
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

useEffect(() => {
  async function fetchRecommended() {
    try {
      const data = await getRecommendedMovies();

      console.log("Fetched:", data);

      setRecommended(data.slice(0, 4));
    } catch (err) {
      console.error(err);
    }
  }

  fetchRecommended();
}, []);



useEffect(() => {
  if (!search.trim()) {
    setSuggestions([]);
    return;
  }

  const fetchSuggestions = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`
      );

      setSuggestions(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  fetchSuggestions();
}, [search]);
  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };



  const handleMyList = () => {

    navigate("/MyList");

  };

const currentUser = useSelector((state) => state.user.currentUser);

let username = "User";
if (currentUser) {
  username =
    currentUser.name ||
    currentUser.username ||
    currentUser.userName ||
    currentUser.email?.split("@")[0] ||
    "User";
}

const firstLetter = username.charAt(0).toUpperCase();



  return (

    <nav className="w-full bg-zinc-900 h-16 px-8 flex items-center justify-between text-white">


      <div className=" flex items-center gap-12">


        <p className="text-red-500 font-bold tracking-wide text-4xl">
          NETFLIX
        </p>




        <ul className="flex gap-5 text-xl font-medium text-white">


          <NavLink 
          to='/dashboard'
          className={({isActive})=>
          isActive?
          "text-red-500 transition-colors duration-200"
          :
          "hover:text-red-500 transition-colors duration-200"}>
            Home
          </NavLink>



          <NavLink 
          to='/tvshows'
          className={({isActive})=>
          isActive?
          "text-red-500 transition-colors duration-200"
          :
          "hover:text-red-500 transition-colors duration-200"}>
            TV Shows
          </NavLink>



          <NavLink 
          to='/movies'
          className={({isActive})=>
          isActive?
          "text-red-500 transition-colors duration-200"
          :
          "hover:text-red-500 transition-colors duration-200"}>
            Movies
          </NavLink>



          <NavLink 
          to='/newandpopular'
          className={({isActive})=>
          isActive?
          "text-red-500 transition-colors duration-200"
          :
          "hover:text-red-500 transition-colors duration-200"}>
            New & Popular
          </NavLink>



          <NavLink 
          to='/animation'
          className={({isActive})=>
          isActive?
          "text-red-500 transition-colors duration-200"
          :
          "hover:text-red-500 transition-colors duration-200"}>
            Animation
          </NavLink>


        </ul>


      </div>








      <div className="flex items-center relative gap-8 ml-8">


        <input

        type="text"

        placeholder="Search movies..."

        value={search}

        onChange={(e)=>setSearch(e.target.value)}

        onKeyDown={(e)=>{

          if(e.key==="Enter" && search.trim()){

            navigate(`/search/${search}`);

          }

        }}

        className="w-140 md:w-96 sm:w-64 h-10 rounded-full bg-white text-black px-5 pr-10 outline-none focus:ring-2 focus:ring-red-500"

        />
     <div className="absolute top-12 left-0 w-full bg-zinc-900 rounded-lg z-50 max-h-64 overflow-y-auto">
  {suggestions.map((movie) => (
    <div
      
  key={movie.id}
  onClick={() => {
    navigate(`/search/${movie.title || movie.name}`);
    setSearch("");
    setSuggestions([]);
  }}
  className="p-3 hover:bg-zinc-800 cursor-pointer"
>
      {movie.title || movie.name}
    </div>
  ))}
</div>





         <div className="relative">
        <span
          onClick={() => setShowNotifications(!showNotifications)}
          className="text-2xl cursor-pointer"
        >
          🔔
        </span>
<AnimatePresence>


        {showNotifications && (
          <motion.div
          initial= {{ opacity:0 }}
          animate={{ opacity : 1}}
          exit={{opacity :0}}
          
          className="absolute right-0 mt-3 w-72 bg-neutral-900 rounded-lg shadow-xl p-4 z-50">
            <h3 className="text-white font-semibold mb-3">Recommended for you</h3>
           <div className="flex flex-col gap-3">
  {recommended.map((movie) => (
    <div key={movie.id}
    onClick={() =>{
navigate(`/movie/${movie.id}`);
    setShowNotifications(false);
    }} 
  
    className="flex items-center justify-between gap-2"
    >
       
      <p className="text-white font-medium">{movie.title}</p>
      <p className="text-gray-400 text-xs">
        ⭐ {movie.vote_average}/10
      </p>
      <img  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="w-12 h-16 object-cover rounded fllex-shrink-0 "
                  />
              
    </div>
   
  ))}
</div>
                 
            </motion.div>
          
        )}</AnimatePresence>
      </div>







        {/* Profile Button */}

        <div className="relative">


          <div

          className="
          w-10
          h-10
          rounded-full
          bg-red-500
          flex
          items-center
          justify-center
          cursor-pointer
          hover:scale-110
          transition
          "

          onClick={()=>setshowMenu(!showMenu)}

          >


            <span className="text-white text-xl font-bold">

              {firstLetter}

            </span>


          </div>








          {/* Profile Dropdown */}


          {

            showMenu && (


              <div

              className="
              w-56
              absolute
              right-0
              mt-4
              bg-zinc-900
              rounded-lg
              border
              border-zinc-700
              shadow-2xl
              overflow-hidden
              z-50
              "


              >




                <div

                className="
                px-4
                py-4
                border-b
                border-zinc-700
                "

                >

                  <p className="text-white font-semibold">

                    {username}

                  </p>


                  <p className="text-gray-400 text-sm">

                    Netflix Member

                  </p>


                </div>







                <button

                onClick={handleMyList}

                className="
                w-full
                text-left
                px-4
                py-3
                text-white
                hover:bg-zinc-800
                hover:text-red-500
                transition
                "

                >

                  My List

                </button>







                <button

                onClick={handleLogout}

                className="
                w-full
                text-left
                px-4
                py-3
                text-white
                hover:bg-zinc-800
                hover:text-red-500
                transition
                "

                >

                  Logout

                </button>





              </div>


            )

          }



        </div>



      </div>



    </nav>

  );

}