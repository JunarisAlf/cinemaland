import Header from '../components/Core/Header';
import Head from 'next/head';
import Hero from '../components/Core/HeroForAll';
import MovieSearchResult from '../components/Core/MovieSearchResult';
import { useRouter } from 'next/dist/client/router';
import Pagination from '../components/Core/Pagination';

export async function getServerSideProps(context) {
    if(context.query.page <= 0){
        context.query.page = 1;
    }else{
        context.query.page = context.query.page ? context.query.page : 1;
    }
    const page = context.query.page * 4;
    const resMovies1 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=${page-3}`
    );
    const resMovies2 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=${page-2}`
    );
    const resMovies3 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=${page-1}`
    );
    const resMovies4 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=${page}`
    );
    const result1 = await resMovies1.json();
    const result2 = await resMovies2.json();
    const result3 = await resMovies3.json();
    const result4 = await resMovies4.json();

    const results = {
        results: [...result1.results, ...result2.results, ...result3.results, ...result4.results]
    }

    return {
        props: { results, page:context.query.page},
    };
    
}

export default function AllMovie({ results, page}) {
    const route = useRouter();
    return (
        <div>
            <Head>
                <title>All Movie</title>
            </Head>
            <Header/>
            <Hero title="All Movie" />
            <MovieSearchResult result={results} />
            <Pagination url="/all-movie?page=" page={page}/>
        </div>
    );
}
