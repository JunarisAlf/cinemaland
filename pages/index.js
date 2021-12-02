import Preload from '../components/Utilities/Preload';
import Header from '../components/Core/Header';
import Slider from '../components/Core/Slider';
import MovieCatalog from '../components/Core/MovieCatalog';

export default function Home() {
    return (
        <div>
            <Preload />
            <Header />
            <Slider />
            <MovieCatalog />
        </div>
    );
}
