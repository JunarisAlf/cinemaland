export default function ImageSticky({ poster }) {
    return (
        <div className="col-md-4 col-sm-12 col-xs-12">
            <div className="movie-img my-single-movie-img my-image-fill">
                <img
                    className="my-image-fill"
                    src={'https://image.tmdb.org/t/p/original' + poster}
                    alt=""
                />
            </div>
        </div>
    );
}
