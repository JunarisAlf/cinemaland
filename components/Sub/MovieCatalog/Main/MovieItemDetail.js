export default function MovieItemDetail({ datas }) {
    const movies = datas.results;
    return (
        <div>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    className="movie-item-style-2 my-movie-item-style-2"
                >
                    <img
                        src={
                            'https://image.tmdb.org/t/p/original' +
                            movie.poster_path
                        }
                        alt=""
                        width={185}
                        height={284}
                    />
                    <div className="mv-item-infor my-mv-item-infor">
                        <h6>
                            <a href="moviesingle.html">
                                {movie.title}{' '}
                                <span>
                                    {movie.release_date.substring(0, 4)}
                                </span>
                            </a>
                        </h6>
                        <p className="rate">
                            <i className="ion-android-star"></i>
                            <span>{movie.vote_average}</span> /10
                        </p>
                        <p className="describe">{movie.overview}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
