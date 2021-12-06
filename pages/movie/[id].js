import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import MovieSingleDetail from '../../components/Core/MovieSingleDetail';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const resMovies = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.api_key}`
    );
    const resTopRated = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.api_key}&language=en-US`
    );

    const movieDatas = await resMovies.json();
    const topRatedDatas = await resTopRated.json();
    const movies = [...movieDatas.results, ...topRatedDatas.results];
    const paths = movies.map((movie) => ({
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
    }
    
}
export default function Movie({ movie, credits, err}) {
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
