import React from 'react';
import { useState, useEffect } from 'react';

import Upcoming from '../Upcoming';

import './style.scss';

export default function Sidebar() {

    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {

        fetch(UPCOMING_API)
            .then(response => response.json())
            .then(data => {
                setUpcomingMovies(data.results)
                console.log(data.results)
            });

    }, [])

    const UPCOMING_API = "https://api.themoviedb.org/3/movie/upcoming?api_key=60b7c69d9a69307c75b6f7ff1e7653bd&language=pt-BR&page=1"

    return (

        <aside className="upcomingMoviesAside">

            <legend>Em breve</legend>

            <div className="upcomingWrapper">

                {upcomingMovies.length > 0 && upcomingMovies.map((movie) => (
                    <Upcoming key={movie.id} {...movie} />
                ))}

            </div>

        </aside>

    )

}