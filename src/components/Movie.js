import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, id, poster_path, overview, vote_average, release_date, backdrop_path }) => (

    <div className="movieContainer">

        <div className="movieImgWrapper">

            <img src={IMAGE_API + backdrop_path} alt={title} />

        </div>

        <div className="movieInfo">

            <h3>{title}</h3>
            <h5>{release_date.substring(0, 4)}</h5>
            <span>{vote_average}</span>

        </div>

    </div>

)

export default Movie;