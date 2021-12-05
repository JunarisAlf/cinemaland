export default function MovieItem({ movie }) {
    return (
        <div className="movie-item my-movie-item">
            <div className="mv-img">
                <img
                    src={
                        'https://image.tmdb.org/t/p/original' +
                        movie.poster_path
                    }
                    alt=""
                    width={185}
                    height={284}
                />
            </div>
            <div className="hvr-inner">
                <a href="moviesingle.html">
                    Read more
                    <i className=" ion-android-arrow-dropright "></i>
                </a>
            </div>
            <div className="title-in">
                <h6>
                    <a href="#">{movie.title}</a>
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
