import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DashboardNavbar() {

  const [search, setSearch] = useState("");
  const [showMenu, setshowMenu] = useState(false);

  const navigate = useNavigate();



  const handleLogout = () => {

    localStorage.removeItem("user");

    navigate("/");

  };



  const handleMyList = () => {

    navigate("/MyList");

  };

const storedUser = localStorage.getItem("user");

let username = "User";


if (storedUser) {

  try {

    const userData = JSON.parse(storedUser);

username =
      userData.name ||
      userData.username ||
      userData.userName ||
      userData.email?.split("@")[0] ||
      "User";

  }

  catch {

    username = storedUser;

  }

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





        <div className="relative cursor-pointer">

          <span className="text-2xl">
            🔔
          </span>

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