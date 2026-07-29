
import { useNavigate } from 'react-router-dom'
import Home_bg from '../assets/Home_bg.jpg'
import { useEffect } from 'react';
import {motion} from 'motion/react';

export default function Home() {
  const navigate = useNavigate();

  useEffect(()=>{
  const saveduser = localStorage.getItem('user');
  if(saveduser){
    navigate('/dashboard');
  }}, []
);
const container ={
  hidden :{},
  visible:{
    transition:{ 
     staggerChildren: 0.08
    }
  },
};
const items ={
  hidden : { opacity: 0} ,
visible :{opacity :1}
}
  return (
    <motion.div
    
    variants={container}
initial="visible"
animate=" hidden"
className="relative min-h-screen flex flex-col items-center justify-center px-4 gap-1">
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
<motion.h1 
variants={items}
initial="hidden"
animate="visible"

className="
text-white 
font-bold 
text-3xl 
sm:text-4xl 
md:text-4xl
lg:text-5xl
text-center 
max-w-4xl
">
Unlimited movies, TV shows, and more
</motion.h1>


<motion.p
variants={items}
className="
text-white 
font-bold
text-lg 
sm:text-base 
md:text-lg
lg:text-2xl
text-center 
max-w-2xl
">
Watch anywhere. Cancel anytime.
</motion.p>


<motion.p
variants={items}
className="
text-neutral-300 
text-sm 
sm:text-sm 
md:text-base
lg:text-lg
text-center 
max-w-2xl
">
Discover thousands of movies and TV shows across every genre — from
blockbuster hits to hidden gems, all available whenever and wherever
you want to watch.
</motion.p>


<motion.button
onClick={() => navigate('/signup')}
whileHover={{scale:0.95,
transition:{ type: "spring" , stiffness: 400 , damping:10 , duration: 0.5}}}
whileTap ={{  scale :0.85}}
className="
mt-5
rounded-full
text-black
font-bold
bg-red-500
hover:bg-white
transition

px-6
py-3
text-base

sm:px-6
sm:py-3
sm:text-base

md:px-8
md:py-3
md:text-lg

lg:px-12
lg:py-4
lg:text-xl
"
>
Get Started
</motion.button>
    </motion.div>
  )
}