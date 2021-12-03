import Detail from '../Sub/PeopleSingleDetail/Detail';
import ImageSticky from '../Sub/PeopleSingleDetail/ImageSticky';

export default function PeopleSingleDetail() {
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
