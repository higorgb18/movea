import React from 'react';
import { useState, useEffect } from 'react';

import Movie from '../Movie';

import './style.scss';

export default function Sidebar() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {

        fetch(FEATURED_API)
            .then(response => response.json())
            .then(data => {
                setMoviesData(data.results)
                console.log(data.results)
            });

    }, [])

    const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=60b7c69d9a69307c75b6f7ff1e7653bd&page=1";

    return (

        <aside>

            <legend>Novos trailers</legend>

            <div className="trailerWrapper">

                <div className="movieBoxWrapper">

                    {/* {moviesData.length > 0 && moviesData.map((movie) => (
                        <Movie key={movie.id} {...movie} />
                    ))} */}

                </div>

            </div>

        </aside>

    )

}