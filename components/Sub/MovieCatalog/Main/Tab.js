import MovieItem from './MovieItem';
import TabLink from './TabLink';
import { useState, useEffect } from 'react';

export default function Tab({ datas }) {
    const [genre, setGenre] = useState(18);
    const [bestByGenres, setBestByGenres] = useState(datas.results);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&sort_by=vote_average.desc&vote_count.gte=10&api_key=${process.env.api_key}`
        ).then((response) =>
            response.json().then((data) => {
                setBestByGenres(data.results);
            })
        );
    }, [genre]);

    return (
        <div className="tabs">
            <TabLink setGenre={setGenre} />
            <div className="tab-content">
                <div id="tab1" className="tab active">
                    <div className="row my-container">
                        {bestByGenres.map((movie) => (
                            <MovieItem key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
