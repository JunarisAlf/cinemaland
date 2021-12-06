export default function MovieItem({ movie }) {
    return (
        <div className="movie-item my-movie-item">
            <div className="mv-img">
                <img
                    className="filter"
                    src={movie.poster_path == null ? '/images/uploads/mv-item1.jpg' :
                        'https://image.tmdb.org/t/p/original' +
                        movie.poster_path
                    }
                    alt=""
                    width={185}
                    height={284}
                />
            </div>
            <div className="hvr-inner">
                <a href={'/movie/' + movie.id}>
                    Read more
                    <i className=" ion-android-arrow-dropright "></i>
                </a>
            </div>
            <div className="title-in">
                <h6>
                    <a href={'/movie/' + movie.id}>{movie.title}</a>
                </h6>
                <p>
                    <i className=" ion-android-star "></i>
                    <span>{movie.vote_average}</span>
                    /10
                </p>
            </div>
        </div>
    );
}
