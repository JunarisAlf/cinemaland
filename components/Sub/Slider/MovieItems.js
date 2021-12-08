import Image from 'next/image';
import Link from 'next/link'

export default function MovieItems({ movie }) {
    return (
        <div className="movie-item">
            <div className="mv-img">
                <a href={'/movie/' + movie.id}>
                    <Image
                        className="my-mv-image"
                        src={ movie.poster_path == null ? '/images/uuploads/slider1.jpg' :
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
                        <Link href="#">
                            <a >{movie.genre}</a>
                        </Link>
                    </span>
                </div>
                <h6>
                    <Link href={'/movie/' + movie.id}>
                        <a >{movie.title.substring(0, 40)}</a>
                    </Link>
                    
                </h6>
                <p>
                    <i className="ion-android-star"></i>
                    <span>{movie.vote_average}</span> /10
                </p>
            </div>
        </div>
    );
}
