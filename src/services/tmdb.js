import axios from 'axios'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
 export async function getTrendingMovies(){
    const response = await axios.get(`${BASE_URL}/trending/movie/week`, {
    params: { api_key: API_KEY }
  });
  return response.data.results;
 }
 export async function getPopularMovies() {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY }
  });
  return response.data.results;
}
export async function getMovieTrailer(movieId) {

  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/videos`,
    {
      params: {
        api_key: API_KEY,
      },
    }
  );

  const videos = response.data.results;

  for (let i = 0; i < videos.length; i++) {

    if (
      videos[i].type === "Trailer" &&
      videos[i].site === "YouTube"
    ) {
      return `https://www.youtube.com/watch?v=${videos[i].key}`;
    }

  }

  return null;
}
export async function getTopPicks() {
  const response = await fetch(
    `${BASE_URL}/trending/all/week?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}