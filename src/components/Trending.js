import React from 'react';

import IMDB from '../images/imdb.svg'

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Trending = ({ title, id, poster_path, overview, vote_average, release_date, backdrop_path }) => (

    <div className="trendingContainer">

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