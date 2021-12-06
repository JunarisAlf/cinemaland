import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import PeopleSingleDetail from '../../components/Core/PeopleSingleDetail';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
    const resPeoples1 = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${process.env.api_key}`
    );
    const resPeoples2 = await fetch(
        `https://api.themoviedb.org/3/person/popular?page=2&api_key=${process.env.api_key}`
    );
    const peoples1 = await resPeoples1.json();
    const peoples2 = await resPeoples2.json();
    const peoples = [...peoples1.results, ...peoples2.results];
    const paths = peoples.map((people) => ({
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
    const movies = await resMovies.json()
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
            <PeopleSingleDetail people={people} movies={movies}/>
        </div>
    );
}
