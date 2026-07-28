
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
<h1
className="
text-white 
font-bold 
text-3xl 
sm:text-4xl 
md:text-5xl 
lg:text-6xl
text-center 
max-w-3xl
"
>
Unlimited movies, TV shows, and more
</h1>


<p
className="
text-white 
font-bold 
text-lg 
sm:text-xl 
md:text-2xl 
lg:text-3xl
text-center 
max-w-xl
"
>
Watch anywhere. Cancel anytime.
</p>


<p
className="
text-neutral-300 
text-base 
sm:text-lg 
md:text-xl 
lg:text-2xl
text-center 
max-w-2xl
"
>
Discover thousands of movies and TV shows across every genre — from blockbuster hits to hidden gems, all available whenever and wherever you want to watch.
</p>

     <button
  onClick={() => navigate('/signup')}
  className="
mt-5
rounded-full
text-black
font-bold
bg-red-500
hover:bg-white
transition

px-8
py-3
text-lg

md:px-10
md:py-4
md:text-xl

lg:px-12
lg:py-4
lg:text-xl
"
>
  Get Started
</button>
    </div>
  )
}