import Detail from '../Sub/MovieSingleDetail/Detail';
import ImageSticky from '../Sub/MovieSingleDetail/ImageSticky';

export default function MovieSingleDetail() {
    return (
        <div className="page-single movie-single movie_single my-movie-single">
            <div className="container">
                <div className="row ipad-width2">
                    <ImageSticky />
                    <Detail />
                </div>
            </div>
        </div>
    );
}
