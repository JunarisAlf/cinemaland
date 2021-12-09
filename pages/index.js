import Preload from '../components/Utilities/Preload';
import Head from 'next/head';
import Header from '../components/Core/Header';
import Slider from '../components/Core/Slider';
import MovieCatalog from '../components/Core/MovieCatalog';
import { useState } from 'react';

export async function getServerSideProps() {
    const resMovies = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}`
    );
    const resGenres = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.api_key}`
    );
    const resBestByGenre = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&api_key=${process.env.api_key}`
    );
    const resTopRated = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.api_key}&language=en-US`);
    const resPopularPeople = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}`);

    const movieDatas = await resMovies.json();
    const genreDatas = await resGenres.json();
    const bestByGenreDatas = await resBestByGenre.json();
    const topRatedDatas = await resTopRated.json();
    const popularPeople = await resPopularPeople.json();


    return {
        props: { movieDatas, genreDatas, bestByGenreDatas, topRatedDatas,popularPeople},
    };
}

export default function Home({ movieDatas, genreDatas, bestByGenreDatas, topRatedDatas,popularPeople }) {

    return (
        <div>
            <Head>
                <title>Cinemaland - land of movie</title>
            </Head>
            {/* <Preload /> */}
            <Header />
            <Slider datas={{ movieDatas, genreDatas }} />
            <MovieCatalog mainDatas={{bestByGenreDatas, topRatedDatas}} sideDatas={popularPeople}/>
        </div>
    );
}
