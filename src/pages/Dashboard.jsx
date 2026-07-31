import DashboardNavbar from "../components/DashboardNavbar"
import { useState, useEffect } from 'react'
import Movierow from '../components/Movierow'
import Hero from "../components/Hero";
import { getTrendingMovies, getPopularMovies, getTopPicks } from "../services/tmdb";
import {motion , useScroll , useTransform } from 'motion/react';

export default function Dashboard() {
    const [trending, setTrending] = useState([]);
    const [popular, setPopular] = useState([]);
   const [recommendation, setRecommendation] = useState([]);
const {scrollY} =useScroll();
const opacity = useTransform(scrollY,
    [0,700 ],
    [1,0]
);

    useEffect(() => {
        async function fetchData() {
            const trendingData = await getTrendingMovies();
            const popularData = await getPopularMovies();
            const recommendationData = await getTopPicks();
            setTrending(trendingData);
            setPopular(popularData);
           setRecommendation(recommendationData);
        }
        fetchData();
    }, [])

    return (
        <motion.div
//
         className="bg-black min-h-screen"
         //initial={{opacity : 0}}
        //animate={{opacity : 1}}
        //transition={{duration : 0.5}}
        >
            <DashboardNavbar />
            <motion.div
            style={{opacity}}
            >
<Hero movie={trending[0]} />
            </motion.div>
            
            <Movierow title="Trending Now" movies={trending} />
            <Movierow title="Popular on Netflix" movies={popular} />
             <Movierow title="Top Picks for you" movies={recommendation} />
        </motion.div>
    )
}