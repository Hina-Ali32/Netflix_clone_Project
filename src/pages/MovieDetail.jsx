import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardNavbar from "../components/DashboardNavbar";
import { Play } from "lucide-react";
import { getRecommendedMovies } from "../services/tmdb";


export default function MovieDetail() {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const IMG_URL = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [id]);

  const fetchMovie = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      setMovie(res.data);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  if (!movie) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

          {/* LEFT: Details */}
          <div className="lg:col-span-2 flex flex-col bg-zinc-900 rounded-xl p-8 shadow-lg h-full">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-300 mb-4">
              <span className="text-green-400 font-semibold">
                {Math.round(movie.vote_average * 10)}% Match
              </span>
                <span>
    ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10
  </span>

  <span>{movie.release_date?.slice(0, 4)}</span>
  <span className="border border-gray-500 px-1.5 py-0.5 rounded text-xs">
    {movie.adult ? "18+" : "PG-13"}
  </span>
  <span>{movie.runtime} min</span>

             
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres?.map((g) => (
                <span
                  key={g.id}
                  className="bg-gray-800 text-gray-200 text-xs px-3 py-1 rounded-full"
                >
                  {g.name}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-100">
              Overview
            </h3>
            <p className="text-gray-300 text-base leading-relaxed mb-6">
              {movie.overview}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-4 text-sm text-gray-300 border-t border-gray-700 pt-5">
              <div>
                <span className="text-gray-500 block">Status</span>
                {movie.status}
              </div>
              <div>
                <span className="text-gray-500 block">Original Language</span>
                {movie.original_language?.toUpperCase()}
              </div>
              <div>
                <span className="text-gray-500 block">Popularity</span>
                {Math.round(movie.popularity)}
              </div>
              <div>
                <span className="text-gray-500 block">Vote Count</span>
                {movie.vote_count?.toLocaleString()}
              </div>

            </div>
          </div>

          {/* RIGHT: Poster (same height as left) */}
          <div className=" relative lg:col-span-1 h-full">
            <div className="w-full h-full rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
              <img
                src={`${IMG_URL}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
                  {/* Play button overlay */}
    <button
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        bg-transparent
        hover:bg-black/60
        transition
        rounded-full
        p-5
      "
    >
      <Play
        size={36}
        color="white"
        fill="white"
      />
    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}