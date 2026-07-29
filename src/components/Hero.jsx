import { useEffect, useState } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";
import video5 from "../assets/video5.mp4";
import video6 from "../assets/video6.mp4";
import { motion } from "motion/react";
const videos=[
 video1,
  video2,
  video3,
  video4,
  video5,
  video6,
];
 


import { use } from "react";

export default function Hero({ movie }) {
const [ Currentvideo , setCurrentvideo] = useState(0);
 
const [currentVideo, setCurrentVideo] = useState(0);


useEffect(() => {

  const timer = setTimeout(() => {

    setCurrentVideo((prev) =>
      prev === videos.length - 1
      ? 0
      : prev + 1
    );

  },10000);


  return () => clearTimeout(timer);

}, [currentVideo]);

  const [showDetails, setShowDetails] = useState(false);

  if (!movie) return null;


  return (

    <section
      className="
      relative
      h-[600px]
      overflow-hidden
      text-white
      "
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >


      {/* Background Video */}

      <video


src={videos[currentVideo]}

autoPlay

muted

playsInline

preload="auto"



        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        "

      />



      {/* Dark Overlay */}

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-black/80
        via-black/40
        to-transparent
        "
      />



      {/* Movie Details on Hover */}

      <div

        className={`
        absolute
        left-10
        bottom-20
        max-w-xl
        transition-all
        duration-700

        ${
          showDetails
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
        }

        `}

      >



         <motion.h1
         initial={{ scale:0.5, opacity:0}}
         animate={{scale:1 , opacity:1}}
         transition={{duration:0.5}}
         className="text-5xl font-bold">
  CHROMA
</motion.h1>

      



        <p className="mt-5 text-lg text-gray-300">

         When darkness takes over, a single light reveals the truth.
  A mysterious journey begins where hidden secrets,
  forgotten memories, and unexpected discoveries
  change everything forever.

        </p>



        <p className="mt-4  text-lg text-gray-400">

  ⭐⭐⭐⭐⭐ 9.1/10 <br />
  2025 • Psychological Thriller <br />
  

</p>

      </div>


    </section>

  );
}