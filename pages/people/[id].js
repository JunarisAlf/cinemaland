import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import PeopleSingleDetail from '../../components/Core/PeopleSingleDetail';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const resPerson1 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=1`
    );
    const resPerson2 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=2`
    );
    const resPerson3 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=3`
    );
    const resPerson4 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=4`
    );
    const resPerson5 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}&page=5`
    );
    const result1 = await resPerson1.json();
    const result2 = await resPerson2.json();
    const result3 = await resPerson3.json();
    const result4 = await resPerson4.json();
    const result5 = await resPerson5.json();

    const results = [
        ...result1.results,
        ...result2.results,
        ...result3.results,
        ...result4.results,
        ...result5.results
    ];

    const paths = results.map((people) => ({
        params: { id: people.id.toString() },
    }));
    return {
        paths,
        fallback: true,
    };
}
export async function getStaticProps({ params }) {
    const resPeople = await fetch(
        `https://api.themoviedb.org/3/person/${params.id}?api_key=${process.env.api_key}`
    );
    const resMovies = await fetch(
        `https://api.themoviedb.org/3/person/${params.id}/movie_credits?api_key=${process.env.api_key}`
    );
    const people = await resPeople.json();
    const movies = await resMovies.json();
    return {
        props: { people, movies },
    };
}

export default function People({ people, movies }) {
    const router = useRouter();
    if (router.isFallback) {
        return <Preload />;
    }
    return (
        <div>
            <Head>
                <title>{people.name}</title>
            </Head>
            <Header />
            <PeopleSingleDetail people={people} movies={movies} />
        </div>
    );
}
