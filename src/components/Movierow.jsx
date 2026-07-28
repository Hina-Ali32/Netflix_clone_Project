import MovieCard from "./Moviecard";

export default function Movierow({ title, movies }) {
  return (
    <div className="px-6 md:px-14 mt-10">

      <h2 className="text-white text-2xl font-bold mb-5">
        {title}
      </h2>


    <div className="flex gap-5 overflow-x-auto overflow-y-visible py-10 scrollbar-none">

        {movies.map((movie) => (

          <MovieCard

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

        ))}

      </div>

    </div>
  );
}