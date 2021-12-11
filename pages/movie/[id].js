import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import MovieSingleDetail from '../../components/Core/MovieSingleDetail';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const resMovies1 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${
            process.env.api_key
        }&page=1`
    );
    const resMovies2 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${
            process.env.api_key
        }&page=2`
    );
    const resMovies3 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${
            process.env.api_key
        }&page=3`
    );
    const resMovies4 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=4`
    );
    const resMovies5 = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}&page=5`
    );
    const resTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.api_key}&language=en-US`
    );

    const result1 = await resMovies1.json();
    const result2 = await resMovies2.json();
    const result3 = await resMovies3.json();
    const result4 = await resMovies4.json();
    const result5 = await resMovies5.json();
    const topRatedDatas = await resTopRated.json();

    const results = [
        ...result1.results,
        ...result2.results,
        ...result3.results,
        ...result4.results,
        ...result5.results,
        ...topRatedDatas.results,
    ];

    const paths = results.map((movie) => ({
        params: { id: movie.id.toString() },
    }));
    return {
        paths,
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const resMovie = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.api_key}`
    );

    const resCredits = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${process.env.api_key}`
    );

    const movie = await resMovie.json();
    const credits = await resCredits.json();

    return {
        props: { movie, credits },
    };
}
export default function Movie({ movie, credits, err }) {
    const router = useRouter();
    if (router.isFallback) {
        return <Preload />;
    }
    return (
        <div>
            <Head>
                <title>{movie.title}</title>
            </Head>
            <Header />
            <MovieSingleDetail movie={movie} credits={credits} />
        </div>
    );
}
