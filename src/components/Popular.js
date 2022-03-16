import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Popular = ({ title, id, poster_path, overview, vote_average, release_date, backdrop_path }) => (

    <div className="heroContainer">

        <div className="heroImgWrapper">

            <img src={IMAGE_API + poster_path} alt={title} />

        </div>
        
    </div>

)

export default Popular;