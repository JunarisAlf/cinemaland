import Preload from '../../components/Utilities/Preload';
import Header from '../../components/Core/Header';
import Head from 'next/head';
import MovieSingleDetail from '../../components/Core/MovieSingleDetail';

export default function Movie() {
    return (
        <div>
            <Head>
                <title>title</title>
            </Head>
            <Preload />
            <Header />

            <MovieSingleDetail />
        </div>
    );
}
