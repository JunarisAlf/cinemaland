// import Image from 'next/image';
export default function MovieItems({ movie }) {
    return (
        <div className="movie-item">
            <div className="mv-img">
                <a href="#">
                    <img
                        className="my-mv-image"
                        src={
                            'https://image.tmdb.org/t/p/original' +
                            movie.poster_path
                        }
                        alt=""
                        width={285}
                        height={437}
                    />
                </a>
            </div>
            <div className="title-in">
                <div className="cate">
                    <span className="blue">
                        <a href="#">{movie.genre}</a>
                    </span>
                </div>
                <h6>
                    <a href="#">{movie.title.substring(0, 40)}</a>
                </h6>
                <p>
                    <i className="ion-android-star"></i>
                    <span>{movie.vote_average}</span> /10
                </p>
            </div>
        </div>
    );
}
