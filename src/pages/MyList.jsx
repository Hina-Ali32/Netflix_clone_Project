import { useState, useEffect } from "react";
import Moviecard from "../components/Moviecard";

export default function MyList() {

  const [myList, setMyList] = useState([]);


  useEffect(() => {

    const savedMovies = JSON.parse(
      localStorage.getItem("myList") || "[]"
    );

    setMyList(savedMovies);

  }, []);



  return (

    <div className="bg-black min-h-screen p-8 text-white">

      <h1 className="text-3xl font-bold text-red-500 mb-8">
        
        My List
      </h1>


      {
        myList.length === 0 ? (

          <p className="text-xl">
            No movies added yet.
          </p>

        ) : (


          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">


            {
              myList.map((movie) => (

                <Moviecard

                  key={movie.id}

                  id={movie.id}

                  title={movie.title}

                  image={movie.image}

                  overview={movie.overview}

                  rating={movie.rating}

                  year={movie.year}

                  video={movie.video}

                  isFavouritePage={true}

                  setMyList={setMyList}

                />

              ))
            }


          </div>


        )
      }


    </div>

  );

}