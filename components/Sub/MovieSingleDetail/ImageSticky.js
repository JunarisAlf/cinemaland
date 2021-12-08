
import Image from 'next/image'
export default function ImageSticky({ poster }) {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img my-single-movie-img my-image-fill">
                <Image
                    className="my-image-fill"
                    src={poster == null ? '/images/uploads/movie-single.jpg': 'https://image.tmdb.org/t/p/original' + poster}
                    alt=""
                    width={340}
                    height={521}
                />
            </div>
        </div>
    );
}
