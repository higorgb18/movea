import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

import IMDB from '../images/imdb.svg'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

function getMovieData(id) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=60b7c69d9a69307c75b6f7ff1e7653bd&language=en-US`
      )
      .then((res) => {
        // setVideos(res.data.results);
        console.log('videos', res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
}
    

const Trending = ({ title, id, poster_path, overview, vote_average, release_date, backdrop_path }) => (

    <div onClick={()=> getMovieData(id)} className="trendingContainer">

        <div className="trendingMovieImgWrapper">

            <img src={IMAGE_API + backdrop_path} alt={title} />

        </div>

        <div className="trendingMovieInfo">

            <h3>{title}</h3>
            <span>{release_date.substring(0, 4)}</span>

            <div className="movieRating">
                <img src={IMDB} alt="logo IMDB" />
                <p>Nota {vote_average} de avaliação</p>
            </div>

        </div>

    </div>

)

export default Trending;