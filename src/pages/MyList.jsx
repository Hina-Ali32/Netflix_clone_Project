import { useState, useEffect } from "react";

export default function MyList() {
  
  const [myList, setMyList] = useState([]);

 
  useEffect(() => {
    const savedMovies = JSON.parse(
      localStorage.getItem("myList") || "[]"
    );

    setMyList(savedMovies);
  }, []);

 
  const removeMovie = (id) => {
    const updatedList = myList.filter((movie) => movie.id !== id);

    setMyList(updatedList);

    localStorage.setItem(
      "myList",
      JSON.stringify(updatedList)
    );
  };

  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <h1 className="text-4xl font-bold text-red-500 mb-8">
        My List
      </h1>

      {myList.length === 0 ? (
        <p className="text-xl">No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-5 gap-6">
          {myList.map((movie) => (
            <div
              key={movie.id}
              className="bg-zinc-900 rounded-lg overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-3">
                <h2 className="font-semibold">
                  {movie.title}
                </h2>

                <button
                  onClick={() => removeMovie(movie.id)}
                  className=" text-sm mt-3 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}