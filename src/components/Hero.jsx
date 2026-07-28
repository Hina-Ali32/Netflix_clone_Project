import { useState } from "react";
import heroVideo from "../assets/hero_video.mp4";
export default function Hero({ movie }) {

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

        src={heroVideo}

        autoPlay

        muted

        loop

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



         <h1 className="text-5xl font-bold">
  CHROMA
</h1>

      



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