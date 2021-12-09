import Image from 'next/image';
import Link from 'next/link'

export default function MovieSearchItem({ movie }) {
    return (
        <div className="movie-item-style-2 movie-item-style-1 my-movie-item-style-1 ">
            <Image
                src={
                    movie.poster_path == null
                        ? '/images/uploads/mv1.jpg'
                        : 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                }
                alt=""
                height={261}
                width={170}
            />
            <div className="hvr-inner my-hvr-inner">
                <Link href={'/movie/' + movie.id} style={{ textDecoration: 'none' }}>
                    <a >
                        {' '}
                        Read more <i className="ion-android-arrow-dropright"></i>{' '}
                    </a>
                </Link>
            </div>
            <div className="mv-item-infor">
                <h6>
                    <Link href={'/movie/' + movie.id} style={{ textDecoration: 'none' }}>
                        <a >{movie.title}</a>
                    </Link>
                    
                </h6>
                <p className="rate">
                    <i className="ion-android-star"></i>
                    <span>{movie.vote_average}</span> /10
                </p>
            </div>
        </div>
    );
}
