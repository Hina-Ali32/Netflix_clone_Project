import { useState } from "react";
import { Heart, Play, X } from "lucide-react";

export default function Moviecard({
  id,
  title,
  image,
  overview,
  video,
  rating,
  year,
  isFavouritePage,
  setMyList,
}) {

  const [showDetails, setShowDetails] = useState(false);

  const [favorite, setFavorite] = useState(() => {
  if (isFavouritePage) return true;

  const saved = JSON.parse(
    localStorage.getItem("myList") || "[]"
  );

  return saved.some(
    (movie) => movie.title === title
  );
});


  const addToFavourite = () => {

  const oldList = JSON.parse(
    localStorage.getItem("myList") || "[]"
  );


  // If we are on My List page, remove directly
  if (isFavouritePage) {

    const updatedList = oldList.filter(
      (movie) => movie.id !== id
    );


    localStorage.setItem(
      "myList",
      JSON.stringify(updatedList)
    );


    setMyList(updatedList);

    setFavorite(false);

    return;
  }



  const exists = oldList.find(
    (movie) => movie.title === title
  );


  if (exists) {

    const updatedList = oldList.filter(
      (movie) => movie.title !== title
    );


    localStorage.setItem(
      "myList",
      JSON.stringify(updatedList)
    );


    setFavorite(false);


  } else {


    oldList.push({
      id,
      title,
      image,
      overview,
      video,
      rating,
      year,
    });


    localStorage.setItem(
      "myList",
      JSON.stringify(oldList)
    );


    setFavorite(true);

  }

};



  return (

<div
  className="
    relative
    group
    min-w-[170px]
    md:min-w-[200px]
    h-[320px]
    hover:h-[400px]
    hover:min-w-[240px]
    md:hover:min-w-[250px]
    overflow-hidden
    rounded-lg
    cursor-pointer
    transition-all
    duration-500
    hover:scale-110
    z-10
    hover:z-50
  "
>


      {/* Poster */}

      <img

        onClick={() => setShowDetails(true)}

        src={`https://image.tmdb.org/t/p/w500${image}`}

        alt={title}

        className="
          w-full
          h-full
          object-cover
          rounded-lg
        "

      />



      {/* Dark Overlay */}

      <div

        className="
          absolute
          inset-0
          bg-black/40
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          z-10
        "

      />




     
      <button

        onClick={addToFavourite}

        className="
          absolute
          top-3
          right-3
          z-50
          opacity-0
          group-hover:opacity-100
          transition
          hover:scale-125
        "

      >

        <Heart

          size={22}

          color="white"

          fill={
            favorite
              ? "#E50914"
              : "transparent"
          }

        />

      </button>





      {/* Play Button */}

      <button

        onClick={() => {

          if(video){

            window.open(video, "_blank");

          }
          else{

            alert("No trailer available");

          }

        }}

        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-50
          opacity-0
          group-hover:opacity-100
          transition
        "

      >

        <Play

          size={40}

          color="white"

          fill="white"

          className="
            hover:scale-110
            transition
            drop-shadow-lg
          "

        />

      </button>





      {/* Hover Details */}

      <div

        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          p-4
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          pointer-events-none
        "

      >


        <h3

          className="
            text-white
            text-lg
            font-bold
            mb-2
            line-clamp-2
          "

        >

          {title}

        </h3>




        {/* Rating + Year */}

        <div className="flex gap-3 text-xs text-gray-300 mb-2">

          <span>
            ⭐ {rating ? rating.toFixed(1) : "N/A"}
          </span>


          <span>
            📅 {year || "N/A"}
          </span>

        </div>





        {/* Description */}

        <p
  className="
    text-gray-300
    text-sm
    leading-5
    line-clamp-6
  "
>
          {
            overview
              ? overview
              : "No description available"
          }

        </p>


      </div>







      {/* Details Popup */}

      {
        showDetails && (

          <div

            className="
              absolute
              inset-0
              bg-black/95
              text-white
              rounded-lg
              p-4
              z-[100]
            "

          >


            <button

              onClick={() => setShowDetails(false)}

              className="
                absolute
                top-2
                right-2
              "

            >

              <X

                size={22}

                className="
                  hover:text-red-500
                  transition
                "

              />

            </button>





            <h2

              className="
                text-lg
                font-bold
                mb-3
              "

            >

              {title}

            </h2>





            <div className="flex gap-3 text-sm text-gray-300 mb-3">

              <span>
                ⭐ {rating ? rating.toFixed(1) : "N/A"}
              </span>


              <span>
                📅 {year || "N/A"}
              </span>

            </div>





            <p

              className="
                text-sm
                text-gray-300
                leading-6
              "

            >

              {
                overview
                  ? overview
                  : "No description available"
              }

            </p>





            <button

              onClick={() => {

                if(video){

                  window.open(video,"_blank");

                }
                else{

                  alert("No trailer available");

                }

              }}

              className="
                mt-5
                w-full
                bg-red-600
                hover:bg-red-700
                py-2
                rounded-md
                transition
              "

            >

              ▶ Watch Trailer

            </button>


          </div>

        )
      }


    </div>

  );

}