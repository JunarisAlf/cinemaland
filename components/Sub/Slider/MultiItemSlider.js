import MovieItems from './MovieItems';

export default function MultiItemSlider({ datas }) {
    const { movieDatas, genreDatas } = datas;
    const movies = movieDatas.results;
    const genres = genreDatas.genres;

    return (
        <div className="slick-multiItemSlider">
            {movies.map((movie) => {
                genres.map((genre) => {
                    // console.log(movie.genre_ids[0]);
                    // console.log(id);

                    if (movie.genre_ids[0] == genre.id) {
                        movie.genre = genre.name;
                    }
                });
                return <MovieItems key={movie.id} movie={movie} />;
            })}
        </div>
    );
}
