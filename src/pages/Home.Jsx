
import { useNavigate } from 'react-router-dom'
import Home_bg from '../assets/Home_bg.jpg'
import { useEffect } from 'react';
export default function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
  const saveduser = localStorage.getItem('user');
  if(saveduser){
    navigate('/dashboard');
  }}, []
);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 gap-1">
      <img
        src={Home_bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="absolute top-0 left-0 px-6 md:px-12 py-6">
        <p className="text-red-600 font-bold text-xl tracking-wide md:text-2xl">
          NETFLIX CLONE
        </p>
      </div>

      <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl text-center max-w-2xl">
        Unlimited movies, TV shows, and more
      </h1>

      <p className="text-white text-2xlg sm:text-base text-bold md:text-lg text-center max-w-lg">
        Watch anywhere. Cancel anytime.
      </p>

      <p className="text-neutral-300 text-lg sm:text-sm md:text-base text-center max-w-md">
        Discover thousands of movies and TV shows across every genre — from
    blockbuster hits to hidden gems, all available whenever and wherever
    you want to watch.

      </p>

      <button
        onClick={() => navigate('/signup')}
        className="mt-3 rounded-full text-black font-bold bg-red-500 hover:bg-white transition px-5 py-2 text-sm sm:px-6 sm:py-3 sm:text-base md:px-7 md:py-3 md:text-base"
      >
        Get Started
      </button>
    </div>
  )
}