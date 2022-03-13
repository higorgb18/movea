import React, { useState, useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';

import Movie from '../../components/Movie';
import Trending from '../../components/Trending';
import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import ProfileBar from '../../components/profileBar';

import Arrow from '../../images/arrow.svg'

import '../../global.scss';
import './style.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home(props) {

  const [moviesData, setMoviesData] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [movieId, setMovieId] = useState('');
  const [videos, setVideos] = useState([]);

  useEffect(() => {

    fetch(FEATURED_API)
      .then(response => response.json())
      .then(data => {
        setMoviesData(data.results)
        // console.log(data.results)
      });

  }, [])

  useEffect(() => {

    fetch(TRENDING_API)
      .then(response => response.json())
      .then(data => {
        setTrendingMovies(data.results)
        console.log(data.results)
      });

  }, [])

  const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=60b7c69d9a69307c75b6f7ff1e7653bdlanguage=pt-BR&page=1";
  const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
  const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=60b7c69d9a69307c75b6f7ff1e7653bd&query=";
  const TRENDING_API = "https://api.themoviedb.org/3/trending/movie/week?api_key=60b7c69d9a69307c75b6f7ff1e7653bd&language=pt-BR";
  const VIDEO_API = `https://api.themoviedb.org/3/movie/${movieId}?api_key=60b7c69d9a69307c75b6f7ff1e7653bd&append_to_response=videos`

  return (

    <body id="home">

      <Header />

      <main id="mainHome">

        {/* <Sidebar /> */}

        <section className="sectionTrending">

          <div className="textIntroWrapper">

            <legend>Em alta</legend>

            <div className="seeAllWrapper">
              <span>Ver tudo</span>
              <img src={Arrow} alt="seta para a direita" />
            </div>

          </div>

          <Swiper
            className="moviesSwiper"
            modules={[A11y]}
            spaceBetween={10}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
          >
            {trendingMovies.length > 0 && trendingMovies.map((trending) => (
              <SwiperSlide>
                <Trending key={trending.id} {...trending} />
              </SwiperSlide>
            ))}
          </Swiper>

        </section>

        <ProfileBar />

      </main>

      {/* <section className="sectionMovies">

        <legend>Filmes</legend>

        <div className="moviesSwiper">

          {moviesData.length > 0 && moviesData.map((movie) => (

            <Movie key={movie.id} {...movie} />

          ))}

        </div>

      </section> */}

    </body>

  )

}
