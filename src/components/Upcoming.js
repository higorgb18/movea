import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const months = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

const Upcoming = ({ title, id, poster_path, overview, vote_average, release_date, backdrop_path }) => (

    <div className="upcomingMovieContainer">

        <div className="upcomingMovieImgWrapper">

            <img src={IMAGE_API + poster_path} alt={title} />

        </div>

        {/* <div className="upcomingMovieInfo">

            <h4>{title}</h4>
            
        </div> */}

    </div>

)

export default Upcoming;