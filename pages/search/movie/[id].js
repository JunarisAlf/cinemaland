import Preload from '../../../components/Utilities/Preload';
import Header from '../../../components/Core/Header';
import Head from 'next/head';
import Hero from '../../../components/Core/Hero';
import MovieSearchResult from '../../../components/Core/MovieSearchResult';

export default function MovieSearch() {
    return (
        <div>
            <Head>
                <title>Search</title>
            </Head>
            <Preload />
            <Header />
            <Hero />
            <MovieSearchResult />
        </div>
    );
}
