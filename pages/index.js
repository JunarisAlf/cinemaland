import Preload from '../components/Utilities/Preload';
import Head from 'next/head';
import Header from '../components/Core/Header';
import Slider from '../components/Core/Slider';
import MovieCatalog from '../components/Core/MovieCatalog';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Cinemaland - land of movie</title>
            </Head>
            <Preload />
            <Header />
            <Slider />
            <MovieCatalog />
        </div>
    );
}
